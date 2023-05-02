/* eslint-disable no-nested-ternary */
/* eslint-disable object-curly-newline */
const ALL_KEYS = [
  [
    { code: 'Backquote', defaultText: '`', shiftText: '~', ruText: ']', ruShiftText: '[' },
    { code: 'Digit1', defaultText: '1', shiftText: '!', ruText: '1', ruShiftText: '!' },
    { code: 'Digit2', defaultText: '2', shiftText: '@', ruText: '2', ruShiftText: '"' },
    { code: 'Digit3', defaultText: '3', shiftText: '#', ruText: '3', ruShiftText: '№' },
    { code: 'Digit4', defaultText: '4', shiftText: '$', ruText: '4', ruShiftText: '%' },
    { code: 'Digit5', defaultText: '5', shiftText: '%', ruText: '5', ruShiftText: ':' },
    { code: 'Digit6', defaultText: '6', shiftText: '^', ruText: '6', ruShiftText: ',' },
    { code: 'Digit7', defaultText: '7', shiftText: '&', ruText: '7', ruShiftText: '.' },
    { code: 'Digit8', defaultText: '8', shiftText: '*', ruText: '8', ruShiftText: ';' },
    { code: 'Digit9', defaultText: '9', shiftText: '(', ruText: '9', ruShiftText: '(' },
    { code: 'Digit0', defaultText: '0', shiftText: ')', ruText: '0', ruShiftText: ')' },
    { code: 'Minus', defaultText: '-', shiftText: '_', ruText: '-', ruShiftText: '_' },
    { code: 'Equal', defaultText: '=', shiftText: '+', ruText: '=', ruShiftText: '+' },
    { code: 'Backspace', defaultText: 'del', isWide: true, isNotInput: true },
  ],
  [
    { code: 'Tab', defaultText: 'tab', isWide: true, isNotInput: true },
    { code: 'KeyQ', defaultText: 'q', shiftText: 'Q', ruText: 'й', ruShiftText: 'Й' },
    { code: 'KeyW', defaultText: 'w', shiftText: 'W', ruText: 'ц', ruShiftText: 'Ц' },
    { code: 'KeyE', defaultText: 'e', shiftText: 'E', ruText: 'у', ruShiftText: 'У' },
    { code: 'KeyR', defaultText: 'r', shiftText: 'R', ruText: 'к', ruShiftText: 'К' },
    { code: 'KeyT', defaultText: 't', shiftText: 'T', ruText: 'е', ruShiftText: 'Е' },
    { code: 'KeyY', defaultText: 'y', shiftText: 'Y', ruText: 'н', ruShiftText: 'Н' },
    { code: 'KeyU', defaultText: 'u', shiftText: 'U', ruText: 'г', ruShiftText: 'Г' },
    { code: 'KeyI', defaultText: 'i', shiftText: 'I', ruText: 'ш', ruShiftText: 'Ш' },
    { code: 'KeyO', defaultText: 'o', shiftText: 'O', ruText: 'щ', ruShiftText: 'Щ' },
    { code: 'KeyP', defaultText: 'p', shiftText: 'P', ruText: 'з', ruShiftText: 'З' },
    { code: 'BracketLeft', defaultText: '[', shiftText: '{', ruText: 'х', ruShiftText: 'Х' },
    { code: 'BracketRight', defaultText: ']', shiftText: '}', ruText: 'ъ', ruShiftText: 'Ъ' },
    { code: 'Backslash', defaultText: '\\', shiftText: '|', ruText: 'ё', ruShiftText: 'Ё' },
  ],
  [
    { code: 'CapsLock', defaultText: 'caps lock', isWide: true, isNotInput: true },
    { code: 'KeyA', defaultText: 'a', shiftText: 'A', ruText: 'ф', ruShiftText: 'Ф' },
    { code: 'KeyS', defaultText: 's', shiftText: 'S', ruText: 'ы', ruShiftText: 'Ы' },
    { code: 'KeyD', defaultText: 'd', shiftText: 'D', ruText: 'в', ruShiftText: 'В' },
    { code: 'KeyF', defaultText: 'f', shiftText: 'F', ruText: 'а', ruShiftText: 'А' },
    { code: 'KeyG', defaultText: 'g', shiftText: 'G', ruText: 'п', ruShiftText: 'П' },
    { code: 'KeyH', defaultText: 'h', shiftText: 'H', ruText: 'р', ruShiftText: 'Р' },
    { code: 'KeyJ', defaultText: 'j', shiftText: 'J', ruText: 'о', ruShiftText: 'О' },
    { code: 'KeyK', defaultText: 'k', shiftText: 'K', ruText: 'л', ruShiftText: 'Л' },
    { code: 'KeyL', defaultText: 'l', shiftText: 'L', ruText: 'д', ruShiftText: 'Д' },
    { code: 'Semicolon', defaultText: ';', shiftText: ':', ruText: 'ж', ruShiftText: 'Ж' },
    { code: 'Quote', defaultText: '\'', shiftText: '"', ruText: 'э', ruShiftText: 'Э' },
    { code: 'Enter', defaultText: 'return', isWide: true, isNotInput: true },
  ],
  [
    { code: 'ShiftLeft', defaultText: 'shift', isWide: true, isNotInput: true },
    { code: 'KeyZ', defaultText: 'z', shiftText: 'Z', ruText: 'я', ruShiftText: 'Я' },
    { code: 'KeyX', defaultText: 'x', shiftText: 'X', ruText: 'ч', ruShiftText: 'Ч' },
    { code: 'KeyC', defaultText: 'c', shiftText: 'C', ruText: 'с', ruShiftText: 'С' },
    { code: 'KeyV', defaultText: 'v', shiftText: 'V', ruText: 'м', ruShiftText: 'М' },
    { code: 'KeyB', defaultText: 'b', shiftText: 'B', ruText: 'и', ruShiftText: 'И' },
    { code: 'KeyN', defaultText: 'n', shiftText: 'N', ruText: 'т', ruShiftText: 'Т' },
    { code: 'KeyM', defaultText: 'm', shiftText: 'M', ruText: 'ь', ruShiftText: 'Ь' },
    { code: 'Comma', defaultText: ',', shiftText: '<', ruText: 'б', ruShiftText: 'Б' },
    { code: 'Period', defaultText: '.', shiftText: '>', ruText: 'ю', ruShiftText: 'Ю' },
    { code: 'Slash', defaultText: '/', shiftText: '?', ruText: '/', ruShiftText: '?' },
    { code: 'ArrowUp', defaultText: '▲', isNotInput: true },
    { code: 'ShiftRight', defaultText: 'shift', isNotInput: true },
  ],
  [{ code: 'fn', defaultText: 'fn', isNotInput: true },
    { code: 'ControlLeft', defaultText: 'control', isNotInput: true },
    { code: 'AltLeft', defaultText: 'option', isNotInput: true },
    { code: 'MetaLeft', defaultText: 'cmd', isNotInput: true },
    { code: 'Space', defaultText: ' ', shiftText: ' ', ruText: ' ', ruShiftText: ' ', isWide: true },
    { code: 'MetaRight', defaultText: 'cmd', isNotInput: true },
    { code: 'AltRight', defaultText: 'option', isNotInput: true },
    { code: 'ArrowLeft', defaultText: '◄', isNotInput: true },
    { code: 'ArrowDown', defaultText: '▼', isNotInput: true },
    { code: 'ArrowRight', defaultText: '►', isNotInput: true },
  ],
];

