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

import {
  TableContainerUI,
  TableHeadUI,
  TableBodyUI,
  ButtonUI,
  ContainerAcoes,
  Container,
} from './styles';
import DialogExcluir from '../../../components/DialogExcluir';

import api from '../../../services/api';

export default function VerCardapios() {
  const [infos, setInfos] = useState([]);
  const [page, setPage] = useState(0);
  const [qtdInfo, setQtdInfo] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmitModal(id) {
    try {
      const user = JSON.parse(localStorage.getItem('@app-ru/user'));
      const result = await api.delete(`/informacoes/${id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      if (result.status === 200) {
        enqueueSnackbar('Aviso excluido com Sucesso!', {
          variant: 'success',
        });
      }
      setInfos(infos.filter(info => info._id !== id));
    } catch (error) {
      console.log(error);
      enqueueSnackbar('Erro ao excluir o aviso!', {
        variant: 'error',
      });
    }
  }

  useEffect(() => {
    async function loadInfos() {
      try {
        const result = await api.get(`/informacoes?page=${page + 1}`);
        setInfos(result.data.result);
        setQtdInfo(result.data.total_infos);
      } catch (error) {
        console.log(error);
      }
    }
    loadInfos();
  }, [page]);

  const handleChangePage = (event, page) => {
    setPage(page);
  };

  return (
    <Container>
      <TableContainerUI component={Paper}>
        <Table aria-label="simple table">
          <TableHeadUI>
            <TableRow>
              <TableCell>Titulo</TableCell>
              <TableCell align="center">Data</TableCell>
              <TableCell align="center">Ações</TableCell>
            </TableRow>
          </TableHeadUI>
          <TableBodyUI>
            {infos.length > 0 ? (
              infos.map(info => (
                <TableRow key={info._id}>
                  <TableCell component="th" scope="row">
                    {info.titulo.length < 80
                      ? info.titulo
                      : info.titulo.substring(0, 80) + '...'}
                  </TableCell>
                  <TableCell align="center">
                    {format(parseISO(info.data), 'dd/MM/yyyy')}
                  </TableCell>

                  <TableCell align="center">
                    <ContainerAcoes>
                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/dashboard/avisos/detalhes/${info._id}`}
                      >
                        <ButtonUI variant="contained">Detalhes</ButtonUI>
                      </Link>

                      <Link
                        style={{ textDecoration: 'none' }}
                        to={`/dashboard/avisos/edicao/${info._id}`}
                      >
                        <ButtonUI variant="contained" color="primary">
                          Editar
                        </ButtonUI>
                      </Link>

                      <DialogExcluir
                        TextButton="Excluir"
                        TextDialog={`Deseja excluiro aviso: ${info.titulo}`}
                        TitleDialog="Excluir Aviso"
                        SubmitModal={() => handleSubmitModal(info._id)}
                      >
                        <ButtonUI variant="contained" color="secondary">
                          Excluir
                        </ButtonUI>
                      </DialogExcluir>
                    </ContainerAcoes>
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
          </TableBodyUI>
        </Table>
        <TablePagination
          component="div"
          rowsPerPageOptions={['']}
          count={qtdInfo}
          rowsPerPage={8}
          page={page}
          onChangePage={handleChangePage}
        />
      </TableContainerUI>
    </Container>
  );
}
