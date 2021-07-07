import { googleAuthSettings } from './googleAuthSettings';

test('should pass', () => {

  expect(googleAuthSettings).toEqual({
    client_id: '992811194894-n4ma42ai3lv19pi4610j2msb2oi039ic.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:3000/google-oauth',
    response_type: 'token',
    scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly',
    include_granted_scopes: 'true'
  });
});