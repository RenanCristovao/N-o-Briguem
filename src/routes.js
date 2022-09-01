import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { React } from 'react';
import Page2 from './page/NaoBriguem';
import Page1 from './page/wecome';
import ErroPage from './page/notFound';


const Rota = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path='/NaoBriguem' element={<Page2 /> } />
                <Route path='*' element={<ErroPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rota;