import { BrowserRouter } from 'react-router-dom';
import AppRoute from '@routes/Route';

import '@styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
