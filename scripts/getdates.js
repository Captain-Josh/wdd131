// Set current year and last modified date in footer logic

  document.getElementById('currentyear').textContent = new Date().getFullYear();

  document.getElementById('lastmodified').textContent = `Last modified: ${document.lastModified}`;

//   document.getElementById('lastmodified').textContent = "Last modified: " + document.lastModified;

// const lastMod = document.querySelector("#lastmodified")
// lastMod.textContent = document.lastModified