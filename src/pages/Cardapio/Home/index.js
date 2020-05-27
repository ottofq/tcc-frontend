import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { List, ListItem, Divider, CircularProgress } from '@material-ui/core';

import {
  Container,
  ContainerCardapio,
  ContainerLoading,
  ContainerItem,
  ContainerImage,
  ContainerCardapioDescription,
  RatingUI,
  ContainerCardapioRating,
  ContainerComentario,
  ContainerTitleComentario,
  ContainerSemComentario,
  Comentario,
} from './styles';
import menu from '../../../assets/menu.svg';
import rating from '../../../assets/rating.svg';
import api from '../../../services/api';

const labels = {
  1: 'Muito ruim',
  2: 'Ruim',
  3: 'Regular',
  4: 'Bom',
  5: 'Muito bom',
};

export default function Home() {
  const [cardapio, setCardapio] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const [media, setMedia] = useState('');
  const [mediaValue, setMediaValue] = useState(0);
  const [loadingCommentario, setLoadingComentario] = useState(true);
  const [loadingCardapio, setLoadingCardapio] = useState(true);

  useEffect(() => {
    async function loadingMenu() {
      const result = await api.get('/cardapio/last');

      setCardapio(result.data);
      setLoadingCardapio(false);
    }

    loadingMenu();
  }, []);

  useEffect(() => {
    async function loadingRate() {
      if (cardapio) {
        const avg = await api.get(`/cardapio/avg/${cardapio._id}`);
        setMedia(avg.data);
        setMediaValue(avg.data.media);
      }
    }
    loadingRate();
  }, [cardapio]);

  useEffect(() => {
    async function loadingComments() {
      if (cardapio) {
        const comments = await api.get(`/cardapio/${cardapio._id}/comentarios`);
        setComentarios(comments.data.avaliacoes);
        setLoadingComentario(false);
      }
    }
    loadingComments();
  }, [cardapio]);

  return (
    <Container>
      <h1>Cardápio mais recente</h1>
      <ContainerCardapio>
        {loadingCardapio ? (
          <ContainerLoading>
            <CircularProgress color="primary" />
          </ContainerLoading>
        ) : (
          <>
            <ContainerItem>
              <ContainerImage>
                <img src={menu} alt="menu icon" />
              </ContainerImage>
              <ContainerCardapioDescription>
                <h3>
                  {cardapio.tipo}
                  {' - '}
                  {format(parseISO(cardapio.data), 'eeee, dd/MM/yyyy', {
                    locale: ptBR,
                  })}
                </h3>

                <div>
                  <p>Entrada: </p>
                  <span>{cardapio.entrada.descricao}</span>
                </div>

                <div>
                  <p>Prato Proteico: </p>
                  <span>{cardapio.proteina.descricao}</span>
                </div>

                <div>
                  <p>Opção: </p>
                  <span>{cardapio.opcao.descricao}</span>
                </div>

                <div>
                  <p>Acompanhamento: </p>
                  <span>{cardapio.acompanhamento.descricao}</span>
                </div>

                <div>
                  <p>Guarnição: </p>
                  <span>{cardapio.guarnicao.descricao}</span>
                </div>

                <div>
                  <p>Sobremesa: </p>
                  <span>{cardapio.sobremesa.descricao}</span>
                </div>
              </ContainerCardapioDescription>
            </ContainerItem>

            <ContainerItem>
              <ContainerImage>
                <img src={rating} alt="star icon" />
              </ContainerImage>
              <ContainerCardapioRating>
                <h3>Média das Avaliações</h3>
                <div>
                  <p>
                    Avaliações: <span>{media.votos}</span>
                  </p>
                  <RatingUI
                    size="large"
                    name="media"
                    precision={0.5}
                    value={mediaValue}
                    disabled
                  />
                  <p>{labels[Math.round(mediaValue)]}</p>
                </div>
              </ContainerCardapioRating>
            </ContainerItem>
          </>
        )}
      </ContainerCardapio>

      <ContainerComentario>
        <ContainerTitleComentario>
          <h4>
            Comentários: (<span>{comentarios.length})</span>
          </h4>
        </ContainerTitleComentario>

        <List component="ul">
          {loadingCommentario ? (
            <ContainerLoading>
              <CircularProgress color="primary" />
            </ContainerLoading>
          ) : comentarios.length > 0 ? (
            comentarios.map((comentario, index) => (
              <ListItem key={index} component="li">
                <Comentario>
                  <h5>{comentario.nome}</h5>
                  <p>{comentario.comentario}</p>
                </Comentario>
                <Divider />
              </ListItem>
            ))
          ) : (
            <ContainerSemComentario>
              <p>Não contém comentários</p>
            </ContainerSemComentario>
          )}
        </List>
      </ContainerComentario>
    </Container>
  );
}
