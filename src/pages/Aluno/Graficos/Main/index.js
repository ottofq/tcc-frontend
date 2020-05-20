import React, { useEffect, useState } from 'react';

import { Container, ContainerGrafico } from './styles';
import api from '../../../../services/api';

import Alergia from '../Alergia';
import Patologia from '../Patologia';
import Bolsista from '../Bolsista';
import Frequencia from '../Frequencia';

export default function AlunoGraficos() {
  const [dataAlergia, setDataAlergia] = useState([]);
  const [quantAluno, setQuantAluno] = useState(0);
  const [dataPatologia, setDataPatologia] = useState([]);
  const [dataBolsista, setDataBolsista] = useState([]);
  const [dataFrequencia, setDataFrequencia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const user = JSON.parse(localStorage.getItem('@app-ru/user'));

        const routes = ['alergias', 'patologias', 'bolsistas', 'frequencia'];

        const promises = routes.map(
          async route =>
            await api.get(`/alunos/${route}`, {
              headers: {
                authorization: `Bearer ${user.token}`,
              },
            })
        );

        const [alergia, patologia, bolsista, frequencia] = await Promise.all(
          promises
        );

        setQuantAluno(alergia.data.total_alunos);
        setDataAlergia(alergia.data);
        setDataPatologia(patologia.data);
        setDataBolsista(bolsista.data);
        setDataFrequencia(frequencia.data);
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
        </Container>
      ) : (
        <h1>Carregando</h1>
      )}
    </>
  );
}