/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  Table,
  TableCell,
  TableRow,
  TablePagination,
  Paper,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { useSnackbar } from 'notistack';

import * as S from './styles';
import ModalDelete from '../../../components/ModalDelete';

import api from '../../../services/api';

export default function List() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [totalNews, setTotalNews] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmitModal(id) {
    try {
      const result = await api.delete(`/informacoes/${id}`);

      if (result.status === 200) {
        enqueueSnackbar('Aviso excluido com Sucesso!', {
          variant: 'success',
        });
      }
      setNews(news.filter(newsItem => newsItem._id !== id));
    } catch (error) {
      enqueueSnackbar('Erro ao excluir o aviso!', {
        variant: 'error',
      });
    }
  }

  useEffect(() => {
    async function loadNews() {
      try {
        const result = await api.get(`/informacoes?page=${page + 1}`);
        setNews(result.data.result);
        setTotalNews(result.data.total_infos);
      } catch (error) {
        enqueueSnackbar('Erro ao carregar os avisos!', {
          variant: 'error',
        });
      }
    }
    loadNews();
  }, [page, enqueueSnackbar]);

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
                        to={`/dashboard/avisos/detalhes/${info._id}`}
                      >
                        <S.Button variant="contained">Detalhes</S.Button>
                      </Link>

                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/dashboard/avisos/edicao/${info._id}`}
                      >
                        <S.Button variant="contained" color="primary">
                          Editar
                        </S.Button>
                      </Link>

                      <ModalDelete
                        TextButton="Excluir"
                        TextDialog={`Deseja excluiro aviso: ${info.titulo}`}
                        TitleDialog="Excluir Aviso"
                        SubmitModal={() => handleSubmitModal(info._id)}
                      >
                        <S.Button variant="contained" color="secondary">
                          Excluir
                        </S.Button>
                      </ModalDelete>
                    </S.ContainerActions>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell>
                  <div>Vazio</div>
                </TableCell>
              </TableRow>
            )}
          </S.TableBody>
        </Table>
        <TablePagination
          component="div"
          rowsPerPageOptions={['']}
          count={totalNews}
          rowsPerPage={8}
          page={page}
          onChangePage={handleChangePage}
        />
      </S.TableContainer>
    </S.Container>
  );
}
