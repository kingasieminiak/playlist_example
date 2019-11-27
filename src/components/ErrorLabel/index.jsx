import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

const ErrorLabel = ({ text, action }) => (
  <S.ErrorLabel>
    <S.ErrorLabel.Text>{text}</S.ErrorLabel.Text>
    {action && <S.ErrorLabel.Action onClick={action} />}
  </S.ErrorLabel>
);

ErrorLabel.defaultProps = {
  action: null,
};

ErrorLabel.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
};

export default ErrorLabel;
