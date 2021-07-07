const googleAuthSettings = {
  client_id: '992811194894-n4ma42ai3lv19pi4610j2msb2oi039ic.apps.googleusercontent.com',
  include_granted_scopes: 'true',
  redirect_uri: `${process.env.REACT_APP_BASE_URL}/google-oauth`,
  response_type: 'token',
  scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events.readonly'
};

export { googleAuthSettings };