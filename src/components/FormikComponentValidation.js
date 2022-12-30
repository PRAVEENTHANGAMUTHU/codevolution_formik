import "./FormikValidation.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("*Required")
    .min(3, "Must be 3 Characters and Above")
    .max(10, "Must be 10 Characters and Below"),
  email: Yup.string().email("Invalid Email").required("*Required"),
  channel: Yup.string().required("*Required"),
});

const onSubmit = (values) => {
  console.log(values);
};

export default function FormikComponentValidation() {
  return (
    <div className="youtube-form">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form">
        <h3 className="title">Simplified Formik Validation</h3>
        <div className="form-control">
          <label htmlFor="">Name</label>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Enter your Name"
          />
          <ErrorMessage name="name" />
        </div>

        <div className="form-control">
          <label htmlFor="email">E.Mail</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
          />
          <ErrorMessage name="email" />
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field
            type="text"
            id="channel"
            name="channel"
            placeholder="Enter your Channel Name"
          />
          <ErrorMessage name="channel" />
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
    </div>
  );
}
