var dnow = new Date();
var devent = new Date(2022, 09, 25, 20)
var dexpectedMinimum = new Date(2022, 11, 06, 20)

var secondsPast = Math.round( (dnow.getTime() - devent.getTime())/1000 );
document.getElementById('daysPast').innerText = Math.round(secondsPast/(60*60*24))


var secondsToWait = Math.round( (dexpectedMinimum.getTime() - dnow.getTime())/1000 )
if (secondsToWait<0) {
    secondsToWait = 0;
}
document.getElementById('daysLeft').innerText = Math.round(secondsToWait/(60*60*24))
