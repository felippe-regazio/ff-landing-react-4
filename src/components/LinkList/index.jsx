import './style.scss';
import icons from './icons'

export function LinkList({ items }) {
  return (
    <ul className="link-list">
      {items.map(item => (
        <li key={item.id}>
          <a href={item.href}>
            <span>{icons[item.icon]}</span>
            <span>{item.label}</span>
          </a>
        </li>        
      ))}        
    </ul>    
  );
}
