import styled from 'styled-components';
import media from '../../../styles/media';

export const ContainerMenuDescription = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0.625rem;
  height: 12.5rem;

  ${media.lessThan('md')`
    height: 9.375rem;
  `}
`;

export const MenuTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primaryColor);
  text-align: center;

  ${media.lessThan('md')`
    font-size: 0.875rem;
  `}
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;

  p {
    margin-right: 0.25rem;
    font-size: 1.125rem;
  }
  strong {
    font-weight: bold;
    font-size: 1.125rem;
  }

  ${media.lessThan('md')`
    p{
      font-size: 0.875rem;
    }
    strong{
      font-size: 0.875rem;
    }
  `}
`;
