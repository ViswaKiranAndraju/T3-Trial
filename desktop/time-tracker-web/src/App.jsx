// import { Routes, Route, Link } from 'react-router-dom';
// import Home from './pages/Home';
// import VerifyEmployee from './pages/VerifyEmployee';

// export default function App() {
//   return (
//     <div className="p-6 font-sans">
//       <h1 className="text-2xl font-bold">Mercor Time Tracker</h1>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/verify/:id" element={<VerifyEmployee />} />
//       </Routes>
//     </div>
//   );
// }

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VerifyEmployee from './pages/VerifyEmployee';

export default function App() {
  return (
    <div className="container">
      <h1>Mercor Time Tracker</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify/:id" element={<VerifyEmployee />} />
      </Routes>
    </div>
  );
}
