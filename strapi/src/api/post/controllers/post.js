'use strict';

/**
 *  post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::post.post', ({strapi}) =>({
    async findOne(ctx) {
        const { slug } = ctx.params;

        var entity = await strapi.db.query('api::post.post').findOne({
            where: { slug },
            populate: ['featured_image']
        })

        const sanitizeEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizeEntity);
    }
}));
