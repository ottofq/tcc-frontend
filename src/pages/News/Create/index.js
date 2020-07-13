import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Save } from '@material-ui/icons';
import { CircularProgress } from '@material-ui/core';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createNews } from 'redux/modules/news/actions';
import * as S from './styles';

const Create = () => {
  const { register, handleSubmit } = useForm();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const history = useHistory();
  const dispatch = useDispatch();
  const loadingData = useSelector(state => state.news.loadingData);

  function onSubmit(data) {
    const { titulo } = data;
    const descricao = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    dispatch(createNews(titulo, descricao, history));
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
          disabled={loadingData}
          startIcon={loadingData ? '' : <Save fontSize="large" />}
          variant="contained"
          color="primary"
          type="submit"
        >
          {loadingData ? <CircularProgress color="inherit" /> : 'Cadastrar'}
        </S.Button>
      </S.Form>
    </S.Container>
  );
};

export default Create;
