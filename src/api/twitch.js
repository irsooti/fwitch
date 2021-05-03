import twitch from '../consts/twitch';

const baseUrl = 'https://api.twitch.tv';

const getRequiredHeaders = () => ({
  'client-id': process.env.REACT_APP_TWITCH_CLIENT_ID,
  Authorization: `Bearer ${localStorage.getItem(twitch.twitchAccessTokenKey)}`,
});

export const searchCategories = ({ query = '' }) => {
  return fetch(
    `${baseUrl}/helix/search/categories?${new URLSearchParams({
      query,
    })}`,
    {
      headers: {
        ...getRequiredHeaders(),
      },
      method: 'get',
    }
  ).then((t) => t.json());
};

export const getUsers = (id) => {
  return fetch(
    `${baseUrl}/helix/users${
      id
        ? new URLSearchParams({
            id,
          })
        : ''
    }`,
    {
      headers: {
        'client-id': process.env.REACT_APP_TWITCH_CLIENT_ID,
        Authorization: `Bearer ${localStorage.getItem(
          twitch.twitchAccessTokenKey
        )}`,
      },
      method: 'get',
    }
  ).then((t) => t.json());
};

export const getTopGames = ({
  after = '',
  before = '',
  first = 20,
  width = '188',
  height = '250',
}) => {
  return fetch(
    `${baseUrl}/helix/games/top?${new URLSearchParams({
      after,
      before,
      first,
    })}`,
    {
      headers: { ...getRequiredHeaders() },
      method: 'get',
    }
  )
    .then((t) => t.json())
    .then((r) => {
      return {
        ...r,
        data: r.data.map((m) => ({
          ...m,
          box_art_url: m.box_art_url
            .replace('{width}', width)
            .replace('{height}', height),
        })),
      };
    });
};

export const getGames = ({ id = '', name = '' }) => {
  return fetch(
    `${baseUrl}/helix/games?${new URLSearchParams({
      id,
      name,
    })}`,
    {
      headers: { ...getRequiredHeaders() },
      method: 'get',
    }
  ).then((t) => t.json());
};
