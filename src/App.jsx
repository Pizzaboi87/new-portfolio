import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './components';
import { CheckSizeContextProvider } from './context/checkSize.context';
import { DarkModeContextProvider } from './context/darkMode.context';

const App = () => {
  return (
    <BrowserRouter>
      <DarkModeContextProvider>
        <CheckSizeContextProvider>
          <MainPage />
        </CheckSizeContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  );
};

export default App;
