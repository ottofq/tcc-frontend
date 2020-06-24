/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CircularProgress } from '@material-ui/core';

import CommentsBox from '../../../components/CommentsBox';

import * as S from './styles';
import menuIcon from '../../../assets/menu.svg';
import rating from '../../../assets/rating.svg';
import api from '../../../services/api';

const labels = {
  1: 'Muito ruim',
  2: 'Ruim',
  3: 'Regular',
  4: 'Bom',
  5: 'Muito bom',
};

export default function Home() {
  const [menu, setMenu] = useState(null);
  const [comments, setComments] = useState([]);
  const [menuRating, setMenuRating] = useState({});
  const [loadingCommentData, setLoadingCommentData] = useState(true);
  const [loadingMenuData, setLoadingMenuData] = useState(true);
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMenu() {
      const result = await api.get('/cardapio/last');

      setMenu(result.data);
      setLoadingMenuData(false);
    }

    loadMenu();
  }, []);

  useEffect(() => {
    async function loadMenuRating() {
      if (menu) {
        const avg = await api.get(`/cardapio/avg/${menu._id}`);
        setMenuRating(avg.data);
      }
    }
    loadMenuRating();
  }, [menu]);

  useEffect(() => {
    async function loadingComments() {
      if (menu) {
        const result = await api.get(
          `/cardapio/${menu._id}/comentarios?skip=${skip}&limit=${limit}`
        );
        setComments(result.data.avaliacoes);
        setLoadingCommentData(false);
      }
    }
    loadingComments();
  }, [menu, skip, limit]);

  const nextComment = () => {
    const nextPage = page + 1;
    setSkip(skip + limit);
    setPage(nextPage);
  };

  const previousComment = () => {
    const previousPage = page - 1;
    setSkip(skip - limit);
    setPage(previousPage);
  };

  const memoizedValue = useMemo(() => Math.round(menuRating.votos / limit), [
    menuRating,
    limit,
  ]);

  return (
    <S.Container>
      <h1>Cardápio mais recente</h1>
      <S.ContainerMenu>
        {loadingMenuData ? (
          <S.ContainerLoading>
            <CircularProgress color="primary" />
          </S.ContainerLoading>
        ) : (
          <>
            <S.ContainerItem>
              <S.ContainerImage>
                <img src={menuIcon} alt="menu icon" />
              </S.ContainerImage>
              <S.ContainerMenuDescription>
                <h3>
                  {menu.tipo}
                  {' - '}
                  {format(parseISO(menu.data), 'eeee, dd/MM/yyyy', {
                    locale: ptBR,
                  })}
                </h3>

                <div>
                  <p>Entrada: </p>
                  <span>{menu.entrada.descricao}</span>
                </div>

                <div>
                  <p>Prato Proteico: </p>
                  <span>{menu.proteina.descricao}</span>
                </div>

                <div>
                  <p>Opção: </p>
                  <span>{menu.opcao.descricao}</span>
                </div>

                <div>
                  <p>Acompanhamento: </p>
                  <span>{menu.acompanhamento.descricao}</span>
                </div>

                <div>
                  <p>Guarnição: </p>
                  <span>{menu.guarnicao.descricao}</span>
                </div>

                <div>
                  <p>Sobremesa: </p>
                  <span>{menu.sobremesa.descricao}</span>
                </div>
              </S.ContainerMenuDescription>
            </S.ContainerItem>

            <S.ContainerItem>
              <S.ContainerImage>
                <img src={rating} alt="star icon" />
              </S.ContainerImage>
              <S.ContainerMenuRating>
                <h3>Média das Avaliações</h3>
                <div>
                  <p>
                    Avaliações: <span>{menuRating.votos}</span>
                  </p>
                  <S.Rating
                    size="large"
                    name="media"
                    precision={1}
                    value={menuRating.media || 0}
                    readOnly
                  />
                  <p>{labels[Math.round(menuRating.media)]}</p>
                </div>
              </S.ContainerMenuRating>
            </S.ContainerItem>
          </>
        )}
      </S.ContainerMenu>
      <CommentsBox
        totalVotes={menuRating.votos || 0}
        comments={comments}
        actualPage={page}
        maxPage={memoizedValue}
        loading={loadingCommentData}
        previousComment={previousComment}
        nextComment={nextComment}
      />
    </S.Container>
  );
}
