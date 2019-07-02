function solve() {
    
    const baseUrl = "https://judgetests.firebaseio.com/schedule/";
    
    let currentStopId = "depot";
    let currentStop;
    
    let departButton=$('#depart');
    let arriveButton=$('#arrive');

    

    function depart() {
        //make a GET request to the server with the ID of the current stop to address 
     
        $.ajax({
            url: baseUrl + currentStopId + '.json',
            method: 'GET',
            success: loadStop,
        })
    }
    
    function arrive() {
       
        $('.info').text(`Arriving at ${currentStop.name}`);
        currentStopId = currentStop.next;

        departButton.attr('disabled', false);
        arriveButton.attr('disabled', true);
    }
    
    
    function loadStop(data) {

        currentStop = data;
        $('.info').text(`Next stop ${currentStop.name}`);

        departButton.attr('disabled', true);
        arriveButton.attr('disabled', false);

    }


  
    return {
        depart,
        arrive
    };
}
