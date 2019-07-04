// @flow

export opaque type ButtonProps = {|
  type: "ghost" | "filled",
  label: string
|};

export function getButtonProps(label: string): ButtonProps {
  return {
    label,
    type: "filled"
  };
}

export function Button(props: ButtonProps) {
  return `<button>${props.label}</button>`;
}
