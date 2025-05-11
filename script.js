function digitalclock() {
    let day = new Date();
    let hrs = day.getHours(); 
    let min = day.getMinutes();
    let sec = day.getSeconds();

    let format = document.querySelector(".format");
    let timeformat = (hrs >= 12) ? "PM" : "AM";
    format.innerHTML = timeformat;

 
    document.querySelector(".hrs .value").innerText = hrs;
    document.querySelector(".min .value").innerText = min;
    document.querySelector(".sec .value").innerText = sec;
}

digitalclock();


document.querySelectorAll(".dot").forEach(dot => {
    dot.classList.add("active");
});


setInterval(digitalclock, 1000);

let weekends = document.querySelectorAll("li");
let day = new Date().getDay();

weekends.forEach((weekend , index) => {
    if(index == day){
        weekend.classList.add("active-day");
    }
 
});
