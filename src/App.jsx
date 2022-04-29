
import { AppScss } from './style';
import { ToggleTheme } from './components';
import { MainRouter } from './config';

function App() {
  return (
    <div className="App dark:text-white dark:bg-gray-900 bg-white min-h-screen ">
      <MainRouter />
    </div>
  );
}

export default App;
