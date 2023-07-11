import React from 'react';
import { useFonts } from 'expo-font';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Main from './Main';
import Loading from './components/utilComponents/Loading';

export default function App() {

  const [trebucLoaded] = useFonts(
    { 'Trebuc': require('./assets/fonts/trebuc.ttf') },
  );

  const [hussarLoaded] = useFonts({
    'Hussar': require('./assets/fonts/HussarNovaExtrabold-Dy4D.otf')
  });

  if (!trebucLoaded || !hussarLoaded) return <Loading />

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};  