import './style.scss';
import { InfoSVG } from './InfoSVG';
import { Tooltip } from '../Tooltip';

export function ContentBox({ children, title, subtitle, description, avatar, help }) {
  const showHeader = title || subtitle || description;

  return (
    <div className={`box ${avatar ? 'box-avatar' : ''}`}>
      {help && (
        <Tooltip message="Testing a tooltip message">
          <a href="#" className="info-btn" onClick={e => e.preventDefault()}>
            <InfoSVG />
          </a>
        </Tooltip>
      )}

      {avatar && (
        <div className="box__avatar">
          {avatar}
        </div>
      )}

      {showHeader && (
        <div className="box__header">
          {title && <h1>{title}</h1>}
          {subtitle && <h2>{subtitle}</h2>}
          {description && <p>{description}</p>}
        </div>
      )}

      <div className="box__content">
        {children}
      </div>
    </div>    
  );
}