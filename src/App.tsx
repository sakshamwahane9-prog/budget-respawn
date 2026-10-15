import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import SearchModal from './components/SearchModal';
import AssignmentSEODialog from './components/AssignmentSEODialog';

// Automatically scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isAssignmentGuideOpen, setIsAssignmentGuideOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Keyboard shortcut listener: Cmd/Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e1015] text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      <ScrollToTop />

      {/* Global Navigation Bar */}
      <Navbar
        onOpenAssignmentGuide={() => setIsAssignmentGuideOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Router */}
      <div className="flex-1">
        <Routes>
          {/* Route 1: Homepage */}
          <Route
            path="/"
            element={<HomePage onOpenAssignmentGuide={() => setIsAssignmentGuideOpen(true)} />}
          />

          {/* Route 2 to 8: Article Pages */}
          <Route
            path="/blogs/:slug"
            element={<ArticlePage onOpenAssignmentGuide={() => setIsAssignmentGuideOpen(true)} />}
          />

          {/* Catch-all 404 Handler */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer onOpenAssignmentGuide={() => setIsAssignmentGuideOpen(true)} />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* College Assignment SEO & Image Replacement Interactive Guide */}
      <AssignmentSEODialog
        isOpen={isAssignmentGuideOpen}
        onClose={() => setIsAssignmentGuideOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
