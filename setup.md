# Setup

## Clone the souce code

Configure access to Git CodeCommit, and clone this repository.
<https://docs.aws.amazon.com/codecommit/latest/userguide/setting-up-ssh-windows.html?icmpid=docs_acc_console_connect_np>

## Configuring Code Build

Sample buildspec.yml
<https://github.com/dvohra/node-js>

Make sure to disable artifacts encryption.

## Tools

npm init

npm install jasmine // <https://www.npmjs.com/package/jasmine>
node_modules/jasmine/bin/jasmine init
// add script to package.json "test": "node node_modules/jasmine/bin/jasmine"

npm install gitignore --save-dev
node node_modules/gitignore/bin/gitignore node
npm uninstall gitignore

// add buildspec.yml file

git add .
git commit -m "jasmine sample files to examine CodeBuild"
git push

npm install axios
// create api tests

// install console reporter
npm i jasmine-console-reporter --save-dev
// added spec/helpers/console_reporter.js

// install html reporter
npm i jasmine-pretty-html-reporter --save-dev
// added spec/helpers/simple_html_reporter.js

## Configure S3 bucket for Artifacts

Environment Variables in Build Environments
<https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-env-vars.html>

S3
<https://console.aws.amazon.com/s3>

## Configure code pipeline

// create pipeline with new service role

## How to host a static website

//  for copying artifacts as test results
Create a Static Website with Build Output Hosted in an Amazon S3 Bucket

<https://docs.aws.amazon.com/codebuild/latest/userguide/sample-disable-artifact-encryption.html>

## AWS CLS

install aws cli.

aws configure: for credentials
