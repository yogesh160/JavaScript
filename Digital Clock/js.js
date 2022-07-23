setInterval(() => {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');

    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let hrs_dot = document.querySelector('.hrs_dot');
    let min_dot = document.querySelector('.min_dot');
    let sec_dot = document.querySelector('.sec_dot');
    
    let hrs = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ap = (hrs <= 12) ? "AM" : "PM";

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    
    hrs = (hrs < 10) ? "0" + hrs : hrs;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    hours.innerHTML = hrs;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    ampm.innerHTML = ap;

    hh.style.strokeDashoffset = 440 - (440 * hrs) / 12;
    mm.style.strokeDashoffset = 440 - (440 * min) / 60;
    ss.style.strokeDashoffset = 440 - (440 * sec) / 60;

    hrs_dot.style.transform = `rotate(${hrs * 30}deg)`;
    min_dot.style.transform = `rotate(${min * 6}deg)`;
    sec_dot.style.transform = `rotate(${sec * 6}deg)`;
})
