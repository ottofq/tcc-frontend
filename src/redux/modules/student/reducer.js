/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import produce from 'immer';

const intialState = {
  data: null,
  list: [],
  total: 0,
  page: 1,
  loadingData: false,
};

const student = (state = intialState, action) => {
  switch (action.type) {
    case 'student:FETCH_STUDENTS':
      return produce(state, draftState => {
        draftState.page = action.payload.page;
        draftState.loadingData = true;
        draftState.data = null;
      });

    case 'student:FETCH_STUDENTS_SUCCESS':
      return produce(state, draftState => {
        draftState.list = action.payload.students;
        draftState.total = action.payload.total;
        draftState.loadingData = false;
      });
    case 'student:FETCH_STUDENTS_FAILURE':
      return {
        ...state,
        loadingData: false,
      };
    case 'nstudent:FETCH_STUDENT':
      return {
        ...state,
        loadingData: true,
      };
    case 'student:FETCH_STUDENT_SUCCESS':
      return {
        ...state,
        data: action.payload.student,
        loadingData: false,
      };
    case 'student:FETCH_STUDENT_FAILURE':
      return {
        ...state,
        loadingData: false,
      };
    default:
      return state;
  }
};

export default student;
