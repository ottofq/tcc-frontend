import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Card from '../Base';
import menuImage from '../../../assets/menu.svg';
import * as S from './styles';

const MenuCard = ({ menu, loading }) => {
  return (
    <Card loading={loading} srcImage={menuImage} altImage="Menu">
      <S.ContainerMenuDescription>
        {menu === null ? (
          <S.MenuTitle>Nenhum cardápio cadastrado</S.MenuTitle>
        ) : (
          <>
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
                <strong>{menu.entrada}</strong>
              </p>
            </S.MenuItem>

            <S.MenuItem>
              <p>Prato Proteico: </p>
              <p>
                <strong>{menu.prato_proteico}</strong>
              </p>
            </S.MenuItem>

            <S.MenuItem>
              <p>Opção: </p>
              <p>
                <strong>{menu.opcao}</strong>
              </p>
            </S.MenuItem>

            <S.MenuItem>
              <p>Acompanhamento: </p>
              <p>
                <strong>{menu.acompanhamento}</strong>
              </p>
            </S.MenuItem>

            <S.MenuItem>
              <p>Guarnição: </p>
              <p>
                <strong>{menu.guarnicao}</strong>
              </p>
            </S.MenuItem>

            <S.MenuItem>
              <p>Sobremesa: </p>
              <p>
                <strong>{menu.sobremesa}</strong>
              </p>
            </S.MenuItem>
          </>
        )}
      </S.ContainerMenuDescription>
    </Card>
  );
};

MenuCard.defaultProps = {
  menu: null,
};

MenuCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  menu: PropTypes.shape({
    tipo: PropTypes.string,
    data: PropTypes.string,
    entrada: PropTypes.string,
    prato_proteico: PropTypes.string,
    opcao: PropTypes.string,
    acompanhamento: PropTypes.string,
    guarnicao: PropTypes.string,
    sobremesa: PropTypes.string,
  }),
};

export default memo(MenuCard);
