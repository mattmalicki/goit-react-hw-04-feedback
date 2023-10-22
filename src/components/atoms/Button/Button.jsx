export const Button = ({ children, className }) => {
  return (
    <button id={children} className={className}>
      {children}
    </button>
  );
};
