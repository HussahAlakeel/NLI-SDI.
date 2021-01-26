
const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');


async function analyze() {


    const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2019-07-12',
        authenticator: new IamAuthenticator({
            apikey: '1fdiHSPHA4sR9QrUtXauAoKhtrz8cBqAsPxlug0bf8Pd',
        }),
        url: 'https://api.eu-gb.natural-language-understanding.watson.cloud.ibm.com/instances/40992512-cffe-4639-81bd-ca8ca7326a57',
    });




    const analyzeParams = {
        'url': 'www.nytimes.com',
        'features': {
            'entities': {
                'emotion': true,
                'sentiment': true,
                'limit': 2,
            },
            'keywords': {
                'emotion': true,
                'sentiment': true,
                'limit': 2,
            },
        },
    };




    naturalLanguageUnderstanding.analyze(analyzeParams)
        .then(analysisResults => {
            console.log(JSON.stringify(analysisResults, null, 2));
        })
        .catch(err => {
            console.log('error:', err);
        });
}


analyze();
