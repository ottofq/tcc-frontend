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

import { useDispatch, useSelector } from 'react-redux';

import { fetchStudents } from 'redux/modules/student/actions';
import * as S from './styles';

const List = () => {
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { list: students, loadingData, total } = useSelector(
    state => state.student
  );

  useEffect(() => {
    dispatch(fetchStudents(page + 1));
  }, [page, dispatch]);

  const handleChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>
          Total de alunos cadastrados: <strong>{total}</strong>
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
                  <TableCell align="center">{student.ano_ingresso}</TableCell>
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
              <S.TableRow loading={loadingData ? 1 : 0}>
                <TableCell>
                  <h1>Vazio</h1>
                </TableCell>
              </S.TableRow>
            )}
          </S.TableBody>
        </Table>

        {loadingData ? (
          <S.ContainerLoading>
            <CircularProgress color="primary" />
          </S.ContainerLoading>
        ) : (
          <TablePagination
            component="div"
            rowsPerPageOptions={['']}
            count={total}
            rowsPerPage={8}
            page={page}
            onChangePage={handleChangePage}
          />
        )}
      </S.TableContainer>
    </S.Container>
  );
};

export default List;
