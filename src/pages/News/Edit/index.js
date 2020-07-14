/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Save } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchOneNews, editNews } from 'redux/modules/news/actions';
import * as S from './styles';

const Edit = () => {
  const { handleSubmit, setValue, control } = useForm();

  const [editorState, setEditorState] = useState();
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const { data: news, loadingData, loadingEdit } = useSelector(
    state => state.news
  );

  useEffect(() => {
    const { id } = params;
    dispatch(fetchOneNews(id));
    const contentBlock = htmlToDraft(news.descricao);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    setEditorState(EditorState.createWithContent(contentState));
  }, [params, dispatch, news.descricao, setValue]);

  useEffect(() => {
    if (news && loadingData === false) {
      setValue('titulo', news.titulo);
    }
  }, [news, setValue, loadingData]);

  async function onSubmit(data) {
    const { id } = params;
    const { titulo } = data;
    const descricao = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    dispatch(editNews(id, titulo, descricao, history));
  }
  return (
    <S.Container>
      {loadingData ? (
        <S.ContainerLoading>
          <CircularProgress color="primary" />
        </S.ContainerLoading>
      ) : (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            as={<S.Input label="Titulo" variant="outlined" />}
            name="titulo"
            defaultValue=""
            control={control}
            rules={{ required: true }}
          />

          <S.ContainerEditor>
            <Editor
              editorState={editorState}
              editorClassName="editor"
              toolbarClassName="toolbar"
              onEditorStateChange={setEditorState}
              toolbar={{
                options: [
                  'blockType',
                  'emoji',
                  'history',
                  'list',
                  'inline',
                  'textAlign',
                  'link',
                ],
                fontFamily: {
                  options: ['PT Sans'],
                },
              }}
            />
          </S.ContainerEditor>

          <S.Button
            disabled={loadingEdit}
            startIcon={loadingEdit ? '' : <Save fontSize="large" />}
            variant="contained"
            color="primary"
            type="submit"
          >
            {loadingEdit ? (
              <CircularProgress color="primary" />
            ) : (
              'Salvar Edição'
            )}
          </S.Button>
        </S.Form>
      )}
    </S.Container>
  );
};

export default Edit;
