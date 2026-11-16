import type { ChangeEventHandler } from "react";
import type { ValidationError } from "../../types/ValidationError";

type DateInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function DateInput({ value, onChange, error }: DateInputProps) {
  return (
    <>
      <input type="date" className="input-text" value={value} onChange={onChange} />
      {error.isError && <span className="error-message">{error.errorMessage}</span>}
    </>
  );
}

export default DateInput;
