function attachEvents() {

    const baseUrl = 'https://baas.kinvey.com/';
    const appKey = 'kid_SkdwSBRY4';
    const endpoint = 'biggestCatches';
    const username = 'krasimir';
    const password = '123456';
    const headers = {
        'Authorization': `Basic ${btoa(username + ':' + password)}`,
        'Content-Type': 'application/json'
    }

    $('.load').on('click', loadCatches);
    $('.add').on('click', addCatch);

    async function loadCatches() {

        try {
            let catches = await $.ajax({
                url: baseUrl + 'appdata' + '/' + appKey + '/' + endpoint,
                method: 'GET',
                headers
            });

            $('#catches').empty();

            for (let catchInfo of catches) {
                // console.log(catchInfo);
                let div = $(`
    
    <div class="catch" data-id="${catchInfo._id}">
    <label>Angler</label>
    <input type="text" class="angler" value=${catchInfo.angler} />
    <label>Weight</label>
    <input type="number" class="weight" value=${catchInfo.weight} />
    <label>Species</label>
    <input type="text" class="species" value=${catchInfo.species} />
    <label>Location</label>
    <input type="text" class="location" value=${catchInfo.location} />
    <label>Bait</label>
    <input type="text" class="bait" value=${catchInfo.bait} />
    <label>Capture Time</label>
    <input type="number" class="captureTime" value=${catchInfo.captureTime} />
    
    </div>
    
    `);
                let updateBtn = $(`<button class="update">Update</button>`);
                updateBtn.on('click', updateCatch);

                let deleteBtn = $(`<button class="delete">Delete</button>`);
                deleteBtn.on('click', deleteCatch);

                div.append(updateBtn);
                div.append(deleteBtn);
                $('#catches').append(div);
            }

        } catch (err) {
            console.log(err);
        }

    }

    async function addCatch() {


        let angler = $('#addForm input.angler').val();
        let weight = $('#addForm input.weight').val();
        let species = $('#addForm input.species').val();
        let location = $('#addForm input.location').val();
        let bait = $('#addForm input.bait').val();
        let captureTime = $('#addForm input.captureTime').val();

        let catchObj = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        }
        try {
            await $.ajax({
                url: baseUrl + 'appdata' + '/' + appKey + '/' + endpoint,
                method: 'POST',
                data: JSON.stringify(catchObj),
                headers
            })
        } catch (err) {
            console.log(err);
        }

        loadCatches();
    }



    async function updateCatch() {
        //console.log((this).parent());

        // console.log($(this).parent());//vryshta parent-a na butona(celiq div), kojto e cuknat
        let angler = $(this).parent().find('input.angler').val();
        let weight = +$(this).parent().find('input.weight').val();
        let species = $(this).parent().find('input.species').val();
        let location = $(this).parent().find('input.location').val();
        let bait = $(this).parent().find('input.bait').val();
        let captureTime = +$(this).parent().find('input.captureTime').val();

        let newCatch = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        }

        let id = $(this).parent().data('id');


        try {
            await $.ajax({
                url: baseUrl + 'appdata/' + appKey + '/' + endpoint + '/' + id,
                method: 'PUT',
                data: JSON.stringify(newCatch),
                headers
            });


        } catch (err) {
            console.log(err);
        }

        loadCatches();


    }

    async function deleteCatch() {
        let id = $(this).parent().data('id');


        try {
            await $.ajax({
                url: baseUrl + 'appdata' + '/' + appKey + '/' + endpoint + '/' + id,
                method: 'DELETE',
                headers
            });


        } catch (err) {
            console.log(err);
        }

        loadCatches();

    }


}