import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchStudent } from 'redux/modules/student/actions';
import * as S from './styles';
import GerenalData from '../../../components/StudentForms/GeneralData';
import Allergies from '../../../components/StudentForms/Allergies';
import Pathologies from '../../../components/StudentForms/Pathologies';
import RURatings from '../../../components/StudentForms/RURatings';

const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { data: student, loadingData } = useSelector(state => state.student);

  useEffect(() => {
    const { id } = params;
    dispatch(fetchStudent(id));
  }, [params, dispatch]);

  return (
    <>
      {loadingData === false && student ? (
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
};

export default Details;
