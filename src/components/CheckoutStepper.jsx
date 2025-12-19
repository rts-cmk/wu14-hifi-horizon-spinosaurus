import { FaCreditCard, FaReceipt, FaShoppingCart } from "react-icons/fa";

import "./CheckoutStepper.scss";

export default function CheckoutStepper({ currentStep }) {
  const steps = [
    { id: "cart", img: FaShoppingCart, msg: "cart" },
    { id: "payment", img: FaCreditCard, msg: "payment" },
    { id: "invoice", img: FaReceipt, msg: "invoice" },
  ];

  const currentIndex = steps.findIndex((step) => step.id === currentStep);

  return (
    <ul className="checkoutStepper">
      {steps.map((step, index) => {
        const Icon = step.img;
        const isActive = index === currentIndex;
        return (
          <>
            <li
              className="checkoutStepper__list"
              key={index}
              isActive={isActive}
              style={{
                width: isActive ? "80px" : "70px",
                height: isActive ? "80px" : "70px",
                background: isActive ? "#495464" : "#E8E8E8",
              }}
            >
              <Icon
                className="checkoutStepper__list__icon"
                isActive={isActive}
                fill={isActive ? "#F4F4F2" : "#495464"}
                background={isActive ? "#495464" : "#E8E8E8"}
              />
            </li>

            {index < steps.length - 1 && (
              <div className="checkoutStepper__divider"></div>
            )}
          </>
        );
      })}
    </ul>
  );
}
