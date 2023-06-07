
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HouseForm from './components/HouseForm/HouseForm';
import { HouseFormProvider } from './context/House/HouseFormProvider';
import HouseDetails from './components/HouseDetails/HouseDetails';
import { HouseProvider } from './context/House/HouseProvider';

function App() {
  return (
    <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HouseFormProvider><HouseForm/></HouseFormProvider>} />
          <Route path="/house-details/:id" element={<HouseProvider><HouseDetails/></HouseProvider>} />
        </Route>
    </Routes>
  );
}

export default App;
