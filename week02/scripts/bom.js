const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter)
    
});
button.addEventListener("click", () => {
    if(input.value != ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();   
    }
})

function displayList(item){
        const newLi = document.createElement("li");
        const delBtn = document.createElement("button")
        newLi.textContent = item;
        delBtn.textContent = "❌";
        delBtn.classList.add("delete");
        
        newLi.appendChild(delBtn);
        list.appendChild(newLi);
        
        delBtn.addEventListener("click", function(){
            list.removeChild(newLi);
            deleteChapter(newLi.textContent);// note this new function that is needed to remove the chapter from the array and localStorage.
            input.focus();

        })
     }

     function setChapterList(){
        localStorage.setItem("chapterList",JSON.stringify(chaptersArray));
     }
    function getChapterList(){
        return JSON.parse(localStorage.getItem("chapterList"));
    }
    function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
    }


