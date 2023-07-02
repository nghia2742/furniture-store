import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            element={<Page />}
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
