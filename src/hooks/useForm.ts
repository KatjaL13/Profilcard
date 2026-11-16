import { type ChangeEvent, useState } from "react";
import type { ValidationError } from "../types/ValidationError";

export function useForm(value: string, required: boolean = false) {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState<ValidationError>({ isError: false, errorMessage: "" });

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    validateInput(inputValue);
  }

  function validateInput(inputValue: string): boolean {
    if (required && inputValue.trim() === "") {
      setError({
        isError: true,
        errorMessage: "Bitte geben Sie einen Wert ein.",
      });
      return false;
    }

    setError({ isError: false, errorMessage: "" });
    return true;
  }

  return {
    value: inputValue,
    handleInputChange,
    error,
    validateInput,
  };
}
