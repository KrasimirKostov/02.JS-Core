function attachEvents() {

    const baseUrl = "https://baas.kinvey.com/";
    const appkey = "kid_HyftreRYE/";
    const appdata = "messages";
    // const appSecret = "e270ec5d751040ffa7c77d92d37c029d";
    const authToken = "34e12703-565c-4d95-abd4-8a4658f77450.h74XO1ZEGI6XoVw3oTLYQCDLBPGCSgIO20qOT1cWOnA=";
    const authHeaders = {
        "Authorization": `Kinvey ${authToken}`,
        "Content-Type": "application/json"
    }

    $('#submit').on('click', submitMessage);
    $('#refresh').on('click', reloadPage);

    function submitMessage() {
        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();

        let message = {
            author,
            content,
            timestamp
        }
        $.ajax({
            url: baseUrl + 'appdata/' + appkey + appdata,
            method: 'POST',
            data: JSON.stringify(message),
            headers: authHeaders,
        })
    }
    function reloadPage() {
        $.ajax({
            url: baseUrl + 'appdata/' + appkey + appdata,
            method: 'GET',
            success: loadMessages,
            headers: authHeaders

        })
    }

    function loadMessages(data) {
        let allMessages = "";

        console.log(data);
        console.log(Object.values(data));
        for (let message of Object.values(data)) {
            allMessages += `${message.author}: ${message.content}\n`;
        }
        $("#messages").text(allMessages);
    }
}




