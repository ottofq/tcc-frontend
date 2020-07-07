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
import { useSnackbar } from 'notistack';

import * as S from './styles';
import ModalDelete from '../../../components/ModalDelete';

import api from '../../../services/api';

export default function List() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [idDeleteMenu, setIdDeleteMenu] = useState(0);
  const [page, setPage] = useState(0);
  const [totalNews, setTotalNews] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        const result = await api.get(`/informacoes?page=${page + 1}`);
        setNews(result.data.result);
        setTotalNews(result.data.total_infos);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        enqueueSnackbar('Erro ao carregar os avisos!', {
          variant: 'error',
        });
      }
    }
    loadNews();
  }, [page, enqueueSnackbar]);

  async function DeleteNews() {
    try {
      setLoadingDelete(true);
      const result = await api.delete(`/informacoes/${idDeleteMenu}`);

      if (result.status === 200) {
        enqueueSnackbar('Aviso excluido com Sucesso!', {
          variant: 'success',
        });
      }
      setNews(news.filter(newsItem => newsItem._id !== idDeleteMenu));
      setLoadingDelete(false);
      setOpenModal(false);
    } catch (error) {
      setLoadingDelete(false);
      enqueueSnackbar('Erro ao excluir o aviso!', {
        variant: 'error',
      });
    }
  }

  const handleButtonDelete = id => {
    setOpenModal(true);
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
              <S.TableRow loading={loading ? 1 : 0}>
                <TableCell>
                  <div>Vazio</div>
                </TableCell>
              </S.TableRow>
            )}
          </S.TableBody>
        </Table>

        {loading ? (
          <S.ContainerLoading>
            <CircularProgress color="primary" />
          </S.ContainerLoading>
        ) : (
          <TablePagination
            component="div"
            rowsPerPageOptions={['']}
            count={totalNews}
            rowsPerPage={8}
            page={page}
            onChangePage={handleChangePage}
          />
        )}
      </S.TableContainer>
      <ModalDelete
        TextButton="Excluir"
        openModal={openModal}
        setOpenModal={setOpenModal}
        loading={loadingDelete}
        TextDialog="Deseja excluir o Cardápio selecionado?"
        TitleDialog="Excluir Aviso"
        SubmitModal={() => DeleteNews()}
      />
    </S.Container>
  );
}
