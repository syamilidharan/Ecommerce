const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 30, 2018 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;
          var hr=Math.floor((distance % (day)) / (hour));
          var min=Math.floor((distance % (hour)) / (minute));
          var sec=Math.floor((distance % (minute)) / second);

          console.log(hr.toLocaleString(undefined,{minimumIntegerDigits: 2}));

     
        document.getElementById('hours').innerText =hr.toLocaleString(undefined,{minimumIntegerDigits: 2}),
        document.getElementById('minutes').innerText = min.toLocaleString(undefined,{minimumIntegerDigits: 2}),
        document.getElementById('seconds').innerText = sec.toLocaleString(undefined,{minimumIntegerDigits: 2});
      

    }, second);