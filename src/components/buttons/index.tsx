import { iButtonsProps } from "../../interface";

export const Buttons = ({children,type}: iButtonsProps) =>{
    return (
        <button type={type}>
          {children}
        </button>
      );
}