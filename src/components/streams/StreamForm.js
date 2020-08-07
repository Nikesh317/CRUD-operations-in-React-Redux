import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamFrom extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error messgae">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    //only ran if the user did not enter a title
    errors.title = "you must enter a valid title";
  }
  if (!formValues.description) {
    errors.description = "you must enter a valid description";
  }
  return errors;
};

export default reduxForm({
  form: "streamFrom",
  validate,
})(StreamFrom);
