import styled from 'styled-components'

export const StyledSearch = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 10px;

  form {
    display: flex;
    align-items: center;
  }

  .input {
    outline: none;
    outline-offset: 0;
    border: 1px solid #F6F7F9;
    width: 400px;
    padding: 10px 15px;
    background: #F6F7F9;
    border-radius: 32px;
    transition: .1s;
    font-family: 'Gilroy', Arial;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    &:focus {
      outline: none;
      outline-offset: 0;
      border: 1px solid #7D59E6;
    }

    &:hover {
      outline: none;
      outline-offset: 0;
    }

    &:active {
      outline: none;
      outline-offset: 0;
    }
  }

  .button {
    outline: none;
    outline-offset: 0;
    margin-left: 15px;
    border: 0;
    padding: 11px;
    cursor: pointer;
    background: #7D59E6;
    border-radius: 24px;
    transition: .1s;
    display: flex;
    align-items: center;

    img {
      width: 20px;
    }

    &:focus {
      outline: none;
      outline-offset: 0;
    }

    &:hover {
      outline: none;
      outline-offset: 0;
      background: #8462e3;
    }

    &:active {
      outline: none;
      outline-offset: 0;
      transform: scale(0.95);
    }
  }
`