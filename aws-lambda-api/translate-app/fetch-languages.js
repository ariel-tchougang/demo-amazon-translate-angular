const AWS = require('aws-sdk');

exports.handler = async (event) => {
    try {
        // Define the list of languages
        let languages = [
            {
                "iso2": "en",
                "englishName": "English",
                "nativeName": "English"
            },
            {
                "iso2": "fr",
                "englishName": "French",
                "nativeName": "Français"
            },
            {
                "iso2": "de",
                "englishName": "German",
                "nativeName": "Deutsch"
            },
            {
                "iso2": "es",
                "englishName": "Spanish",
                "nativeName": "Español"
            },
            {
                "iso2": "it",
                "englishName": "Italian",
                "nativeName": "Italiano"
            }
            // Add more languages as needed
        ];

        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify(languages),
        };
        return response;

    } catch (err) {
        console.log(err);
        return err;
    }
};
