import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TentangPage from "./pages/TentangPage";
import FasilitasPage from "./pages/FasilitasPage";
import PengumumanPage from "./pages/PengumumanPage";
import NotFound from "./pages/NotFound";
import { ComingSoon } from "./components/ComingSoon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/fasilitas" element={<FasilitasPage />} />
          <Route path="/pengumuman" element={<PengumumanPage />} />
          <Route path="/galeri" element={
            <ComingSoon 
              title="Galeri Foto" 
              description="Koleksi foto kegiatan dan fasilitas Asrama Nurul Hikmah akan segera tersedia di halaman ini."
              pageTitle="Galeri"
            />
          } />
          <Route path="/berita" element={
            <ComingSoon 
              title="Berita & Artikel" 
              description="Update berita terbaru dan artikel menarik seputar kegiatan asrama akan tersedia di sini."
              pageTitle="Berita"
            />
          } />
          <Route path="/pengurus" element={
            <ComingSoon 
              title="Pengurus Asrama" 
              description="Profil lengkap pengurus dan tenaga pendidik Asrama Nurul Hikmah akan ditampilkan di halaman ini."
              pageTitle="Pengurus"
            />
          } />
          <Route path="/pendaftaran" element={
            <ComingSoon 
              title="Pendaftaran Santri" 
              description="Informasi lengkap prosedur pendaftaran santri baru akan tersedia di halaman ini."
              pageTitle="Pendaftaran"
            />
          } />
          <Route path="/donasi" element={
            <ComingSoon 
              title="Donasi & Kontribusi" 
              description="Platform donasi online untuk mendukung pengembangan fasilitas dan program asrama."
              pageTitle="Donasi"
            />
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
