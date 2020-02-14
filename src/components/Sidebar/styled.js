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
    width: 180px;
    font-size: 32px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
    font-weight: bold;

    &:after {
      content: '';
      margin-top: 5px;
      display: block;
      height: 8px;
      background-color: #fff;
      border-radius: 4px;
    }
  }

  a {
    align-self: center;
  }

  nav {
    padding-left: 30px;
    padding-right: 10px;

    h3 {
      font-size: 28px;
      color: #fff;
      letter-spacing: 4px;
      font-weight: bold;
    }

    ul {
      li {
        margin-top: 8px;
        a {
          display: inline-block;
          width: 100%;
          padding: 5px 10px;

          &:hover {
            color: #fff;
            padding-left: 18px;
            transition: padding-left 0.2s ease 0s;
          }
        }
      }
    }
  }
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 20px;
  box-sizing: border-box;
`;
