import { iInputsProps } from "../../interface"

export const Inputs = ({placeholder,type,id,register}: iInputsProps) =>{
    return (
        <input placeholder={placeholder} type={type} id={id} {...register(`${id}`)}/>
    )
}