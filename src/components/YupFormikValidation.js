import "./FormikValidation.css";
import { useFormik } from "formik";
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

export default function YupFormikValidation() {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="youtube-form">
      <form action="name" className="form">
        <h3 className="title">Yup Formik Validation</h3>
        <div className="form-control">
          <label htmlFor="">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
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
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
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
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
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
