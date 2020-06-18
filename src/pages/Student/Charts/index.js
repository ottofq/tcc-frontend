import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

import { Title, Container, ContainerGrafico, ContainerLoading } from './styles';
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

export default function AlunoGraficos() {
  const [dataAlergia, setDataAlergia] = useState([]);
  const [quantAluno, setQuantAluno] = useState(0);
  const [dataPatologia, setDataPatologia] = useState([]);
  const [dataBolsista, setDataBolsista] = useState([]);
  const [dataFrequencia, setDataFrequencia] = useState([]);
  const [dataTipoRefeicao, setDataTipoRefeicao] = useState([]);
  const [dataNivelFisico, setDataNivelFisico] = useState([]);
  const [dataVegetariano, setDataVegetariano] = useState([]);
  const [dataTabagista, setDataTabagista] = useState([]);
  const [dataConsumoBebidaAlcoolica, setDataConsumoBebidaAlcoolica] = useState(
    []
  );
  const [dataAvaliacaoRefeicao, setDataAvaliacaoRefeicao] = useState([]);
  const [dataAvaliacaoGeral, setDataAvaliacaoGeral] = useState([]);
  const [dataMelhoriaRU, setDataMelhoriaRU] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const user = JSON.parse(localStorage.getItem('@app-ru/user'));

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

        const promises = routes.map(async route =>
          api.get(`/alunos/${route}`, {
            headers: {
              authorization: `Bearer ${user.token}`,
            },
          })
        );

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

        setQuantAluno(alergia.data.total_alunos);
        setDataAlergia(alergia.data);
        setDataPatologia(patologia.data);
        setDataBolsista(bolsista.data);
        setDataFrequencia(frequencia.data);
        setDataTipoRefeicao(tipoRefeicao.data);
        setDataNivelFisico(nivelAtividadeFisica.data);
        setDataVegetariano(vegetariano.data);
        setDataConsumoBebidaAlcoolica(consumoBebidaAlcoolica.data);
        setDataTabagista(tabagista.data);
        setDataAvaliacaoRefeicao(avaliacaoRefeicao.data);
        setDataAvaliacaoGeral(avaliacaoGeral.data);
        setDataMelhoriaRU(melhoriaRU.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, []);

  return (
    <>
      {loading === false ? (
        <Container>
          <Title>
            Abaixo contém gráficos gerados a partir dos dados obtidos pelo
            questionário preenchido pelos alunos.
          </Title>

          <ContainerGrafico>
            <Allergy amountStudent={quantAluno} data={dataAlergia} />
          </ContainerGrafico>

          <ContainerGrafico>
            <Pathology amountStudent={quantAluno} data={dataPatologia} />
          </ContainerGrafico>

          <ContainerGrafico>
            <RUScholarship data={dataBolsista} />
          </ContainerGrafico>

          <ContainerGrafico>
            <FrenquencyOfMeals data={dataFrequencia} />
          </ContainerGrafico>

          <ContainerGrafico>
            <TypeOfMeal data={dataTipoRefeicao} />
          </ContainerGrafico>

          <ContainerGrafico>
            <PhysicalLevel data={dataNivelFisico} />
          </ContainerGrafico>

          <ContainerGrafico>
            <Vegan data={dataVegetariano} />
          </ContainerGrafico>

          <ContainerGrafico>
            <AlcoholicBeverageConsumption data={dataConsumoBebidaAlcoolica} />
          </ContainerGrafico>

          <ContainerGrafico>
            <Smoker data={dataTabagista} />
          </ContainerGrafico>

          <ContainerGrafico>
            <MealRating data={dataAvaliacaoRefeicao} />
          </ContainerGrafico>

          <ContainerGrafico>
            <GerenalRating data={dataAvaliacaoGeral} />
          </ContainerGrafico>

          <ContainerGrafico>
            <RUImprovement
              data={dataMelhoriaRU}
              amountOfStudents={quantAluno}
            />
          </ContainerGrafico>
        </Container>
      ) : (
        <ContainerLoading>
          <CircularProgress color="primary" />
        </ContainerLoading>
      )}
    </>
  );
}
