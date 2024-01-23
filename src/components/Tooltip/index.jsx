import './style.scss';
import { useState, useRef, useEffect } from 'react';

export const Tooltip = ({ children, message, visible }) => {
  const [ isVisible, setIsVisible ] = useState(visible);
  const $el = useRef(null);

  useEffect(() => {
    const close = event => {
      if (!$el?.current.contains(event.target)) {
        setIsVisible(false);
      }
    }

    window.addEventListener('click', close);

    return () => window.removeEventListener('click', close);
  }, []);

  return (
    <div
      ref={$el}
      role='button'
      className='tooltip'
      onClick={() => setIsVisible(!isVisible)}
    >
      {children}

      {isVisible && (
        <span className='tooltip__toast'>
          {message}
        </span>
      )}
    </div>
  );
}
