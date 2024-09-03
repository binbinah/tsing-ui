import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-300">首页</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">关于</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">联系我们</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
