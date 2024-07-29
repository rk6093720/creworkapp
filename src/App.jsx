import { Spinner } from '@chakra-ui/react';
import './App.css';
import { lazy, Suspense } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
function App() {
  const Layout = lazy(()=> import("./Pages/Layout"));
  const Login = lazy(()=> import("./Authentication/Login"));
  const MainRoutes = lazy(()=> import("./Pages/Router"));
  const Signup = lazy(()=> import("./Authentication/Signup"));
  const isAuth = true;
  return (
    <div className="App">
      <HashRouter>
        <Suspense
          fallback={
            <Spinner
              thickness="50px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="l"
            />
          }
        >
          <Routes>
            {!isAuth && (
              <Route
                exact
                path="/"
                element={<Navigate to="/login" replace />}
              />
            )}
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup/>}/>
            <Route  path="*" element={<Layout/>}/>
            {isAuth && <Route exact path="/*" element={<MainRoutes />} />}
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
