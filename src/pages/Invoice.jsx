import CheckoutStepper from "../components/CheckoutStepper";

import "./InvoicePage.scss";

export default function InvoicePage() {
  return (
    <main>
      <CheckoutStepper currentStep="invoice" />
    </main>
  );
}
