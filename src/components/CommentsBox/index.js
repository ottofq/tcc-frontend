import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Divider, CircularProgress } from '@material-ui/core';

import * as S from './styles';

export default function CommentsBox({
  totalVotes,
  comments,
  actualPage,
  maxPage,
  loading,
  previousComment,
  nextComment,
}) {
  return (
    <S.ContainerComment>
      <S.ContainerCommentTitle>
        <h3>Avaliações: ({totalVotes})</h3>
      </S.ContainerCommentTitle>

      <List component="ul">
        {loading ? (
          <S.ContainerLoading>
            <CircularProgress color="primary" />
          </S.ContainerLoading>
        ) : null}
        {comments.length > 0 ? (
          comments.map(comment => (
            <ListItem key={comment.user_id} component="li">
              <S.Comment>
                <S.ContainerCommentTitle>
                  <p>
                    <strong>{comment.nome}</strong>
                  </p>
                  <S.RatingComment
                    size="small"
                    name="nota"
                    precision={1}
                    value={comment.nota}
                    readOnly
                  />
                </S.ContainerCommentTitle>
                <p>{comment.comentario}</p>
              </S.Comment>
              <Divider />
            </ListItem>
          ))
        ) : (
          <S.ContainerNoComment loading={loading ? 1 : 0}>
            <p>Não contém comentários</p>
          </S.ContainerNoComment>
        )}
      </List>
      <S.ContainerButtonPagination hasComments={comments.length > 0}>
        <S.StyledButton
          onClick={previousComment}
          variant="outlined"
          color="primary"
          disabled={actualPage === 1}
        >
          Anterior
        </S.StyledButton>
        <p>
          Página <strong>{actualPage}</strong> de {maxPage}
        </p>
        <S.StyledButton
          onClick={nextComment}
          variant="outlined"
          color="primary"
          disabled={actualPage === maxPage || totalVotes === 0}
        >
          Próximo
        </S.StyledButton>
      </S.ContainerButtonPagination>
    </S.ContainerComment>
  );
}

CommentsBox.propTypes = {
  totalVotes: PropTypes.number.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  actualPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  previousComment: PropTypes.func.isRequired,
  nextComment: PropTypes.func.isRequired,
};
