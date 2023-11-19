import PropTypes from "prop-types";
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="TextInput"
        {...field}
        {...props}
        value={field.value || ""}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
      {meta.touched && meta.error ? (
        <div className="Error">{meta.error}</div>
      ) : null}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.any,
  id: PropTypes.any,
  name: PropTypes.string,
};

export default TextInput;
