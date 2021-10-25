// == Import npm
import React from 'react';

// == Import
import NbColors from 'src/containers/NbColors';
import RandomButtons from 'src/containers/RandomButtons';
import Colors from 'src/containers/Colors';
import Gradient from 'src/containers/Gradient';
import DirectionButtons from 'src/components/DirectionButtons';

// == Composant
const App = () => (
  <div className="app">
    <NbColors />
    <RandomButtons />
    <Colors />
    <Gradient />
    <DirectionButtons />
  </div>
);

// == Export
export default App;
