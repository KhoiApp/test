//var para = document.querySelector('article');
var mql = window.matchMedia('(max-width: 600px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    //para.textContent = 'This is a narrow screen — less than 600px wide.';
    document.body.style.backgroundColor = 'red';
  } else {
    /* the viewport is more than 600 pixels wide */
    //para.textContent = 'This is a wide screen — more than 600px wide.';
    document.body.style.backgroundColor = 'blue';
  }
}

mql.addEventListener('change', screenTest);
