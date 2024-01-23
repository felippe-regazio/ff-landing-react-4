import { useState } from 'react';
import './style.scss';

export const ViewMore = ({ children, open }) => {
  const [ opened, setOpened ] = useState(open || false);

  return (
    <div className={`view-more ${opened ? 'view-more--expand' : ''}`}>
      <div className='view-more__content'>
        {children}
      </div>

      <div className="view-more__actions">
        <button 
          className="view-more-expand"
          onClick={() => setOpened(true)}
        >
          Mostrar mais
        </button>

        <button
          className="view-more-collapse"
          onClick={() => setOpened(false)}
        >
          Mostrar menos
        </button>
      </div>      
    </div>
  );
}
