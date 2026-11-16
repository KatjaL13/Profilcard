import type { MouseEventHandler } from "react";

type SubmitButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

function SubmitButton({ onClick }: SubmitButtonProps) {
  return (
    <button type="submit" className="submit-button" onClick={onClick}>
      Submit
    </button>
  );
}

export default SubmitButton;
