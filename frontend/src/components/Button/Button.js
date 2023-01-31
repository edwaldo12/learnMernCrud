const Button = ({ buttonName, handler }) => {
  if (buttonName === "Add New User") {
    return (
      <button
        onClick={() => handler()}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4"
      >
        {buttonName}
      </button>
    );
  } else {
    return (
      <button
        onClick={() => handler()}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        {buttonName}
      </button>
    );
  }
};

export default Button;
