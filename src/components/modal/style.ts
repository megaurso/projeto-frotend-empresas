import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  flex-direction: column;
  padding: 10px;

  & > div {
    background-color: var(--color-gray4);
    border-radius: 4px;
    width: 100%;

    header {
      padding-left: 10px;
      padding-right: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-primary1);

      h1 {
        font-size: var(--font-size3);
        color: var(--color-white);
      }

      button {
        height: 20px;
        width: 20px;
        border: none;
        background-color: var(--color-primary1);
        color: var(--color-gray3);
        cursor: pointer;
      }
    }
    div {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h2 {
        font-size: var(--font-size4);
      }

      p {
        font-size: var(--font-size6);
      }
    }
  }
  @media (min-width: 1024px) {
    width: 100%;
    height: 60%;
    justify-content: center;
    align-items: center;
    div {
      width: 25%;
      header {
        padding-left: 20px;
        padding-right: 20px;
      }

      div {
        width: 100%;
        h2 {
          font-size: var(--font-size2);
        }

        p {
          font-size: var(--font-size4);
        }
      }
    }
  }
`;
