import { BrowserRouter } from "react-router-dom";
import { MainPage } from "./components";
import {
  CheckSizeContextProvider,
  DarkModeContextProvider,
  DatabaseContextProvider,
} from "./context";

const App = () => {
  return (
    <BrowserRouter>
      <DatabaseContextProvider>
        <DarkModeContextProvider>
          <CheckSizeContextProvider>
            <MainPage />
          </CheckSizeContextProvider>
        </DarkModeContextProvider>
      </DatabaseContextProvider>
    </BrowserRouter>
  );
};

export default App;
