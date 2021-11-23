setInterval(()=>{
   d=new Date();
   ht=d.getHours();
   hm=d.getMinutes();
   hs=d.getSeconds();
   hrotation= 30*ht+hm/2;
   mrotation= 6*hm;
   srotation= 6*hs;

   hour.style.transform=`rotate(${hrotation}deg)`;
   minute.style.transform=`rotate(${mrotation}deg)`;
   second.style.transform=`rotate(${srotation}deg)`;
   
   
},1000);