import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-foreground text-background">
      <p className="text-sm">&copy; 2023 MyApp. All rights reserved.</p>
      <div className="flex gap-4 ml-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
        </a>
      </div>
    </footer>
  );
} 