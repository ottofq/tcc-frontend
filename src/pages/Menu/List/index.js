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

import ModalDelete from '../../../components/ModalDelete';
import * as S from './styles';
import api from '../../../services/api';

export default function List() {
  const [menus, setMenus] = useState([]);
  const [totalMenus, setTotalMenus] = useState(0);
  const [page, setPage] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function loadMenus() {
      try {
        const result = await api.get(`/cardapio?page=${page + 1}`);
        setMenus(result.data.result);
        setTotalMenus(result.data.total_cardapios);
      } catch (error) {
        enqueueSnackbar('Erro ao carregar os cardápios!', {
          variant: 'error',
        });
      }
    }
    loadMenus();
  }, [page, enqueueSnackbar]);

  const handleChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  async function handleButtonDelete(id) {
    try {
      const result = await api.delete(`/cardapio/${id}`);
      setMenus(menus.filter(menu => menu._id !== id));

      if (result.status === 200) {
        enqueueSnackbar('Cardápio excluido com Sucesso!', {
          variant: 'success',
        });
      }
    } catch (error) {
      enqueueSnackbar('Erro ao excluir o cardápio!', {
        variant: 'error',
      });
    }
  }

  return (
    <S.Container>
      <S.TableContainer component={Paper}>
        <Table aria-label="tabela de cardapios">
          <S.TableHead>
            <TableRow hover>
              <TableCell>Cardápios</TableCell>
              <TableCell align="center">Tipo de Refeição</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Média</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </S.TableHead>
          <S.TableBody>
            {menus.length > 0 ? (
              menus.map(menu => (
                <TableRow hover key={menu._id}>
                  <TableCell component="th" scope="row">
                    {menu.proteina.descricao}
                  </TableCell>
                  <TableCell align="center">{menu.tipo}</TableCell>
                  <TableCell align="center">
                    {format(parseISO(menu.data), 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell align="center">
                    {Math.round(menu.media_geral)}
                  </TableCell>

                  <TableCell align="center">
                    <S.ContainerActions>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/dashboard/cardapio/detalhes/${menu._id}`}
                      >
                        <S.Button variant="contained">Detalhes</S.Button>
                      </Link>

                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/dashboard/cardapio/editar/${menu._id}`}
                      >
                        <S.Button variant="contained" color="primary">
                          Editar
                        </S.Button>
                      </Link>

                      <ModalDelete
                        TextButton="Excluir"
                        TextDialog="Deseja excluir o Cardápio selecionado?"
                        TitleDialog="Excluir Aviso"
                        SubmitModal={() => handleButtonDelete(`${menu._id}`)}
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
                  <h1>Vazio</h1>
                </TableCell>
              </TableRow>
            )}
          </S.TableBody>
        </Table>
        <TablePagination
          component="div"
          rowsPerPageOptions={['']}
          count={totalMenus}
          rowsPerPage={8}
          page={page}
          onChangePage={handleChangePage}
        />
      </S.TableContainer>
    </S.Container>
  );
}
