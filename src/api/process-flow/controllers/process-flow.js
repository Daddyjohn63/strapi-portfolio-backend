'use strict';

/**
 * process-flow controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::process-flow.process-flow');
