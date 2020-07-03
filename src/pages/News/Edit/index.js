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
import { useSnackbar } from 'notistack';
import { useHistory, useParams } from 'react-router-dom';

import * as S from './styles';
import api from '../../../services/api';

export default function Edit() {
  const { handleSubmit, setValue, control } = useForm();
  const [loadingData, setLoadingData] = useState(false);
  const [loadingSendData, setLoadingSendData] = useState(false);
  const [news, setNews] = useState(null);
  const [editorState, setEditorState] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    async function loadNews() {
      try {
        setLoadingData(true);
        const { id } = params;
        const result = await api.get(`/informacoes/${id}`);
        setNews(result.data);
        const contentBlock = htmlToDraft(result.data.descricao);
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        setEditorState(EditorState.createWithContent(contentState));
        setLoadingData(false);
      } catch (error) {
        setLoadingData(false);
        enqueueSnackbar('Erro ao carregar os avisos!', {
          variant: 'error',
        });
      }
    }
    loadNews();
  }, [params, enqueueSnackbar]);

  useEffect(() => {
    if (news && loadingData === false) {
      setValue('titulo', news.titulo);
    }
  }, [news, setValue, loadingData]);

  async function onSubmit(data) {
    try {
      setLoadingSendData(true);
      const { titulo } = data;
      const contentInfo = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      const result = await api.put(`/informacoes/${news._id}`, {
        titulo,
        descricao: contentInfo,
      });

      if (result.status === 200) {
        enqueueSnackbar('Aviso editado com Sucesso!', {
          variant: 'success',
        });
        setLoadingSendData(false);
      }
      history.push('/dashboard/noticias/listagem');
    } catch (error) {
      setLoadingSendData(false);
      enqueueSnackbar('Erro ao editar o aviso!', {
        variant: 'error',
      });
    }
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
            disabled={loadingSendData}
            startIcon={loadingSendData ? '' : <Save fontSize="large" />}
            variant="contained"
            color="primary"
            type="submit"
          >
            {loadingSendData ? (
              <CircularProgress color="primary" />
            ) : (
              'Salvar Edição'
            )}
          </S.Button>
        </S.Form>
      )}
    </S.Container>
  );
}
