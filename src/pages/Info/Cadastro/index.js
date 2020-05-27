import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Save } from '@material-ui/icons';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import {
  Container,
  Form,
  TextFieldUI,
  ButtonUI,
  ContainerEditor,
} from './styles';
import AlertToast from '../../../components/AlertToast';
import api from '../../../services/api';

export default function InfoCadastro({ history }) {
  const { register, handleSubmit, reset } = useForm();
  const [statusAlert, setStatusAlert] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  async function onSubmit(data) {
    try {
      const contentInfo = draftToHtml(
        convertToRaw(editorState.getCurrentContent())
      );

      const { titulo } = data;
      const user = JSON.parse(localStorage.getItem('@app-ru/user'));
      const result = await api.post(
        '/informacoes/',
        { titulo, descricao: contentInfo },
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );

      if (result.status === 200) {
        setStatusAlert({
          type: 'success',
          msg: 'Aviso cadastrado com sucesso!',
        });
      }
      reset();
      history.push('/dashboard/avisos/listagem');
    } catch (error) {
      console.log(error);
      setStatusAlert({
        type: 'error',
        msg: 'Erro ao cadastrar o aviso!',
      });
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldUI
          name="titulo"
          inputRef={register({ required: true })}
          label="Titulo"
          variant="outlined"
        />

        <ContainerEditor>
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
        </ContainerEditor>

        <ButtonUI
          startIcon={<Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          Cadastrar
        </ButtonUI>
      </Form>
      {statusAlert ? (
        <AlertToast
          key={new Date()}
          typeMessage={statusAlert.type}
          message={statusAlert.msg}
        />
      ) : null}
    </Container>
  );
}
