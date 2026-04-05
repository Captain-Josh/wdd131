document.querySelector(".currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductName(products){
    const productName = document.getElementById("productname");
    productName.innerHTML+="";
    for (product of products){
        let productCard = `<option value="${product.id}">${product.name}</option>`
        productName.innerHTML+= productCard;
    }
}
populateProductName(products)


//Local Storage

// document.addEventListener("DOMContentLoaded", ()=>{
//   if(document.body.id === "review-page"){
//     let reviewCount = localStorage.getItem("reviewCount");

//       if(reviewCount === null){
//         reviewCount =1;
//       }
//       else{
//         reviewCount = Number(reviewCount) +1;
//       }
//     localStorage.setItem("reviewCount", reviewCount);

//    const countDisplay = document.getElementById("count");
//    countDisplay.innerHTML = `You have done ${reviewCount} reviews`;
// }})


