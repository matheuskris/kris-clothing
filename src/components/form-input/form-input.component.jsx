import { FormInputLabel, Input, Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  const isValue = otherProps.value.length;
  return (
    <Group>
      <Input className="form-input" {...otherProps} />
      {label && <FormInputLabel shrink={isValue}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
