import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';

import { fetchCharts } from 'redux/modules/chart/actions';
import * as S from './styles';

import Allergy from '../../../components/Charts/Allergy';
import Pathology from '../../../components/Charts/Pathology';
import RUScholarship from '../../../components/Charts/RUScholarship';
import FrenquencyOfMeals from '../../../components/Charts/FrenquencyOfMeals';
import TypeOfMeal from '../../../components/Charts/TypeOfMeal';
import PhysicalLevel from '../../../components/Charts/PhysicalLevel';
import Vegan from '../../../components/Charts/Vegan';
import AlcoholicBeverageConsumption from '../../../components/Charts/AlcoholicBeverageConsumption';
import Smoker from '../../../components/Charts/Smoker';
import MealRating from '../../../components/Charts/MealRating';
import GerenalRating from '../../../components/Charts/GeneralRating';
import RUImprovement from '../../../components/Charts/RUImprovement';

const Charts = () => {
  const dispatch = useDispatch();
  const { data, totalStudents, loading } = useSelector(state => state.chart);

  useEffect(() => {
    dispatch(fetchCharts());
  }, [dispatch]);

  return (
    <>
      {loading === false && data.length > 0 ? (
        <S.Container>
          <S.Title>
            Abaixo contém gráficos gerados a partir dos dados obtidos pelo
            questionário preenchido pelos alunos.
          </S.Title>

          <S.ContainerChart>
            <Allergy totalStudents={totalStudents} data={data[0]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <Pathology totalStudents={totalStudents} data={data[1]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <RUScholarship data={data[2]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <FrenquencyOfMeals data={data[3]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <TypeOfMeal data={data[4]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <PhysicalLevel data={data[5]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <Vegan data={data[6]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <AlcoholicBeverageConsumption data={data[7]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <Smoker data={data[8]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <MealRating data={data[9]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <GerenalRating data={data[10]} />
          </S.ContainerChart>

          <S.ContainerChart>
            <RUImprovement data={data[11]} totalStudents={totalStudents} />
          </S.ContainerChart>
        </S.Container>
      ) : (
        <S.ContainerLoading>
          <CircularProgress color="primary" />
        </S.ContainerLoading>
      )}
    </>
  );
};

export default Charts;
