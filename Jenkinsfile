pipeline {
    agent any
    tools {nodejs "nodejs"}
    environment {
        DOCKER_IMAGE_NAME = 'calculator'
        GITHUB_REPO_URL = 'https://github.com/keshavagarwal670/Calculator_DevOps.git'
        DOCKERHUB_CREDENTIALS = credentials('DockerHubCred')
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the code from the GitHub repository
                    git branch: 'main', url: "${GITHUB_REPO_URL}"
                }
            }
        }
    
        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t calculator .
                '''
            }
        }

        stage('Testing') {
            steps {
                sh '''
                npm install
                npm run test
                '''
            }
        }

        stage('Push Docker Images') {
            steps {
                script{
                    docker.withRegistry('', 'DockerHubCred') {
                    sh 'docker tag calculator agarwalkeshav670/calculator:latest'
                    sh 'docker push agarwalkeshav670/calculator'
                    }
                 }
            }
        }

   stage('Run Ansible Playbook') {
            steps {
                script {
                    ansiblePlaybook(
                        playbook: 'deploy.yml',
                        inventory: 'inventory'
                     )
                }
            }
        }
    }
}