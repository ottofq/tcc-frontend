import React from 'react';
import { Table, TableCell, TableRow, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { TableContainerUI, TableHeadUI, TableBodyUI, ButtonUI } from './styled';

export default function VerCardapios() {
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
          <TableRow>
            <TableCell component="th" scope="row">
              15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>

            <TableCell align="center">
              <div>
                <Link to="/dashboard">
                  <ButtonUI variant="contained">Detalhes</ButtonUI>
                </Link>

                <Link to="/dashboard/cardapio/editar">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <ButtonUI variant="contained" color="secondary">
                  Excluir
                </ButtonUI>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>

            <TableCell align="center">
              <div>
                <Link to="/dashboard">
                  <ButtonUI variant="contained">Detalhes</ButtonUI>
                </Link>

                <Link to="/dashboard/cardapio/editar">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <ButtonUI variant="contained" color="secondary">
                  Excluir
                </ButtonUI>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>

            <TableCell align="center">
              <div>
                <Link to="/dashboard">
                  <ButtonUI variant="contained">Detalhes</ButtonUI>
                </Link>

                <Link to="/dashboard/cardapio/editar">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <ButtonUI variant="contained" color="secondary">
                  Excluir
                </ButtonUI>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>

            <TableCell align="center">
              <div>
                <Link to="/dashboard">
                  <ButtonUI variant="contained">Detalhes</ButtonUI>
                </Link>

                <Link to="/dashboard/cardapio/editar">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <ButtonUI variant="contained" color="secondary">
                  Excluir
                </ButtonUI>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>

            <TableCell align="center">
              <div>
                <Link to="/dashboard">
                  <ButtonUI variant="contained">Detalhes</ButtonUI>
                </Link>

                <Link to="/dashboard/cardapio/editar">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <ButtonUI variant="contained" color="secondary">
                  Excluir
                </ButtonUI>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>

            <TableCell align="center">
              <div>
                <Link to="/dashboard">
                  <ButtonUI variant="contained">Detalhes</ButtonUI>
                </Link>

                <Link to="/dashboard/cardapio/editar">
                  <ButtonUI variant="contained" color="primary">
                    Editar
                  </ButtonUI>
                </Link>

                <ButtonUI variant="contained" color="secondary">
                  Excluir
                </ButtonUI>
              </div>
            </TableCell>
          </TableRow>
        </TableBodyUI>
      </Table>
    </TableContainerUI>
  );
}
