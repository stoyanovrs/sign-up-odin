let pass = document.querySelector('#pass');
let secondpass = document.querySelector('#secondpass');
let display = document.querySelector('.error');
let error = '';

if (pass = '' || pass !== secondpass) {
  error = '* Password do not match';
  display.textContent = error;
  
} else {
  error = '';
  display.textContent = error;
}