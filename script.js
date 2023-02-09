btn.addEventListener("mouseover", function() {
  this.value = "Полный вперед!";
})

btn.addEventListener("mouseout", function() {
  this.value = "В Москву";
})

function showText() {
  const paragraph = document.querySelector('.paragraph');
  const floor = document.querySelector('.floor');
  paragraph.classList.add('visible'); 
  floor.classList.add('visible');
}

function showTitle() {
  const title = document.querySelector('.rh');
  title.classList.add('visible');
}

function showRed() {
  const title = document.querySelector('.rp');
  title.classList.add('visible');
}

function showOlimp() {
  const title = document.querySelector('.op');
  title.classList.add('visible');
}