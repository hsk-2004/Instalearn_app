import Link from "next/link";
import { 
  Home as HomeIcon, 
  Compass, 
  Users as UsersIcon, 
  User 
} from "lucide-react";

interface BottomNavProps {
  activeTab: 'home' | 'explore' | 'users' | 'profile';
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white/95 backdrop-blur-md border-t border-gray-100 px-8 py-4 flex items-center justify-between z-30">
      <Link 
        href="/" 
        className={`flex flex-col items-center ${activeTab === 'home' ? 'text-primary-brown' : 'text-gray-400'}`}
      >
        <HomeIcon className="w-6 h-6" />
        <span className="text-[11px] font-bold mt-1.5">Home</span>
      </Link>
      <Link 
        href="/explore" 
        className={`flex flex-col items-center ${activeTab === 'explore' ? 'text-primary-brown' : 'text-gray-400'}`}
      >
        <Compass className="w-6 h-6" />
        <span className="text-[11px] font-bold mt-1.5">Explore</span>
      </Link>
      <Link 
        href="/users" 
        className={`flex flex-col items-center ${activeTab === 'users' ? 'text-primary-brown' : 'text-gray-400'}`}
      >
        <UsersIcon className="w-6 h-6" />
        <span className="text-[11px] font-bold mt-1.5">Users</span>
      </Link>
      <Link 
        href="/profile" 
        className={`flex flex-col items-center ${activeTab === 'profile' ? 'text-primary-brown' : 'text-gray-400'}`}
      >
        <User className="w-6 h-6" />
        <span className="text-[11px] font-bold mt-1.5">Profile</span>
      </Link>
    </nav>
  );
}
