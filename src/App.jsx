import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import PrivateRoute from './route/PrivateRoute';
import LazyMemoDemo from './components/LazyMemoDemo';
import CardList from './components/CardList';
import MainHome from './components/MainHome';

const App = () => {
  return (
    <MainHome />
    // <Routes>
    //   <Route path="/" element={<MainHome />} />
      
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/register" element={<Register />} />
    //   <Route path="/login" element={<Login />} />

    //   <Route
    //     path="/dashboard"
    //     element={<PrivateRoute element={<Dashboard />} />}
    //   />
    //     <Route path="/main" element={<LazyMemoDemo />} />
    //     <Route path="/card" element={<CardList />} />
    // </Routes>
  );
};

export default App;
