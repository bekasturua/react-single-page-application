import React from "react";
import { useFormik } from "formik";
import Page from "./pages";
import apiRequest from "../apiRequest";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const validate = (values, props) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else if (values.firstName.length < 2) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else if (values.lastName.length < 2) {
    errors.lastName = "Last name is required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Signup = () => {
  const { t, i18n } = useTranslation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      //   apiRequest("POST", "signup", values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Page>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="firstName">{t("firstName")}</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName && (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName">{t("lastName")}</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          {formik.errors.lastName && (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">{t("mail")}</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>
        <button type="submit">{t("submit")}</button>
      </form>
    </Page>
  );
};

export default Signup;
