const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", function(){
    if (input.value.trim() !== "") {
        const newLi = document.createElement("li");
        const delBtn = document.createElement("button")
        newLi.textContent = input.value;
        delBtn.textContent = "❌";
        
        newLi.appendChild(delBtn);
        list.appendChild(newLi);
        
        delBtn.addEventListener("click", function(){
            list.removeChild(newLi);
        })
     }
      input.focus();
})

