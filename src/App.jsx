import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { PublicLayout } from './layouts/PublicLayout';
import { PortalLayout } from './layouts/PortalLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { PortalPage } from './pages/PortalPage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { NewsPage } from './pages/NewsPage';
import { DonationPage } from './pages/DonationPage';

import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NewsDetailPage } from './pages/NewsDetailPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/programmes" element={<ProgramsPage />} />
            <Route path="/projets" element={<ProjectsPage />} />
            <Route path="/projets/:slug" element={<ProjectDetailPage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/actualites/:slug" element={<NewsDetailPage />} />
            <Route path="/don" element={<DonationPage />} />
          </Route>
          
          {/* Phase B Portal routes */}
          <Route path="/connexion" element={<LoginPage />} />
          <Route path="/portail" element={<PortalLayout />}>
            <Route index element={<PortalPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
