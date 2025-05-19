function updateClock() {
    var now = new Date();
    var date = now.getDate(); // date
    var month = now.getMonth(); // month index
    var year = now.getFullYear(); // year
    var dayOfWeek = now.getDay(); // day of week index

    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    document.querySelector('#day').innerHTML = date;
    document.querySelector('#month').innerHTML = months[month];
    document.querySelector('#year').innerHTML = year;
    
    var activeDay = document.querySelector(`.weekdays :nth-child(${dayOfWeek + 1})`);
    activeDay.classList.add('active');

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    document.querySelector('#hour').innerHTML = hour;
    document.querySelector('#minute').innerHTML = minute;
    document.querySelector('#second').innerHTML = second;

    var period = hour >= 12 ? 'PM' : 'AM';
    document.querySelector('#period').innerHTML = period;
}

updateClock();
setInterval(updateClock, 1000);
