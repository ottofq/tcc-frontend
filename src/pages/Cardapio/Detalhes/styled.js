import styled from 'styled-components';
import { styled as styledUI } from '@material-ui/core/styles';
import { Rating } from '@material-ui/lab';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;

  h1 {
    font-size: 32px;
    font-weight: bold;
    color: #174578;
  }
`;

export const ContainerCardapio = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 20px 10px;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 20px;

  h3 {
    margin: 20px 0;
    font-size: 24px;
  }
`;

export const ContainerInfo = styled.div`
  border: 1px solid #eee;
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  height: 200px;

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;

    p {
      font-size: 18px;
      font-weight: bold;
    }

    span {
      font-size: 16px;
      margin-left: 2px;
    }
  }
`;

export const ContainerRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 12px;
  }
`;

export const RatingUI = styledUI(Rating)({
  alignSelf: 'center',
  marginBottom: '10px',
  '& svg': {
    width: '50px',
    height: '50px',
  },
});

export const ContainerComentario = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 600px;
  height: 550px;
  margin: 20px 0px;

  h4 {
    align-self: flex-start;
    font-size: 20px;
    margin-bottom: 5px;
  }

  ul {
    background-color: #fff;
    border: 1px solid #eee;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
`;

export const Comentario = styled.div`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #eee;
  border-radius: 4px;
  padding: 10px 5px;

  h5 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
  }
`;
