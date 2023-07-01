import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <Router basename="/furniture-store">
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
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
                    })}
                </Routes>

            </div>
        </Router>
    );
}

export default App;
