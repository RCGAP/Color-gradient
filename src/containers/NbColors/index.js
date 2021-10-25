// Import npm
import { connect } from 'react-redux';

// Imports locaux
import NbColors from 'src/components/NbColors';

// branchements
const mapStateToProps = (state) => {
  return {
    nbColors: state.nbColors,
  };
};

// branchements en écriture
const mapDispatchToProps = (dispatch) => {
  return {};
};

// export
export default connect(mapStateToProps, mapDispatchToProps)(NbColors);
