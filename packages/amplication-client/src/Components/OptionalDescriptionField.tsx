import React, { useState, useCallback } from "react";
import { useField } from "formik";
import { isEmpty } from "lodash";
import { Icon } from "@rmwc/icon";
import { TextField, Props } from "./TextField";
import { Button, EnumButtonStyle } from "../Components/Button";

const OptionalDescriptionField = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [, meta] = useField(props.name);

  const { value } = meta;

  const showField = !isEmpty(value) || isOpen;

  const handleClick = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <>
      {showField ? (
        <TextField
          name="description"
          label="Description"
          autoComplete="off"
          textarea
          rows={3}
        />
      ) : (
        <Button onClick={handleClick} buttonStyle={EnumButtonStyle.Clear}>
          <Icon icon="plus" />
          Add description
        </Button>
      )}
    </>
  );
};

export default OptionalDescriptionField;
