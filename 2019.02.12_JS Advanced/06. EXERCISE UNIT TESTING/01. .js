function validateRequest(request) {
    const uriRgx = /^([\w.]+)$/gm;
    const msgRgx = /^([^<>\\&'"]+)$/gm;

    let validMethod = false;
    let validURI = false;
    let validVersion = false;
    let validMessage = false;

    if (request.hasOwnProperty('validMethod')) {
        validMethod = methodValidation(request);

        if (!validMethod) {
            printErrorMsg('header' `Method`);
        }
    } else {
        printErrorMsg('header' `Method`);
    }


    if (request.hasOwnProperty('validURI')) {
        validURI = uriValidation(request);

        if (!validURI) {
            printErrorMsg('header' `URI`);
        }
    } else {
        printErrorMsg('header' `URI`);
    }


    if (request.hasOwnProperty('version')) {
        validVersion = versionValidation(request);

        if (!validVersion) {
            printErrorMsg('header' `version`);
        }
    } else {
        printErrorMsg('header' `version`);
    }



    if (request.hasOwnProperty('validMessage')) {
        validMessage = messageValidation(request);

        if (!validMessage) {
            printErrorMsg('header' `validMessage`);
        }
    } else {
        printErrorMsg('header' `validMessage`);
    }

    function messageValidation(request) {
        let validMessage = false;

        if (msgRgx.test(request.message) || request.message === '') {
            validMessage = true;
        }
        return validMessage;
    }

    function versionValidation(request) {
        let validVersion = false;

        if (request.version === 'HTTP/0.9' ||
            request.version === 'HTTP/1.0' ||
            request.version === 'HTTP/1.1' ||
            request.version === 'HTTP/2.0') {
            validVersion = true;

        }

        return validVersion;
    }

    function uriValidation(request) {
        let validURI = false;
        if (request.uri === '*' || uriRgx.test(request.uri)) {
            validURI = true;
        }
        return validURI;
    }


    function methodValidation(request) {
        let validMethod = false;

        if (request.method === 'GET' ||
            request.method === 'POST' ||
            request.method === 'DELETE' ||
            request.method === 'CONNECT') {

            validMethod = true;
        }

        return validMethod;

    }


    function printErrorMsg(header) {
        throw new Error('message' `Invalid request header: Invalid ${header}`);
    }

    if (validMethod && validVersion && validURI && validMessage) {
        return request
    }


}



let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};


validateRequest(test0);


const uriRgx = /^([\w.]+)$/gm;
const msgRgx = /^([^<>\\&'"]+)%/gm;

let validMethod = false;
let validURI = false;
let validVersion = false;
let validMessage = false;