import { ReactNode } from "react";
import "./Button.css";
import { useGlobalContext } from "../../context/global.context";


interface Props {
  children: ReactNode;
  parentMethod: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

// Solo con fines de estudio
export const ColorRed = ({ children }: ChildrenProps) => {
  const { value } = useGlobalContext();

  return <div className="color-red">{value}:{children}</div>;
};

export const Button = ({ children, parentMethod }: Props) => {
  // También podemos usar el context de esta manera
  const { setValue } = useGlobalContext();

  const handleClick = () => {
    setValue(10);
    parentMethod();
  }

  return (
    <button className="custom-button" onClick={handleClick}>
      {children}
    </button>
  );
};
