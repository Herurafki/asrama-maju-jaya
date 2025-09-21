import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-card">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 hero-gradient rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-white">404</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Halaman Tidak Ditemukan</h1>
          <p className="text-muted-foreground mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke beranda atau hubungi kami jika Anda memerlukan bantuan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" asChild>
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
            
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Halaman Sebelumnya
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
