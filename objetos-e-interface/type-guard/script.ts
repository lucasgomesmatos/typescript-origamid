async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

function handleCursos(data: unknown) {
  if (data instanceof Array) {
    console.log('É instância de Array');
  }
  if (Array.isArray(data)) {
    console.log('É array');
  }
}
console.log();

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function handleData(data: unknown) {
  if (isString(data)) {
    return data.toUpperCase();
  }
}

console.log(handleData('Origamid'));
