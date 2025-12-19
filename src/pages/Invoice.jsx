import CheckoutStepper from "../components/CheckoutStepper";

import "./invoicepage.scss";

export default function InvoicePage() {
  return (
    <main>
      <CheckoutStepper currentStep="invoice" />
    </main>
  );
}
