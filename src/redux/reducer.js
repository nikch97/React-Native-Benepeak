import { combineReducers } from 'redux';

// ## Generator Reducer Imports
import signup from '../modules/signup/SignupState';
import home from '../modules/home/HomeState';
import gallery from '../modules/gallery/GalleryState';
import app from '../modules/AppState';
import calendar from '../modules/calendar/CalendarState';

export default combineReducers({
  // ## Generator Reducers
  signup,
  home,
  gallery,
  app,
  calendar,
});
