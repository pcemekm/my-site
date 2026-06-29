pipeline {
    agent any

    environment {
        IMAGE_NAME = 'my-site'
        IMAGE_TAG = 'latest'
        PROJECT_DIR = '/home/tils/Desktop/my-site'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling latest changes from repository...'
                dir("${PROJECT_DIR}") {
                    sh 'git pull origin main || git pull origin master'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js dependencies...'
                dir("${PROJECT_DIR}") {
                    sh 'npm ci'
                }
            }
        }

        stage('Lint') {
            steps {
                echo 'Running linter...'
                dir("${PROJECT_DIR}") {
                    sh 'npm run lint'
                }
            }
        }

        stage('Build') {
            steps {
                echo 'Building application...'
                dir("${PROJECT_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                dir("${PROJECT_DIR}") {
                    sh """
                        docker build -t pcemek/${IMAGE_NAME}:${IMAGE_TAG} .
                    """
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying with Docker Compose from main Tils directory...'
                dir('/home/tils/Desktop/Tils') {
                    sh """
                        docker-compose up -d --no-deps my-site
                    """
                }
            }
        }

        stage('Health Check') {
            steps {
                echo 'Waiting for application to be healthy...'
                script {
                    def maxRetries = 10
                    def retryCount = 0
                    def healthy = false

                    while (retryCount < maxRetries && !healthy) {
                        sleep 5
                        def result = sh(
                            script: 'docker inspect --format="{{.State.Health.Status}}" my-site',
                            returnStatus: true
                        )
                        if (result == 0) {
                            def status = sh(
                                script: 'docker inspect --format="{{.State.Health.Status}}" my-site',
                                returnStdout: true
                            ).trim()

                            if (status == 'healthy') {
                                healthy = true
                                echo 'Application is healthy!'
                            } else {
                                echo "Health status: ${status}, retrying..."
                                retryCount++
                            }
                        } else {
                            retryCount++
                        }
                    }

                    if (!healthy) {
                        error('Application failed health check')
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! Application deployed at http://pcemek.local'
        }
        failure {
            echo 'Pipeline failed! Check logs for details.'
            dir("${PROJECT_DIR}") {
                sh 'docker-compose logs my-site'
            }
        }
        always {
            echo 'Cleaning up...'
            sh 'docker image prune -f'
        }
    }
}
