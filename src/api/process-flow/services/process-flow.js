'use strict';

/**
 * process-flow service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::process-flow.process-flow');
