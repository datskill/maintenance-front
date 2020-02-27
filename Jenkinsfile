pipeline {
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