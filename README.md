# demo-amazon-translate-angular
Simple Angular app to test Amazon Translate service

# Content
This project has 2 folders:
* angular-ui: containing the project user interface in Angular 16
* aws-lambda-api: containing service lambda functions

# Getting started

## AWS Lambda API

You'll need to have AWS account and AWS SAM CLI + npm + Angular CLI installed.

### Build the app

Make sure you're in the api folder and run sam build.
```bash
sam build
``` 

### Locally test your lambda functions

#### FetchLanguagesFunction

```bash
sam local invoke -e ./events/languages-event.json FetchLanguagesFunction
```

#### TranslateTextFunction

Make sure you're in the api folder and run sam build.
```bash
sam local invoke -e ./events/translate-event.json TranslateTextFunction
``` 

### Locally test your api gateway

Open a new terminal and browse to the api folder. Then start the local api gateway.

```bash
sam local start-api
``` 
Your local api gateway should responding at http://localhost:3000

#### FetchLanguagesFunction

In another terminal, run:

```bash
curl http://localhost:3000/languages
```

#### TranslateTextFunction

In another terminal, run:

```bash
curl -X POST http://localhost:3000/translate -H 'Content-Type: application/json' -d '{"source":"en","target":"de","text": "Hello World!"}'
```

### Package and deploy the stack on your aws account

```bash
sam package
sam deploy

``` 

### Retrieve API gateway address
Once the stack deployment is over, retrieve and copy the api gateway URL, which you'll later on pass to the UI app.
It will have this format: "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com".
The value you'll be providing to the UI will look like: "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod", where Prod is the deployment stage.
Example: https://gefoihfahbbfbf.execute-api.us-east-1.amazonaws.com/Prod

## Angular UI
Browse to folder angular-ui.

### Edit the api URL
Edit all environment files located in src/environments. Replace the attribute apiUrl with the appropriate value (ex. https://gefoihfahbbfbf.execute-api.us-east-1.amazonaws.com/Prod).

Run npm install if necessary.
```bash
npm install

```

### Build the app

#### Local build & test

Run:

```bash
ng serve

```

Then go to http://localhost:4200 to view the app

#### Production build
```bash
ng build -c production

```

### Deploy the app
That's up to you. You can either use an Amazon S3 bucket, or an Apache Web Server or an nginx Web server to deploy the content of app located in folder dist
