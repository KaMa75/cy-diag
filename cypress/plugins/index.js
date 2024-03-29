/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
//module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
//}

const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

// const { initPlugin } = require('cypress-plugin-snapshots/plugin');
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
    // initPlugin(on, config);
    addMatchImageSnapshotPlugin(on, config);
    allureWriter(on, config);
    // return config;

    const file = config.env.configFile || 'dev';
    return getConfigurationByFile(file);
};
