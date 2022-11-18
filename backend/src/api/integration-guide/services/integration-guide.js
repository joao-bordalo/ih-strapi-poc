'use strict';

/**
 * integration-guide service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::integration-guide.integration-guide');
