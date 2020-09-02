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

import { fetchMenus, deleteMenu } from 'redux/modules/menu/actions';
import { openModal } from 'redux/modules/modal/actions';
import ModalDelete from '../../../components/ModalDelete';
import * as S from './styles';

export default function List() {
  const [idDeleteMenu, setIdDeleteMenu] = useState(0);
  const [actualPage, setActualPage] = useState(0);

  const dispatch = useDispatch();
  const { list: menus, loadingData, loadingDelete, total } = useSelector(
    state => state.menu
  );

  useEffect(() => {
    dispatch(fetchMenus(actualPage + 1));
  }, [actualPage, dispatch]);

  const handleChangePage = (event, nextPage) => {
    setActualPage(nextPage);
  };

  const DeleteMenu = () => {
    dispatch(deleteMenu(idDeleteMenu));
  };

  const handleButtonDelete = id => {
    dispatch(openModal());
    setIdDeleteMenu(id);
  };

  return (
    <S.Container>
      <S.TableContainer component={Paper}>
        <Table aria-label="tabela de cardapios">
          <S.TableHead>
            <TableRow hover>
              <TableCell>Cardápios</TableCell>
              <TableCell align="center">Tipo de Refeição</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </S.TableHead>
          <S.TableBody>
            {menus.length > 0 ? (
              menus.map(menu => (
                <TableRow hover key={menu._id}>
                  <TableCell component="th" scope="row">
                    {menu.entrada},{menu.prato_proteico},...
                  </TableCell>
                  <TableCell align="center">{menu.tipo}</TableCell>
                  <TableCell align="center">
                    {format(parseISO(menu.data), 'dd/MM/yyyy')}
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

                      <S.Button
                        onClick={() => handleButtonDelete(menu._id)}
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
            page={actualPage}
            onChangePage={handleChangePage}
          />
        )}
      </S.TableContainer>

      <ModalDelete
        TextButton="Excluir"
        loading={loadingDelete}
        textDialog="Deseja excluir o Cardápio selecionado?"
        titleDialog="Excluir Aviso"
        submitModal={() => DeleteMenu()}
      />
    </S.Container>
  );
}
