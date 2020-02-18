import React from 'react';
import { Table, TableCell, TableRow, Paper } from '@material-ui/core';

import { TableContainer, TableHead, TableBody, Button } from './styled';

export default function VerCardapios() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Cardápios</TableCell>
            <TableCell align="center">Tipo de Refeição</TableCell>
            <TableCell align="center">Data</TableCell>
            <TableCell align="center">Média</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Cardápio dia 15/02/2020
            </TableCell>
            <TableCell align="center">Almoço</TableCell>
            <TableCell align="center">15/02/2020</TableCell>
            <TableCell align="center">3,5</TableCell>
            <TableCell align="center">
              <div>
                <Button variant="contained">Detalhes</Button>
                <Button variant="contained" color="primary">
                  Editar
                </Button>
                <Button variant="contained" color="secondary">
                  Excluir
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
