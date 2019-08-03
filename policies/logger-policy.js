
module.exports = {
  name: 'logger',
  schema: {
    $id: '9208b270-4946-484c-b6ef-fdd928c6da77',
    properties: {
      publicKeyFile: {
        type: 'string',
      },
      forwardHeaders: {
        type: 'object'
      }
    },
    required: ['publicKeyFile']
  },
  policy: (actionParams) => {
    return (req, res, next) => {

      // eslint-disable-next-line no-console
      next();
    };
  }
};
