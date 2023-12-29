import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputID in state.inputs) {
        if (inputID === action.id) {
          formIsValid = action.isValid;
        } else {
          formIsValid = state.inputs[inputID].isValid;
        }
        if (!formIsValid) break;
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.id]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const useForm = (initialState, initialValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialState,
    isValid: initialValidity,
  });

  const inputChangeHandler = useCallback(
    (id, value, isValid) => {
      dispatch({
        type: "INPUT_CHANGE",
        id: id,
        value: value,
        isValid: isValid,
      });
    },
    [dispatch]
  );

  return [formState, inputChangeHandler];
};

export default useForm;
