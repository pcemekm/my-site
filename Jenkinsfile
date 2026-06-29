pipeline {
    agent any

    environment {
        REGISTRY   = '192.168.0.168:5000'
        IMAGE_NAME = 'my-site'
        DEPLOY_DIR = '/home/tils/Desktop/my-site'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.VERSION = sh(
                        script: "grep '\"version\"' package.json | head -1 | sed 's/.*\"version\": *\"//;s/\".*//'",
                        returnStdout: true
                    ).trim()
                }
                echo "Wersja: ${env.VERSION}"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${REGISTRY}/${IMAGE_NAME}:${VERSION} -t ${REGISTRY}/${IMAGE_NAME}:latest ."
            }
        }

        stage('Push to Registry') {
            steps {
                sh "docker push ${REGISTRY}/${IMAGE_NAME}:${VERSION}"
                sh "docker push ${REGISTRY}/${IMAGE_NAME}:latest"
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
                    sleep 20
                    def ok = false
                    for (int i = 0; i < 18 && !ok; i++) {
                        sleep 5
                        def status = sh(
                            script: 'docker inspect --format="{{.State.Health.Status}}" my-site 2>/dev/null || echo unknown',
                            returnStdout: true
                        ).trim()
                        echo "Status: ${status} (${i+1}/18)"
                        if (status == 'healthy') {
                            ok = true
                            echo "Healthy! Wersja ${VERSION} działa na http://pcemek.local"
                        }
                    }
                    if (!ok) error('Health check nie powiódł się po 110s')
                }
            }
        }
    }

    post {
        success {
            echo "Deploy v${VERSION} zakończony. http://pcemek.local"
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
