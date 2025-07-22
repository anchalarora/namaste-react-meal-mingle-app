pipeline {
    agent any // This tells Jenkins to run the pipeline on any available agent

    stages {
        stage('Hello') {
            steps {
                // Print a message to the console
                echo 'Hello World from Pipeline Job!'
                echo "The current Jenkins Job Name is: ${env.JOB_NAME}"
                // Execute a shell command
                sh 'echo "This is a shell command within the pipeline."'
            } // CLOSING BRACE for steps
        } // CLOSING BRACE for stage('Hello')
    } // CLOSING BRACE for stages
} // CLOSING BRACE for pipeline
