pipeline {
    agent any

    environment {
        REGISTRY       = '192.168.0.168:5000'
        IMAGE_NAME     = 'my-site'
        IMAGE_TAG      = 'latest'
        REPO_DIR       = '/home/tils/Desktop/github/my-site'
        DEPLOY_DIR     = '/home/tils/Desktop/my-site'
    }

    stages {
        stage('Checkout') {
            steps {
                dir("${REPO_DIR}") {
                    sh 'git pull origin main || git pull origin master'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir("${REPO_DIR}") {
                    sh "docker build -t ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG} ."
                }
            }
        }

        stage('Push to Registry') {
            steps {
                sh "docker push ${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }

        stage('Deploy') {
            steps {
                dir("${DEPLOY_DIR}") {
                    sh "docker compose pull"
                    sh "docker compose up -d --force-recreate"
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    def retries = 12
                    def ok = false
                    for (int i = 0; i < retries && !ok; i++) {
                        sleep 5
                        def status = sh(
                            script: 'docker inspect --format="{{.State.Health.Status}}" my-site 2>/dev/null || echo unknown',
                            returnStdout: true
                        ).trim()
                        if (status == 'healthy') {
                            ok = true
                            echo "Aplikacja healthy!"
                        } else {
                            echo "Status: ${status} (${i+1}/${retries})"
                        }
                    }
                    if (!ok) error('Health check nie powiódł się')
                }
            }
        }
    }

    post {
        success {
            echo "Deploy zakończony. Aplikacja: http://192.168.0.168:3010"
        }
        failure {
            dir("${DEPLOY_DIR}") {
                sh 'docker compose logs --tail=50 my-site'
            }
        }
        always {
            sh 'docker image prune -f'
        }
    }
}
