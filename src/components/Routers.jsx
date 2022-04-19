import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Input from './input/Input';
import Slider from './slider/Slider';
import Tab from './tab/Tab';
import Toggle from './toggle/Toggle';
import Dropdown from './dropdown/Dropdown';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/input" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
