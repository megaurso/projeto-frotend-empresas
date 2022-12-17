import styled from "styled-components";

export const UlItens = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  li {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;

      & > img {
        width: 60px;
        height: 60px;
        background-color: var(--color-gray3);
        border-radius: 4px;
        padding: 5px;
      }

      div {
        margin-top: 1px;
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        align-items: center;
        justify-content: center;
        height: 40px;

        h3 {
          font-size: var(--font-size4);
        }

        div {
          display: flex;
          flex-direction: row;
          gap: 10px;
          border: 1px solid var(--color-gray3);
          height: 25px;
          width: 40px;

          button {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            border: none;
            color: var(--color-red);
            font-size: var(--font-size3);
            background-color: var(--color-gray3);
            padding: 10px;
            height: 25px;
            width: 100%;
          }
        }
      }
      .trash {
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color: var(--color-gray4);
      }
    }
  }

  .value {
    width: 100%;
    border-top: 1px solid var(--color-gray3);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 110px;

    span {
      color: var(--color-gray1);
    }

    span + span {
      color: var(--color-gray2);
    }
  }
  button {
    cursor: pointer;
    height: 40px;
    width: 80%;
    border: none;
    background-color: var(--color-gray3);
    color: var(--color-gray1);
  }

  @media (min-width: 1024px) {

    li{
        div{
            div{
                h3{
                    margin-right: 202px;
                }
                div{

                    margin-right: 230px;
                }
            }
        }
    }

    .value {
      justify-content: space-between;
    }

    button {
      cursor: pointer;
      height: 40px;
      width: 95%;
      border: none;
      background-color: var(--color-gray3);
      color: var(--color-gray1);
    }
  }
`;
