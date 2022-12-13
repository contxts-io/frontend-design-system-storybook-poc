import React from 'react';
import PropTypes from 'prop-types';
import { MainButtonStyle } from './button.styled';

export const MainButton = (props) => {
  return (
    <MainButtonStyle {...props}>
      {props.label}
    </MainButtonStyle>
  );
};

MainButton.propTypes = {
  /**
   * 버튼 모양입니다.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /**
   * 버튼 내부 텍스트입니다.
   */
  label: PropTypes.string,
  /**
   * 버튼 가로 너비입니다. `100%` 는 화면에 가득 찹니다. 
   * 특정 너비를 지정하고 싶다면 `100px` 와 같이 지정합니다.
   */
  width: PropTypes.string,
  /**
   * `True` 를 지정하면 조작 불가 상태의 UI를 확인할 수 있습니다.
   */
  disabled: PropTypes.bool,
  /**
   * `True` 를 지정하면 로딩중 상태의 UI를 확인할 수 있습니다.
   */
  loading: PropTypes.bool,
  /**
   * 버튼 사이즈입니다.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * (Optional) 클릭하면 발생하는 콜백 함수입니다.
   */
  onClick: PropTypes.func,
  /**
   * (Optional) 배경색을 자유롭게 지정할 수 있습니다.
   */
  backgroundColor: PropTypes.string,
};

MainButton.defaultProps = {
  width: '100%',
  disabled: false,
  loading: false,
  size: 'medium',
};
