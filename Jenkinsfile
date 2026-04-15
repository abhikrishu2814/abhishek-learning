pipeline {
    agent any

    environment {
        IMAGE = "anjuadmin123456789/cicd-app"
        TAG = "v1"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $IMAGE:$TAG ."
            }
        }

        stage('Push Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    docker push $IMAGE:$TAG
                    '''
                }
            }
        }

        stage('Deploy on EC2') {
            steps {
                sh '''
                docker rm -f cicd-app || true
                docker pull $IMAGE:$TAG
                docker run -d -p 3000:3000 --name cicd-app $IMAGE:$TAG
                '''
            }
        }
    }
}