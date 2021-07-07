import { googleAuthSettings } from './googleAuthSettings';
import { makeGoogleOAuthTokenRequestForm } from './makeGoogleOAuthTokenRequestForm';

test('should pass', () => {

  const form = makeGoogleOAuthTokenRequestForm(document);

  expect(form.getAttribute('method')).toEqual('GET');
  expect(form.getAttribute('action')).toEqual('https://accounts.google.com/o/oauth2/v2/auth');
  expect(form.elements.length).toEqual(5);

  for(const element of form.elements) {

    expect(element.tagName).toEqual('INPUT');
    expect(element.getAttribute('type')).toEqual('hidden');

    expect(
      Object.keys(googleAuthSettings).indexOf(element.getAttribute('name'))
    )
    .toBeGreaterThan(-1);

    expect(
      element.getAttribute('value')
    )
    .toEqual(googleAuthSettings[element.getAttribute('name')]);
  }
});