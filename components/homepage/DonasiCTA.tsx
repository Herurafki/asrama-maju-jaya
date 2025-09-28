import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function DonasiCTA() {
  return (
    <section className="py-16 warm-gradient">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Dukung Pendidikan Santri
          </h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            Berpartisipasilah dalam membangun generasi muslim yang berakhlak mulia. 
            Setiap donasi Anda sangat berarti untuk kemajuan pendidikan di asrama.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/donasi">
                Donasi Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tentang">
                Pelajari Lebih Lanjut
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}