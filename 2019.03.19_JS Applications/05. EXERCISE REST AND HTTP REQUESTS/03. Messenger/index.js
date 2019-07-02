function attachEvents() {

    const baseUrl = "https://fir-38b59.firebaseio.com/messages.json";
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
            url: baseUrl,
            method: 'POST',
            data: JSON.stringify(message),
            success: logRes
        })
    }
    function reloadPage() {
        $.ajax({
            url: baseUrl,
            method: 'GET',
            success: loadMessages
        })
    }


    function loadMessages(data) {

        let allMessages = "";
        for (let message of Object.values(data)) {
            allMessages += `${message.author}: ${message.content}\n`
        }
        $('#messages').text(allMessages);
    }

    function logRes(message) {
        console.log(message);
    }
}
