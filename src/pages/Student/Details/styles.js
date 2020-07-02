import styled from 'styled-components';
import { Container as ContainerMateriaUI } from '@material-ui/core';
import media from '../../../styles/media';

export const Container = styled(ContainerMateriaUI).attrs({
  component: 'div',
  maxWidth: 'xl',
})`
  display: flex;
  flex: 1;
  overflow-y: scroll;
  padding: 10px;
`;

export const ContainerDetails = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ContainerAllergiesPathologies = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid #bbb;
  padding: 10px;
  border-radius: 4px;

  ${media.lessThan('sm')`
    width:100%;
    padding:0px;
    border:0;
    flex-direction:column;
    flex-wrap:nowrap;
  `}

  ${media.between('sm', 'md')`
    width:100%;
    padding:0px;
  `}
`;

export const ContainerLoading = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  color: #174578;
  margin-top: 15px;
  margin-bottom: 5px;
  line-height: 20px;
  border-left: 4px solid #174578;
  padding-left: 5px;
`;
