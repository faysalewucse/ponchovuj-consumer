const Container = ({ children, className, ...props }) => {
  const combinedClassName = `max-w-7xl mx-auto ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

export default Container;
