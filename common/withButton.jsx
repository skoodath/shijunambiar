export const withButton = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};
