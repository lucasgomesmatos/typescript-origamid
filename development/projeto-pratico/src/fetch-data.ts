export async function fetchData<T>(): Promise<T | null> {
  try {
    const response = await fetch(
      'https://api.origamid.dev/json/transacoes.json?',
    );

    if (!response.ok) throw new Error('Erro: ' + response.status);

    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error('fetchData erro: ', error.message);
    }
    return null;
  }
}
