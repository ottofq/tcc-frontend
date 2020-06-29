import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

import * as S from './styles';

export default function Card({ children, srcImage, altImage, loading }) {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={srcImage} alt={altImage} />
      </S.ImageContainer>
      <S.Content>
        {loading ? (
          <S.ContainerLoading loading={loading}>
            <CircularProgress />
          </S.ContainerLoading>
        ) : (
          children
        )}
      </S.Content>
    </S.Container>
  );
}

Card.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  srcImage: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
};
