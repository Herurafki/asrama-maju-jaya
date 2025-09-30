import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Users, Calendar, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pendaftaran Santri - Asrama Nurul Hikmah',
  description: 'Informasi pendaftaran santri baru Asrama Nurul Hikmah',
};

const persyaratan = [
  'Fotokopi Kartu Keluarga (1 lembar)',
  'Fotokopi Akta Kelahiran (1 lembar)',
  'Fotokopi Ijazah terakhir (1 lembar)',
  'Pas foto 3x4 berwarna (4 lembar)',
  'Surat keterangan sehat dari dokter',
  'Surat pernyataan orang tua/wali'
];

const biaya = [
  { item: 'Uang Pendaftaran', nominal: 'Rp 500.000' },
  { item: 'Uang Gedung (Sekali)', nominal: 'Rp 5.000.000' },
  { item: 'SPP Per Bulan', nominal: 'Rp 800.000' },
  { item: 'Uang Makan Per Bulan', nominal: 'Rp 600.000' }
];

const alurSteps = [
  { no: 1, title: 'Pengisian Formulir', desc: 'Isi formulir pendaftaran online atau datang langsung' },
  { no: 2, title: 'Verifikasi Dokumen', desc: 'Tim kami akan memverifikasi kelengkapan dokumen' },
  { no: 3, title: 'Tes Masuk', desc: 'Tes wawancara dan kemampuan dasar' },
  { no: 4, title: 'Pengumuman', desc: 'Pengumuman hasil seleksi via WhatsApp/Email' },
  { no: 5, title: 'Daftar Ulang', desc: 'Pembayaran dan penandatanganan perjanjian' }
];

export default function PendaftaranPage() {
  const whatsappNumber = '+6281234567890';
  const waLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Assalamualaikum, saya ingin bertanya tentang pendaftaran santri baru')}`;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Tahun Ajaran 2024/2025</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pendaftaran Santri Baru</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah bersama kami dalam membentuk generasi berakhlak mulia dan berprestasi
          </p>
        </div>

        {/* CTA Utama */}
        <Card className="mb-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Pendaftaran Dibuka!</h2>
            <p className="text-muted-foreground mb-6">
              Hubungi kami sekarang untuk informasi lebih lanjut dan proses pendaftaran
            </p>
            <Button size="lg" asChild>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Daftar via WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Persyaratan */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Persyaratan Pendaftaran</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {persyaratan.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Biaya */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Rincian Biaya</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {biaya.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center pb-3 border-b last:border-0">
                    <span className="text-sm font-medium">{item.item}</span>
                    <span className="text-sm font-bold text-primary">{item.nominal}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground pt-2">
                  * Biaya dapat berubah sewaktu-waktu. Hubungi kami untuk informasi terkini.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alur Pendaftaran */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Alur Pendaftaran</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {alurSteps.map((step, idx) => (
                <div key={step.no} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {step.no}
                    </div>
                  </div>
                  <div className={idx !== alurSteps.length - 1 ? 'pb-6 border-l-2 border-dashed border-border pl-6 -ml-5' : 'pl-6 -ml-5'}>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Ada pertanyaan? Tim kami siap membantu Anda
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              Tanya Via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}