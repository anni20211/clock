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
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});
