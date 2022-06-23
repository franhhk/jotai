import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
import Jotai from './Jotai';
import TextLength from './jotaiTest/TextLength';
import TextColorChange from './jotaiTest/TextColorChange';
import AtomInAtomCount from './jotaiTest/AtomInAtomCount';
import FocusAtom from './jotaiTest/FocusAtom';
import SplitAtom from './jotaiTest/SplitAtom';
import Query from './jotaiTest/Query';

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
        <Route path="atom-in-atom-count" element={<AtomInAtomCount />} />
        <Route path="focusAtom" element={<FocusAtom />} />
        <Route path="splitAtom" element={<SplitAtom />} />
        <Route path="Query" element={<Query />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
