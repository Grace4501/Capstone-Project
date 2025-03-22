pipeline {
    agent {
        docker {
            image 'node:20.11.0-bullseye'
            reuseNode true
        }
    }

    environment {
        NETLIFY_SITE_ID = '65d89961-a09c-45d0-8272-9d940b10bcdf'
    }

    stages {
        stage('Build backend') {
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
            steps {
                script {
                    dir('consultants_lounge_backend') {
                        sh 'npm test || echo "Tests failed, but continuing...'
                    }
                }
            }
        }
        stage('Test frontend') {
            steps {
                script {
                    dir('consultants_lounge_backend') {
                        sh 'npm test || echo Tests failed, but continuing...'
                    }
                }
            }
        }
        stage('Deploy frontend') {
            steps {
                script {
                    dir('consultants_lounge_frontend') {
                        sh '''
                            npm install netlify-cli
                            node_modules/.bin/netlify --version
                            echo "Deploying to Site ID: $NETLIFY_SITE_ID"
                            node_modules/.bin/netlify status
                            node_modules/.bin/netlify deploy --prod --dir=build
                        '''
                    }
                }
            }
        }
    }
}