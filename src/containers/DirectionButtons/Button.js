import { connect } from 'react-redux';

import Button from 'src/components/DirectionButtons/Button';
import { changeDirection } from 'src/actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeDirection: () => {
    const action = changeDirection(ownProps.direction);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
