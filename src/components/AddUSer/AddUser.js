import { React} from "react";
import { Button } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./AddUser.css";
import axiosMain from "./../../http/axios/axios_main";

const AddUser = () => {
  const createUser = async (values) => {
    const config = {
      url: `/users`,
      method: "post",
      data: values,
    };
    axiosMain(config);
  };

  const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return (
    <div className="register">
      <div className="registerbody">
        <Formik
          initialValues={{ name: "", email: "", mobile: "" }}
          validate={(values) => {
            let errors = {};

            if (values.name === "") {
              errors.name = "Name is required";
            }

            if (values.email === "") {
              errors.email = "Email is required";
            } else if (!emailTest.test(values.email)) {
              errors.email = "Invalid email address format";
            }
            if (values.mobile === "") {
              errors.mobile = "email is required";
            } else if (values.mobile.length < 10) {
              errors.mobile = "Enter valid mobile no";
            }
            return errors;
          }}
          onSubmit={(values, onSubmitProps) => {           
            createUser(values);
            alert("user added");          
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
          }}
        >
          {({ values, touched, errors }) => (
            <Form autoComplete="on">
              <div className="input-block">
                <Field
                  type="name"
                  name="name"
                  id="input-text"
                  spellCheck="false"
                  placeholder="Name"
                  className={`form-control ${
                    touched.name && errors.name ? "is-invalid" : ""
                  }`}
                  value={values.name}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <br />
              <div className="input-block">
                <Field
                  type="email"
                  name="email"
                  id="input-text"
                  spellCheck="false"
                  placeholder="Email"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                  value={values.email}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <br />
              <div className="input-block">
                <Field
                  type="mobile"
                  name="mobile"
                  placeholder="Mobile"
                  className={`form-control ${
                    touched.mobile && errors.mobile ? "is-invalid" : ""
                  }`}
                  value={values.mobile}
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <br />
              <div className="form-group textcenter">
                <Button
                  type="submit"
                  value="submit"
                  className="btn btn-primary mr-2 addUserBtn"
                >
                  ADD USER
                </Button>
                <a className="btn btn-primary mr-2 cancelBtn" href="/">
                  CANCEL
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddUser;
