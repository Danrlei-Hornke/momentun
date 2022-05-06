
window.onload = function () {
   var date = new Date();
   const h = date.getHours();
   const m = date.getMinutes();
   const time = `${h < 10 ? "0" + h.toString() : h.toString()}:${m < 10 ? "0" + m.toString() : m.toString()}`;
   const element = document.getElementById("time");
   element.innerText = time;

   let message = document.getElementById("message");
   let author = document.getElementById("author");
   
   message.addEventListener("mouseover", function () {
      author.classList.toggle("show-author");
   })
   message.addEventListener("mouseout", function () {
      author.classList.remove("show-author");
   })
}