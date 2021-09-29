import React, { InputHTMLAttributes } from "react";
import "./styles.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const FormCheckbox = React.forwardRef<HTMLInputElement, Props>(
  ({ className, ...props }: Props, ref) => {
    return (
      <div className={className}>
        <input ref={ref} type="checkbox" {...props} />
      </div>
    );
  }
);

FormCheckbox.defaultProps = {
  className: "form__checkbox",
};
