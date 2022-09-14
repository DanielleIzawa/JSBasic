document.querySelector('html').addEventListener('click', function () {
  alert('Ouch! Stop poking me!');
});


// Note that
document.querySelector('html').addEventListener('click', function () {
  alert('Ouch! Stop poking me!');
});

// is equivalent to

let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function () {
  alert('Ouch! Stop poking me!');
});


// It's just shorter.
document.querySelector('html').addEventListener('click', () => {
  alert('Ouch! Stop poking me!');
});
