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
            
            img{
                background-color: var(--color-gray3);
                height: 150px;
                width: 200px;
                
            }

            div{
                display: flex;
                flex-direction: column;
                padding-left: 10px;
                gap: 5px;
            }

        }
    }
`