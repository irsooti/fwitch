const twitch = {
  twitchAccessTokenKey: 'twitch_access_token',
  authenticationUrlRedirect: `https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_TWITCH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_TWITCH_REDIRECT_URI}&response_type=token&scope=bits:read user:read:email`,
};

export default twitch;
