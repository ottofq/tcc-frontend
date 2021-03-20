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

export const Item = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  align-self: flex-start;

  p {
    font-size: 1rem;
    margin-right: 3px;
  }
  strong {
    font-weight: bold;
    margin-left: 2px;
  }
`;

export const Rating = styled(RatingMaterial)`
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  ${media.lessThan('md')`
    span {
      width: 1.5rem;
      height: 1.5rem;
    }
  `}
`;
