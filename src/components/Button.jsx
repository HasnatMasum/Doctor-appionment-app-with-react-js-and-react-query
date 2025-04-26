const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} border-0 cursor-pointer text-sm`}
    >
      {children}
    </button>
  );
};

export default Button;
