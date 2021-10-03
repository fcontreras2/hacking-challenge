import React, { InputHTMLAttributes } from "react";
import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Switch =  React.forwardRef<HTMLInputElement, Props>(
  ({ ...props }: Props, ref) => {
    return (
      <label className="switch">
        <input ref={ref} type="checkbox" {...props} />
        <span className="switch__slider"></span>
      </label>
    ) 
    
  }
);

export default Switch;