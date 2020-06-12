import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { CircularProgress } from '@material-ui/core';

import { Container, ContainerLoading, Title } from './styles';
import api from '../../../../services/api';
import DadosGerais from '../DadosGerais';
import AlergiasPatologias from '../AlergiasPatologias';
import AvaliacaoRU from '../AvaliacaoRU';

export default function AlunoDetalhes({ match, history }) {
  const [aluno, setAluno] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAluno() {
      try {
        const { id } = match.params;
        const user = JSON.parse(localStorage.getItem('@app-ru/user'));
        const result = await api.get(`/alunos/${id}`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        result.data.data_nascimento = format(
          parseISO(result.data.data_nascimento),
          'yyyy-MM-dd'
        );
        setAluno(result.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadAluno();
  }, [match.params]);

  return (
    <>
      {loading === false ? (
        <Container>
          <Title>Dados do Gerais</Title>
          <DadosGerais aluno={aluno} />

          <Title>Patologias e Alergias</Title>
          <AlergiasPatologias aluno={aluno} />

          <Title>Avaliação do RU</Title>
          <AvaliacaoRU aluno={aluno} />
        </Container>
      ) : (
        <ContainerLoading>
          <CircularProgress color="primary" />
        </ContainerLoading>
      )}
    </>
  );
}
