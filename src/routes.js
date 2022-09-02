import { BrowserRouter, Routes , Route} from 'react-router-dom'
import { React } from 'react';
import Welcome from './page/welcome';
import NaoBriguem from './page/NaoBriguem';
import NotFound from './page/notFound';

const Rota = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path='/NaoBriguem' element={<NaoBriguem />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Rota;