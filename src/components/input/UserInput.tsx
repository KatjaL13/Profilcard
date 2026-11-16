import type { ChangeEventHandler } from "react";
import type { ValidationError } from "../../types/ValidationError";

type UserInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error: ValidationError;
};

function UserInput({ value, onChange, error }: UserInputProps) {
  function displayError() {
    if (error.isError) {
      return <p className="error-message">{error.errorMessage}</p>;
    }
  }
  return (
    <>
      <input type="text" className="input-text" value={value} onChange={onChange} /> {displayError()}
    </>
  );
}

export default UserInput;
