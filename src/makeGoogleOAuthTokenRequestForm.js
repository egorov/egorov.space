import { googleAuthSettings } from './googleAuthSettings';

function makeGoogleOAuthTokenRequestForm(document) {

  const oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
  const form = document.createElement('form');

  form.setAttribute('method', 'GET');
  form.setAttribute('action', oauth2Endpoint);

  for(const property in googleAuthSettings) {

    const input = document.createElement('input');

    input.setAttribute('type', 'hidden');
    input.setAttribute('name', property);
    input.setAttribute('value', googleAuthSettings[property]);
    form.appendChild(input);
  }

  return form;
}

export { makeGoogleOAuthTokenRequestForm };