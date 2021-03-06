import React from 'react';
import { F7App, View } from 'framework7-react';
import MainPage from './MainPage';

function App() {
  const f7params = {
    name: 'NFL Drafts',
    id: 'com.collier.nfldrafts',
    theme: 'auto',
    iosTranslucentBars: false,
    touch: {
      fastClicks: true
    }
  };

  return (
    <F7App params={f7params}>
      <View main url="/">
        <MainPage />
      </View>
    </F7App>
  );
}

export default App;
  
