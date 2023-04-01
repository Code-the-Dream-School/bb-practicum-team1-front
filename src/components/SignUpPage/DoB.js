import React from "react";
import {createRoot} from 'react-dom'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import {withFormik} from "formik";

const today = new Date();

export const DoB = props => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
    setFieldTouched
  } = props;

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="DateOfBirth">
          <Form.Label>Date of Birth</Form.Label>

          <DatePicker
            selected={values && values.date ? values.date : null}
            onChange={(e) => {
              setFieldValue('date', e);
              setFieldTouched('date')
            }}
            className="form-control"
            minDate={today}
            customInput={
              <input
                type="text"
                id="DateOfBirth"
                placeholder="Date of Birth"
              />
            }
          />
          { touched && touched.date && !!errors.date && errors.date }
        </Form.Group>
        <button type="submit">
            Submit
          </button>
      </Form>
    </div>
  );
};

const ValidatedForm = withFormik({
  mapPropsToValues: () => ({
    date: new Date()
  }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.date) {
      errors.date = "Please select a date";
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "BasicForm"
})(DoB);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<ValidatedForm />);