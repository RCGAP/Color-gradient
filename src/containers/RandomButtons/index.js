import { connect } from 'react-redux';

import RandomButtons from 'src/components/RandomButtons';
import { randomizeFirstColor, randomizeLastColor } from 'src/actions';
import { randomHexColor } from 'src/utils';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  randomFirst: () => {
    const color = randomHexColor();
    const action = randomizeFirstColor(color);
    dispatch(action);
  },
  randomLast: () => {
    const color = randomHexColor();
    const action = randomizeLastColor(color);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RandomButtons);
