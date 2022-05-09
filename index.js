const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Виртуальная клавиатура';
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
textarea.rows = '5';
textarea.cols = '70';
const note = document.createElement('div');
note.classList.add('note');
const windowOc = document.createElement('p');
windowOc.textContent = 'Клавиатура создана в операционной системе Windows';
const combination = document.createElement('p');
combination.textContent = 'Для переключения языка комбинация: левыe shift + alt';
note.append(windowOc, combination);
document.body.prepend(title, textarea, keyboard, note);

const en = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
  '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  '[', ']', '\\', 'del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h',
  'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n',
  'm', ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt',
  '◄', '▼', '►', 'Ctrl'];
const ru = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
  '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з',
  'х', 'ъ', '\\', 'del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л',
  'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б',
  'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt',
  '◄', '▼', '►', 'Ctrl'];

const enShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_',
  '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  '{', '}', '|', 'del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J',
  'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  '<', '>', '?', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt',
  '◄', '▼', '►', 'Ctrl'];
const ruShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_',
  '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З',
  'Х', 'Ъ', '/', 'del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л',
  'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б',
  'Ю', ',', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt',
  '◄', '▼', '►', 'Ctrl'];

const enCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
  '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  '[', ']', '\\', 'del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J',
  'K', 'L', ';', "'", 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  ',', '.', '/', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt',
  '◄', '▼', '►', 'Ctrl'];
const ruCaps = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
  '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З',
  'Х', 'Ъ', '\\', 'del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л',
  'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б',
  'Ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt',
  '◄', '▼', '►', 'Ctrl'];

let lang = localStorage.getItem('lang');

function createButton(char, clas = null) {
  const div = document.createElement('div');
  div.classList.add('char');
  if (char === 'Ctrl') {
    div.setAttribute('data-atribute', 'Control');
  } else if (char === 'Win') {
    div.setAttribute('data-atribute', 'Meta');
  } else if (char === 'del') {
    div.setAttribute('data-atribute', 'Delete');
  } else if (char === '\\') {
    div.setAttribute('data-atribute', 'BackSlash');
  } else if (char === '"') {
    div.setAttribute('data-atribute', 'DoubleQuotes');
  } else if (char === '◄') {
    div.setAttribute('data-atribute', 'ArrowLeft');
  } else if (char === '▲') {
    div.setAttribute('data-atribute', 'ArrowUp');
  } else if (char === '►') {
    div.setAttribute('data-atribute', 'ArrowRight');
  } else if (char === '▼') {
    div.setAttribute('data-atribute', 'ArrowDown');
  } else {
    div.setAttribute('data-atribute', char);
  }

  if (clas) {
    div.classList.add(clas);
  }

  div.textContent = char;
  return div;
}

function createKeyboard(lang, shiftDown = false, caps = false) {
  let char;
  if (shiftDown) {
    char = lang ? enShift : ruShift;
  } else if (caps) {
    char = lang ? enCaps : ruCaps;
  } else {
    char = lang ? en : ru;
  }

  for (let i = 0; i < char.length; i++) {
    if (char[i] === 'Backspace') {
      keyboard.append(createButton(char[i], 'backspace'));
      continue;
    }
    if (char[i] === 'Tab') {
      keyboard.append(createButton(char[i], 'tab'));
      continue;
    }
    if (char[i] === 'CapsLock') {
      keyboard.append(createButton(char[i], 'caps'));
      continue;
    }
    if (char[i] === 'Enter') {
      keyboard.append(createButton(char[i], 'enter'));
      continue;
    }
    if (char[i] === 'Shift') {
      keyboard.append(createButton(char[i], 'shift'));
      continue;
    }
    if (char[i] === ' ') {
      keyboard.append(createButton(char[i], 'spaсe'));
      continue;
    }
    keyboard.append(createButton(char[i]));
  }

  return keyboard;
}
createKeyboard(lang);

let flag = false;
const changeLang = (e) => {
  if (e.shiftKey && e.altKey) {
    lang = !lang;
    if (lang) {
      localStorage.setItem('lang', 'true');
    } else {
      localStorage.setItem('lang', '');
    }
    const keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';

    createKeyboard(lang);
    if (flag) {
      keyboard.innerHTML = '';
      createKeyboard(lang, false, true);
      const char = document.querySelector('.caps');
      char.classList.add('backlight');
    }
  }
};
document.addEventListener('keydown', changeLang);

const enShiftDown = (e) => {
  if (!e.shiftKey) {
    return;
  }

  keyboard.innerHTML = '';
  createKeyboard(lang, true);
  if (flag) {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, true);
    const char = document.querySelector('.caps');
    char.classList.add('backlight');
  }
};
document.addEventListener('keydown', enShiftDown);

const enShiftUp = (e) => {
  if (e.key !== 'Shift') {
    return;
  }

  keyboard.innerHTML = '';
  createKeyboard(lang, false);
  if (flag) {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, true);
    const char = document.querySelector('.caps');
    char.classList.add('backlight');
  }
};
document.addEventListener('keyup', enShiftUp);

