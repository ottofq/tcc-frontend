import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Card from '../Base';
import ratingImage from '../../../assets/rating.svg';
import * as S from './styles';

const MenuRatingCard = ({ menuRating, loading }) => {
  const labels = {
    1: 'Muito ruim',
    2: 'Ruim',
    3: 'Regular',
    4: 'Bom',
    5: 'Muito bom',
  };

  return (
    <Card loading={loading} srcImage={ratingImage} altImage="Rating">
      <S.ContainerMenuRating>
        <S.Title>Média das Avaliações</S.Title>
        <S.ContainerMenuRatingDescription>
          <p>
            Avaliações: <span>{menuRating.votos}</span>
          </p>
          <S.Rating
            size="large"
            name="media"
            precision={1}
            value={menuRating.media || 0}
            readOnly
          />
          <p>{labels[Math.round(menuRating.media)]}</p>
        </S.ContainerMenuRatingDescription>
      </S.ContainerMenuRating>
    </Card>
  );
};

MenuRatingCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  menuRating: PropTypes.shape({
    votos: PropTypes.number,
    media: PropTypes.number,
  }).isRequired,
};

export default memo(MenuRatingCard);
