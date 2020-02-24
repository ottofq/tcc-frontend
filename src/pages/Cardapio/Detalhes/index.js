import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  ContainerCardapio,
  ContainerInfo,
  RatingUI,
  ContainerRating,
  ContainerComentario,
  Comentario,
} from './styled';
import { List, ListItem, Divider, CircularProgress } from '@material-ui/core';
import api from '../../../services/api';

export default function Detalhes({ match, history }) {
  const [cardapio, setCardapio] = useState();
  const [comentarios, setComentarios] = useState([]);
  const [media, setMedia] = useState('');
  const [mediaValue, setMediaValue] = useState(0);
  const [loadingCommentario, setLoadingComentario] = useState(true);
  const [loadingCardapio, setLoadingCardapio] = useState(true);

  useEffect(() => {
    async function loadingMenu() {
      try {
        const { id } = match.params;
        const result = await api.get(`/cardapio/${id}`);

        setCardapio(result.data);
        setLoadingCardapio(false);
      } catch (error) {
        console.log(error);
        history.push('/404');
        window.location.reload();
      }
    }

    loadingMenu();
  }, [match.params, history]);

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
        setComentarios(comments.data.comentarios);
        setLoadingComentario(false);
      }
    }
    loadingComments();
  }, [cardapio]);

  return (
    <Container>
      <ContainerCardapio>
        {loadingCardapio ? (
          <div
            style={{
              display: 'flex',
              width: '300px',
              flex: '1',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress color="primary" />
          </div>
        ) : (
          <>
            <h1>Detalhes do Cardápio</h1>
            <h3>{cardapio.tipo}</h3>
            <h3>
              {format(parseISO(cardapio.data), 'eeee - dd/MM/yyyy', {
                locale: ptBR,
              })}
            </h3>

            <ContainerRating>
              <h3>Média das Avaliações</h3>
              <p>Avaliações: {media.votos}</p>
              <RatingUI
                size="large"
                name="media"
                precision={0.5}
                value={mediaValue}
                disabled
              />
            </ContainerRating>

            <ContainerInfo>
              <div>
                <p>Cardápio dia: </p>
                <span>{format(parseISO(cardapio.data), 'dd/MM/yyyy')}</span>
              </div>

              <div>
                <p>Tipo de Refeição: </p>
                <span>{cardapio.tipo}</span>
              </div>

              <div>
                <p>Entrada: </p>
                <span>{cardapio.entrada.descricao}</span>
              </div>

              <div>
                <p>Guarnição: </p>
                <span>{cardapio.guarnicao.descricao}</span>
              </div>

              <div>
                <p>Proteína: </p>
                <span>{cardapio.proteina.descricao}</span>
              </div>

              <div>
                <p>Opção: </p>
                <span>{cardapio.opcao.descricao}</span>
              </div>

              <div>
                <p>Sobremesa: </p>
                <span>{cardapio.sobremesa.descricao}</span>
              </div>
            </ContainerInfo>
          </>
        )}
      </ContainerCardapio>

      <ContainerComentario>
        <h4>Comentários</h4>
        <List component="ul">
          {loadingCommentario ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CircularProgress color="primary" />
            </div>
          ) : comentarios.length > 0 ? (
            comentarios.map((comentario, index) => (
              <ListItem key={index} component="li">
                <Comentario>
                  <h5>{comentario.user_id}</h5>
                  <p>{comentario.comentario}</p>
                </Comentario>
                <Divider />
              </ListItem>
            ))
          ) : (
            <div style={{ textAlign: 'center', fontSize: '24px' }}>
              <p>Não contém comentários</p>
            </div>
          )}
        </List>
      </ContainerComentario>
    </Container>
  );
}
