import * as motion from "motion/react-client";
const Button = ({ className, children, onClick }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      onClick={onClick}
      className={`${className} flex justify-center items-center gap-3 border-0 cursor-pointer text-sm px-6 py-2 rounded-full`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
