// @flow

import type { ButtonProps } from "./Button";
import { getButtonProps, Button } from "./Button";

// ✅ Can call getter for props and consume
const props = getButtonProps("Click me");
Button(props);

// ❌ Can't read from props
const unreadableProps = getButtonProps("Click me");
console.log(unreadableProps.label);

// ❌ Can't modify existing props
const modifiedProps = getButtonProps("Click me");
modifiedProps.label = "Something else"; // Flow error
Button(modifiedProps);

// ❌ Can't create props outside of function
const manuallyCreatedProps: ButtonProps = {
  label: "foo",
  type: "filled"
};
Button(manuallyCreatedProps);

// ❌ Can't pass in object as props
const objectProps = { label: "foo", type: "filled" };
Button(objectProps);

// ✅ Can compose types
type MyDialogProps = {
  button: ButtonProps,
  content: string
};

function getMyDialogProps(content): MyDialogProps {
  return {
    button: getButtonProps("OK"),
    content: content
  };
}

export function MyDialog(props: MyDialogProps) {
  // FYI: Can't access `props.button.label`

  return `<dialog>
    ${props.content} 
    ${Button(props.button)}
  </dialog>`;
}
