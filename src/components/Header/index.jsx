import './style.scss';
import { Logo } from './logo.jsx';

export function Header({ rightContent }) {
  return (
    <header className="main-header">
      <div className="main-header__left">
        <Logo />
      </div>

      <div className="main-header__right">
        {rightContent}
      </div>
    </header>
  )
}