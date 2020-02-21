import React from 'react';
import { Table, TableCell, TableRow, Paper } from '@material-ui/core';
import DialogExcluir from '../../../components/DialogExcluir';
import { Link } from 'react-router-dom';

import {
  TableContainerUI,
  TableHeadUI,
  TableBodyUI,
  ButtonUI,
  ContainerAcoes,
} from './styled';

export default function VerCardapios() {
  const handleSubmitModal = () => {
    console.log('faz ação de excluir');
  };

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
          <TableRow>
            <TableCell component="th" scope="row">
              Não haverá jantar
            </TableCell>
            <TableCell align="center">15/02/2020</TableCell>

            <TableCell align="center">
              <ContainerAcoes>
                <ButtonUI variant="contained">Detalhes</ButtonUI>

                <Link to="/dashboard/avisos/edicao">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <DialogExcluir
                  TextButton="Excluir"
                  TextDialog={`Deseja excluiro aviso: ${'Não haverá jantar'}`}
                  TitleDialog="Excluir Aviso"
                  SubmitModal={handleSubmitModal}
                >
                  <ButtonUI variant="contained" color="secondary">
                    Excluir
                  </ButtonUI>
                </DialogExcluir>
              </ContainerAcoes>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Não haverá jantar
            </TableCell>
            <TableCell align="center">15/02/2020</TableCell>

            <TableCell align="center">
              <ContainerAcoes>
                <ButtonUI variant="contained">Detalhes</ButtonUI>

                <Link to="/dashboard/avisos/edicao">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <DialogExcluir
                  TextButton="Excluir"
                  TextDialog={`Deseja excluiro aviso: ${'Não haverá jantar'}`}
                  TitleDialog="Excluir Aviso"
                  SubmitModal={handleSubmitModal}
                >
                  <ButtonUI variant="contained" color="secondary">
                    Excluir
                  </ButtonUI>
                </DialogExcluir>
              </ContainerAcoes>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Não haverá jantar
            </TableCell>
            <TableCell align="center">15/02/2020</TableCell>

            <TableCell align="center">
              <ContainerAcoes>
                <ButtonUI variant="contained">Detalhes</ButtonUI>

                <Link to="/dashboard/avisos/edicao">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <DialogExcluir
                  TextButton="Excluir"
                  TextDialog={`Deseja excluiro aviso: ${'Não haverá jantar'}`}
                  TitleDialog="Excluir Aviso"
                  SubmitModal={handleSubmitModal}
                >
                  <ButtonUI variant="contained" color="secondary">
                    Excluir
                  </ButtonUI>
                </DialogExcluir>
              </ContainerAcoes>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Não haverá jantar
            </TableCell>
            <TableCell align="center">15/02/2020</TableCell>

            <TableCell align="center">
              <ContainerAcoes>
                <ButtonUI variant="contained">Detalhes</ButtonUI>

                <Link to="/dashboard/avisos/edicao">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <DialogExcluir
                  TextButton="Excluir"
                  TextDialog={`Deseja excluiro aviso: ${'Não haverá jantar'}`}
                  TitleDialog="Excluir Aviso"
                  SubmitModal={handleSubmitModal}
                >
                  <ButtonUI variant="contained" color="secondary">
                    Excluir
                  </ButtonUI>
                </DialogExcluir>
              </ContainerAcoes>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Não haverá jantar
            </TableCell>
            <TableCell align="center">15/02/2020</TableCell>

            <TableCell align="center">
              <ContainerAcoes>
                <ButtonUI variant="contained">Detalhes</ButtonUI>

                <Link to="/dashboard/avisos/edicao">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <DialogExcluir
                  TextButton="Excluir"
                  TextDialog={`Deseja excluiro aviso: ${'Não haverá jantar'}`}
                  TitleDialog="Excluir Aviso"
                  SubmitModal={handleSubmitModal}
                >
                  <ButtonUI variant="contained" color="secondary">
                    Excluir
                  </ButtonUI>
                </DialogExcluir>
              </ContainerAcoes>
            </TableCell>
          </TableRow>
        </TableBodyUI>
      </Table>
    </TableContainerUI>
  );
}
