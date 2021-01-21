const config = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "paeg4food",
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://dojc1e3e5c.execute-api.eu-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_485qBVdko",
    APP_CLIENT_ID: "pvib4g9beh08utp34ba4cr33k",
    IDENTITY_POOL_ID: "eu-west-2:b430aebf-1947-4933-b322-2ec8402922fb",
  },
};

export default config;
