const AWS = require('aws-sdk');

const translate = new AWS.Translate();

exports.handler = async (event) => {
    try {
        // Parsing the body of the request
        const body = JSON.parse(event.body);
        const { source, target, text } = body;

        // Defining Amazon Translate payload
        const params = {
            SourceLanguageCode: source,
            TargetLanguageCode: target,
            Text: text,
        };

        // Calling Amazon Translate
        const data = await translate.translateText(params).promise();

        // Returning the translated text
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify({ translatedText: data.TranslatedText }),
        };
        return response;

    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify({ error: err.message }),
        };
    }
};
