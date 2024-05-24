import Image from 'next/image';
import '../globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/dashboard-image.jpg"
            alt="Auth image"
            width={700}
            height={700}
          />
        </div>
      </div>
    </main>
  );
}
