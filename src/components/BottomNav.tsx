import Link from "next/link";
import { 
  Home as HomeIcon, 
  Layers, 
  Users as UsersIcon, 
  User 
} from "lucide-react";

interface BottomNavProps {
  activeTab: 'home' | 'explore' | 'users' | 'profile';
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white border-t border-gray-200 px-4 pt-2 pb-2 flex items-center justify-around z-30">
      <Link 
        href="/home" 
        className={`flex flex-col items-center gap-0.5 py-1 px-3 ${activeTab === 'home' ? 'text-primary-brown' : 'text-gray-400'}`}
      >
        <HomeIcon className="w-5 h-5" strokeWidth={activeTab === 'home' ? 2 : 1.5} />
        <span className={`text-[11px] ${activeTab === 'home' ? 'font-semibold' : 'font-normal'}`}>Home</span>
      </Link>
      <Link 
        href="/explore" 
        className={`flex flex-col items-center gap-0.5 py-1 px-3 ${activeTab === 'explore' ? 'text-primary-brown' : 'text-gray-400'}`}
      >
        <Layers className="w-5 h-5" strokeWidth={activeTab === 'explore' ? 2 : 1.5} />
        <span className={`text-[11px] ${activeTab === 'explore' ? 'font-semibold' : 'font-normal'}`}>Explore</span>
      </Link>
      <Link 
        href="/users" 
        className={`flex flex-col items-center gap-0.5 py-1 px-3 ${activeTab === 'users' ? 'text-primary-brown' : 'text-gray-400'}`}
      >
        <UsersIcon className="w-5 h-5" strokeWidth={activeTab === 'users' ? 2 : 1.5} />
        <span className={`text-[11px] ${activeTab === 'users' ? 'font-semibold' : 'font-normal'}`}>Users</span>
      </Link>
      <Link 
        href="/profile" 
        className={`flex flex-col items-center gap-0.5 py-1 px-3 ${activeTab === 'profile' ? 'text-primary-brown' : 'text-gray-400'}`}
      >
        <User className="w-5 h-5" strokeWidth={activeTab === 'profile' ? 2 : 1.5} />
        <span className={`text-[11px] ${activeTab === 'profile' ? 'font-semibold' : 'font-normal'}`}>Profile</span>
      </Link>
    </nav>
  );
}
