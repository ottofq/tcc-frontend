import styled from 'styled-components';
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
    font-size: 32px;
    font-weight: bold;
    color: #174578;
  }
`;

export const ContainerLoading = styled.div`
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerCardapio = styled.div`
  display: flex;
  width: 1200px;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerInfo = styled.div`
  border: 1px solid #bbb;
  background-color: #f6fafd;
  box-shadow: -1px 0px 4px 0px rgba(50, 50, 50, 0.75);
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
  width: 40%;
  height: 170px;
  h3 {
    font-weight: bold;
    font-size: 24px;
    color: #174578;
    text-align: center;
  }

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;

    p {
      font-size: 18px;
    }

    span {
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

export const ContainerRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #bbb;
  background-color: #f6fafd;
  border-radius: 4px;
  box-shadow: -1px 0px 4px 0px rgba(50, 50, 50, 0.75);
  padding: 10px;
  width: 40%;
  height: 170px;

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
  }

  p {
    font-size: 14px;
  }
`;
