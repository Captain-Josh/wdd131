    document.querySelector(".currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;

  document.addEventListener("DOMContentLoaded", ()=>{
 
    let reviewCount = localStorage.getItem("reviewCount");

      if(reviewCount === null){
        reviewCount =1;
      }
      else{
        reviewCount = Number(reviewCount) +1;
      }
    localStorage.setItem("reviewCount", reviewCount);

   const countDisplay = document.getElementById("count");
   countDisplay.innerHTML = `You have done ${reviewCount} reviews`;
})