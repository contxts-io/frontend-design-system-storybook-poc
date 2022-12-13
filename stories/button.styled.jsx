import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > button {
    margin-right: 12px;
  }
`;

export const MainButtonStyle = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 14px 0px;
  border: 0;
  border-radius: 4px;
  pointer-events: auto;
  overflow: hidden;
  cursor: pointer;
  transition: all ease-out 0.3s;
  color: #fff;
  background-color: ${(props) => (props.backgroundColor && props.backgroundColor)};

  &:hover,
  &:active {
    opacity: 0.8;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    color: #ADAEB3;
    background-color: #F3F4F9;
  }

  ${(props) =>
    props.variant && (
      props.variant === 'primary' ? (css`
        color: #fff;
        background-color: #3b43ff;
      `) :
      props.variant === 'secondary' ? (css`
        color: #fff;
        background-color: #232429;
      `) :
      props.variant === 'tertiary' && css`
        color: #232429;
        border: 1px solid #DEDFE4;
        background-color: transparent;
        &:hover,
        &:active {
          opacity: 1;
          border-color: #3b43ff;
        }
      `
    )}
`;
