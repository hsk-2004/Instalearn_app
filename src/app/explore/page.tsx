import BottomNav from "@/components/BottomNav";
import { 
  Search, 
  ArrowUpDown, 
  LayoutGrid, 
  Users, 
  Eraser, 
  Calendar, 
  BookOpen, 
  Play, 
  Home as HomeIcon, 
  Compass, 
  User 
} from "lucide-react";

export default function Explore() {
  return (
    <div className="mobile-container flex flex-col pb-24">
      {/* Header */}
      <header className="px-4 py-4 bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900">Explore</h1>
      </header>

      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-brown transition-colors" />
          <input 
            type="text" 
            placeholder="Search videos, creators..." 
            className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary-brown focus:ring-1 focus:ring-primary-brown transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto no-scrollbar gap-2 px-4 mb-6">
        <button className="flex items-center flex-shrink-0 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-bold text-gray-700 active:bg-gray-50">
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Sort
        </button>
        <button className="flex items-center flex-shrink-0 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-bold text-gray-700 active:bg-gray-50">
          <LayoutGrid className="w-4 h-4 mr-2" />
          Types
        </button>
        <button className="flex items-center flex-shrink-0 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-bold text-gray-700 active:bg-gray-50">
          <Users className="w-4 h-4 mr-2" />
          Users
        </button>
        <button className="flex items-center flex-shrink-0 bg-white border border-gray-200 rounded-full px-5 py-2.5 text-sm font-bold text-gray-700 active:bg-gray-50">
          <Eraser className="w-4 h-4 mr-2" />
          Clear
        </button>
      </div>

      {/* Content List */}
      <div className="px-4 space-y-4">
        {/* Course Card 1 */}
        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center">
          <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4 border border-gray-50">
            {/* Placeholder for Illustration */}
            <div className="text-gray-300">
               <BookOpen className="w-12 h-12" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-lg truncate mb-2">Test 1</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-[#FFF8E6] text-[#D97706] text-[10px] font-bold px-2 py-1 rounded flex items-center uppercase">
                <BookOpen className="w-3 h-3 mr-1" />
                COURSE
              </span>
              <span className="bg-[#E0F2FE] text-[#0284C7] text-[10px] font-bold px-2 py-1 rounded uppercase">
                Published
              </span>
            </div>
            <div className="flex items-center text-gray-400 text-[11px] font-bold">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              23-Apr-2026
            </div>
          </div>
        </div>

        {/* Video Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
          <div className="aspect-video bg-gray-200 relative">
            {/* Placeholder for video thumb */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/5">
              <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="w-6 h-6 text-white fill-current translate-x-0.5" />
              </div>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-md px-2 py-1 flex items-center">
               <Play className="w-3 h-3 text-white mr-1.5" />
               <span className="text-[10px] text-white font-bold uppercase tracking-wider">VIDEO</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-900 text-lg mb-2">New video</h3>
            <div className="flex items-center text-gray-400 text-[11px] font-bold">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              22-Apr-2026
            </div>
          </div>
        </div>

        {/* Course Card 2 */}
        <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-sm flex items-center">
          <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 mr-4 border border-gray-50">
            <div className="text-gray-300">
               <BookOpen className="w-12 h-12" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-lg truncate mb-2">New course</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="bg-[#FFF8E6] text-[#D97706] text-[10px] font-bold px-2 py-1 rounded flex items-center uppercase">
                <BookOpen className="w-3 h-3 mr-1" />
                COURSE
              </span>
              <span className="bg-[#E0F2FE] text-[#0284C7] text-[10px] font-bold px-2 py-1 rounded uppercase">
                Published
              </span>
            </div>
            <div className="flex items-center text-gray-400 text-[11px] font-bold">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              22-Apr-2026
            </div>
          </div>
        </div>
      </div>

      <BottomNav activeTab="explore" />
    </div>
  );
}
