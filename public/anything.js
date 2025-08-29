console.log('Hey there, Potassium!')

// tv5 - 5
// abscbn - 2
// gma - 7
// ibc - 13
// ptv - 4

rl = require('readline')
rli = rl.createInterface({
        input : process.stdin,
})
rli.on('line', get_the_channel)
function get_the_channel (line) {
    switch(line){
        case "5":
            console.log("tv5")
            break;
        case "2":
            console.log("abscbn")
            break;
        case "7":
            console.log("gma")
            break;
        case "13":
            console.log("ibc")
            break;
        case "4":
            console.log("ptv")
            break;
    }
}