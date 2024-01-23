import './style.scss';
import ThinkingSRC from './thinking.png';

export function ThinkingHeading({ children }) {
  return (
    <div className='thinking-heading'>
      <img src={ThinkingSRC} alt="Imagem de um emoji amarelo pensante" />
      <h2>{children}</h2>
    </div>
  );
}
