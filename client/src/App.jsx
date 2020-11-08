import './App.css';
import {useRoutes} from "./routes";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./Context/AuthContext";
import {useAuth} from "./hooks/auth.hook";
import {Navbar} from "./components/navbar";

function App() {
    const {token, login, logout, userId, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
    if (!ready) {
        return <div>LOADING</div> // доделать
    }
    return (
        <AuthContext.Provider  value={{
            token, login, logout, userId, isAuthenticated
        }}>
            <BrowserRouter>
                {isAuthenticated && <Navbar />}
                <div className={"container"}>{routes}</div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
