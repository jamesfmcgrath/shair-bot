import { FaAngleDown, FaUserCircle } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="flex items-center justify-between h-16 px-6 text-white shadow bg-brand-navy">
      <h1 className="text-xl font-bold tracking-tight">Shair.bot</h1>
      <div className="flex items-center space-x-2 text-sm font-medium">
        <FaUserCircle className="w-5 h-5" />
        <span>Taylor Morgan</span>
        <FaAngleDown />
      </div>
    </header>
  );
}
