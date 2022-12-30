
import "./FormikValidation.css";
import { useFormik } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "*Required";
  } else if (values.name.length < 3) {
    errors.name = "Must be 3 Characters and Above";
  } else if (values.name.length > 10) {
    errors.name = "Must be 10 Characters and Below";
  }

  if (!values.email) {
    errors.email = "*Required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = "Invalid Email";
  }

  if (!values.channel) {
    errors.channel = "*Required";
  }

  return errors;
};

export default function SimplifiedFormikValidation() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  console.log(formik.touched);

  return (
    <div className="youtube-form">
      <form onSubmit={formik.handleSubmit} action="name" className="form">
        <h3 className="title">Simplified Formik Validation</h3>
        <div className="form-control">
          <label htmlFor="">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="error">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">E.Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="error">{formik.errors.email}</p>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...formik.getFieldProps("channel")}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <p className="error">{formik.errors.channel}</p>
          ) : null}
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