const ruShiftDown = (e) => {
  if (!e.shiftKey) {
    return;
  }
  keyboard.innerHTML = '';
  createKeyboard(lang, true);
  if (flag) {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, true);
    const char = document.querySelector('.caps');
    char.classList.add('backlight');
  }
};
document.addEventListener('keydown', ruShiftDown);

const ruShiftUp = (e) => {
  if (e.key !== 'Shift') {
    return;
  }
  keyboard.innerHTML = '';
  createKeyboard(lang, false);
  if (flag) {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, true);
    const char = document.querySelector('.caps');
    char.classList.add('backlight');
  }
};
document.addEventListener('keyup', ruShiftUp);

let upper = false;
const textOut = (e) => {
  e.preventDefault();
  if (upper) {
    const a = e.key.toUpperCase();
    return textarea.value += a;
  }
  if (e.key === 'Backspace') {
    const str = textarea.value;
    return textarea.value = textarea.value.slice(0, str.length - 1);
  }

  if (e.key === 'Delete') {
    return textarea.value = textarea.value.slice(0, textarea.selectionStart)
     + textarea.value.slice(textarea.selectionStart + 1);
  }

  if (e.key === 'Tab') {
    return textarea.value += '  ';
  }

  if (e.key === 'ArrowLeft') {
    return textarea.value += '◄';
  }
  if (e.key === 'ArrowRight') {
    return textarea.value += '►';
  }
  if (e.key === 'ArrowUp') {
    return textarea.value += '▲';
  }
  if (e.key === 'ArrowDown') {
    return textarea.value += '▼';
  }

  if (e.key === 'Shift' || e.key === 'Enter' || e.key === 'Control'
  || e.key === 'Del' || e.key === 'CapsLock' || e.key === 'Tab'
  || e.key === 'Alt' || e.key === 'Meta') {
    return;
  }

  return textarea.value += e.key;
};
document.addEventListener('keydown', textOut);

const backlightOn = (e) => {
  let char;
  if (e.key === '\\') {
    char = document.querySelector('[data-atribute="BackSlash"]');
  } else if (upper) {
    const upperCase = e.key.toUpperCase();
    char = document.querySelector(`[data-atribute="${upperCase}"`);
  } else if (e.key === '"') {
    char = document.querySelector('[data-atribute="DoubleQuotes"]');
  } else {
    char = document.querySelector(`[data-atribute="${e.key}"`);
  }
  return char.classList.add('backlight');
};
document.addEventListener('keydown', backlightOn);

const backlightOff = (e) => {
  if (e.code === 'AltRight' || e.code === 'ControlRight') {
    const char = document.querySelectorAll(`[data-atribute="${e.key}"`)[1];
    char.classList.remove('backlight');
    return;
  }

  if (e.key === 'CapsLock') {
    return;
  }

  if (e.key === '\\') {
    const char = document.querySelector('[data-atribute="BackSlash"]');
    char.classList.remove('backlight');
    return;
  }
  if (e.key === '"') {
    const char = document.querySelector('[data-atribute="DoubleQuotes"]');
    char.classList.remove('backlight');
    return;
  }
  if (upper) {
    const upperCase = e.key.toUpperCase();
    const char = document.querySelector(`[data-atribute="${upperCase}"`);
    char.classList.remove('backlight');
    return;
  }

  const char = document.querySelector(`[data-atribute="${e.key}"`);
  char.classList.remove('backlight');
};
document.addEventListener('keyup', backlightOff);

const clickTextOut = (e) => {
  if (!e.target.classList.contains('char')) {
    return;
  }

  if (e.target.textContent === 'Backspace') {
    const str = textarea.value;
    return textarea.value = textarea.value.slice(0, str.length - 1);
  }

  if (e.target.textContent === 'del') {
    return textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + textarea.value.slice(textarea.selectionStart + 1);
  }
  if (e.target.textContent === 'Tab') {
    return textarea.value += '  ';
  }
  if (e.target.textContent === 'Shift' || e.target.textContent === 'Enter'
  || e.target.textContent === 'Ctrl' || e.target.textContent === 'del'
  || e.target.textContent === 'CapsLock' || e.target.textContent === 'Tab'
  || e.target.textContent === 'Alt' || e.target.textContent === 'Win') {
    return;
  }

  textarea.value += e.target.textContent;
};
document.addEventListener('click', clickTextOut);

const capsDown = (e) => {
  if (e.key !== 'CapsLock') {
    return;
  }
  flag = !flag;

  if (flag) {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, true);
    const char = document.querySelector(`[data-atribute="${e.key}"`);
    char.classList.add('backlight');
  } else {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, false);
  }
};
document.addEventListener('keydown', capsDown);

