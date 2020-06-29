import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

export default function Card({ children, srcImage, altImage }) {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={srcImage} alt={altImage} />
      </S.ImageContainer>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  srcImage: PropTypes.string.isRequired,
  altImage: PropTypes.string.isRequired,
};
