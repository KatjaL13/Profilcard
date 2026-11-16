import type { ChangeEventHandler } from "react";
import type { ValidationError } from "../../types/ValidationError";

type SelectInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  error: ValidationError;
};

function SelectInput({ value, onChange, options, error }: SelectInputProps) {
  return (
    <>
      <select className="input-text" value={value} onChange={onChange}>
        <option value="" disabled>
          Bitte auswählen
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error.isError && <span>{error.errorMessage}</span>}
    </>
  );
}

export default SelectInput;
