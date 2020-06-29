/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useMemo } from 'react';
import { CircularProgress } from '@material-ui/core';

import CommentsBox from '../../../components/CommentsBox';
import MenuCard from '../../../components/Cards/MenuCard';
import MenuRatingCard from '../../../components/Cards/MenuRatingCard';

import * as S from './styles';
import api from '../../../services/api';

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
            <MenuCard menu={menu} />
            <MenuRatingCard menuRating={menuRating} />
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
