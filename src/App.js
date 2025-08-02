import { Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './pages/Layout';
import ViewProfile from './pages/ViewProfile';
import ViewMain from './pages/ViewMain';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<ViewMain />}/>
          <Route path="view-profile" element={<ViewProfile />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
