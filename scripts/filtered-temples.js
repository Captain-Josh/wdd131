document.getElementById("currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastmodified").textContent =  `Last Modified: ${document.lastModified}`

// Animated hamburger menu starts here

const hamburger = document.querySelector(".hamburger")
const mobileLinks = document.querySelector(".nav-mobile-link")

hamburger.addEventListener("click", function(){
    hamburger.classList.toggle('crossburger')
    mobileLinks.classList.toggle("showmobilemenu")
})

// Animated hamburger menu ends here


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    src:"images/temple/aba-nigeria-temple.webp"
  },

  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
  src:"images/temple/manti-temple.webp"
  },

  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    src:"images/temple/payson-utah-temple.webp"
  },

  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    src:"images/temple/yigo-guam-temple.webp"
  },

  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    src:"images/temple/washington-dc-temple.webp"
  },

  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    src:"images/temple/lima-peru-temple.webp"
  },

  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    src:"images/temple/mexico-city-temple.webp"
  },

  {
    templeName: "Salt Lake City",
    location: "Salt Lake City, UTAH",
    dedicated: "1893, April, 6",
    area: 382207,
    src:"images/temple/salt-lake-temple.webp"
  },

  {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2003, January, 11",
    area: 17500,
    src:"images/temple/accra-ghana-temple.webp"
  },

  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "10, March, 10",
    area: 41010,
    src:"images/temple/rome-temple.webp"
  }
];



// for (let i=0; i<temples.length; i++){

const templeTitle =document.querySelector("#section-title");
function displayAllTemples(temples){  
    const templeContainer = document.querySelector(".image-container");
    templeContainer.innerHTML ="";
    for (const temple of temples){
        let templeCard = `
                <figure>
            <img src="${temple.src}"
                 alt="${temple.templeName}"
                 loading="lazy">

             <h2>${temple.templeName}</h2>
             <p><strong class="var">Location:</strong> ${temple.location}</p>
             <p><strong class="var">Dedicated:</strong> ${temple.dedicated}</p>
             <p><strong class="var">Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
         </figure>`; 

         templeContainer.innerHTML += templeCard;
    }
}       
displayAllTemples(temples);


// Another way to loop through the array  

// var templeContainer = document.querySelector(".image-container");
// function displayAllTemples(temples){  
//     templeContainer.innerHTML="";
//     temples.forEach (temple => {
//         const templeCardHolder= document.createElement("div");
//         templeCardHolder.classList.add("temple-card")
//         templeCardHolder.innerHTML = `
//                 <figure>
//             <img src="${temple.imageUrl}"
//                  alt="${temple.templeName}"
//                  loading="lazy">

//              <h2>${temple.templeName}</h2>
//              <p><strong class="var">Location:</strong> ${temple.location}</p>
//              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
//              <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
//          </figure>`; 

//          templeContainer.appendChild(templeCardHolder);
//     })
// }     
// displayAllTemples(temples);


//Desktop Nav
const homeTemple = document.querySelector(".home-temple");
homeTemple.addEventListener("click", () => {
    templeTitle.innerHTML = "Home";
    displayAllTemples(temples);

});

const oldTemple = document.querySelector(".old-temple");
oldTemple.addEventListener("click", () => {
    const filteredOld= temples.filter((temple) => new Date(temple.dedicated).getFullYear()< 1990 );
    templeTitle.innerHTML = "Old Temples";
    displayAllTemples(filteredOld)
})


const recentTemple = document.querySelector(".new-temple");
recentTemple.addEventListener("click", () =>{
    const filteredNew= temples.filter((temple) => new Date(temple.dedicated).getFullYear()>2000 );
    templeTitle.innerHTML = "New Temples";
    displayAllTemples(filteredNew)
})

const largeTemple = document.querySelector(".large-temple");
largeTemple.addEventListener("click", () => {
    const filteredLarge= temples.filter((temple) => temple.area > 90000 );
    templeTitle.innerHTML = "Large Temples";
    displayAllTemples(filteredLarge)
})
const smallTemple = document.querySelector(".small-temple");
smallTemple.addEventListener("click", () => {
    const filteredSmall= temples.filter((temple) => temple.area < 10000 );
    templeTitle.innerHTML = "Small Temples";
    displayAllTemples(filteredSmall)
})

//Mobile Nav

const homeTempleMob = document.querySelector(".home-temple-mob");
homeTempleMob.addEventListener("click", () => {
    templeTitle.innerHTML = "Home";
    displayAllTemples(temples);

});

const oldTempleMob = document.querySelector(".old-temple-mob");
oldTempleMob.addEventListener("click", () => {
    const filteredOld= temples.filter((temple) => new Date(temple.dedicated).getFullYear()< 1990 );
    templeTitle.innerHTML = "Old Temples";
    displayAllTemples(filteredOld)
})


const recentTempleMob = document.querySelector(".new-temple-mob");
recentTempleMob.addEventListener("click", () =>{
    const filteredNew= temples.filter((temple) => new Date(temple.dedicated).getFullYear()>2000 );
    templeTitle.innerHTML = "New Temples";
    displayAllTemples(filteredNew)
})

const largeTempleMob = document.querySelector(".large-temple-mob");
largeTempleMob.addEventListener("click", () => {
    const filteredLarge= temples.filter((temple) => temple.area > 90000 );
    templeTitle.innerHTML = "Large Temples";
    displayAllTemples(filteredLarge)
})
const smallTempleMob = document.querySelector(".small-temple-mob");
smallTempleMob.addEventListener("click", () => {
    const filteredSmall= temples.filter((temple) => temple.area < 10000 );
    templeTitle.innerHTML = "Small Temples";
    displayAllTemples(filteredSmall)
})


