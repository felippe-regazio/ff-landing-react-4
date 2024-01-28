import './style.scss';
import { useState } from 'react';
import { Header } from './../components/Header';
import { Modal } from './../components/Modal';
import { Button } from './../components/Button';
import { ContentBox } from './../components/ContentBox';
import { AvatarSVG } from '../components/AvatarSVG';
import { LinkList } from '../components/LinkList';
import { ViewMore } from '../components/ViewMore';
import { Accordion } from '../components/Accordion';
import { ThinkingHeading } from '../components/ThinkingHeading';

export function Home() {
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <div className='page-home'>
      <Header
        rightContent={(
          <a href="#" onClick={e => {
            e.preventDefault();
            setOpenModal(true);
          }}>
            Abrir modal
          </a>
        )}
      />

      <div className="full-center-center" style={{ marginTop: 280 }}>
        <ContentBox
          help="Testing"
          title="Fluency Future"
          avatar={<AvatarSVG />}
          subtitle="Desbloqueie o seu futuro!"
          description="Descrição sobre o meu perfil"
        >
          <ViewMore>
            <LinkList items={[
              {
                id: 1,
                href: 'https://linkedin.com',
                icon: 'linkedin',
                label: 'LinkedIn'
              },
              {
                id: 2,
                href: 'https://instagram.com',
                icon: 'instagram',
                label: 'Instagram'
              },
              {
                id: 3,
                href: 'https://instagram.com',
                icon: 'instagram',
                label: 'Instagram'
              },
              {
                id: 4,
                href: 'https://linkedin.com',
                icon: 'linkedin',
                label: 'LinkedIn'
              },
              {
                id: 5,
                href: 'https://instagram.com',
                icon: 'instagram',
                label: 'Instagram'
              },
              {
                id: 6,
                href: 'https://linkedin.com',
                icon: 'linkedin',
                label: 'LinkedIn'
              },
              {
                id: 7,
                href: 'https://instagram.com',
                icon: 'instagram',
                label: 'Instagram'
              },                                      
            ]}/>            
          </ViewMore>
        </ContentBox>
      </div>

      <div className="full-center-center">
        <ContentBox>
            <ThinkingHeading>
              Perguntas frequentes
            </ThinkingHeading>

            <Accordion open={true} title="Aqui vai a pergunta?">
              <p>Esse pode ser o texto final da resposta da pergunta. Ele pode ter uma, duas, três ou várias linhas. O importante é ser a resposta ideal e pergunta.</p>
            </Accordion>

            <Accordion title="Aqui vai a pergunta?">
              <p>Esse pode ser o texto final da resposta da pergunta. Ele pode ter uma, duas, três ou várias linhas. O importante é ser a resposta ideal e pergunta.</p>
            </Accordion>

            <Accordion title="Aqui vai a pergunta?">
              <p>Esse pode ser o texto final da resposta da pergunta. Ele pode ter uma, duas, três ou várias linhas. O importante é ser a resposta ideal e pergunta.</p>
            </Accordion>                        
        </ContentBox>
      </div>

      <Modal
        open={openModal}
        title="Whatever"
        onClickBackdrop={() => setOpenModal(false)}
        footer={<Button onClick={() => setOpenModal(false)}>Fechar Modal</Button>}
      >
        <p>
          Os modais concentram a atenção do usuário exclusivamente em uma tarefa
          ou informação por meio de uma janela que fica no topo do conteúdo da 
          página. Busque ser objetivo e claro na informação.          
        </p>

        <p>
          Os modais concentram a atenção do usuário exclusivamente em uma tarefa
          ou informação por meio de uma janela que fica no topo do conteúdo da 
          página. Busque ser objetivo e claro na informação.          
        </p>
        
        <p>
          Os modais concentram a atenção do usuário exclusivamente em uma tarefa
          ou informação por meio de uma janela que fica no topo do conteúdo da 
          página. Busque ser objetivo e claro na informação.          
        </p>          
      </Modal>
    </div>
  )
