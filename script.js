setInterval(() => {
   d = new Date();
   ht = d.getHours();
   hm = d.getMinutes();
   hs = d.getSeconds();
   hrotation = 30 * ht + hm / 2;
   mrotation = 6 * hm;
   srotation = 6 * hs;

   // Digital Clock
   hour.style.transform = `rotate(${hrotation}deg)`;
   minute.style.transform = `rotate(${mrotation}deg)`;
   second.style.transform = `rotate(${srotation}deg)`;

   let hours = document.getElementById("hr");
   let minutes = document.getElementById("min");
   let seconds = document.getElementById("sec");
   let ampm = document.getElementById("ampm");

   let am = ht >= 12 ? "PM" : "AM";

   if(ht > 12){
      ht = ht - 12;
   }

   ht = (ht < 10) ? "0" + ht:ht;
   hm = (hm < 10) ? "0" + hm:hm;
   hs = (hs < 10) ? "0" + hs:hs;

   hours.innerHTML = ht;
   minutes.innerHTML = hm;
   seconds.innerHTML = hs;
   ampm.innerHTML = am;
});