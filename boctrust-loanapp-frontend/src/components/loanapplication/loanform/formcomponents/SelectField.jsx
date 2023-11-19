import PropTypes from "prop-types";
import { useField } from "formik";

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} className="SelectInput"/>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.string,
};

export default SelectField;
