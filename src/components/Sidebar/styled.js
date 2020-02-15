import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  width: 240px;
  height: 100vh;
  justify-content: flex-start;
  background-color: #174578;
  flex-direction: column;

  h2 {
    align-self: center;
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
    font-weight: bold;
  }
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  align-self: center;
  color: #fff;
  font-size: 20px;
  box-sizing: border-box;
  width: 100%;

  svg {
    width: 100%;
  }
`;
