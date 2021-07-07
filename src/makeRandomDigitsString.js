function makeRandomDigitsString() {

  const parts = [];

  for(let index = 0; index < 5; index += 1) {

    const fraction = Math.random();
    const fractional = fraction.toString().split('.')[1];
    const integer = Number.parseInt(fractional);
    
    parts.push(integer);
  }

  return parts.join('');
}

export { makeRandomDigitsString };