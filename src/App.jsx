import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/users" element={<Users />} />
                {/*<Route path="*" element={<Navigate to="/login" />} />*/}
            </Routes>
        </Router>
    );
}

export default App;
