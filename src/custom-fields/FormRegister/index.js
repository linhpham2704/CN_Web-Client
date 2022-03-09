import InputField from "custom-fields/InputField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

FormRegister.propTypes = {
  onSubmit: PropTypes.func,
};

FormRegister.defaultProps = {
  onSubmit: null,
};

function FormRegister(props) {
  const { initialValues } = props;

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required"),
    userName: Yup.string().required("This field is required"),
    passWord: Yup.string().required("This field is required"),
    againPassWord: Yup.string().required("This field is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        // do something here...
        const { isSubmitting } = formikProps;

        return (
          <Form>
            <FastField
              name="email"
              component={InputField}
              label="Email"
              placeholder="Nhập email ... "
            />

            <FastField
              name="userName"
              component={InputField}
              label="User Name"
              placeholder="Nhập user name ... "
            />

            <FastField
              name="passWord"
              component={InputField}
              label="Pass Word"
              placeholder="Nhập mật khẩu ... "
            />

            <FastField
              name="againPassWord"
              component={InputField}
              label="Again Pass Word"
              placeholder="Nhập lại mật khẩu ... "
            />

            <FormGroup>
              <Button type="submit" color="primary">
                <div>
                  <p>Đăng ký</p>
                </div>
                {isSubmitting && <Spinner />}
              </Button>
              <p style={{ marginTop: "20px", marginBottom: "0px" , "fontSize":"14px" , "fontWeight":"500" }}>
                Bạn là thành viên của Cocoder?
                <Link to="/user" style={{ textDecoration: "none" , "marginLeft":"3px" }}>
                  Đăng nhập
                </Link>
              </p>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormRegister;
