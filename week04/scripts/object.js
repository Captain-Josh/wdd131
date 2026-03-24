let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections : [
    { sectionNumber: "001", 
     enrolled: 95, 
     instructor: "Roberto Diaz Rodriguez" },
    { sectionNumber: "002",
     enrolled: 80, 
     instructor: "Sarah Gobble" },
 { sectionNumber: "003",
     enrolled: 99, 
     instructor: "Captain Josh" }
  ]
};

function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} - ${course.title}` 
}

function renderSections(course) {
  const tbody= document.querySelector("#sections tbody");
  let rows = "";
  for(const section of aCourse.sections) {
  rows += `<tr>
    <td>${section.sectionNumber}</td>
    <td>${section.enrolled}</td>
    <td>${section.instructor}</td>
   </tr>`;
  }
tbody.innerHTML = rows;
}




setCourseInformation(aCourse);
renderSections(aCourse.sections);
