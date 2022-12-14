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

/**
 * Função type predicate, verifica se o value é uma string e retorna um boolean
 * @param value string
 * @returns boolean
 */
function isString(value: unknown): value is string {
  if (typeof value === 'string') {
    return true;
  }

  return false;
}

function handleData(data: unknown) {
  if (isString(data)) {
    console.log(data.toUpperCase());

  }
}

handleData("teste")