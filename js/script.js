var count = new Date("July 7, 2022, 00:00:00").getTime();
var x = setInterval(function(){
  var now = new Date().getTime();
  var d = count - now;              // Hozirgi vaqt va belgilangan vaqt oraligini millisekundlarda ifodaladik

  var days = Math.floor(d/(1000*60*60*24));                       // Kunlarda
  var hours = Math.floor((d%(1000*60*60*24)) / (1000*60*60));     // Soatlarda
  var minutes = Math.floor((d%(1000*60*60)) / (1000*60));         // Minutlarda
  var seconds = Math.floor((d%(1000*60)) / (1000));               // Sekundlarda

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  
}, 1000)

// Asosiy ishlatilgan funksiya - SetInterval()