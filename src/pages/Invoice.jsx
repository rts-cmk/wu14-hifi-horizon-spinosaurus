import CheckoutStepper from "../components/CheckoutStepper";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./invoicepage.scss";

export default function InvoicePage() {
    return (
        <>
            <Header />
            <main>
                <CheckoutStepper currentStep="invoice" />
            </main>
            <Footer />
        </>
    )
}