pipeline {
    agent any

    stages {
        stage('Build backend') {
            agent {
                docker {
                    image 'node:20.11.0-bullseye'
                    reuseNode true
                }
            }
            steps {
                script {
                    dir('consultants_lounge_backend') {
                        sh '''
                            echo "Installing backend dependencies..."
                            npm --version
                            npm install
                            npm run build
                        '''
                    }
                }
            }
        }
        stage('Build frontend') {
            agent {
                docker {
                    image 'node:20.11.0-bullseye'
                    reuseNode true
                }
            }
            steps {
                script {
                    dir('consultants_lounge_frontend') {
                        sh '''
                            echo "Installing frontend dependencies..."
                            npm --version
                            npm install
                            npm run build
                        '''
                    }
                }
            }
        }
        stage('Test backend') {
            agent {
                docker {
                    image 'node:20.11.0-bullseye'
                    reuseNode true
                }
            }
            steps {
                script {
                    dir('consultants_lounge_backend') {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Test frontend') {
            agent {
                docker {
                    image 'node:20.11.0-bullseye'
                    reuseNode true
                }
            }
            steps {
                script {
                    dir('consultants_lounge_backend') {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy frontend') {
            agent {
                docker {
                    image 'node:20.11.0-bullseye'
                    reuseNode true
                }
            }
            steps {
                script {
                    dir('consultants_lounge_frontend') {
                        sh '''
                            npm install netlify-cli
                            node_modules/.bin/netlify --version
                            echo "Deploying frontend..."
                            node_modules/.bin/netlify status
                            node_modules/.bin/netlify deploy --prod --dir=build
                        '''
                    }
                }
            }
        }
    }
}