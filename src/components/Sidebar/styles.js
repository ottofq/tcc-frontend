import styled from 'styled-components';
import media from 'styled-media-query';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  background-color: var(--primaryColor);
  flex-direction: column;
  justify-content: flex-start;
  width: var(--sidebarSize);
  height: 100vh;

  ${media.lessThan('medium')`
    display:${props => (props.isMenuOpen ? 'flex' : 'none')};
    position:absolute;
    align-items:center;
    z-index:2;
    width: 100%;
    transition: 1s ease;
    transform: ${props =>
      props.isMenuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
  `}

  img {
    margin: 0.625rem;
    width: 12.5rem;
    height: 6.25rem;
  }

  nav {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    li {
      align-self: stretch;
    }
  }
`;

export const SidebarLink = styled(NavLink)`
  display: block;
  color: #fff;
  text-decoration: none;

  div {
    display: flex;
    align-items: center;
    margin-top: 0.3125rem;
    height: 2.5rem;
    padding-left: 1.25rem;

    h3 {
      margin-left: 0.3125rem;
      font-size: 1.125rem;
    }
  }

  &.active {
    background-color: var(--secondaryColor);
  }
  &:hover {
    background-color: var(--secondaryColor);
    transition: 0.5s;
  }
`;

export const Title = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: 1.875rem;
  margin-top: 0.3125rem;

  h2 {
    margin-left: 0.3125rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
