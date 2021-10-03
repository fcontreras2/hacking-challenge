import Spinner from 'components/Spinner';
import { ButtonHTMLAttributes } from 'react';
import './styles.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

const Button = ({loading,  children, ...props}:Props) => <button {...props}>
  {loading ? <Spinner /> : children}
</button>


Button.defaultProps = {
  className: 'button --primary'
}

export default Button;