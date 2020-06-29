import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Card from '../Base';
import menuImage from '../../../assets/menu.svg';
import * as S from './styles';

export default function MenuCard({ menu }) {
  return (
    <Card srcImage={menuImage} altImage="Menu">
      <S.ContainerMenuDescription>
        <S.MenuTitle>
          {menu.tipo}
          {' - '}
          {format(parseISO(menu.data), 'eeee, dd/MM/yyyy', {
            locale: ptBR,
          })}
        </S.MenuTitle>

        <S.MenuItem>
          <p>Entrada: </p>
          <p>
            <strong>{menu.entrada.descricao}</strong>
          </p>
        </S.MenuItem>

        <S.MenuItem>
          <p>Prato Proteico: </p>
          <p>
            <strong>{menu.proteina.descricao}</strong>
          </p>
        </S.MenuItem>

        <S.MenuItem>
          <p>Opção: </p>
          <p>
            <strong>{menu.opcao.descricao}</strong>
          </p>
        </S.MenuItem>

        <S.MenuItem>
          <p>Acompanhamento: </p>
          <p>
            <strong>{menu.acompanhamento.descricao}</strong>
          </p>
        </S.MenuItem>

        <S.MenuItem>
          <p>Guarnição: </p>
          <p>
            <strong>{menu.guarnicao.descricao}</strong>
          </p>
        </S.MenuItem>

        <S.MenuItem>
          <p>Sobremesa: </p>
          <p>
            <strong>{menu.sobremesa.descricao}</strong>
          </p>
        </S.MenuItem>
      </S.ContainerMenuDescription>
    </Card>
  );
}

MenuCard.propTypes = {
  menu: PropTypes.shape({
    tipo: PropTypes.string,
    data: PropTypes.string,
    entrada: PropTypes.shape({
      descricao: PropTypes.string,
    }),
    proteina: PropTypes.shape({
      descricao: PropTypes.string,
    }),
    opcao: PropTypes.shape({
      descricao: PropTypes.string,
    }),
    acompanhamento: PropTypes.shape({
      descricao: PropTypes.string,
    }),
    guarnicao: PropTypes.shape({
      descricao: PropTypes.string,
    }),
    sobremesa: PropTypes.shape({
      descricao: PropTypes.string,
    }),
  }).isRequired,
};
