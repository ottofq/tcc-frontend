import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import * as S from './styles';
import api from '../../../services/api';

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

export default function Charts() {
  const [allergyData, setAllergyData] = useState(null);
  const [totalStudents, setTotalStudents] = useState(0);
  const [pathologyData, setPathologyData] = useState(null);
  const [RUScholarshipData, setRUScholarshipData] = useState(null);
  const [frenquencyOfMealsData, setFrenquencyOfMealsData] = useState(null);
  const [typeOfMealData, setTypeOfMealData] = useState(null);
  const [physicalLevelData, setPhysicalLevelData] = useState(null);
  const [veganData, setVeganData] = useState(null);
  const [smokerData, setSmokerData] = useState(null);
  const [
    alcoholicBeverageConsumptionData,
    setAlcoholicBeverageConsumptionData,
  ] = useState(null);
  const [mealRatingData, setMealRatingData] = useState(null);
  const [gerenalRatingData, setDerenalRatingData] = useState(null);
  const [RUImprovementData, setRUImprovementData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function loadData() {
      try {
        const routes = [
          'alergias',
          'patologias',
          'bolsistas',
          'frequencia',
          'tiporefeicao',
          'nivelatividadefisica',
          'vegetariano',
          'consumobebidaalcoolica',
          'tabagista',
          'avaliacao',
          'avaliacaogeral',
          'melhoriasru',
        ];

        const promises = routes.map(async route => api.get(`/alunos/${route}`));

        const [
          alergia,
          patologia,
          bolsista,
          frequencia,
          tipoRefeicao,
          nivelAtividadeFisica,
          vegetariano,
          consumoBebidaAlcoolica,
          tabagista,
          avaliacaoRefeicao,
          avaliacaoGeral,
          melhoriaRU,
        ] = await Promise.all(promises);

        setTotalStudents(alergia.data.total_alunos);
        setAllergyData(alergia.data);
        setPathologyData(patologia.data);
        setRUScholarshipData(bolsista.data);
        setFrenquencyOfMealsData(frequencia.data);
        setTypeOfMealData(tipoRefeicao.data);
        setPhysicalLevelData(nivelAtividadeFisica.data);
        setVeganData(vegetariano.data);
        setAlcoholicBeverageConsumptionData(consumoBebidaAlcoolica.data);
        setSmokerData(tabagista.data);
        setMealRatingData(avaliacaoRefeicao.data);
        setDerenalRatingData(avaliacaoGeral.data);
        setRUImprovementData(melhoriaRU.data);
        setLoading(false);
      } catch (error) {
        enqueueSnackbar('Erro ao carregar gráficos!', {
          variant: 'error',
        });
      }
    }

    loadData();
  }, [enqueueSnackbar]);

  return (
    <>
      {loading === false ? (
        <S.Container>
          <S.Title>
            Abaixo contém gráficos gerados a partir dos dados obtidos pelo
            questionário preenchido pelos alunos.
          </S.Title>

          <S.ContainerChart>
            <Allergy totalStudents={totalStudents} data={allergyData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <Pathology totalStudents={totalStudents} data={pathologyData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <RUScholarship data={RUScholarshipData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <FrenquencyOfMeals data={frenquencyOfMealsData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <TypeOfMeal data={typeOfMealData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <PhysicalLevel data={physicalLevelData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <Vegan data={veganData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <AlcoholicBeverageConsumption
              data={alcoholicBeverageConsumptionData}
            />
          </S.ContainerChart>

          <S.ContainerChart>
            <Smoker data={smokerData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <MealRating data={mealRatingData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <GerenalRating data={gerenalRatingData} />
          </S.ContainerChart>

          <S.ContainerChart>
            <RUImprovement
              data={RUImprovementData}
              totalStudents={totalStudents}
            />
          </S.ContainerChart>
        </S.Container>
      ) : (
        <S.ContainerLoading>
          <CircularProgress color="primary" />
        </S.ContainerLoading>
      )}
    </>
  );
}
