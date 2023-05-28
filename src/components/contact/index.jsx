import React, { useState } from "react";
import { Container } from "../container";
import { FormInput } from "../input-form";
import { showErrorMessage } from "../../utils/form-message/index";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: { value: "", toched: false },
    phone: { value: "", toched: false },
    email: { value: "", toched: false },
    subject: { value: "", toched: false },
    message: { value: "", toched: false },
  });

  const isDisabledBtn =
    !Object.values(formData).every((el) => el.value !== "") ||
    !!showErrorMessage(formData);

  return (
    <Container id="contact">
      <h2 className="text-center text-4xl font-semibold ">Contact</h2>
      <p className="text-center font-thin tracking-wider italic mt-2 mb-12">
        Submit the form below or shoot me an email - secretnerowww@gmail.com
      </p>
      <form
        action="https://getform.io/f/90ec3519-9ee1-4564-ac83-6d7a918bb444"
        method="POST"
        encType="multipart/form-data"
        className="w-full  flex flex-col gap-8"
        noValidate
      >
        {showErrorMessage(formData) && (
          <span className="text-red-500 ml-4">
            {showErrorMessage(formData)}
          </span>
        )}
        <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-2">
          <FormInput
            type="text"
            placeholder="name"
            name="name"
            autoComplete="none"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: { value: e.target.value, toched: false },
              }))
            }
            onBlur={() =>
              setFormData((prev) => ({
                ...prev,
                name: { value: prev.name.value, toched: true },
              }))
            }
          />
          <FormInput
            error="Phone number start with 7-9 and remaing 10 digit with 0-9"
            type="tel"
            placeholder="phone"
            name="phone"
            pattern="[7-9]{1}[0-9]{10}"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                phone: { value: e.target.value, toched: false },
              }))
            }
            onBlur={() =>
              setFormData((prev) => ({
                ...prev,
                phone: { value: prev.phone.value, toched: true },
              }))
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-4 md:grid-cols-2">
          <FormInput
            type="email"
            placeholder="email"
            name="email"
            error="Email must includes @"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: { value: e.target.value, toched: false },
              }))
            }
            onBlur={() =>
              setFormData((prev) => ({
                ...prev,
                email: { value: prev.email.value, toched: true },
              }))
            }
          />
          <FormInput
            type="text"
            placeholder="subject"
            name="subject"
            autoComplete="none"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                subject: { value: e.target.value, toched: false },
              }))
            }
            onBlur={() =>
              setFormData((prev) => ({
                ...prev,
                subject: { value: prev.subject.value, toched: true },
              }))
            }
          />
        </div>
        <textarea
          className="w-full outline-none border border-slate-400 rounded px-4 py-1 focus:outline-blue-400 focus:border-none"
          cols="30"
          rows="10"
          name="message"
          placeholder="message"
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              message: { value: e.target.value, toched: false },
            }))
          }
          onBlur={() =>
            setFormData((prev) => ({
              ...prev,
              message: { value: prev.message.value, toched: true },
            }))
          }
        ></textarea>
        <button
          disabled={isDisabledBtn}
          className="rounded bg-blue-950 text-white py-2 px-6 hover:bg-white hover:text-blue-950 hover:border hover:border-blue-950 disabled:opacity-50 disabled:pointer-events-none"
        >
          Send message
        </button>
      </form>
    </Container>
  );
};
