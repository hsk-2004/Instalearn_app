import BottomNav from "@/components/BottomNav";
import { 
  Bell, 
  Pencil, 
  Camera, 
  Eye, 
  Heart, 
  Share2, 
  BarChart2, 
  Play, 
  Plus, 
  Home as HomeIcon, 
  Compass, 
  Users, 
  User 
} from "lucide-react";

export default function Home() {
  return (
    <div className="mobile-container flex flex-col pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-10">
        <h1 className="text-xl font-bold text-gray-900">New Business</h1>
        <button className="relative">
          <Bell className="w-6 h-6 text-primary-brown" />
        </button>
      </header>

      {/* Profile Section */}
      <section className="relative">
        {/* Cover Photo */}
        <div className="w-full h-44 relative overflow-hidden">
          <img 
            src="/cover.png" 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
          <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md backdrop-blur-sm">
            <Pencil className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        {/* Profile Info Card */}
        <div className="bg-white px-5 pt-12 pb-5 -mt-10 rounded-t-[40px] relative z-0">
          <div className="absolute -top-12 left-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
                <img 
                  src="/avatar.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md border border-gray-100 translate-x-1 translate-y-1">
                <Camera className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-gray-900 leading-tight">Instalearn User</h2>
            <p className="text-primary-brown font-semibold text-lg">admin</p>
          </div>
        </div>
      </section>

      {/* Over Organization Section */}
      <section className="mt-4 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Over Organization</h3>
          <button className="flex items-center text-primary-brown text-sm font-bold">
            <BarChart2 className="w-4 h-4 mr-1.5 transform rotate-90" />
            Insights
          </button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-3.5 pb-2">
          {/* Views Card */}
          <div className="flex-shrink-0 w-[140px] bg-[#1a2b3c] text-white p-5 rounded-2xl shadow-sm">
            <div className="flex items-center text-[11px] font-bold tracking-wider uppercase mb-5 opacity-90">
              <Eye className="w-4 h-4 mr-2" />
              VIEWS
            </div>
            <div className="text-4xl font-bold">3</div>
          </div>
          {/* Likes Card */}
          <div className="flex-shrink-0 w-[140px] bg-[#421d81] text-white p-5 rounded-2xl shadow-sm">
            <div className="flex items-center text-[11px] font-bold tracking-wider uppercase mb-5 opacity-90">
              <Heart className="w-4 h-4 mr-2" />
              LIKES
            </div>
            <div className="text-4xl font-bold">0</div>
          </div>
          {/* Share Card */}
          <div className="flex-shrink-0 w-[140px] bg-[#0d4d3d] text-white p-5 rounded-2xl shadow-sm">
            <div className="flex items-center text-[11px] font-bold tracking-wider uppercase mb-5 opacity-90">
              <Share2 className="w-4 h-4 mr-2" />
              SHARE
            </div>
            <div className="text-4xl font-bold">0</div>
          </div>
        </div>
      </section>

      {/* Most Viewed Section */}
      <section className="mt-8 px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Most Viewed</h3>
          <button className="flex items-center text-primary-brown text-sm font-bold">
            <BarChart2 className="w-4 h-4 mr-1.5 transform rotate-90" />
            View All
          </button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-4">
          <div className="flex-shrink-0 w-36 relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden relative group">
              <img 
                src="/video_thumb.png" 
                alt="Video thumbnail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-active:bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 bg-black/40 backdrop-blur-[2px] rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-white fill-current translate-x-0.5" />
                </div>
              </div>
              <span className="absolute top-3 left-3 text-[10px] text-white font-bold px-1.5 py-0.5 bg-black/20 rounded">New video</span>
              <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm rounded-md px-2 py-0.5 flex items-center">
                <Eye className="w-3 h-3 text-white mr-1.5" />
                <span className="text-[11px] text-white font-bold">3</span>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-36 relative opacity-60">
             <div className="aspect-[4/5] bg-gray-100 rounded-2xl border border-dashed border-gray-300 flex items-center justify-center">
                <Play className="w-8 h-8 text-gray-300" />
             </div>
          </div>
        </div>
      </section>

      {/* Recent Videos Section */}
      <section className="mt-8 px-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Videos</h3>
        <div className="space-y-4">
          <div className="flex bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm active:bg-gray-50 transition-colors">
            <div className="w-32 h-24 bg-gray-200 relative flex-shrink-0">
               <img 
                src="/video_thumb.png" 
                alt="Video" 
                className="w-full h-full object-cover"
              />
               <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-black/40 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col justify-center min-w-0">
              <h4 className="font-bold text-gray-900 text-base truncate mb-0.5">New video</h4>
              <p className="text-xs text-gray-500 mb-2">Jdjdb</p>
              <div className="flex items-center">
                <img 
                  src="/avatar.png" 
                  alt="User" 
                  className="w-5 h-5 rounded-full mr-2 object-cover border border-gray-100"
                />
                <span className="text-[11px] text-gray-600 font-bold">Instalearn User</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-6 w-16 h-16 bg-primary-brown rounded-full shadow-2xl flex items-center justify-center text-white z-20 active:scale-95 transition-transform">
        <Plus className="w-9 h-9" />
      </button>

      <BottomNav activeTab="home" />
    </div>
  );
}
