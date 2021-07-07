import { makeRandomDigitsString } from './makeRandomDigitsString';

it('should pass', () => {

  const value = makeRandomDigitsString();

  expect(typeof value).toEqual('string');
  expect(value.length).toBeGreaterThan(50);
});