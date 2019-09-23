pipeline {
    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '5', artifactDaysToKeepStr: '45'))
    }

    agent {
        node {
            label 'dockerBuilder'
        }
    }

    environment {
        GITHUB_AUTH = credentials('github-auth')
        ART_AUTH = credentials('artifactory-auth')
    }
    stages {
        stage('build') {
            steps {
                script {
                    docker.withRegistry('https://docker.artifactory.datical.net', 'docker-auth') {
                        ruby = docker.image("ruby")
                        ruby.pull()
                        ruby.inside {
                            ruby -v
                        }
                    }
                    archiveArtifacts artifacts: 'datical-dist/target/install4j/*.sh'
                }
            }
        }
    }
    post {
        success {
            slackSend channel: '#jenkinsbuilds',
                      color: 'good',
                      message: "SUCCESSFUL: Job '${JOB_NAME} [${BUILD_NUMBER}]' (${env.BUILD_URL})"
        }
        unsuccessful {
            slackSend channel: '#jenkinsbuilds',
                      color: 'bad',
                      message: "FAILED: Job '${JOB_NAME} [${BUILD_NUMBER}]' (${env.BUILD_URL})"
        }
    }
}
