import React, { useEffect, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import * as S from './styles';

const duration = 300;

const transitionStyles = {
  entering: { opacity: 0, transform: 'scale(0)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 1, transform: 'scale(1)' },
  exited: { opacity: 0, transform: 'scale(0)' },
};

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const Modal = ({ children, onClick }) => {
  const [inProp, setInProp] = useState(false);
  const modalRef = createRef();

  useEffect(() => {
    setInProp(true);

    const handler = (e) => {
      if (e.keyCode === 27) onClick();
    };

    window.addEventListener('keyup', handler);

    return () => {
      window.removeEventListener('keyup', handler);
    };
  });

  function handleClick(e) {
    if (e.target !== modalRef.current) return;
    onClick();
  }

  return (
    <S.Modal>
      <S.Modal.Overlay onClick={handleClick} ref={modalRef}>
        <Transition in={inProp} timeout={duration} mountOnEnter unmountOnExit>
          {state => (
            <S.Modal.Container
              style={{ ...defaultStyle, ...transitionStyles[state] }}
            >
              <S.Modal.ButtonClose onClick={onClick} />

              <S.Modal.Content>
                {children}
              </S.Modal.Content>
            </S.Modal.Container>
          )}
        </Transition>
      </S.Modal.Overlay>
    </S.Modal>
  );
};

export default Modal;

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};
