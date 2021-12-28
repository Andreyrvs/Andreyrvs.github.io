// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

const todoList = document.getElementById('todoList');

todoList.addEventListener('click', () => {
  console.log('Aperto');
  location.href = '/projetos/sd-017-project-todo-list2/index.html';
});

const pixelArt = document.getElementById('pixelArt');

pixelArt.addEventListener('click', () => {
  location.href = '/projetos/sd-017-project-pixels-art2/index.html'
});
