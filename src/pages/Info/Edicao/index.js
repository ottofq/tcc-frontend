import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Save } from '@material-ui/icons';
import { EditorState, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useSnackbar } from 'notistack';

import {
  Container,
  Form,
  TextFieldUI,
  ButtonUI,
  ContainerEditor,
} from './styles';
import api from '../../../services/api';

export default function InfoEdicao({ match, history }) {
  const { handleSubmit, setValue, control } = useForm();
  const [info, setInfo] = useState('');
  const [editorState, setEditorState] = useState();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    async function loadInfo() {
      try {
        const { id } = match.params;
        const result = await api.get(`/informacoes/${id}`);
        setInfo(result.data);
        const contentBlock = htmlToDraft(result.data.descricao);
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        setEditorState(EditorState.createWithContent(contentState));
      } catch (error) {
        console.log(error);
      }
    }
    loadInfo();
  }, [match.params]);

  useEffect(() => {
    if (info) {
      setValue('titulo', info.titulo);
    }
  }, [info, setValue]);

  async function onSubmit(data) {
    try {
      const { titulo } = data;
      const user = JSON.parse(localStorage.getItem('@app-ru/user'));
      const contentInfo = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      const result = await api.put(
        `/informacoes/${info._id}`,
        { titulo, descricao: contentInfo },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (result.status === 200) {
        enqueueSnackbar('Aviso editado com Sucesso!', {
          variant: 'success',
        });
      }
      history.push('/dashboard/avisos/listagem');
    } catch (error) {
      enqueueSnackbar('Erro ao editar o aviso!', {
        variant: 'error',
      });
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={<TextFieldUI label="Titulo" variant="outlined" />}
          name="titulo"
          defaultValue=""
          control={control}
          rules={{ required: true }}
        ></Controller>

        <ContainerEditor>
          <Editor
            editorState={editorState}
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
        </ContainerEditor>

        <ButtonUI
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Salvar Edição
        </ButtonUI>
      </Form>
    </Container>
  );
}
