//Footer Section
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.querySelector(".lastmodified").textContent = `Last Modified ${document.lastModified}`

//Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const mobileLinks = document.querySelector(".nav-mobile-link")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("cross-bar");
    mobileLinks.classList.toggle("show")
})

// EXPLORE PAGE
const italianDishes = [
  {
    name: "Chicken Scarpariello",
    time: "15 - 20 Minutes | Serves: 1",
    amount: "$5.07",
    src:"images/chicken-scarpariello.webp"
  },

  {
    name: "Braciole",
    time: "15 - 30 Minutes | Serves: 1",
    amount: "$5.07",
    src:"images/braciole.webp"
  },
  {
    name: "Bolognese Meat Sauce",
    time: "15 - 20 Minutes | Serves: 1",
    amount: "$5.07",
    src:"images/bolognese-meat-sauce.webp"
  },
  {
    name: "Agnolotti del Plin",
    time: "15 - 20 Minutes | Serves: 1",
    amount: "$15.07",
    src:"images/agnolotti-del-plin.webp"
  },
  {
    name: "Italian Wedding Risotto",
    time: "15 - 20 Minutes | Serves: 2",
    amount: "$35.57",
    src:"images/italian-wedding-risotto.webp"
  },
  
  {
      name: "Soppressata Pizza",
      time: "15 Minutes | Serves: 1",
      amount: "$13.03",
      src:"images/soppressataa-pizza-with-calabrian-chiles-and-hot-honey.webp"
    },
    {
      name: "Pork Chop Milanese",
      time: "5 - 10 Minutes | Serves: 2",
      amount: "$35.57",
      src:"images/pork-chop-milanese.webp"
    },
    
    {
      name: "Pasta 'Ncasciata",
      time: "55 - 60 Minutes | Serves: 2",
      amount: "$85.57",
      src:"images/pasta-ncasciata.webp"
    },
    {
      name: "Chicken Vesuvio",
      time: "55 - 60 Minutes | Serves: 1",
      amount: "$85.57",
      src:"images/chicken-vesuvio.webp"
    }
];


function displayItalianDish(italianDishes){
    const exploreDish = document.querySelector(".explore");
    exploreDish.innerHTML += ""
    for (const italianDish of italianDishes){
        let exploreCard =`<div id="explore-Card">
                <img src="${italianDish.src}" alt="${italianDish.name}" loading="lazy" width="500" height="400">
                <div>
                    <h2>${italianDish.name}</h2>
                    <h3>${italianDish.time}</h3>
                    <h2>${italianDish.amount}</h2>
                </div>
                <button class="btn">Order|Book a Reservation</button>
                </div>`;
                exploreDish.innerHTML += exploreCard;
        }
    }
    
displayItalianDish(italianDishes);

// Table
function displayTable(italianDishes) {
  const tbody= document.querySelector("#table-sections tbody");
  let rows = "";
  for(const italianDish of italianDishes) {
  rows += `<tr>
    <td>${italianDish.name}</td>
    <td>${italianDish.time}</td>
    <td>${italianDish.amount}</td>
   </tr>`;
  }
tbody.innerHTML = rows;
}
displayTable(italianDishes);


