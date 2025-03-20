import React, { useReducer, useState } from "react";
const UseReducer = () => {
  const [name, setName] = useState("");

  const reduce = (state, action) => {
    if (action.type == "INVALID_STATE") {
      return {
        ...state,
        error: true,
        success: false,
        message: "please enter a value",
      };
    }

    if (action.type == "ACCEPTED") {
      return {
        ...state,
        error: false,
        success: true,
        message: "Your Command Done",
        data: [...state.data, action.payload],
      };
    }

    if (action.type == "RESET") {
      return {
        ...state,
        error: false,
        message: "",
        success: false,
      };
    }
  };

  const initialState = {
    data: [],
    error: false,
    success: false,
    message: "",
  };

  const [state, dispatch] = useReducer(reduce, initialState);

  const btnHandle = (e) => {
    e.preventDefault();
    if (!name) {
      dispatch({ type: "INVALID_STATE" });
    } else {
      dispatch({ type: "ACCEPTED", payload: { name, id: Date.now() } });
    }
  };

  setInterval(() => {
    dispatch({ type: "RESET" });
  }, 9000);

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
          {state.error && <p className="text-red-500">access denied</p>}
          {state.success && <p className="text-green-500">succefully add</p>}

          <button
            onClick={btnHandle}
            className="w-[50%] mx-auto block outline outline-amber-400 hover:bg-amber-400 text-blue-600 transition-all focus:bg-amber-600 "
          >
            Submit
          </button>
        </form>
      </div>

      <div className="container mx-auto grid grid-cols-3">
        {state?.data?.map((item, index) => {
          return (
            <div className="container mx-auto flex justify-between items-center">
              <div className="p-5 shadow-xl">{item.name}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UseReducer;
