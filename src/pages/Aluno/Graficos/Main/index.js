import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

import { Title, Container, ContainerGrafico, ContainerLoading } from './styles';
import api from '../../../../services/api';

import Alergia from '../Alergia';
import Patologia from '../Patologia';
import Bolsista from '../Bolsista';
import Frequencia from '../Frequencia';
import TipoRefeicao from '../TipoRefeicao';
import NivelFisico from '../NivelFisico';
import Vegetariano from '../Vegetariano';
import ConsumoBebidaAlcoolica from '../ConsumoBebidaAlcoolica';
import Tabagista from '../Tabagista';
import AvaliacaoRefeicao from '../AvaliacaoRefeicao';
import AvaliacaoGeral from '../AvaliacaoGeral';
import MelhoriaRU from '../MelhoriaRU';

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

        const promises = routes.map(
          async route =>
            await api.get(`/alunos/${route}`, {
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
      <Title>
        Abaixo contém gráficos gerados a partir dos dados obtidos pelo
        questionário preenchido pelos alunos.
      </Title>
      {loading === false ? (
        <Container>
          <ContainerGrafico>
            <Alergia quantAluno={quantAluno} data={dataAlergia} />
          </ContainerGrafico>

          <ContainerGrafico>
            <Patologia quantAluno={quantAluno} data={dataPatologia} />
          </ContainerGrafico>

          <ContainerGrafico>
            <Bolsista data={dataBolsista} />
          </ContainerGrafico>

          <ContainerGrafico>
            <Frequencia data={dataFrequencia} />
          </ContainerGrafico>

          <ContainerGrafico>
            <TipoRefeicao data={dataTipoRefeicao} />
          </ContainerGrafico>
          <ContainerGrafico>
            <NivelFisico data={dataNivelFisico} />
          </ContainerGrafico>

          <ContainerGrafico>
            <Vegetariano data={dataVegetariano} />
          </ContainerGrafico>

          <ContainerGrafico>
            <ConsumoBebidaAlcoolica data={dataConsumoBebidaAlcoolica} />
          </ContainerGrafico>

          <ContainerGrafico>
            <Tabagista data={dataTabagista} />
          </ContainerGrafico>

          <ContainerGrafico>
            <AvaliacaoRefeicao data={dataAvaliacaoRefeicao} />
          </ContainerGrafico>

          <ContainerGrafico>
            <AvaliacaoGeral data={dataAvaliacaoGeral} />
          </ContainerGrafico>

          <ContainerGrafico>
            <MelhoriaRU data={dataMelhoriaRU} quantAluno={quantAluno} />
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
