const DateTime = luxon.DateTime;
chicagoTime = DateTime.now().setZone('America/Chicago');
sysTime = DateTime.now().setZone('system');
let localTime = chicagoTime.toLocaleString(DateTime.TIME_WITH_SECONDS);
let offset = ((chicagoTime.offset - sysTime.offset) / -60); 
//console.log(`${chicagoTime.offset}, ${sysTime.offset}, ${offset / -60}`);

const offsetText = offset === 0 ? "the same as" :
                    offset > 0 ? `${offset} hours ahead of` :
                    `${Math.abs(offset)} hours behind`; // I'm not actually sure where this code came from...

document.getElementById("localTime").innerText = `My local time is ${localTime} - this is ${offsetText} your local time!`;