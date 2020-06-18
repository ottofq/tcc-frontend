import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Divider, CircularProgress } from '@material-ui/core';

import * as S from './styles';

export default function CommentsBox({
  totalVotes,
  comments,
  actualPage,
  maxpage,
  loading,
  previousComment,
  nextComment,
}) {
  return (
    <S.ContainerComentario>
      <S.ContainerTitleComentario>
        <h4>
          Avaliações: (<span>{totalVotes})</span>
        </h4>
      </S.ContainerTitleComentario>

      <List component="ul">
        {loading ? (
          <S.ContainerLoading>
            <CircularProgress color="primary" />
          </S.ContainerLoading>
        ) : null}
        {comments.length > 0 ? (
          comments.map(comment => (
            <ListItem key={comment.user_id} component="li">
              <S.Comentario>
                <S.ContainerTitleComentario>
                  <h5>{comment.nome}</h5>
                  <S.RatingComentario
                    size="small"
                    name="nota"
                    precision={1}
                    value={comment.nota}
                    readOnly
                  />
                </S.ContainerTitleComentario>
                <p>{comment.comentario}</p>
              </S.Comentario>
              <Divider />
            </ListItem>
          ))
        ) : (
          <S.ContainerSemComentario>
            <p>Não contém comentários</p>
          </S.ContainerSemComentario>
        )}
      </List>
      <S.ContainerButtonPagination>
        <S.StyledButton
          onClick={previousComment}
          variant="outlined"
          color="primary"
          disabled={actualPage === 1}
        >
          Anterior
        </S.StyledButton>
        <p>
          Página <strong>{actualPage}</strong> de {maxpage}
        </p>
        <S.StyledButton
          onClick={nextComment}
          variant="outlined"
          color="primary"
          disabled={actualPage === maxpage || totalVotes === 0}
        >
          Próximo
        </S.StyledButton>
      </S.ContainerButtonPagination>
    </S.ContainerComentario>
  );
}

CommentsBox.propTypes = {
  totalVotes: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  actualPage: PropTypes.number.isRequired,
  maxpage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  previousComment: PropTypes.func.isRequired,
  nextComment: PropTypes.func.isRequired,
};
