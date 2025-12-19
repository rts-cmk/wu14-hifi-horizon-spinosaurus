import CheckoutStepper from "../components/CheckoutStepper";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "./PaymentPage.scss";

export default function PaymentPage() {
    return (
        <>
            <Header />
            <main>
                <CheckoutStepper currentStep="payment" />
            </main>
            <Footer />
        </>
    )
}