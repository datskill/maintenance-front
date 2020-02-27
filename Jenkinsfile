#!groovy
properties(
    [
        [$class: 'BuildDiscarderProperty', strategy:
          [$class: 'LogRotator', artifactDaysToKeepStr: '14', artifactNumToKeepStr: '5', daysToKeepStr: '30', numToKeepStr: '60']],
        pipelineTriggers(
          [
              pollSCM('* * * * *'),
              cron('@daily'),
          ]
        )
    ]
)

node {
    stage('Checkout') {
        deleteDir()
        checkout scm
    }

}
    stage('Sonarqube') {
    environment {
        scannerHome = tool 'sonar-scanner'
    }
        withSonarQubeEnv('sonar-scanner') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
        timeout(time: 10, unit: 'MINUTES') {
            waitForQualityGate abortPipeline: true
        }
}

// stage('NPM Install') {
    //     withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
    //         sh 'npm install'
    //     }
    // }

    // stage('Test') {
    //     withEnv(["CHROME_BIN=/usr/bin/chromium-browser"]) {
    //       sh 'ng test --progress=false --watch false'
    //     }
    //     junit '**/test-results.xml'
    // }

    // stage('Lint') {
    //     sh 'ng lint'
    // }

    // stage('Build') {
    //     milestone()
    //     sh 'npm run build'
    // }
