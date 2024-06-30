////Speed Detector
const ps = require("prompt-sync");
const prompt = ps()

function speedDetector(){
    let speed = prompt ("Speed?");

    const speedLimit = 70;
    const demeritPointPerkm = 5;

    if (speed < speedLimit){
        return 'OK'
    }else {
        const demeritPoints = Math.floor((speed-speedLimit)/demeritPointPerkm);
        if (demeritPoints > 12 ){
            return 'Licence suspended'
        }else{
            return `Points: ${demeritPoints}`
        }

    }

}

console.log(speedDetector());