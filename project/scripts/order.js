    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.querySelector(".lastmodified").textContent = `Last Modified: ${document.lastModified}`;

  document.addEventListener("DOMContentLoaded", ()=>{
 
    let orderCount = localStorage.getItem("orderCount");

      if(orderCount === null){
        orderCount =1;
      }
      else{
        orderCount = Number(orderCount) +1;
      }
    localStorage.setItem("orderCount", orderCount);

   const countDisplay = document.getElementById("count");
   countDisplay.innerHTML = `You have made ${orderCount} order(s)`;
})