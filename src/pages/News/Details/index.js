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
import { useSnackbar } from 'notistack';

import * as S from './styles';
import api from '../../../services/api';

export default function Details() {
  const { control, setValue } = useForm();
  const [editorState, setEditorState] = useState();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const params = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        const { id } = params;
        const result = await api.get(`/informacoes/${id}`);
        setNews(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        enqueueSnackbar('Erro ao carregar os avisos!', {
          variant: 'error',
        });
      }
    }
    loadNews();
  }, [params, enqueueSnackbar]);

  useEffect(() => {
    if (news && !loading) {
      const contentBlock = htmlToDraft(news.descricao);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setEditorState(EditorState.createWithContent(contentState));
      setValue('titulo', news.titulo);
      setValue('data', format(parseISO(news.data), 'yyyy-MM-dd'));
    }
  }, [news, setValue, loading]);

  function handleClick() {
    history.goBack();
  }

  return (
    <S.Container>
      {loading ? (
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
}
