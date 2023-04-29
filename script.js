const ALL_KEYS = [
  [
    { defaultText: '`' },
    { defaultText: '1' },
    { defaultText: '2' },
    { defaultText: '3' },
    { defaultText: '4' },
    { defaultText: '5' },
    { defaultText: '6' },
    { defaultText: '7' },
    { defaultText: '8' },
    { defaultText: '9' },
    { defaultText: '0' },
    { defaultText: '-' },
    { defaultText: '=' },
    { defaultText: 'del', isWide: true },
  ],
  [
    { defaultText: 'tab', isWide: true },
    { defaultText: 'Q' },
    { defaultText: 'W' },
    { defaultText: 'E' },
    { defaultText: 'R' },
    { defaultText: 'T' },
    { defaultText: 'Y' },
    { defaultText: 'U' },
    { defaultText: 'I' },
    { defaultText: 'O' },
    { defaultText: 'P' },
    { defaultText: '[' },
    { defaultText: ']' },
    { defaultText: '\\' },
  ],
  [
    { defaultText: 'caps lock', isWide: true },
    { defaultText: 'A' },
    { defaultText: 'S' },
    { defaultText: 'D' },
    { defaultText: 'F' },
    { defaultText: 'G' },
    { defaultText: 'H' },
    { defaultText: 'J' },
    { defaultText: 'K' },
    { defaultText: 'L' },
    { defaultText: ';' },
    { defaultText: '\'' },
    { defaultText: 'return', isWide: true },
  ],
  [
    { defaultText: 'shift', isWide: true },
    { defaultText: 'Z' },
    { defaultText: 'X' },
    { defaultText: 'C' },
    { defaultText: 'V' },
    { defaultText: 'B' },
    { defaultText: 'N' },
    { defaultText: 'M' },
    { defaultText: ',' },
    { defaultText: '.' },
    { defaultText: '/' },
    { defaultText: '▲' },
    { defaultText: 'shift' },
  ],
  [
    { defaultText: 'fn' },
    { defaultText: 'control' },
    { defaultText: 'option' },
    { defaultText: 'cmd' },
    { defaultText: ' ', isWide: true },
    { defaultText: 'cmd' },
    { defaultText: 'option' },
    { defaultText: '◄' },
    { defaultText: '▼' },
    { defaultText: '►' },
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
}

renderPage();
