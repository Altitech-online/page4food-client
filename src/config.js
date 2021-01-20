const config = {
  s3: {
    REGION: "eu-west-2",
    BUCKET: "paeg4food",
  },
  apiGateway: {
    REGION: "eu-west-2",
    URL: "https://cbyvicsx65.execute-api.eu-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "eu-west-2",
    USER_POOL_ID: "eu-west-2_485qBVdko",
    APP_CLIENT_ID: "pvib4g9beh08utp34ba4cr33k",
    IDENTITY_POOL_ID: "eu-west-2:e1aac099-2844-4fea-a4e2-3311ac51593d",
  },
};

export default config;
