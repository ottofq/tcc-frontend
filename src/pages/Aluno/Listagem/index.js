import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableCell,
  TableRow,
  Paper,
  TablePagination,
} from '@material-ui/core';

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
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function loadAlunos() {
      try {
        const user = JSON.parse(localStorage.getItem('@app-ru/user'));
        const result = await api.get(`/alunos?page=${page + 1}`, {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        });
        setAlunos(result.data.result);
        setQtdsAlunos(result.data.total_alunos);
      } catch (error) {
        console.log(error);
      }
    }
    loadAlunos();
  }, [page]);

  const handleChangePage = (event, page) => {
    setPage(page);
  };
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
              <TableCell align="center">Ano de Ingresso</TableCell>
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
                  <TableCell align="center">{aluno.ano_ingresso}</TableCell>
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
        <TablePagination
          component="div"
          rowsPerPageOptions={['']}
          count={qtdAlunos}
          rowsPerPage={8}
          page={page}
          onChangePage={handleChangePage}
        />
      </TableContainerUI>
    </Container>
  );
}
