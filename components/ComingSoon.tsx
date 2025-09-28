import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowLeft, Construction } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  description: string;
  pageTitle?: string;
}

export function ComingSoon({ title, description, pageTitle }: ComingSoonProps) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 hero-gradient rounded-full flex items-center justify-center mx-auto mb-8">
            <Construction className="h-10 w-10 text-white" />
          </div>

          {/* Badge */}
          <Badge variant="outline" className="mb-4">
            {pageTitle || "Segera Hadir"}
          </Badge>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>

          {/* Info Card */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Halaman ini sedang dalam tahap pengembangan. Tim kami bekerja keras 
                untuk memberikan pengalaman terbaik bagi Anda.
              </p>
              <p className="text-sm text-muted-foreground">
                Sementara itu, Anda dapat menghubungi kami langsung untuk informasi 
                yang Anda butuhkan.
              </p>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hubungi Kami
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}