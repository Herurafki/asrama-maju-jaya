'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Building2, BookOpen, Users, MessageCircle, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donasi & Kontribusi - Asrama Nurul Hikmah',
  description: 'Dukung pengembangan fasilitas dan program pendidikan asrama',
};

const programDonasi = [
  {
    icon: Building2,
    title: 'Pembangunan Fasilitas',
    desc: 'Renovasi dan pembangunan gedung asrama yang lebih layak',
    color: 'text-primary'
  },
  {
    icon: BookOpen,
    title: 'Beasiswa Santri',
    desc: 'Bantuan pendidikan bagi santri kurang mampu',
    color: 'text-accent'
  },
  {
    icon: Users,
    title: 'Program Kegiatan',
    desc: 'Mendukung kegiatan ekstrakurikuler dan pembinaan karakter',
    color: 'text-primary'
  }
];

const rekeningList = [
  { bank: 'Bank Mandiri', norek: '1234567890', atas: 'Yayasan Asrama Nurul Hikmah' },
  { bank: 'Bank BRI', norek: '0987654321', atas: 'Yayasan Asrama Nurul Hikmah' },
  { bank: 'Bank BCA', norek: '5678901234', atas: 'Yayasan Asrama Nurul Hikmah' }
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="h-8"
    >
      {copied ? (
        <>
          <CheckCircle className="h-4 w-4 mr-1 text-primary" />
          Tersalin
        </>
      ) : (
        <>
          <Copy className="h-4 w-4 mr-1" />
          Salin
        </>
      )}
    </Button>
  );
}

export default function DonasiPage() {
  const whatsappNumber = '+6281234567890';
  const waLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Assalamualaikum, saya ingin konfirmasi donasi untuk Asrama Nurul Hikmah')}`;

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Donasi & Kontribusi</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Berbagi kebaikan untuk masa depan pendidikan santri yang lebih cerah
          </p>
        </div>

        {/* Motivasi */}
        <Card className="mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardContent className="p-8">
            <blockquote className="text-center italic text-lg mb-4">
              "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lainnya"
            </blockquote>
            <p className="text-center text-sm text-muted-foreground">
              (HR. Ahmad, ath-Thabrani, ad-Daruqutni)
            </p>
          </CardContent>
        </Card>

        {/* Program Donasi */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Tujuan Donasi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {programDonasi.map((program, idx) => (
              <Card key={idx} className="text-center hover-scale">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <program.icon className={`h-6 w-6 ${program.color}`} />
                  </div>
                  <h3 className="font-semibold mb-2">{program.title}</h3>
                  <p className="text-sm text-muted-foreground">{program.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rekening */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Informasi Rekening Donasi</CardTitle>
            <CardDescription>
              Transfer donasi Anda ke salah satu rekening berikut
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {rekeningList.map((rek, idx) => (
              <div key={idx} className="p-4 rounded-lg border bg-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <Badge variant="outline" className="mb-2">{rek.bank}</Badge>
                    <p className="font-mono font-bold text-lg">{rek.norek}</p>
                    <p className="text-sm text-muted-foreground">a.n. {rek.atas}</p>
                  </div>
                  <CopyButton text={rek.norek} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Transparansi */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Transparansi Donasi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Kami berkomitmen untuk mengelola setiap donasi dengan penuh amanah dan transparan. 
              Laporan penggunaan dana donasi dipublikasikan secara berkala melalui website dan media sosial kami.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Laporan keuangan transparan setiap triwulan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Dokumentasi penggunaan dana dipublikasikan</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Audit internal dan eksternal berkala</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="bg-gradient-to-br from-primary to-accent text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Konfirmasi Donasi</h3>
            <p className="mb-6 opacity-90">
              Setelah melakukan transfer, silakan konfirmasi donasi Anda melalui WhatsApp
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Konfirmasi via WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Jazakumullah khairan katsiran atas kepercayaan dan kontribusi Anda untuk kemajuan pendidikan Islam
        </p>
      </div>
    </div>
  );
}