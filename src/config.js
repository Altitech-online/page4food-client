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
    APP_CLIENT_ID: "27hqcu52kr7reu56a6an0qlsc7",
    IDENTITY_POOL_ID: "eu-west-2:74d6d6d0-e66d-4795-9654-c7c0f7e24211",
  },
};

export default config;
