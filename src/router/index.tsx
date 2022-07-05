import { Routes, Route } from 'react-router-dom';
import Home from '@/page/Home';
import About from '../page/About';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}
