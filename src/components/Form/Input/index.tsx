import React, {
  InputHTMLAttributes,
} from "react";
import "./styles.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const FormInput = React.forwardRef<HTMLInputElement, Props>(
  ({ ...props }: Props, ref) => {
    return <input ref={ref} {...props} />;
  }
);

FormInput.defaultProps = {
  className: "form__input --primary", 
};

export const FormLabel = ({ children, ...props }: any) => (
  <label className="form__label" {...props}>
    {children}
  </label>
);

export const FormGroup = ({ children, ...props }: any) => (
  <div className="form__group" {...props}>
    {children}
  </div>
);


export const FormError = (props:any) => <span {...props}></span>

FormError.defaultProps = {
  className: "form__error"
}
