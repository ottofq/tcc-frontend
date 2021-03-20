/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMenuComments } from 'redux/modules/comments/actions';

import CommentsBox from '../CommentsBox';
import MenuCard from '../Cards/MenuCard';
import MenuRatingCard from '../Cards/MenuRatingCard';

import * as S from './styles';

const MenuDetails = ({ title, fetchMenu }) => {
  const [skip, setSkip] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data: menu, average, loadingData, loadingAverage } = useSelector(
    state => state.menu
  );
  const {
    data: comments,
    totalComments,
    loading: loadingComments,
  } = useSelector(state => state.comments);

  useEffect(() => {
    dispatch(fetchMenu);
  }, [dispatch, fetchMenu]);

  useEffect(() => {
    if (menu) {
      dispatch(fetchMenuComments(menu._id, skip, limit));
    }
  }, [dispatch, skip, menu, limit]);

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

  const memoizedValue = useMemo(() => Math.ceil(totalComments / limit), [
    totalComments,
    limit,
  ]);

  return (
    <S.Container>
      <S.ContainerMenu>
        <h1>{title}</h1>
        <MenuCard loading={loadingData} menu={menu} />
        {!!menu && (
          <MenuRatingCard loading={loadingAverage} menuRating={average} />
        )}
      </S.ContainerMenu>
      <CommentsBox
        totalVotes={totalComments}
        comments={comments}
        actualPage={page}
        maxPage={memoizedValue}
        loading={loadingComments}
        previousComment={previousComment}
        nextComment={nextComment}
      />
    </S.Container>
  );
};

MenuDetails.propTypes = {
  title: PropTypes.string.isRequired,
  fetchMenu: PropTypes.func.isRequired,
};

export default MenuDetails;
