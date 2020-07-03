/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CircularProgress,
  Table,
  TableCell,
  TableRow,
  Paper,
  TablePagination,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';

import * as S from './styles';

import api from '../../../services/api';

export default function List() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalStudents, setTotalStudents] = useState(0);
  const [page, setPage] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function loadStudents() {
      try {
        setLoading(true);
        const result = await api.get(`/alunos?page=${page + 1}`);
        setStudents(result.data.result);
        setTotalStudents(result.data.total_alunos);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        enqueueSnackbar('Erro ao carregar listas de aluno!', {
          variant: 'error',
        });
      }
    }
    loadStudents();
  }, [page, enqueueSnackbar]);

  const handleChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  return (
    <S.Container>
      {loading ? (
        <S.ContainerLoading>
          <CircularProgress color="primary" />
        </S.ContainerLoading>
      ) : (
        <>
          <S.Card>
            <S.Title>
              Total de alunos cadastrados: <strong>{totalStudents}</strong>
            </S.Title>
          </S.Card>
          <S.TableContainer component={Paper}>
            <Table aria-label="simple table">
              <S.TableHead>
                <TableRow>
                  <TableCell>Nome do Aluno</TableCell>
                  <TableCell align="center">Matrícula</TableCell>
                  <TableCell align="center">Ano de Ingresso</TableCell>
                  <TableCell align="center">Curso</TableCell>
                  <TableCell align="center">Ações</TableCell>
                </TableRow>
              </S.TableHead>
              <S.TableBody>
                {students.length > 0 ? (
                  students.map(student => (
                    <TableRow hover key={student._id}>
                      <TableCell component="th" scope="row">
                        {student.nome}
                      </TableCell>
                      <TableCell align="center">{student.matricula}</TableCell>
                      <TableCell align="center">
                        {student.ano_ingresso}
                      </TableCell>
                      <TableCell align="center">{student.curso}</TableCell>

                      <TableCell align="center">
                        <S.ActionsContainer>
                          <Link
                            style={{ textDecoration: 'none' }}
                            to={`/dashboard/aluno/detalhes/${student._id}`}
                          >
                            <S.Button variant="contained">Detalhes</S.Button>
                          </Link>
                        </S.ActionsContainer>
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
              </S.TableBody>
            </Table>
            <TablePagination
              component="div"
              rowsPerPageOptions={['']}
              count={totalStudents}
              rowsPerPage={8}
              page={page}
              onChangePage={handleChangePage}
            />
          </S.TableContainer>
        </>
      )}
    </S.Container>
  );
}
