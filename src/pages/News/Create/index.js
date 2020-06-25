import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Save } from '@material-ui/icons';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

import * as S from './styles';

import api from '../../../services/api';

export default function Create() {
  const { register, handleSubmit, reset } = useForm();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  async function onSubmit(data) {
    try {
      const contentInfo = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      const { titulo } = data;
      const result = await api.post('/informacoes/', {
        titulo,
        descricao: contentInfo,
      });

      if (result.status === 200) {
        enqueueSnackbar('Aviso cadastrado com Sucesso!', {
          variant: 'success',
        });
      }
      reset();
      history.push('/dashboard/avisos/listagem');
    } catch (error) {
      enqueueSnackbar('Erro ao cadastrar o aviso!', {
        variant: 'error',
      });
    }
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          name="titulo"
          inputRef={register({ required: true })}
          label="Titulo"
          variant="outlined"
        />

        <S.ContainerEditor>
          <Editor
            initialEditorState={editorState}
            editorClassName="editor"
            toolbarClassName="toolbar"
            onEditorStateChange={setEditorState}
            toolbar={{
              options: [
                'inline',
                'blockType',
                'list',
                'textAlign',
                'colorPicker',
                'link',
                'emoji',
                'remove',
                'history',
              ],
              fontFamily: {
                options: ['PT Sans'],
              },
            }}
          />
        </S.ContainerEditor>

        <S.Button
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Cadastrar
        </S.Button>
      </S.Form>
    </S.Container>
  );
}
