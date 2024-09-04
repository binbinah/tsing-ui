import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  sidebarRef: React.RefObject<HTMLDivElement>;
}

export default function Sidebar({ isOpen, sidebarRef }: SidebarProps) {
  return (
    <div
      ref={sidebarRef}
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64 bg-base-200 overflow-y-auto transition duration-300 ease-in-out z-30`}
    >
      <div className="p-5">
        <nav>
          <ul className="space-y-2">
            <li><Link href="/" className="btn btn-ghost btn-block justify-start">首页</Link></li>
            <li><Link href="/about" className="btn btn-ghost btn-block justify-start">关于</Link></li>
            <li><Link href="/contact" className="btn btn-ghost btn-block justify-start">联系我们</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
