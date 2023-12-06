import { Stripe } from 'stripe';

let stripe;

export function getStripe() {
  if (!stripe) {
    stripe = new Stripe(process.env.STRIPE_SECRECT_KEY, {
      apiVersion: '2020-08-27',
    });
  }

  return stripe;
}
