import styled from "styled-components";

export const MainLoginContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  & > section {
    div {
      display: flex;
      gap: 5px;
      align-items: baseline;
      h1 {
        color: var(--color-gray1);
        font-size: var(--font-size1);
      }
      h2 {
        color: var(--color-red);
        font-size: var(--font-size2);
      }
    }
    div + div {
      display: flex;
      align-items: center;
      padding: 10px;
      border: 1px solid var(--color-gray3);
      border-radius: 4px;
      gap: 20px;
      img {
        display: flex;
        border-radius: 4px;
        background-color: var(--color-primary3);
        padding: 15px;
      }
      span {
        font-size: var(--font-size6);
        color: var(--color-gray2);
        span {
          color: var(--color-gray1);
          font-weight: 700;
        }
      }
    }
    img {
      display: none;
    }
  }

  section + section {
    padding-left: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    border: 1px solid var(--color-gray3);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;

      & > div {
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
          border: 1px solid var(--color-gray1);
          padding-left: 10px;
          outline: none;
        }
      }
      div + div {
        position: relative;
        justify-content: baseline;
        align-items: baseline;
        border: none;
        padding: 0;
        gap: 0;
        label {
          font-size: var(--font-size6);
        }

        input {
          width: 100%;
          height: 40px;
          border-radius: 4px;
          border: 1px solid var(--color-gray1);
          padding-left: 10px;
          outline: none;
        }
      }

      button {
        cursor: pointer;
        background-color: var(--color-primary1);
        color: var(--color-gray4);
        border: none;
        border-radius: 4px;
        height: 40px;
        margin-top: 10px;
        :hover {
          background-color: var(--color-primary2);
        }
      }
    }

    p {
      font-size: var(--font-size6);
      width: 70%;
      color: var(--color-gray2);
    }

    a {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      border-radius: 4px;
      color: var(--color-gray2);
      background-color: var(--color-gray3);
      height: 40px;
      :hover {
        background-color: var(--color-gray4);
      }
    }
  }

  @media (min-width: 1024px) {
    padding-left: 10%;
    width: 100vw;
    height: 100vh;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    gap: 50px;

    & > section {
        display: flex;
        flex-direction: column;
      &>div {
        gap: 15px;
        h1{
            font-size: 50px;
        }
        h2{
            font-size: 35px;
        }
      }
      div + div {
        display: flex;
        align-items: center;
        border: 1px solid var(--color-gray3);
        border-radius: 4px;
        width: 60%;
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
    section + section {
      form {
        font-size: var(--font-size2);
        div{
          input{
            height: 55px;
          }
        }
        div + div {
          width: 100%;
          
          input{
            height: 55px;
          }
        }
        button{
          height: 55px;
        }
      }
      a{
        height: 55px;
      }
    }
  }
`;
