// #!groovy
pipeline {
        agent any
         tools {nodejs "maintenance-front"}
    stages {
        stage("Code Checkout") {
            steps {
                git branch: 'master',
                url: 'https://github.com/datskill/maintenance-front.git'
                  }
              }
        stage("Tests") {
            steps {
                    sh "npm run test"
            }
        }
         stage('Code Quality') {
                   steps {
                       script {
                          def scannerHome = tool 'sonar-scanner';
                          withSonarQubeEnv("sonar-scanner") {
                          sh "${tool("sonar-scanner")}/bin/sonar-scanner"
                                       }
                        timeout(time: 10, unit: 'MINUTES') {
                        waitForQualityGate abortPipeline: true
                            }
                     }
                           }
                        }

         stage("Install Dependencies") {
                                  steps {
                                        sh "npm install"

                                       }
                                }

         stage("Building") {
                            steps {
                                sh "npm run build"

                              }
                        }
     }
