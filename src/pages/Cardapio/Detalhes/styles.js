import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { styled as styledUI } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;

  h1 {
    border-left: 4px solid #174578;
    padding-left: 4px;
    font-size: 24px;
    font-weight: bold;
    color: #174578;
    width: 1200px;
    margin-top: 5px;
  }
`;

export const ContainerCardapio = styled.div`
  display: flex;
  width: 1200px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerLoading = styled.div`
  display: flex;
  height: 170px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerItem = styled.div`
  display: flex;
  box-shadow: -1px 0px 4px 0px rgba(50, 50, 50, 0.75);
  border-radius: 5px;
  align-self: stretch;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 150px;
  background-color: #174578;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 10px;

  img {
    height: 150px;
    width: 150px;
  }
`;

export const ContainerCardapioDescription = styled.div`
  background-color: #f6fafd;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  height: 200px;

  h3 {
    font-weight: bold;
    font-size: 24px;
    color: #174578;
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 4px;
      font-size: 18px;
    }

    span {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export const ContainerCardapioRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f6fafd;
  padding: 10px;
  height: 200px;

  h3 {
    font-size: 24px;
    font-weight: bold;
    color: #174578;
  }

  div {
    text-align: center;
    p {
      font-size: 18px;
    }
    span {
      font-weight: bold;
    }
  }
`;

export const RatingUI = styledUI(Rating)({
  alignSelf: 'center',
  '& svg': {
    width: '50px',
    height: '50px',
  },
});

export const ContainerComentario = styled.div`
  display: flex;
  width: 1200px;
  height: 400px;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 10px;

  ul {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #eee;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    li {
      width: 50%;
    }
  }
`;

export const ContainerTitleComentario = styled.div`
  display: flex;

  h4 {
    font-weight: bold;
    font-size: 20px;
    color: #174578;
  }
  span {
    font-weight: bold;
  }
`;

export const ContainerSemComentario = styled.div`
  text-align: center;
  font-size: 24px;
`;

export const Comentario = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  background-color: #f6fafd;
  border-radius: 4px;
  justify-content: space-around;
  width: 100%;
  padding: 5px;

  h5 {
    font-size: 16px;
    font-weight: bold;
    color: #174578;
    padding-bottom: 5px;
    margin-right: 5px;
  }

  p {
    font-size: 14px;
  }
`;

export const RatingComentario = styledUI(Rating)({});

export const ContainerButtonPagination = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  strong {
    font-weight: bold;
  }
`;

export const StyledButton = styledUI(Button)({
  marginTop: '10px',
  fontSize: '14px',
  alignSelf: 'center',
});
