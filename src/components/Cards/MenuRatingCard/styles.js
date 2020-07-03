import styled from 'styled-components';
import { Rating as RatingMaterial } from '@material-ui/lab';
import media from '../../../styles/media';

export const ContainerMenuRating = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.625rem;
  height: 12.5rem;

  ${media.lessThan('md')`
    height: 150px;
    align-items: center;
  `}
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primaryColor);

  ${media.lessThan('md')`
    font-size: 1.125rem;
  `}
`;

export const ContainerMenuRatingDescription = styled.div`
  text-align: center;

  p {
    font-size: 18px;
  }
  span {
    font-weight: bold;
  }
`;

export const Rating = styled(RatingMaterial)`
  svg {
    width: 3.125rem;
    height: 3.125rem;
  }

  ${media.lessThan('md')`
    svg{
      width: 2.1875rem;
      height: 2.1875rem;
    }
  `}
`;
