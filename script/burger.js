let toggled = false;
const nav = document.getElementsByClassName('nav')[0];
const btn = document.getElementsByClassName('nav-tgl')[0];



btn.onclick = function(evt) {
  if (!toggled) {
    toggled = true;
    evt.target.classList.add('toggled');
    nav.classList.add('active');
  } else {
    toggled = false;
    evt.target.classList.remove('toggled');
    nav.classList.remove('active');
  }
}

//////////////////////////////////////////////


$(".deactiv8").on("click", function(evt){
  nav.classList.remove('active');
  evt.target.classList.remove('toggled');
});

/*
$(".deactiv8").on("click", function(evt){
  nav.classList.remove('active');
  evt.target.classList.remove('toggled');
});
*/