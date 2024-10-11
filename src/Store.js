import { configureStore, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      Cookies.set('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.user.type = '';
      Cookies.remove('user');
    },
    setUserFromCookies: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
  },
});

// Unlocked Pages slice
const unlockedPagesSlice = createSlice({
  name: 'unlockedPages',
  initialState: {
    unlockedPagesFrench: typeof window !== "undefined" && localStorage.getItem('unlockedPagesFrench')
      ? JSON.parse(localStorage.getItem('unlockedPagesFrench'))
      : ["1","2","3","4","5"],
    unlockedPagesSpanish: typeof window !== "undefined" && localStorage.getItem('unlockedPagesSpanish')
      ? JSON.parse(localStorage.getItem('unlockedPagesSpanish'))
      : ["1","2","3","4","5"],
    unlockedPagesGerman: typeof window !== "undefined" && localStorage.getItem('unlockedPagesGerman')
      ? JSON.parse(localStorage.getItem('unlockedPagesGerman'))
      : ["1","2","3","4","5"],
  },
  reducers: {
    unlockPage: (state, action) => {
      const { subject, pageId } = action.payload;
      let unlockedPages;

      switch (subject) {
        case 'French':
          unlockedPages = state.unlockedPagesFrench;
          if (!unlockedPages.includes(...pageId)) {
            state.unlockedPagesFrench.push(...pageId);
          }
          break;
        case 'Spanish':
          unlockedPages = state.unlockedPagesSpanish;
          if (!unlockedPages.includes(...pageId)) {
            state.unlockedPagesSpanish.push(...pageId);
          }
          break;
        case 'German':
          unlockedPages = state.unlockedPagesGerman;
          if (!unlockedPages.includes(...pageId)) {
            state.unlockedPagesGerman.push(...pageId);
          }
          break;
      }
    },
  },
});

// Lessons slice (similar to unlockedPagesSlice)
const lessonsSlice = createSlice({
  name: 'unlockedLessons',
  initialState: {
    unlockedLessonsFrench: typeof window !== "undefined" && localStorage.getItem('unlockedLessonsFrench')
      ? JSON.parse(localStorage.getItem('unlockedLessonsFrench'))
      : ["1","2","3","4","5"],
    unlockedLessonsSpanish: typeof window !== "undefined" && localStorage.getItem('unlockedLessonsSpanish')
      ? JSON.parse(localStorage.getItem('unlockedLessonsSpanish'))
      : ["1","2","3","4","5"],
    unlockedLessonsGerman: typeof window !== "undefined" && localStorage.getItem('unlockedLessonsGerman')
      ? JSON.parse(localStorage.getItem('unlockedLessonsGerman'))
      : ["1","2","3","4","5"],
      unlockedLessonsMultilingual: typeof window !== "undefined" && localStorage.getItem('unlockedLessonsMultilingual')
      ? JSON.parse(localStorage.getItem('unlockedLessonsMultilingual'))
      : ["1","2","3","4","5"],
  },
  reducers: {
    unlockLesson: (state, action) => {
      const { subject, lessonId } = action.payload;
      let unlockedLessons;

      switch (subject) {
        case 'French':
          unlockedLessons = state.unlockedLessonsFrench;
          if (!unlockedLessons.includes(...lessonId)) {
            state.unlockedLessonsFrench.push(...lessonId);
          }
          break;
        case 'Spanish':
          unlockedLessons = state.unlockedLessonsSpanish;
          if (!unlockedLessons.includes(...lessonId)) {
            state.unlockedLessonsSpanish.push(...lessonId);
          }
          break;
        case 'German':
          unlockedLessons = state.unlockedLessonsGerman;
          if (!unlockedLessons.includes(...lessonId)) {
            state.unlockedLessonsGerman.push(...lessonId);
          }
          break;
          case 'Multilingual':
            unlockedLessons = state.unlockedLessonsMultilingual;
            if (!unlockedLessons.includes(...lessonId)) {
              state.unlockedLessonsMultilingual.push(...lessonId);
            }
            break;
      }
    },
  },
});

// Exercises slice (similar to unlockedPagesSlice)
const exercisesSlice = createSlice({
  name: 'unlockedExercises',
  initialState: {
    unlockedExercisesFrench: typeof window !== "undefined" && localStorage.getItem('unlockedExercisesFrench')
      ? JSON.parse(localStorage.getItem('unlockedExercisesFrench'))
      : ["1","2","3","4","5"],
    unlockedExercisesSpanish: typeof window !== "undefined" && localStorage.getItem('unlockedExercisesSpanish')
      ? JSON.parse(localStorage.getItem('unlockedExercisesSpanish'))
      : ["1","2","3","4","5"],
    unlockedExercisesGerman: typeof window !== "undefined" && localStorage.getItem('unlockedExercisesGerman')
      ? JSON.parse(localStorage.getItem('unlockedExercisesGerman'))
      : ["1","2","3","4","5"],
  },
  reducers: {
    unlockExercise: (state, action) => {
      const { subject, exerciseId } = action.payload;
      let unlockedExercises;

      switch (subject) {
        case 'French':
          unlockedExercises = state.unlockedExercisesFrench;
          if (!unlockedExercises.includes(...exerciseId)) {
            state.unlockedExercisesFrench.push(...exerciseId);
          }
          break;
        case 'Spanish':
          unlockedExercises = state.unlockedExercisesSpanish;
          if (!unlockedExercises.includes(...exerciseId)) {
            state.unlockedExercisesSpanish.push(...exerciseId);
          }
          break;
        case 'German':
          unlockedExercises = state.unlockedExercisesGerman;
          if (!unlockedExercises.includes(...exerciseId)) {
            state.unlockedExercisesGerman.push(...exerciseId);
          }
          break;
      }
    },
  },
});

// Exporting the actions from the slices
export const { login, logout, setUserFromCookies } = authSlice.actions;
export const { unlockPage } = unlockedPagesSlice.actions;
export const { unlockLesson } = lessonsSlice.actions;
export const { unlockExercise } = exercisesSlice.actions;

// Configure the store with the slices
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    unlockedPages: unlockedPagesSlice.reducer,
    unlockedLessons: lessonsSlice.reducer,
    unlockedExercises: exercisesSlice.reducer,
  },
});

// Sync unlocked pages, lessons, and exercises with localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('unlockedPagesFrench', JSON.stringify(state.unlockedPages.unlockedPagesFrench));
  localStorage.setItem('unlockedPagesSpanish', JSON.stringify(state.unlockedPages.unlockedPagesSpanish));
  localStorage.setItem('unlockedPagesGerman', JSON.stringify(state.unlockedPages.unlockedPagesGerman));

  localStorage.setItem('unlockedLessonsFrench', JSON.stringify(state.unlockedLessons.unlockedLessonsFrench));
  localStorage.setItem('unlockedLessonsSpanish', JSON.stringify(state.unlockedLessons.unlockedLessonsSpanish));
  localStorage.setItem('unlockedLessonsGerman', JSON.stringify(state.unlockedLessons.unlockedLessonsGerman));
  localStorage.setItem('unlockedLessonsMultilingual', JSON.stringify(state.unlockedLessons.unlockedLessonsMultilingual));

  localStorage.setItem('unlockedExercisesFrench', JSON.stringify(state.unlockedExercises.unlockedExercisesFrench));
  localStorage.setItem('unlockedExercisesSpanish', JSON.stringify(state.unlockedExercises.unlockedExercisesSpanish));
  localStorage.setItem('unlockedExercisesGerman', JSON.stringify(state.unlockedExercises.unlockedExercisesGerman));
});
