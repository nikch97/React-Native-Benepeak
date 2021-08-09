// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import SignupView from './SignupView';

export default compose(
  connect(
    state => ({}),
    dispatch => ({}),
  ),
)(SignupView);
