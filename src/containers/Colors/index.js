import { connect } from 'react-redux';

import Colors from 'src/components/Colors';

const mapStateToProps = (state) => ({
  firstColor: state.firstColor,
  lastColor: state.lastColor,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
