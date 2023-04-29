const ALL_KEYS = [
  [
    { code: 'Backquote', defaultText: '`' },
    { code: 'Digit1', defaultText: '1' },
    { code: 'Digit2', defaultText: '2' },
    { code: 'Digit3', defaultText: '3' },
    { code: 'Digit4', defaultText: '4' },
    { code: 'Digit5', defaultText: '5' },
    { code: 'Digit6', defaultText: '6' },
    { code: 'Digit7', defaultText: '7' },
    { code: 'Digit8', defaultText: '8' },
    { code: 'Digit9', defaultText: '9' },
    { code: 'Digit0', defaultText: '0' },
    { code: 'Minus', defaultText: '-' },
    { code: 'Equal', defaultText: '=' },
    { code: 'Backspace', defaultText: 'del', isWide: true },
  ],
  [
    { code: 'Tab', defaultText: 'tab', isWide: true },
    { code: 'KeyQ', defaultText: 'Q' },
    { code: 'KeyW', defaultText: 'W' },
    { code: 'KeyE', defaultText: 'E' },
    { code: 'KeyR', defaultText: 'R' },
    { code: 'KeyT', defaultText: 'T' },
    { code: 'KeyY', defaultText: 'Y' },
    { code: 'KeyU', defaultText: 'U' },
    { code: 'KeyI', defaultText: 'I' },
    { code: 'KeyO', defaultText: 'O' },
    { code: 'KeyP', defaultText: 'P' },
    { code: 'BracketLeft', defaultText: '[' },
    { code: 'BracketRight', defaultText: ']' },
    { code: 'Backslash', defaultText: '\\' },
  ],
  [
    { code: 'CapsLock', defaultText: 'caps lock', isWide: true },
    { code: 'KeyA', defaultText: 'A' },
    { code: 'KeyS', defaultText: 'S' },
    { code: 'KeyD', defaultText: 'D' },
    { code: 'KeyF', defaultText: 'F' },
    { code: 'KeyG', defaultText: 'G' },
    { code: 'KeyH', defaultText: 'H' },
    { code: 'KeyJ', defaultText: 'J' },
    { code: 'KeyK', defaultText: 'K' },
    { code: 'KeyL', defaultText: 'L' },
    { code: 'Semicolon', defaultText: ';' },
    { code: 'Quote', defaultText: '\'' },
    { code: 'Enter', defaultText: 'return', isWide: true },
  ],
  [
    { code: 'ShiftLeft', defaultText: 'shift', isWide: true },
    { code: 'KeyZ', defaultText: 'Z' },
    { code: 'KeyX', defaultText: 'X' },
    { code: 'KeyC', defaultText: 'C' },
    { code: 'KeyV', defaultText: 'V' },
    { code: 'KeyB', defaultText: 'B' },
    { code: 'KeyN', defaultText: 'N' },
    { code: 'KeyM', defaultText: 'M' },
    { code: 'Comma', defaultText: ',' },
    { code: 'Period', defaultText: '.' },
    { code: 'Slash', defaultText: '/' },
    { code: 'ArrowUp', defaultText: '▲' },
    { code: 'ShiftRight', defaultText: 'shift' },
  ],
  [
    { code: 'ControlLeft', defaultText: 'control' },
    { code: 'AltLeft', defaultText: 'option' },
    { code: 'MetaLeft', defaultText: 'cmd' },
    { code: 'Space', defaultText: ' ', isWide: true },
    { code: 'MetaRight', defaultText: 'cmd' },
    { code: 'AltRight', defaultText: 'option' },
    { code: 'ArrowLeft', defaultText: '◄' },
    { code: 'ArrowDown', defaultText: '▼' },
    { code: 'ArrowRight', defaultText: '►' },
  ],
];

// rendering page
const body = document.getElementsByTagName('body')[0];

function renderPage() {
  function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
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
      keyElement.append(createElement('span').innerHTML = key.defaultText);
      if (key.isWide) {
        keyElement.classList.add('button_wide');
      }
      keyElement.setAttribute('data-code', key.code);
      rowElement.append(keyElement);
    }
    keyboardContainer.append(rowElement);
  }
  const descriptionOne = createElement('p', 'description');
  descriptionOne.innerHTML = 'Клавиатура создана в операционной системе iOS';
  container.append(descriptionOne);
  const descriptionTwo = createElement('p', 'description');
  descriptionTwo.innerHTML = 'Для переключения языка комбинация: левыe ctrl + shift';
  container.append(descriptionTwo);

  const buttons = Array.from(document.querySelectorAll('.button'));

  function handleKayDown(e) {
    return buttons.find((b) => b.attributes['data-code'].value === e.code).classList.add('button_active');
  }
  function handleKeyUp(e) {
    return buttons.find((b) => b.attributes['data-code'].value === e.code).classList.remove('button_active');
  }
  document.addEventListener('keydown', handleKayDown);
  document.addEventListener('keyup', handleKeyUp);
}

renderPage();
