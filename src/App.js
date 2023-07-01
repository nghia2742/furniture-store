import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { publicRoutes } from './routes';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
    return (
        <Router basename="/furniture-store">
            <div className="App">
                <Routes>
                    {/* {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route key={index}
                                exact={route.exact}
                                path={route.path}
                                element={
                                  <Page/> 
                                }
                            />
                        );
                    })} */}
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/shop" element={<Shop />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
