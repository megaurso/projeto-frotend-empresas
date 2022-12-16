import styled from "styled-components";

export const DivDashBoard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    ul{
        display: flex;
        overflow-x: auto;
        gap: 20px;
        height: 310px;
        padding-left: 10px;
        
        li{
            display: flex;
            flex-direction: column;
            align-items: baseline;
            height: 300px;
            border: 1px solid var(--color-gray3);
            border-radius: 4px;
            :hover{
                border: 2px solid var(--color-primary1);
                button{
                    background-color: var(--color-primary1);
                }
            }
            img{
                background-color: var(--color-gray3);
                height: 150px;
                width: 200px;
                
            }

            div{
                display: flex;
                flex-direction: column;
                padding-left: 10px;
                justify-content: space-between;
                gap: 5px;

                h3{
                    font-size: var(--font-size4);
                    color: var(--color-gray1);
                }

                &>span{
                    color: var(--color-gray2);
                }

                span + span{
                    color: var(--color-primary1);
                }

                button{
                    height: 30px;
                    border-radius: 4px;
                    border: none;
                    cursor: pointer;
                    background-color: var(--color-gray2);
                    color: var(--color-gray4);
                    width: 100px;
                }
            }
        }
    }

    @media(min-width: 1024px){
        align-items: center;
        justify-content: center;
        ul{
            max-width: 1200px;
            align-items: center;
            flex-wrap: wrap;
            height: 80vh;
            justify-content: space-evenly;

            li{
                width: 300px;
                height: 360px;

                img{
                    width: 100%;
                    height: 50%;
                }

                &>div{
                    height: 100%;
                    justify-content: space-around;
                    button{
                        height: 40px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
`