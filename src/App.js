import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import { publicRoutes } from './routes';

function App() {
    return (
        <Router basename='/furniture-store'>
            <div className="App">
                <Switch>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route key={index}
                                path={route.path}
                                element={<Page />}
                            />
                        );
                    })}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
