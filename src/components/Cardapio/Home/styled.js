import styled from 'styled-components';
import { styled as styledUI } from '@material-ui/core/styles';
import { Rating as rating } from '@material-ui/lab';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  [class='wrapper'] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
      font-size: 12px;
    }

    h3 {
      margin: 20px 0;
      font-size: 24px;
    }

    h4 {
      align-self: flex-start;
      font-size: 20px;
      margin-bottom: 5px;
    }
  }

  [class='conteudo-cardapio'] {
    border: 1px solid #eee;
    padding: 10px 0 10px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 150px;
    width: 300px;

    div {
      display: flex;
      align-items: center;

      p {
        font-weight: bold;
      }

      h3 {
        font-size: 16px;
        font-weight: bold;
        align-self: center;
      }

      span {
        font-size: 14px;
        margin-left: 2px;
      }
    }
  }
`;

export const Rating = styledUI(rating)({
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
  justify-content: center;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  width: 500px;

  ul {
    width: 100%;
    height: 300px;
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
