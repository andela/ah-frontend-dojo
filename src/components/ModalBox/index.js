// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import 'components/ModalBox/ModalBox.scss';

// components
import { closeOpenModalFunction } from 'constants/staticsMethods';

/**
 * This is a function.
 * @param {*} n - mixed parameter types*
 * @return {component}
 * @example
 * foo = (props) => {}
 */
const ModalBox = (props) => {
  const {
    children, show, title,
  } = props;

  if (!show) {
    return null;
  }
  return (
    <div className="backdrop" id="backdrop">
      <div className="modal">
        <header className="modal__header">
          <h4 className="modal__header__title">{title}</h4>
          <button
            className="modal__header__btn"
            onClick={closeOpenModalFunction}
            type="button"
          >
            <i className="fas fa-times">&times;</i>
          </button>
        </header>
        <div className="modal__section">
          {children}
        </div>

        <div className="modal__footer" />
      </div>
    </div>

  );
};

ModalBox.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalBox;