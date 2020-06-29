import styled from 'styled-components';
import media from '../../../styles/media';

export const Container = styled.div`
  display: flex;
  box-shadow: -1px 0px 4px 0px rgba(50, 50, 50, 0.75);
  border-radius: 5px;
  background-color: var(--backgroudLight);
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 9.375rem;
  background-color: var(--primaryColor);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  ${media.lessThan('md')`
    width:6.25rem;
  `}

  img {
    height: 9.375rem;
    width: 9.375rem;

    ${media.lessThan('md')`
      height: 5.625rem;
      width:5.625rem;
  `}
  }
`;

export const Content = styled.div`
  background-color: var(--backgroudLight);
  flex: 1;
`;
