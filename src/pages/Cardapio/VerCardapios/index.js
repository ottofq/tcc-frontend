import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import AlertToast from '../../../components/AlertToast';
import DialogExcluir from '../../../components/DialogExcluir';
import {
  TableContainerUI,
  TableHeadUI,
  TableBodyUI,
  ButtonUI,
  ContainerAcoes,
} from './styled';
import api from '../../../services/api';

export default function VerCardapios() {
  const [cardapios, setCardapios] = useState([]);
  const [statusAlert, setStatusAlert] = useState('');

  useEffect(() => {
    async function loadCardapios() {
      try {
        const result = await api.get('/cardapio?page=1');
        setCardapios(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadCardapios();
  }, []);

  async function handleClick(id) {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const result = await api.delete(`/cardapio/${id}`, {
        headers: {
          authorization: `Bearer ${user.data.token}`,
        },
      });
      setCardapios(cardapios.filter(cardapio => cardapio._id !== id));

      if (result.status === 200) {
        setStatusAlert({
          type: 'success',
          msg: 'Cardápio excluido com sucesso!',
        });
      }
    } catch (error) {
      console.log(error);
      setStatusAlert({
        type: 'error',
        msg: 'Erro ao excluir o cardápio!',
      });
    }
  }

  return (
    <TableContainerUI component={Paper}>
      <Table aria-label="simple table">
        <TableHeadUI>
          <TableRow>
            <TableCell>Cardápios</TableCell>
            <TableCell align="center">Tipo de Refeição</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Média</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHeadUI>
        <TableBodyUI>
          {cardapios.length > 0 ? (
            cardapios.map(cardapio => (
              <TableRow key={cardapio._id}>
                <TableCell component="th" scope="row">
                  {cardapio.proteina.descricao}
                </TableCell>
                <TableCell align="center">{cardapio.tipo}</TableCell>
                <TableCell align="center">
                  {format(parseISO(cardapio.data), 'dd/MM/yyyy')}
                </TableCell>
                <TableCell align="center">{cardapio.media_geral}</TableCell>

                <TableCell align="center">
                  <ContainerAcoes>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/dashboard/cardapio/detalhes/${cardapio._id}`}
                    >
                      <ButtonUI variant="contained">Detalhes</ButtonUI>
                    </Link>

                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/dashboard/cardapio/editar/${cardapio._id}`}
                    >
                      <ButtonUI variant="contained" color="primary">
                        Editar
                      </ButtonUI>
                    </Link>

                    <DialogExcluir
                      TextButton="Excluir"
                      TextDialog={`Deseja excluir o Cardápio selecionado?`}
                      TitleDialog="Excluir Aviso"
                      SubmitModal={() => handleClick(`${cardapio._id}`)}
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
                <h1>Vazio</h1>
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
