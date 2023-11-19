import PropTypes from "prop-types";

const ConfirmField = ({
  labelName,
  placeholderText,
  fieldName,
  type,
  values,
  func,
}) => {
  const value = values[fieldName];

  return (
    <div>
      <label htmlFor={fieldName}>{labelName}</label>
      <input
        type={type}
        name={fieldName}
        value={value}
        placeholder={placeholderText}
        onChange={(e) => func(fieldName, e)}
        className="TextInput"
      />
    </div>
  );
};

ConfirmField.propTypes = {
  fieldName: PropTypes.string,
  func: PropTypes.func,
  labelName: PropTypes.string,
  placeholderText: PropTypes.string,
  type: PropTypes.any,
  values: PropTypes.shape({
    fieldName: PropTypes.any,
  }),
};

export default ConfirmField;
