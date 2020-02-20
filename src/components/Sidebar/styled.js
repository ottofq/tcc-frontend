import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  display: flex;
  width: 240px;
  height: 100vh;
  justify-content: flex-start;
  background-color: #174578;
  flex-direction: column;

  img {
    margin: 10px;
    width: 200px;
    height: 100px;
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

      a {
        div {
          height: 40px;
          display: flex;
          align-items: center;
          margin-top: 5px;

          svg {
            padding-left: 20px;
          }
          span {
            margin-left: 15px;
            font-size: 18px;
            color: #fff;
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
  display: block;
`;
