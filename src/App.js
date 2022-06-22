import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Jotai from './Jotai';
import TextLength from './jotaiTest/TextLength';
import TextColorChange from './jotaiTest/TextColorChange';

/**
 * Jotai 관련 테스트 진행 중
 * @returns
 */
function App() {
  console.log('app ===');
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="jotai" element={<Jotai />} />
        <Route path="text-color-change" element={<TextColorChange />} />
        <Route path="text-length" element={<TextLength />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
