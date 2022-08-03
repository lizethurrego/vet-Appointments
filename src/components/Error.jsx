const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-center text-white font-bold rounded-md uppercase mb-3 p-3">
      <p> {children}</p>
    </div>
  );
};
export default Error;
