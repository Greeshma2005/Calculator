var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');
for (item of btn) {
item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;
        if (btntext === '×') {
        btntext = '*';
        }
        if (btntext === '÷') {
        btntext = '/';
        }
        screen.value += btntext;
    });
}
document.querySelector('#eval').addEventListener('click', () => {
  try {
 screen.value = eval(screen.value);
  }catch (error) {
  screen.value = 'Error';
  }
});
document.querySelector('#del').addEventListener('click', () => {
  screen.value = screen.value.slice(0, -1);
});
document.querySelector('#ac').addEventListener('click', () => {
screen.value = '';
});