'use strict';

/**
 * process-flow router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::process-flow.process-flow');
