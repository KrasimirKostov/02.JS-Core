function solve(input) {
    let listProcessor = (function () {
        let words = [];

        return {
            add: function (w) {
                words.push(w);
            },
            remove: function (w) {
                words = words.filter(e => e !== w);
            },
            print: function () {
                console.log(words.join(','));
            }
        };

    })();

    // for (const line of input) {
    //     let [command, argument] = line.split(' ');
    //     listProcessor[command](argument);
    // }
    // syshtoto kato gornoto
    input.forEach(line => {
        let [command, argument] = line.split(' ');

        listProcessor[command](argument);
    });


}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);