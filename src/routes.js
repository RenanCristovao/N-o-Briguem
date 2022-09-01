import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { React } from 'react';
import Page2 from './Pages/page2';
import Page1 from './Pages/page1';
import ErroPage from './Pages/ErroPage';

const Rota = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path='/page2' element={<Page2 /> } />
                <Route path='*' element={<ErroPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rota;