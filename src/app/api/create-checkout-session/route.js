import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
  try {
    const origin = req.headers.get("origin");
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Pro Plan' },
            unit_amount: 1000, // $10 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });
    return new Response(JSON.stringify({ id: session.id }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ statusCode: 500, message: err.message }),
      { status: 500 }
    );
  }
}