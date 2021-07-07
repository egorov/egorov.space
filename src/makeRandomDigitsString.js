function makeRandomDigitsString() {

  const parts = [];

  while(parts.length < 5) {
    parts.push(Math.random().toString().slice(2));
  }

  return parts.join('');
}

export { makeRandomDigitsString };