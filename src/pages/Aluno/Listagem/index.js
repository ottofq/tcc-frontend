import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableCell, TableRow, Paper } from '@material-ui/core';
import { format, parseISO } from 'date-fns';

import {
  Container,
  Title,
  TableContainerUI,
  TableHeadUI,
  TableBodyUI,
  ButtonUI,
  ContainerAcoes,
} from './styled';

import api from '../../../services/api';

export default function AlunoListagem() {
  const [alunos, setAlunos] = useState([]);
  const [qtdAlunos, setQtdsAlunos] = useState(0);

  useEffect(() => {
    async function loadAlunos() {
      try {
        const user = JSON.parse(localStorage.getItem('@app-ru/user'));
        const result = await api.get('/alunos', {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        setAlunos(result.data);
        setQtdsAlunos(result.data.length);
      } catch (error) {
        console.log(error);
      }
    }
    loadAlunos();
  }, []);
  return (
    <Container>
      <Title>
        Nº de Alunos cadastrados: <span>{qtdAlunos}</span>
      </Title>
      <TableContainerUI component={Paper}>
        <Table aria-label="simple table">
          <TableHeadUI>
            <TableRow>
              <TableCell>Nome do Aluno</TableCell>
              <TableCell align="center">Matrícula</TableCell>
              <TableCell align="center">Data Nascimento</TableCell>
              <TableCell align="center">Curso</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHeadUI>
          <TableBodyUI>
            {alunos.length > 0 ? (
              alunos.map(aluno => (
                <TableRow key={aluno._id}>
                  <TableCell component="th" scope="row">
                    {aluno.nome}
                  </TableCell>
                  <TableCell align="center">{aluno.matricula}</TableCell>
                  <TableCell align="center">
                    {format(parseISO(aluno.data_nascimento), 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell align="center">{aluno.curso}</TableCell>

                  <TableCell align="center">
                    <ContainerAcoes>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/dashboard/aluno/detalhes/${aluno._id}`}
                      >
                        <ButtonUI variant="contained">Detalhes</ButtonUI>
                      </Link>
                    </ContainerAcoes>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <h1>Vazio</h1>
                </TableCell>
              </TableRow>
            )}
          </TableBodyUI>
        </Table>
      </TableContainerUI>
    </Container>
  );
}
