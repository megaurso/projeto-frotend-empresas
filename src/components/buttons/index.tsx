import { iButtonsProps } from "../../interface";

export const Buttons = ({children,type,onClick}: iButtonsProps) =>{
    return (
        <button type={type} onClick={onClick}>
          {children}
        </button>
      );
}