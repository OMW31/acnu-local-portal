import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppMinimal() {
  return (
    <BrowserRouter>
      <div style={{ padding: '20px' }}>
        <h1>ACNU App Minimal</h1>
        <Routes>
          <Route path="/" element={<div>Homepage Test</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppMinimal;