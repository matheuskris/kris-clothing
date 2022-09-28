import { InputHTMLAttributes } from "react";
import { FormInputLabel, Input, Group } from "./form-input.styles";

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const FormInput = ({ label, ...otherProps }: inputProps) => {
  let isValue = false;
  if (otherProps.value) {
    isValue = otherProps.value !== null;
  }
  return (
    <Group>
      <Input className="form-input" {...otherProps} />
      {label && <FormInputLabel shrink={isValue}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
