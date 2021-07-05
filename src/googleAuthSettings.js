const googleAuthSettings = {
  clientId: '992811194894-n4ma42ai3lv19pi4610j2msb2oi039ic.apps.googleusercontent.com',
  includeGrantedScopes: 'true',
  redirectUri: `${process.env.REACT_APP_BASE_URL}/google-oauth`,
  responseType: 'token',
  scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly'
};

export { googleAuthSettings };