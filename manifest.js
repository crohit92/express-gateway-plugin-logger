module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.registerPolicy(require('./policies/logger-policy'));

  },
  policies: ['logger'] // this is for CLI to automatically add to "policies" whitelist in gateway.config
};
