import CheckoutStepper from "../components/CheckoutStepper";

import "./PaymentPage.scss";

export default function PaymentPage() {
  return (
    <main>
      <CheckoutStepper currentStep="payment" />
    </main>
  );
}
