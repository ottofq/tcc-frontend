import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export const ContainerComentario = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #ccc;

  ul {
    display: flex;

    flex-wrap: wrap;
    width: 100%;
    border: 1px solid #eee;
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

export const ContainerLoading = styled.div`
  display: flex;
  height: 170px;
  width: 100%;
  justify-content: center;
  align-items: center;
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

export const RatingComentario = styled(Rating)``;

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

export const StyledButton = styled(Button)`
  margin-top: 10px;
  font-size: 14px;
  align-self: center;
`;
