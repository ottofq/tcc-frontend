import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ArrowBack } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';
import { format, parseISO } from 'date-fns';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOneNews } from 'redux/modules/news/actions';
import * as S from './styles';

const Details = () => {
  const { control, setValue } = useForm();
  const [editorState, setEditorState] = useState();
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const { loadingData, data: news } = useSelector(state => state.news);

  useEffect(() => {
    const { id } = params;
    dispatch(fetchOneNews(id));
  }, [params, dispatch]);

  useEffect(() => {
    if (loadingData === false && news.data) {
      const contentBlock = htmlToDraft(news.descricao);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setEditorState(EditorState.createWithContent(contentState));
      setValue('titulo', news.titulo);
      setValue('data', format(parseISO(news.data), 'yyyy-MM-dd'));
    }
  }, [news, setValue, loadingData]);

  function handleClick() {
    history.goBack();
  }

  return (
    <S.Container>
      {loadingData ? (
        <S.ContainerLoading>
          <CircularProgress color="primary" />
        </S.ContainerLoading>
      ) : (
        <S.Form>
          <Controller
            as={
              <S.Input
                type="date"
                InputProps={{
                  readOnly: true,
                }}
                label="Data"
                variant="outlined"
              />
            }
            name="data"
            defaultValue=""
            control={control}
          />

          <Controller
            as={
              <S.Input
                InputProps={{
                  readOnly: true,
                }}
                label="Titulo"
                variant="outlined"
              />
            }
            name="titulo"
            defaultValue=""
            control={control}
          />

          <S.ContainerEditor>
            <Editor
              editorState={editorState}
              editorClassName="editor"
              onEditorStateChange={setEditorState}
              toolbarHidden
              readOnly
            />
          </S.ContainerEditor>

          <S.Button
            startIcon={<ArrowBack fontSize="large" />}
            onClick={handleClick}
            variant="contained"
            color="primary"
          >
            Voltar
          </S.Button>
        </S.Form>
      )}
    </S.Container>
  );
};

export default Details;
