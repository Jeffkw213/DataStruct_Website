
import Title from './components/Title.js';
import LinkedList from './components/Linked_List.js';
import Trees from './components/Trees.js';
import { BrowserRouter, Route, Routes} from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
      <div className='App'>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/LinkedList" element={<LinkedList />} />
        <Route path="/Trees" element={<Trees />} />
      </Routes>
      </div>
    </BrowserRouter> 
  );
}
