import { BrowserRouter } from 'react-router-dom';
import { MainPage } from './components';
import { CheckSizeContextProvider, DarkModeContextProvider } from './context';

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
