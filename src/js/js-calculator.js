let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
  item.addEventListener('click', event => {
    buttonText = event.target.innerText;
    console.log('button text is ', buttonText);

    if (buttonText == 'x') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == 'AC') {
      screenValue = '';
      screen.value = screenValue;
    } else if (buttonText == '=') {
      screen.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}

document.addEventListener('keydown', event => {
  console.log(event.code);

  if (event.code == 'Escape') {
    screenValue = '';
    screen.value = screenValue;
  }
});
