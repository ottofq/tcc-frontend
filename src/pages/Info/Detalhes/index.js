import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ArrowBack } from '@material-ui/icons';
import { format, parseISO } from 'date-fns';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import {
  Container,
  Form,
  TextFieldUI,
  ContainerEditor,
  ButtonUI,
} from './styles';
import api from '../../../services/api';

export default function DetalhesInfo({ match, history }) {
  const { control, setValue } = useForm();
  const [editorState, setEditorState] = useState();

  useEffect(() => {
    async function loadInfo() {
      try {
        const { id } = match.params;
        const result = await api.get(`/informacoes/${id}`);
        setValue('titulo', result.data.titulo);
        setValue('data', format(parseISO(result.data.data), 'yyyy-MM-dd'));
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
  }, [match.params, setValue]);

  function handleClick() {
    history.goBack();
  }

  return (
    <Container>
      <Form>
        <Controller
          as={
            <TextFieldUI
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
            <TextFieldUI
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

        <ContainerEditor>
          <Editor
            editorState={editorState}
            editorClassName="editor"
            onEditorStateChange={setEditorState}
            toolbarHidden
            readOnly
          />
        </ContainerEditor>

        <ButtonUI
          startIcon={<ArrowBack fontSize="large" />}
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Voltar
        </ButtonUI>
      </Form>
    </Container>
  );
}
