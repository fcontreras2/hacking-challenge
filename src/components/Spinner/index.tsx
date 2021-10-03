import "./styles.scss";
type Props = {
  className: string;
}

const Spinner = ({ className }: Props) => <div className={className}></div>; 

Spinner.defaultProps = {
  className : "loader"
}
export default Spinner;