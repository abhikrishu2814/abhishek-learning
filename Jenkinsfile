pipeline {
    agent any

    stages {

        stage('Build Image') {
            steps {
                sh 'docker build -t cicd-app:latest .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker rm -f cicd-app || true'
                sh 'docker run -d -p 3000:3000 --name cicd-app cicd-app:latest'
            }
        }
    }
}