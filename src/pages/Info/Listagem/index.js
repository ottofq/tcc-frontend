import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, Paper } from '@material-ui/core';
import DialogExcluir from '../../../components/DialogExcluir';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import {
  TableContainerUI,
  TableHeadUI,
  TableBodyUI,
  ButtonUI,
  ContainerAcoes,
} from './styled';
import AlertToast from '../../../components/AlertToast';
import api from '../../../services/api';

export default function VerCardapios() {
  const [infos, setInfos] = useState([]);
  const [statusAlert, setStatusAlert] = useState('');

  async function handleSubmitModal(id) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const result = await api.delete(`/informacoes/${id}`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });

      if (result.status === 200) {
        setStatusAlert({
          type: 'success',
          msg: 'Aviso excluido com sucesso!',
        });
      }
      setInfos(infos.filter(info => info._id !== id));
    } catch (error) {
      console.log(error);
      setStatusAlert({
        type: 'error',
        msg: 'Erro ao excluir o aviso!',
      });
    }
  }

  useEffect(() => {
    async function loadInfos() {
      try {
        const result = await api.get('/informacoes');
        setInfos(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadInfos();
  }, []);

  return (
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
                  {info.titulo}
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
      {statusAlert ? (
        <AlertToast
          key={new Date()}
          typeMessage={statusAlert.type}
          message={statusAlert.msg}
        />
      ) : null}
    </TableContainerUI>
  );
}
