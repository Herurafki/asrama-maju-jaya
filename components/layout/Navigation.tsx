'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang', href: '/tentang' },
  { name: 'Fasilitas', href: '/fasilitas' },
  { name: 'Pengumuman', href: '/pengumuman' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Berita', href: '/berita' },
  { name: 'Pengurus', href: '/pengurus' },
  { name: 'Pendaftaran', href: '/pendaftaran' },
  { name: 'Donasi', href: '/donasi' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">NH</span>
            </div>
            <span className="hidden font-bold sm:inline-block">
              Asrama Nurul Hikmah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <div className="flex items-center justify-between pb-4">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">NH</span>
                  </div>
                  <span className="font-bold">Asrama Nurul Hikmah</span>
                </Link>
              </div>
              
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start px-3 py-3 text-base font-medium",
                        pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}