const enterClick = (e) => {
  if (!e.target.classList.contains('char')) {
    return;
  }
  if (e.target.textContent === 'Enter') {
    textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + '\n' + textarea.value.slice(textarea.selectionStart);
  }
};
document.addEventListener('click', enterClick);

const enterKey = (e) => {
  if (e.key !== 'Enter') {
    return;
  }
  let char;
  if (e.key === '\\') {
    char = document.querySelector('[data-atribute="BackSlash"]');
  } else {
    char = document.querySelector(`[data-atribute="${e.key}"`);
  }

  if (!char.classList.contains('char')) {
    return;
  }

  if (e.key === 'Enter') {
    textarea.value = textarea.value.slice(0, textarea.selectionStart)
    + '\n' + textarea.value.slice(textarea.selectionStart);
  }
};
document.addEventListener('keydown', enterKey);

const shiftRightKeyBackLight = (e) => {
  if (e.code !== 'ShiftRight') {
    return;
  }
  const keyLeft = document.querySelectorAll(`[data-atribute="${e.key}"`)[0];
  keyLeft.classList.remove('backlight');
  const keyRight = document.querySelectorAll(`[data-atribute="${e.key}"`)[1];
  keyRight.classList.add('backlight');
};
document.addEventListener('keydown', shiftRightKeyBackLight);

const altRightKeyBackLight = (e) => {
  if (e.code !== 'AltRight') {
    return;
  }
  const keyLeft = document.querySelectorAll(`[data-atribute="${e.key}"`)[0];
  keyLeft.classList.remove('backlight');
  const keyRight = document.querySelectorAll(`[data-atribute="${e.key}"`)[1];
  keyRight.classList.add('backlight');
};
document.addEventListener('keydown', altRightKeyBackLight);

const controlRightKeyBackLight = (e) => {
  if (e.code !== 'ControlRight') {
    return;
  }
  const keyLeft = document.querySelectorAll(`[data-atribute="${e.key}"`)[0];
  keyLeft.classList.remove('backlight');
  const keyRight = document.querySelectorAll(`[data-atribute="${e.key}"`)[1];
  keyRight.classList.add('backlight');
};
document.addEventListener('keydown', controlRightKeyBackLight);

const clickChangeLang = (e) => {
  if (!e.target.classList.contains('char')) {
    return;
  }

  if (e.shiftKey && e.target.textContent === 'Alt') {
    lang = !lang;
    if (lang) {
      localStorage.setItem('lang', 'true');
    } else {
      localStorage.setItem('lang', '');
    }
    const keyboard = document.querySelector('.keyboard');
    keyboard.innerHTML = '';

    createKeyboard(lang);
    if (flag) {
      keyboard.innerHTML = '';
      createKeyboard(lang, false, true);
      const char = document.querySelector('.caps');
      char.classList.add('backlight');
    }
  }
};
document.addEventListener('click', clickChangeLang);

const clickCaps = (e) => {
  if (!e.target.classList.contains('char')) {
    return;
  }

  if (e.target.textContent !== 'CapsLock') {
    return;
  }

  flag = !flag;
  if (flag) {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, true);
    const char = document.querySelector(`[data-atribute="${e.target.textContent}"`);
    char.classList.add('backlight');
  } else {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, false);
  }
};
document.addEventListener('click', clickCaps);

const mouseShiftDown = (e) => {
  if (e.target.textContent !== 'Shift') {
    return;
  }

  keyboard.innerHTML = '';
  createKeyboard(lang, true);
  upper = true;

  const shift = document.querySelectorAll('.shift');
  if (e.clientX < 1000) {
    shift[0].classList.add('backlight');
  } else {
    shift[1].classList.add('backlight');
  }
  if (flag) {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, true);
    const char = document.querySelector('.caps');
    char.classList.add('backlight');
  }
};
document.addEventListener('mousedown', mouseShiftDown);

const mouseShiftUp = (e) => {
  if (!e.target.classList.contains('char')) {
    return;
  }

  if (e.target.textContent !== 'Shift') {
    return;
  }

  keyboard.innerHTML = '';
  createKeyboard(lang, false);
  upper = false;

  if (flag) {
    keyboard.innerHTML = '';
    createKeyboard(lang, false, true);
    const char = document.querySelector('.caps');
    char.classList.add('backlight');
  }
};
document.addEventListener('mouseup', mouseShiftUp);

const mouseShiftOut = (e) => {
  if (!e.target.classList.contains('char')) {
    return;
  }
  if (!e.shiftKey) {
    return;
  }

  if (e.target.textContent === 'Shift' || e.target.textContent === 'Enter'
    || e.target.textContent === 'Ctrl' || e.target.textContent === 'del'
    || e.target.textContent === 'CapsLock' || e.target.textContent === 'Tab'
    || e.target.textContent === 'Alt' || e.target.textContent === 'Win'
    || e.target.textContent === 'Backspace') {
    return;
  }

  textarea.value += e.target.textContent;
};
document.addEventListener('mouseup', mouseShiftOut);
