import { useEffect, useState } from 'react';
import twitch from '../consts/twitch';

/**
 * @returns {boolean}
 */
const useTwitchAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const accessToken = new URLSearchParams(
        document.location.hash.replace('#', '?')
      ).get('access_token');

      if (accessToken) {
        localStorage.setItem(twitch.twitchAccessTokenKey, accessToken);
      }
    }

    if (localStorage.getItem(twitch.twitchAccessTokenKey)) {
      if (!isAuthenticated) {
        setIsAuthenticated(true);
      }
    } else window.location.href = twitch.authenticationUrlRedirect;
  }, [isAuthenticated]);

  return isAuthenticated;
};

export default useTwitchAuthentication;
