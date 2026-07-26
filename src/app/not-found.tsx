import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted mb-8">Page not found</p>
        <a href="/" className="button-primary inline-block">
          Go Home
        </a>
      </div>
    </main>
  );
}
