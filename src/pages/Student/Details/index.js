import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import * as S from './styles';
import api from '../../../services/api';
import GerenalData from '../../../components/StudentForms/GeneralData';
import Allergies from '../../../components/StudentForms/Allergies';
import Pathologies from '../../../components/StudentForms/Pathologies';
import RURatings from '../../../components/StudentForms/RURatings';

export default function Details() {
  const [student, setStudent] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function loadStudent() {
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
        setStudent(result.data);
        setLoading(false);
      } catch (error) {
        enqueueSnackbar('Erro ao carregar dados do aluno!', {
          variant: 'error',
        });
      }
    }

    loadStudent();
  }, [params, enqueueSnackbar]);

  return (
    <>
      {loading === false ? (
        <S.Container>
          <S.ContainerDetails>
            <S.Title>Dados do Gerais</S.Title>
            <GerenalData student={student} />

            <S.Title>Patologias e Alergias</S.Title>
            <S.ContainerAllergiesPathologies>
              <Allergies student={student} />
              <Pathologies student={student} />
            </S.ContainerAllergiesPathologies>

            <S.Title>Avaliação do RU</S.Title>
            <RURatings student={student} />
          </S.ContainerDetails>
        </S.Container>
      ) : (
        <S.ContainerLoading>
          <CircularProgress color="primary" />
        </S.ContainerLoading>
      )}
    </>
  );
}
