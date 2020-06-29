import styled from 'styled-components';
import { Rating as RatingMaterial } from '@material-ui/lab';
import media from '../../../styles/media';

export const ContainerMenuRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.625rem;
  height: 12.5rem;

  ${media.lessThan('md')`
    height: 150px;
    width:100%;
    align-items: center;
  `}
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primaryColor);

  /* ${media.lessThan('md')`
    font-size: 1.125rem;
  `} */
`;

export const ContainerMenuRatingDescription = styled.div`
  text-align: center;

  ${media.lessThan('md')`
    font-size: 1rem;
  `}
  p {
    font-size: 18px;
  }
  span {
    font-weight: bold;
  }
`;

export const Rating = styled(RatingMaterial)`
  svg {
    width: 50px;
    height: 50px;

    ${media.lessThan('md')`
    width: 35px;
    height: 35px;
  `}
  }
`;
