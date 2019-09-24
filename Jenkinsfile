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
        stage('build') {
            steps {
                script {
                    sh 'export JEKYLL_VERSION=3.8 \
                        docker run --rm \
                        --volume="$PWD:/srv/jekyll" \
                        -it jekyll/jekyll:$JEKYLL_VERSION \
                        jekyll build'
                    s3Upload(file:'_site', bucket:'liquibase-stage', path:'.')
                    // jekyll = docker.image("jekyll/builder")
                    // jekyll.pull()
                    // jekyll.inside {
                    //     sh 'jekyll build'
                    // }
                    // archiveArtifacts artifacts: 'datical-dist/target/install4j/*.sh'
                }
            }
        }
    }
    //  post {
    //     success {
    //         slackSend channel: '#jenkinsbuilds',
    //                   color: 'good',
    //                   message: "SUCCESSFUL: Job '${JOB_NAME} [${BUILD_NUMBER}]' (${env.BUILD_URL})"
    //     }
    //     unsuccessful {
    //         slackSend channel: '#jenkinsbuilds',
    //                   color: 'bad',
    //                   message: "FAILED: Job '${JOB_NAME} [${BUILD_NUMBER}]' (${env.BUILD_URL})"
    //     }
    // }
}
