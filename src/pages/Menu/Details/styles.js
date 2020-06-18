import styled from 'styled-components';
import { Rating as RatingMaterial } from '@material-ui/lab';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;

  h1 {
    border-left: 4px solid #174578;
    padding-left: 4px;
    font-size: 24px;
    font-weight: bold;
    color: #174578;
    margin-top: 5px;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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

export const ContainerMenuDescription = styled.div`
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

export const ContainerMenuRating = styled.div`
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

export const Rating = styled(RatingMaterial)`
  align-self: center;

  svg {
    width: 50px;
    height: 50px;
  }
`;
