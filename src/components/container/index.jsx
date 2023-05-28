export const Container = ({ id, children }) => {
  return (
    <div id={id} className="mt-20 max-w-6xl mx-auto md:px-20  max-md:px-8">
      {children}
    </div>
  );
};
