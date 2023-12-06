import { getStripe } from "@/utils/Stripe";
import { NextResponse } from "next/server";

export async function POST(request) {
    const stripe = getStripe();
    const {amount,title } = await request.json();
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: title
                  },
                  unit_amount: amount,
                },
                quantity: 1,
              },
            ],
            mode: 'payment',
            success_url: `${process.env.HOST_APP}/success`,
            cancel_url: `${process.env.HOST_APP}/courses`,
          });
    
          return NextResponse.json({sessionId:session.id})
        
    } catch (error) {

        console.log('error')
        return NextResponse.json({ error: error });
        
    }

}