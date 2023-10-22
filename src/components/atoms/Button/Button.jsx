export const Button = ({ children, onClick }) => {
  const className = 'class';
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
