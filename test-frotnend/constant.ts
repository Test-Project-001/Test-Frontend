// Constants.js
// import getConfig from 'next/config';
// const { publicRuntimeConfig: configEnv } = getConfig();

const prod = {
  url: {
    API_URL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}`,
    PORT: null,
    GATrackingID: "UA-45800162-15",
    //API_URL_USERS: 'https://myapp.herokuapp.com/users'
  },
};
const dev = {
  url: {
    API_URL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}`,
    PORT: null,
    GATrackingID: "UA-45800162-15",
  },
};
export const config = process.env.NEXT_PUBLIC_NODE_ENV === "development" ? dev : prod;
