/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51PgNXwAeHtnYsanUwjdMCntc74AXIlHp5rogGzW0GERB4jrOWiplF512GYKM6J8oGxQ9BcxTAU8lwEhqqzmKbqDY00WdnwtrvC');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
