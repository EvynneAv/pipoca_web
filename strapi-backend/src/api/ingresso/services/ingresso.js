'use strict';

/**
 * ingresso service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ingresso.ingresso');
