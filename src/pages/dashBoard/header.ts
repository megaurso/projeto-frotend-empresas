import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    justify-content: space-between;
    background-color: var(--color-gray4);
    width: 100%;

    &>div{
        display: flex;
        align-items: baseline;
        gap: 5px;

        h1{
            font-size: var(--font-size2);
        }
        
        h2{
            color: var(--color-red);
            font-size: var(--font-size5);
        }
    }

    div + div{
        display: flex;
        align-items: center;
        gap: 20px;

        &>div{
            input{
                display: none;
            }
        }

        img{
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    }

    @media (min-width: 1024px){
        justify-content: space-around;

        &>div{
            h1{
                font-size: var(--font-size1);
            }
            h2{
                font-size: var(--font-size2);
            }
        }

        div + div{
            &>div{
                display: flex;
                justify-content: space-between;
                border: 1px solid var(--color-gray3);
                width: 250px;
                padding: 10px;
                border-radius: 4px;

                input{
                    display: flex;
                    border: none;
                    background-color: var(--color-gray4);
                    outline: none;
                    ::placeholder{
                        color: var(--color-gray3);
                    }
                }
            }
            img{
                width: 30px;
                height: 30px;
            }
        }
    }
`