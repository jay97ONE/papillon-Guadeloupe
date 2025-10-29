import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import FAQ from '@/pages/FAQ';
import NotFound from '@/pages/NotFound';
import EntretienPaysager from '@/pages/EntretienPaysager';
import LocationMotoculteur from '@/pages/LocationMotoculteur';
import Realisations from '@/pages/Realisations';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/entretien-paysager" element={<EntretienPaysager />} />
          <Route
            path="/location-motoculteur"
            element={<LocationMotoculteur />}
          />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
