function getRandomInt(min: number, max: number, numbersToExclude: number[]): any {

  min = Math.ceil(min);
  max = Math.ceil(max);

  const random = Math.floor(Math.random() * (max - min) + min);

  return numbersToExclude.includes(random) ? getRandomInt(min, max, numbersToExclude) : random;
}

function megaSena(qt: number, numbers: number[] = []): number[] {

  numbers.push(getRandomInt(1, 61, numbers))

  return qt - 1 > 0 ? megaSena(qt - 1, numbers) : numbers
}

console.log(megaSena(6));
