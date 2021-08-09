// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import LoginView from './LoginView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(LoginView);
