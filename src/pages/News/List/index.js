/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  CircularProgress,
  Table,
  TableCell,
  TableRow,
  TablePagination,
  Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNews, deleteNews } from 'redux/modules/news/actions';
import { openModal } from 'redux/modules/modal/actions';
import * as S from './styles';
import ModalDelete from '../../../components/ModalDelete';

const List = () => {
  const [idDeleteMenu, setIdDeleteMenu] = useState(0);
  const [page, setPage] = useState(0);
  const dispatch = useDispatch();
  const { list: news, loadingData, loadingDelete, total } = useSelector(
    state => state.news
  );

  useEffect(() => {
    dispatch(fetchNews(page + 1));
  }, [page, dispatch]);

  async function DeleteNews() {
    dispatch(deleteNews(idDeleteMenu));
  }

  const handleButtonDelete = id => {
    dispatch(openModal());
    setIdDeleteMenu(id);
  };

  const handleChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  return (
    <S.Container>
      <S.TableContainer component={Paper}>
        <Table aria-label="simple table">
          <S.TableHead>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </S.TableHead>
          <S.TableBody>
            {news.length > 0 ? (
              news.map(info => (
                <TableRow key={info._id}>
                  <TableCell component="th" scope="row">
                    {info.titulo.length < 80
                      ? info.titulo
                      : `${info.titulo.substring(0, 80)}...`}
                  </TableCell>
                  <TableCell align="center">
                    {format(parseISO(info.data), 'dd/MM/yyyy')}
                  </TableCell>

                  <TableCell align="center">
                    <S.ContainerActions>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/dashboard/noticias/detalhes/${info._id}`}
                      >
                        <S.Button variant="contained">Detalhes</S.Button>
                      </Link>

                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/dashboard/noticias/editar/${info._id}`}
                      >
                        <S.Button variant="contained" color="primary">
                          Editar
                        </S.Button>
                      </Link>

                      <S.Button
                        onClick={() => handleButtonDelete(info._id)}
                        variant="contained"
                        color="secondary"
                      >
                        Excluir
                      </S.Button>
                    </S.ContainerActions>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <S.TableRow loading={loadingData ? 1 : 0}>
                <TableCell>
                  <div>Vazio</div>
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
      <ModalDelete
        textButton="Excluir"
        loading={loadingDelete}
        textDialog="Deseja excluir o Cardápio selecionado?"
        titleDialog="Excluir Aviso"
        submitModal={() => DeleteNews()}
      />
    </S.Container>
  );
};

export default List;
