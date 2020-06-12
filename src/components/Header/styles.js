import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #2266b1;
  box-shadow: -1px 0px 4px 0px rgba(50, 50, 50, 0.75);
`;

export const Container = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
`;

export const ContainerMenu = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #2266b1;
  align-items: center;

  :hover li {
    display: flex;
    visibility: visible;
    opacity: 1;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  cursor: pointer;

  p {
    margin-left: 10px;
    font-weight: bold;
    font-size: 18px;
    color: #fff;
  }
`;

export const ContainerItems = styled.li`
  position: absolute;
  opacity: 0;
  visibility: hidden;
  background-color: #2266b1;
  border: 1px solid #fff;
  border-radius: 4px;
  width: 120px;
  margin-top: 50px;
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 1;
`;

export const ItemMenu = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  :hover {
    background-color: #0f2d4d;
  }

  a {
    color: #fff;
    font-weight: bold;
    display: inline-block;
    width: 100%;
  }
`;
