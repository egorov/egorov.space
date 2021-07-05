import { googleAuthSettings } from './googleAuthSettings';

test('should pass', () => {

  expect(googleAuthSettings).toEqual({
    clientId: '992811194894-n4ma42ai3lv19pi4610j2msb2oi039ic.apps.googleusercontent.com',
    redirectUri: 'http://localhost:3000/google-oauth',
    responseType: 'token',
    scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly',
    includeGrantedScopes: 'true',
  });
});