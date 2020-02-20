import React from 'react';

import {
  Container,
  ContainerCardapio,
  ContainerInfo,
  RatingUI,
  ContainerRating,
  ContainerComentario,
  Comentario,
} from './styled';
import { List, ListItem, Divider } from '@material-ui/core';

export default function Home() {
  return (
    <Container>
      <ContainerCardapio>
        <h3>15/02/2020</h3>
        <h3>Almoço</h3>

        <ContainerRating>
          <h3>Média das Avaliações</h3>
          <p>Avaliações: 1000</p>
          <RatingUI
            size="large"
            name="media"
            precision={0.5}
            value={3.5}
            disabled
          />
        </ContainerRating>

        <ContainerInfo>
          <div>
            <p>Cardápio dia: </p>
            <span>15/02/2020</span>
          </div>

          <div>
            <p>Tipo de Refeição: </p>
            <span>Almoço</span>
          </div>

          <div>
            <p>Entrada: </p>
            <span>Arroz e Feijão</span>
          </div>

          <div>
            <p>Guarnição: </p>
            <span>Salada de Alface</span>
          </div>

          <div>
            <p>Proteína: </p>
            <span>Carne cozida com batata</span>
          </div>

          <div>
            <p>Opção: </p>
            <span>Omelete</span>
          </div>

          <div>
            <p>Sobremesa: </p>
            <span>Melancia</span>
          </div>
        </ContainerInfo>
      </ContainerCardapio>

      <ContainerComentario>
        <h4>Comentários</h4>
        <List component="ul">
          <ListItem component="li">
            <Comentario>
              <h5>Nome do Aluno</h5>
              <p>
                Comentário Comentário Comentário Comentário Comentário
                Comentário Comentário Comentário Comentário Comentário
                Comentário Comentário Comentário Comentário Comentário
                Comentário Comentário Comentário Comentário Comentário
                Comentário Comentário Comentário Comentário Comentário
                Comentário Comentário Comentário Comentário Comentário
              </p>
            </Comentario>
            <Divider />
          </ListItem>

          <ListItem component="li">
            <Comentario>
              <h5>Nome do Aluno</h5>
              <p>Comentário</p>
            </Comentario>
            <Divider />
          </ListItem>

          <ListItem component="li">
            <Comentario>
              <h5>Nome do Aluno</h5>
              <p>Comentário</p>
            </Comentario>
            <Divider />
          </ListItem>

          <ListItem component="li">
            <Comentario>
              <h5>Nome do Aluno</h5>
              <p>Comentário</p>
            </Comentario>
            <Divider />
          </ListItem>

          <ListItem component="li">
            <Comentario>
              <h5>Nome do Aluno</h5>
              <p>Comentário</p>
            </Comentario>
            <Divider />
          </ListItem>

          <ListItem component="li">
            <Comentario>
              <h5>Nome do Aluno</h5>
              <p>Comentário</p>
            </Comentario>
            <Divider />
          </ListItem>

          <ListItem component="li">
            <Comentario>
              <h5>Nome do Aluno</h5>
              <p>Comentário</p>
            </Comentario>
            <Divider />
          </ListItem>

          <ListItem component="li">
            <Comentario>
              <h5>Nome do Aluno</h5>
              <p>Comentário</p>
            </Comentario>
            <Divider />
          </ListItem>
        </List>
      </ContainerComentario>
    </Container>
  );
}
