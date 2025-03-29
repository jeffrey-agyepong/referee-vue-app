<script setup>
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-stripe-public-key");

const payReferee = async () => {
  const stripe = await stripePromise;
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: "price_id", quantity: 1 }],
    mode: "payment",
    successUrl: "http://localhost:5173/success",
    cancelUrl: "http://localhost:5173/cancel",
  });
  if (error) console.error(error);
};
</script>

<template>
  <button @click="payReferee">Pay Referee</button>
</template>
