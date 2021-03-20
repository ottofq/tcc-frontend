import styled from 'styled-components';
import { Button as ButtonMaterialUI } from '@material-ui/core';
import media from '../../styles/media';

export const ContainerComment = styled.div`
  display: flex;
  height: 800px;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid var(--borderColorLight);

  ul {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--borderColorLight);
    overflow: hidden;
    overflow-y: scroll;
  }
`;

export const ContainerCommentTitle = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-weight: bold;
    font-size: 20px;
    color: var(--primaryColor);
  }
  strong {
    font-size: 1rem;
    color: var(--primaryColor);
    font-weight: bold;
  }
`;

export const ContainerNoComment = styled.div`
  display: ${props => (props.loading ? 'none' : 'flex')};
  flex: 1;
  text-align: center;
  font-size: 24px;
`;

export const ContainerLoading = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--borderColorLight);
  background-color: var(--backgroudLight);
  border-radius: 4px;
  justify-content: space-around;
  width: 100%;
  padding: 0.5rem;
  height: auto;

  p {
    font-size: 14px;
  }
`;

export const ContainerButtonPagination = styled.div`
  display: ${props => (props.hasComments ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: auto 0 0 0;

  strong {
    font-weight: bold;
  }
`;

export const Button = styled(ButtonMaterialUI)`
  margin-top: 10px;
  font-size: 14px;
  align-self: center;
`;
