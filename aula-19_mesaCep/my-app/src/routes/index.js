import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViaCEP from '../pages/ViaCep';
import BrasilAPICEP from '../pages/BrasilApiCep';
import NotFound from '../pages/NotFound';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ViaCEP />} />
      <Route path="/:cep" element={<ViaCEP />} />
      <Route path="/brasilapi/" element={<BrasilAPICEP />} />
      <Route path="/brasilapi/:cep" element={<BrasilAPICEP />} />
      <Route path="*" element={<h3>404 A página não foi encontrada</h3>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;