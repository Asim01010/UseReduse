import React, { useReducer, useState } from "react";
const UseReducer = () => {
  const [name, setName] = useState("");

  const reduce = (state, action) => {
    if (action == "EMPTY_VALUE") {
      return {
        ...state,
        error: true,
        message: "please enter a value",
        succes: false,
      };
    }
  };

  const initialState = {
    data: [],
    error: false,
    succes: false,
    message: "",
  };

  const [state, dispatch] = useReducer(reduce, initialState);

  const btnHandle = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "EMPTY_VALUE" });
    }
  };

  return (
    <>
      <div className="container w-full md:w-1/3 mx-auto">
        <form>
          <label htmlFor="">UserName</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full border-4 outline-0 border-b-gray-400 border-t-0 border-l-0 border-r-0  my-3 "
          />

          <button
            onClick={btnHandle}
            className="w-[50%] mx-auto block outline outline-amber-400 hover:bg-amber-400 text-blue-600 transition-all focus:bg-amber-600 "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UseReducer;
