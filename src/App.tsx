import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ConferencePage } from "@/pages/ConferencePage";
import { SpeakersPage } from "@/pages/SpeakersPage";
import { ProgramPage } from "@/pages/ProgramPage";
import { AbstractsPage } from "@/pages/AbstractsPage";
import { RegistrationPage } from "@/pages/RegistrationPage";
import { PastConferencesPage } from "@/pages/PastConferencesPage";
import { VenuePage } from "@/pages/VenuePage";
import { ContactPage } from "@/pages/ContactPage";
import { ImportantDatesPage } from "@/pages/ImportantDatesPage";
import { ReviewProcessPage } from "@/pages/ReviewProcessPage";
import { PresentersPage } from "@/pages/PresentersPage";
import { SponsorsPage } from "@/pages/SponsorsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="conference" element={<ConferencePage />} />
          <Route path="speakers" element={<SpeakersPage />} />
          <Route path="program" element={<ProgramPage />} />
          <Route path="abstracts" element={<AbstractsPage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="past-conferences" element={<PastConferencesPage />} />
          <Route path="venue" element={<VenuePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="important-dates" element={<ImportantDatesPage />} />
          <Route path="review-process" element={<ReviewProcessPage />} />
          <Route path="presenters" element={<PresentersPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
