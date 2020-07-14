export const fetchStudents = page => {
  return {
    type: 'student:FETCH_STUDENTS',
    payload: { page },
  };
};

export const fetchStudentsSuccess = (students, total) => {
  return {
    type: 'student:FETCH_STUDENTS_SUCCESS',
    payload: { students, total },
  };
};

export const fetchStudentsFailure = () => {
  return {
    type: 'student:FETCH_STUDENTS_FAILURE',
  };
};

export const fetchStudent = id => {
  return {
    type: 'student:FETCH_STUDENT',
    payload: { id },
  };
};

export const fetchStudentSuccess = student => {
  return {
    type: 'student:FETCH_STUDENT_SUCCESS',
    payload: { student },
  };
};

export const fetchStudentFailure = () => {
  return {
    type: 'student:FETCH_STUDENT_FAILURE',
  };
};
