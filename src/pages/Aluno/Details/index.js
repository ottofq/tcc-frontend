import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { Container, ContainerLoading, Title } from './styles';
import api from '../../../services/api';
import GerenalData from '../../../components/StudentForms/GeneralData';
import Allergies from '../../../components/StudentForms/Allergies';
import Pathologies from '../../../components/StudentForms/Pathologies';
import RURatings from '../../../components/StudentForms/RURatings';

export default function AlunoDetalhes() {
  const [aluno, setAluno] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function loadAluno() {
      try {
        const { id } = params;
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
  }, [params]);

  return (
    <>
      {loading === false ? (
        <Container>
          <Title>Dados do Gerais</Title>
          <GerenalData student={aluno} />

          <Title>Patologias e Alergias</Title>
          <Allergies student={aluno} />
          <Pathologies student={aluno} />

          <Title>Avaliação do RU</Title>
          <RURatings student={aluno} />
        </Container>
      ) : (
        <ContainerLoading>
          <CircularProgress color="primary" />
        </ContainerLoading>
      )}
    </>
  );
}
