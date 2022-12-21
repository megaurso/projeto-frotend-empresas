import styled from "styled-components";

export const MainRegister = styled.main`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  section {
    display: none;
  }
  div {
    form {
        margin-top: 150px;
        border: 1px solid var(--color-gray3);
        padding: 10px;
        border-radius: 4px;
        gap: 20px;
        display: flex;
        flex-direction: column;
      & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: var(--font-size5);
        a {
          color: var(--color-gray2);
          cursor: pointer;
          :hover{
            color: var(--color-gray1);
          }
        }
      }
      div + div {
        position: relative;
        display: flex;
        flex-direction: column;
        label {
          position: absolute;
          top: -9px;
          left: 20px;
          font-size: var(--font-size6);
          color: var(--color-gray2);
          background-color: var(--color-white);
        }

        input {
          width: 100%;
          height: 40px;
          border-radius: 4px;
          border: 1px solid var(--color-gray2);
          padding-left: 10px;
          outline: none;
        }
      }

      &>input{
        height: 40px;
        border: none;
        background-color: var(--color-gray4);
        padding-left: 10px;
        outline: none;
      }

      button{
        height: 40px;
        border: none;
        cursor: pointer;
        color: var(--color-gray2);
        :hover{
            background-color: var(--color-gray2);
            color: var(--color-white);
        }
      }
    }
  }

  @media (min-width: 600px){
    display: flex;
    align-items: center;
    justify-content: center;
      form{
        width: 500px;
      }
  }

  @media (min-width: 1024px){
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    
    
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        gap: 0;
        margin-bottom: 100px;
      &>div {
        height: 100px;
        gap: 15px;
        display: flex;
        align-items: center;
        width: 40%;
        h1{
            font-size: 50px;
        }
        h2{
            font-size: 35px;
            color: var(--color-red);
        }
        
      }
      div + div {
        display: flex;
        align-items: center;
        border: 1px solid var(--color-gray3);
        border-radius: 4px;
        width: 60%;
        padding: 20px;
        img {
          display: flex;
          border-radius: 4px;
          background-color: var(--color-primary3);
          padding: 15px;
        }
        span {
          font-size: var(--font-size5);
          color: var(--color-gray2);
          span {
            color: var(--color-gray1);
            font-weight: 700;
          }
        }
      }
      &>img {
        padding-top: 30px;
        display: flex;
        width: 200px;
        margin-bottom: 80px;
      }
    }
    &>div{
        width: 40%;
        height: 100%;
        form{
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            div{
                font-size: var(--font-size3);
            }

            div+div{
                input{
                    height: 60px;
                }
            }
            input{
                height: 60px;
            }
            
            button{
                height: 50px;
            }
        }
    }
  }



  @media (min-width: 1724px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    
    
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        gap: 0;
        margin-bottom: 100px;
      &>div {
        height: 100px;
        gap: 15px;
        display: flex;
        align-items: center;
        width: 40%;
        h1{
            font-size: 50px;
        }
        h2{
            font-size: 35px;
            color: var(--color-red);
        }
      }
      div + div {
        display: flex;
        align-items: center;
        border: 1px solid var(--color-gray3);
        border-radius: 4px;
        width: 60%;
        padding: 20px;
        img {
          display: flex;
          border-radius: 4px;
          background-color: var(--color-primary3);
          padding: 15px;
        }
        span {
          font-size: var(--font-size5);
          color: var(--color-gray2);
          span {
            color: var(--color-gray1);
            font-weight: 700;
          }
        }
      }
      &>img {
        padding-top: 30px;
        display: flex;
        width: 200px;
        margin-bottom: 80px;
      }
    }
    &>div{
        width: 20%;
        height: 100%;
        form{
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 20px;
            div{
                font-size: var(--font-size3);
            }

            div+div{
                input{
                    height: 60px;
                }
            }
            input{
                height: 60px;
            }
            
            button{
                height: 50px;
            }
        }
    }
  }
`;
