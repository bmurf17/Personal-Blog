import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignedIn from "./Componets/auth/SignIn";
import SignedUp from "./Componets/auth/SignUp";
import Dashboard from "./Componets/dashboard/Dashboard";
import NavBar from "./Componets/layout/Navbar";
import CreateProject from "./Componets/projects/CreateProject";
import ProjectDetails from "./Componets/projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      <Routes>
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<SignedIn />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<SignedUp />} />
      </Routes>
      <Routes>
        <Route path="/create" element={<CreateProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
