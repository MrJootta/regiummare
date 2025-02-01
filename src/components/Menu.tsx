import Link from 'next/link';

export default function Menu() {
  return (
    <nav className="flex justify-between items-center p-4 bg-foreground text-background">
      <div className="text-lg font-bold">MyApp</div>
      <ul className="flex gap-4">
        <li>
          <Link href="/">
            <a className="hover:underline">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="hover:underline">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
} 