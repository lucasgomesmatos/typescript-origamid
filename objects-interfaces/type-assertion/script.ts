// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

type Course = {
  aulas: string;
  gratuito: boolean;
  horas: number;
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
  nome: string;
  tags: string[];
};

async function getCourse() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCourses(json);
}

getCourse();

function isCourse(value: unknown): value is Course {
  if (
    value &&
    typeof value === 'object' &&
    'nome' in value &&
    'aulas' in value &&
    'idAulas' in value
  ) {
    return true;
  }

  return false;
}

function handleCourses(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCourse).forEach((item) => {
      document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(', ')}</p>
        </div>
      `;
    });
  }
}