// rendering page
const body = document.getElementsByTagName('body')[0];
let currentLanguage = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
let cpasLockPressed = false;
let shiftPressed = false;

function renderPage() {
  function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  function renderKeys() {
    Array.from(document.querySelectorAll('.button'))
      .map((el) => {
        const currentKey = ALL_KEYS.flat().find((item) => item.code === el.getAttribute('data-code'));
        const newSymbol = cpasLockPressed || shiftPressed
          ? currentLanguage === 'en'
            ? currentKey?.shiftText || currentKey.defaultText
            : currentKey?.ruShiftText || currentKey.defaultText
          : currentLanguage === 'en'
            ? currentKey.defaultText
            : currentKey?.ruText || currentKey.defaultText;

        // eslint-disable-next-line no-param-reassign
        el.innerHTML = newSymbol;
        return null;
      });
  }

  const container = createElement('div', 'container');
  body.append(container);
  const title = createElement('h1', 'title');
  title.innerHTML = 'RSS Виртуальная клавиатура';
  container.append(title);
  const textarea = createElement('textarea', 'textarea');
  container.append(textarea);
  const keyboardContainer = createElement('div', 'keyboard-container');
  container.append(keyboardContainer);
  for (let i = 0; i < ALL_KEYS.length; i += 1) {
    const row = ALL_KEYS[i];
    const rowElement = createElement('div', 'row');
    for (let index = 0; index < row.length; index += 1) {
      const key = row[index];
      const keyElement = createElement('div', 'button');
      keyElement.append(createElement('span').innerHTML = currentLanguage === 'en' ? key.defaultText : key?.ruText || key.defaultText);
      if (key.isWide) {
        keyElement.classList.add('button_wide');
      }
      keyElement.setAttribute('data-code', key.code);
      // eslint-disable-next-line no-loop-func
      keyElement.addEventListener('mousedown', (e) => {
        keyElement.classList.add('button_active');
        e.preventDefault();
        textarea.focus();
        const startPos = textarea.selectionStart;
        const endPos = textarea.selectionEnd;
        if (key.code === 'Backspace' && textarea.value.length) {
          textarea.value = textarea.value.substring(0, textarea.value.length - 1);
        }

        if (key.code === 'ArrowLeft') {
          textarea.selectionStart -= 1;
          textarea.selectionEnd -= 1;
        }

        if (key.code === 'ArrowRight') {
          textarea.selectionEnd += 1;
          textarea.selectionStart += 1;
        }

        if (key.code === 'ArrowDown') {
          const currentLineBeginsAt = textarea.value.slice(0, textarea.selectionEnd).split('').findLastIndex((el) => el === '\n') + 1;
          const positionInCurrentLine = textarea.selectionEnd - currentLineBeginsAt;
          const allNextText = textarea.value.slice(textarea.selectionEnd, textarea.value.length);
          if (allNextText.includes('\n')) {
            const newSubString = allNextText.split('\n')[1];
            if (newSubString.length >= positionInCurrentLine) {
              textarea.selectionEnd = textarea.selectionEnd + allNextText.split('\n')[0].length + positionInCurrentLine + 1;
              textarea.selectionStart = textarea.selectionStart + allNextText.split('\n')[0].length + positionInCurrentLine + 1;
            } else {
              textarea.selectionEnd += allNextText.length;
              textarea.selectionStart += allNextText.length;
            }
          } else {
            textarea.selectionEnd = textarea.value.length;
            textarea.selectionStart = textarea.value.length;
          }
        }

        if (key.code === 'ArrowUp') {
          const currentLineBeginsAt = textarea.value.slice(0, textarea.selectionEnd).split('').findLastIndex((el) => el === '\n') + 1;
          const positionInCurrentLine = textarea.selectionEnd - currentLineBeginsAt;
          const allPreviusText = textarea.value.slice(0, textarea.selectionEnd);
          if (allPreviusText.includes('\n')) {
            const newSubString = allPreviusText.split('\n')[allPreviusText.split('\n').length - 2];
            if (newSubString.length >= positionInCurrentLine) {
              textarea.selectionStart -= allPreviusText.split('\n')[[allPreviusText.split('\n').length - 2]].length + 1;
              textarea.selectionEnd -= allPreviusText.split('\n')[[allPreviusText.split('\n').length - 2]].length + 1;
            } else {
              textarea.selectionStart = allPreviusText.length - positionInCurrentLine - 1;
              textarea.selectionEnd = allPreviusText.length - positionInCurrentLine - 1;
            }
          } else {
            textarea.selectionStart = textarea.startPos;
            textarea.selectionEnd = textarea.startPos;
          }
        }

        if (key.code === 'CapsLock') {
          cpasLockPressed = !cpasLockPressed;
          renderKeys();
        }
        if (key.code === 'ShiftLeft' || key.code === 'ShiftRight') {
          shiftPressed = !shiftPressed;
          renderKeys();
        }

        if (shiftPressed && key.code === 'ControlLeft') {
          currentLanguage = currentLanguage === 'en' ? 'ru' : 'en';
          localStorage.setItem('language', currentLanguage);
          renderKeys();
        }

        const charObj = {
          default: {
            en: key.defaultText,
            ru: key.ruText,
          },
          shift: {
            en: key.shiftText,
            ru: key.ruShiftText,
          },
        };

        const charToAdd = cpasLockPressed || shiftPressed
          ? charObj.shift[currentLanguage]
          : charObj.default[currentLanguage];

        textarea.value = textarea.value.substring(0, startPos)
          + (key.isNotInput ? '' : charToAdd)
          + (key.defaultText === 'return' ? '\n' : '')
          + (key.defaultText === 'tab' ? '\u0009' : '')
          + textarea.value.substring(endPos, textarea.value.length);
      });

      // eslint-disable-next-line no-loop-func
      keyElement.addEventListener('mouseup', () => {
        if (key.code === 'CapsLock' && cpasLockPressed) {
          return;
        }
        if ((key.code === 'ShiftLeft' || key.code === 'ShiftRight') && shiftPressed) {
          renderKeys();
          return;
        }
        if (shiftPressed) {
          shiftPressed = false;
          renderKeys();
          Array.from(document.querySelectorAll('.button')).find((b) => b.attributes['data-code'].value === 'ShiftLeft').classList.remove('button_active');
          Array.from(document.querySelectorAll('.button')).find((b) => b.attributes['data-code'].value === 'ShiftRight').classList.remove('button_active');
        }
        keyElement.classList.remove('button_active');
      });
      rowElement.append(keyElement);
    }
    keyboardContainer.append(rowElement);
  }
  const descriptionOne = createElement('p', 'description');
  descriptionOne.innerHTML = 'Клавиатура создана в операционной системе iOS';
  container.append(descriptionOne);
  const descriptionTwo = createElement('p', 'description');
  descriptionTwo.innerHTML = 'Комбинация для переключения языка на виртуальной клавиатуре: левыe  shift + ctrl';
  container.append(descriptionTwo);

  const buttons = Array.from(document.querySelectorAll('.button'));

  function handleKayDown(e) {
    if (e.code === 'Tab') {
      e.preventDefault();
    }
    textarea.focus();
    return buttons.find((b) => b.attributes['data-code'].value === e.code).classList.add('button_active');
  }
  function handleKeyUp(e) {
    return buttons.find((b) => b.attributes['data-code'].value === e.code).classList.remove('button_active');
  }
  document.addEventListener('keydown', handleKayDown);
  document.addEventListener('keyup', handleKeyUp);
}

renderPage();
