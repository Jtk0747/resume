pipeline{
    agent any
    stages{
        stage('build'){
            sh 'npm install'
        }
    }
}