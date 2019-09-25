pipeline {
    options {
        timestamps()
        buildDiscarder(logRotator(numToKeepStr: '10', artifactNumToKeepStr: '5', artifactDaysToKeepStr: '45'))
        withAWS(credentials: 'JenkinsUserAtAWS')
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
        stage('staging-cd') {
            when {
                branch 'master'
            }
            steps {
                echo 'Building and Deploying Jekyll `_site/` to Staging.'
                script {
                    sh 'export JEKYLL_VERSION=3.8 && \
                        docker run \
                        --volume="$PWD:/srv/jekyll" \
                        jekyll/jekyll:$JEKYLL_VERSION \
                        jekyll build'
                    s3Upload(file:'_site', bucket:'liquibase-stage', path:'')
                }
                slackSend channel: '#liquibase_pro_website',
                      color: 'good',
                      message: "Liquibase Staging Site Updated: https://staging.liquibase.org"
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
