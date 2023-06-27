'use strict';

const stripe = require("stripe")("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");

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({strapi})=>({
    
  async create(ctx) {

        const {cart} = ctx.request.body;
    
        if(!cart){
            ctx.response.status = 400;
            return {error: "cart not found in request body"};
        }
  
        
        const lineItems = await Promise.all(
          cart.map(async (product) =>{
            const item = await strapi
            .service("api::product.product")
            .findOne(product.id);
            return {
              price : item.strip_product_id,
              quantity: product.amount // Quantity of the product
            };
            
          })
        );

        
        try{

          // console.log(' LINE ITEMS ', lineItems)

          const session = await stripe.checkout.sessions.create({
           
            line_items : lineItems,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}?success=true`,
            cancel_url: `${process.env.CLIENT_URL}?canceled=true`,
            shipping_address_collection: { allowed_countries:["FR"] },
            payment_method_types: ["card"],
          });


          // await strapi.service("api::order.order").create({
          //   data: {                
          //     stripeId: session.id,
          //     },
          // });

          return { stripeSession: session};
    
        }catch(error){

            ctx.response.status = 500;
            console.error(' Server error', error); // logs error server-side
            return { error: error.message }; // sends error message to client
        }
    },
}));
