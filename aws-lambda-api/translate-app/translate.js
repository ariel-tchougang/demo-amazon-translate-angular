const AWS = require('aws-sdk');

const translate = new AWS.Translate();

exports.handler = async (event) => {
    try {
        // Parse the body of the request
        const body = JSON.parse(event.body);
        const { source, target, text } = body;

        // Define the parameters for the translate call
        const params = {
            SourceLanguageCode: source, // ISO 639-1 language code
            TargetLanguageCode: target, // ISO 639-1 language code
            Text: text,
        };

        // Call Amazon Translate to translate the text
        const data = await translate.translateText(params).promise();

        // Return the translated text
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
