import { useState } from "react";
import "./Contact.scss";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Submitted:", form);
    setForm({ name: "", email: "", subject: "", message: "" });
    setErrors({});
  };

  return (
    <div className="contactpage__wrapper">
      <h2 className="page__title">Get in touch with us</h2>
      <div></div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Full name *
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Email *
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label>
          Subject *
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="input"
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </label>

        <label>
          Message *
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="textarea"
          />
          {errors.message && <span className="error">{errors.message}</span>}
        </label>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
      <p className="contact__text">Visit our sister companies <span className="o">Home Sound</span> and <span className="o">The Movie Rooms</span> part of the HiFi Horizon Group. </p>
    </div>
  );
}
