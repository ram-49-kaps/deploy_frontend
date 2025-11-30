import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import InfluencerPage from "./pages/InfluencerPage";
import CampaignPage from "./pages/CampaignPage";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MainLayout>
           <Toaster position="top-right" />
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />} />

            {/* Influencers CRUD Page */}
            <Route path="/influencers" element={<InfluencerPage />} />

            {/* Campaigns CRUD Page */}
            <Route path="/campaigns" element={<CampaignPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
