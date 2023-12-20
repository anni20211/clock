setInterval(()=>{
   //Get current date and time
    let d=new Date();
    //Extract minutes,hours, and seconds.
    let ht=d.getHours();
    let hm=d.getMinutes();
    let hs=d.getSeconds();
    //Calculate rotation angles for the clock hands.
   let hrotation= 30*ht+hm/2;
   let mrotation= 6*hm;
   let srotation= 6*hs;
   //rotate the hour hand
  document.getElementById('hour').style.transform = `rotate(${hrotation}deg)`;
  //rotate the minute hand 
   minute.style.transform('minute').style.transform = `rotate(${mrotation}deg)`;
   //rotate the second hand
   second.style.transform('second').style.transform = `rotate(${srotation}deg)`;
   
},1000);