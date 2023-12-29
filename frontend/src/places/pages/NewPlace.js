import React from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import useForm from "../../shared/hooks/form-hook";

import "../../shared/style/Form.css";

const NewPlace = () => {
  const [formState, inputChangeHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubmit = (event) => {
    event.preventDefault();
    console.log("@@@ formState", formState);
  };

  return (
    <form className="place-form" onSubmit={formSubmit}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputChangeHandler}
      />
      <Input
        id="description"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Description should have atleast 5 characters."
        onInput={inputChangeHandler}
      />
      <Input
        id="address"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
        onInput={inputChangeHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
