import OrderProvider from './Order/provider';

const CONTEXTS = [
  OrderProvider,
];

const Providers = (props) => {
  const { children, ...rest } = props;

  return CONTEXTS.reduceRight(
    (acc, Comp) => <Comp {...rest}>{acc}</Comp>,
    children,
  );
};

export default Providers;
