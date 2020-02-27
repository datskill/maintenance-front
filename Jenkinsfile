pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('install') {
            steps {
                sh 'npm install'
                sh 'npm i -g @angular/cli'
            }
        }
        stage('build') {
            steps {
                sh 'ng build --prod'
            }
        }
    }
}