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
        <S.Title>
          Total de Avaliações:<strong>{menuRating.votes}</strong>
        </S.Title>
        <S.Item>
          <p>Entrada:</p>
          <S.Rating
            size="small"
            name="media"
            precision={1}
            value={menuRating.ratings.entrada}
            readOnly
          />
          <strong>{labels[Math.round(menuRating.ratings.entrada)]}</strong>
        </S.Item>
        <S.Item>
          <p>Prato Proteico:</p>
          <S.Rating
            size="small"
            name="media"
            precision={1}
            value={menuRating.ratings.prato_proteico}
            readOnly
          />
          <strong>
            {labels[Math.round(menuRating.ratings.prato_proteico)]}
          </strong>
        </S.Item>
        <S.Item>
          <p>Opção:</p>
          <S.Rating
            size="small"
            name="media"
            precision={1}
            value={menuRating.ratings.opcao}
            readOnly
          />
          <strong>{labels[Math.round(menuRating.ratings.opcao)]}</strong>
        </S.Item>
        <S.Item>
          <p>Acompanhamento:</p>
          <S.Rating
            size="small"
            name="media"
            precision={1}
            value={menuRating.ratings.acompanhamento}
            readOnly
          />
          <strong>
            {labels[Math.round(menuRating.ratings.acompanhamento)]}
          </strong>
        </S.Item>
        <S.Item>
          <p>Guarnição:</p>
          <S.Rating
            size="small"
            name="media"
            precision={1}
            value={menuRating.ratings.guarnicao}
            readOnly
          />
          <strong>{labels[Math.round(menuRating.ratings.guarnicao)]}</strong>
        </S.Item>
        <S.Item>
          <p>Sobremesa:</p>
          <S.Rating
            size="small"
            name="media"
            precision={1}
            value={menuRating.ratings.sobremesa}
            readOnly
          />
          <strong>{labels[Math.round(menuRating.ratings.sobremesa)]}</strong>
        </S.Item>
      </S.ContainerMenuRating>
    </Card>
  );
};

MenuRatingCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  menuRating: PropTypes.shape({
    votes: PropTypes.number,
    ratings: PropTypes.shape({
      entrada: PropTypes.number,
      prato_proteico: PropTypes.number,
      opcao: PropTypes.number,
      acompanhamento: PropTypes.number,
      guarnicao: PropTypes.number,
      sobremesa: PropTypes.number,
    }),
  }).isRequired,
};

export default memo(MenuRatingCard);
