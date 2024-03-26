module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: env("STORAGE_AUTH_TYPE", "default"),
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),
        clientId: env("STORAGE_AZURE_CLIENT_ID"), // optional
        containerName: env("STORAGE_CONTAINER_NAME"),
        createContainerIfNotExist: env("STORAGE_CREATE_CONTAINER_IF_NOT_EXIST", 'false'), // optional
        publicAccessType: env("STORAGE_PUBLIC_ACCESS_TYPE"), // optional ('blob' | 'container')
        defaultPath: "assets",
      },
    },
  },
});
