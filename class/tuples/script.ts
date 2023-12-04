const produto1 = ['Notebook', 2000];
const produto2: [string, number] = ['Notebook', 2000];

if (typeof produto1[0] === 'string') {
  console.log(produto1[0].toLowerCase());
}

console.log(produto2[0].toLowerCase());

function getText(selector: string) {
  const element = document.querySelector<HTMLElement>(selector);

  if (element) {
    return [element, element.innerHTML] as const;
  }

  return null;
}

const button = getText('button');
