"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

// Connected to Web3Forms for background form submission
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "139d62de-1787-4cb8-b948-696be138b9a4";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `2-day free trial request — ${form.name || "New inquiry"}`
        })
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage("Failed to submit form. Please check your internet connection.");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@brokerage.com"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">What do you need help with?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your CRM, workflow, or the task you'd like to trial."
        />
      </div>

      <button type="submit" className={styles.submit} disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {statusMessage && (
        <div className={status === "success" ? styles.successMessage : styles.errorMessage}>
          {statusMessage}
        </div>
      )}
    </form>
  );
}
