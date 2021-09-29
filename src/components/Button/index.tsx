import { ButtonHTMLAttributes } from 'react';
import './styles.scss';


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props:Props) => <button {...props} />


Button.defaultProps = {
  className: 'button --primary'
}

export default Button;