import styled from 'styled-components';
import media from '../../styles/media';

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerPages = styled.section`
  display: flex;
  height: calc(100vh - 52px);
  width: calc(100vw - var(--sidebarSize));

  ${media.lessThan('md')`
  width: 100vw;
  `}
`;
