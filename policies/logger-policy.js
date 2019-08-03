
module.exports = {
  name: 'logger',
  schema: {
    $id: '9208b270-4946-484c-b6ef-fdd928c6da77',
    properties: {
      requestTemplate: {
        type: 'string',
      },
      responseTemplate: {
        type: 'string'
      },
      identity: {
        type: 'object',
        properties: {
          source: { type: 'string', enum: ['headers', 'query'] },
          identityTemplate: { type: 'string' }
        }
      }
    },
    required: ['requestTemplate', 'responseTemplate', 'identity']
  },
  policy: (actionParams) => {
    return (req, res, next) => {
      console.log()
      // eslint-disable-next-line no-console
      // 'a.b.etc'.split('.').reduce((o,i)=>o[i], obj)
      if (actionParams.identity.source === 'headers') {

      }
      next();
    };
  }
};
