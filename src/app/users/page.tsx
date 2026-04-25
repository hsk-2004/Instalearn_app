import BottomNav from "@/components/BottomNav";
import { Search, Plus, Mail, MoreVertical, Users as UsersIcon, UserX, BookOpen } from "lucide-react";

export default function UsersPage() {
  const users = [
    { initials: "IU", name: "Instalearn User", role: "Admin", email: "admin@instalearnapp.com", color: "bg-primary-brown", isYou: true },
    { initials: "A", name: "aashay", role: "Viewer", email: "hi@aashaydvd.com", color: "bg-[#4CAF50]", isYou: false },
    { initials: "T", name: "test2", role: "Viewer", email: "instalearn123@yopmail.com", color: "bg-[#4CAF50]", isYou: false },
    { initials: "T", name: "Test", role: "Viewer", email: "test@yopmail.com", color: "bg-[#4CAF50]", isYou: false },
  ];

  return (
    <div className="mobile-container flex flex-col pb-24 bg-gray-50/50">
      {/* Header */}
      <header className="px-4 py-4 bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
      </header>

      {/* Stats Cards */}
      <div className="flex overflow-x-auto no-scrollbar gap-3 px-4 py-4">
        {/* Active Users */}
        <div className="flex-shrink-0 w-[140px] bg-[#1a2b2a] text-white p-4 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <UsersIcon className="w-8 h-8 opacity-80" />
            <span className="text-3xl font-bold">4</span>
          </div>
          <p className="text-[11px] font-bold opacity-80 tracking-wide">Active Users</p>
        </div>
        {/* Inactive Users */}
        <div className="flex-shrink-0 w-[140px] bg-[#6B1A1A] text-white p-4 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <UserX className="w-8 h-8 opacity-80" />
            <span className="text-3xl font-bold">3</span>
          </div>
          <p className="text-[11px] font-bold opacity-80 tracking-wide">Inactive Users</p>
        </div>
        {/* Active Courses */}
        <div className="flex-shrink-0 w-[140px] bg-[#1a2b3c] text-white p-4 rounded-2xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <BookOpen className="w-8 h-8 opacity-80" />
            <span className="text-3xl font-bold">2</span>
          </div>
          <p className="text-[11px] font-bold opacity-80 tracking-wide">Active Courses</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex px-4 bg-white border-b border-gray-100">
        <button className="flex-1 py-3 text-center text-primary-brown font-bold text-base border-b-2 border-primary-brown">
          Users
        </button>
        <button className="flex-1 py-3 text-center text-gray-400 font-bold text-base">
          Groups
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-4 bg-white">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-primary-brown transition-colors" />
          <input 
            type="text" 
            placeholder="Search User By Name, Email.." 
            className="w-full bg-white border border-gray-200 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-primary-brown focus:ring-1 focus:ring-primary-brown transition-all text-sm"
          />
        </div>
      </div>

      {/* User List */}
      <div className="px-4 space-y-3 mt-2">
        {users.map((user, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"
          >
            <div className="flex items-start">
              {/* Avatar */}
              <div className={`w-11 h-11 ${user.color} rounded-full flex items-center justify-center mr-3.5 flex-shrink-0`}>
                <span className="text-white font-bold text-sm">{user.initials}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="font-bold text-gray-900 text-base">{user.name}</h3>
                  {user.isYou && (
                    <span className="bg-gray-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md uppercase">
                      YOU
                    </span>
                  )}
                </div>
                <div className="mb-2">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${
                    user.role === "Admin" 
                      ? "bg-[#E8F5E9] text-[#2E7D32]" 
                      : "bg-[#FFF3E0] text-[#E65100]"
                  }`}>
                    {user.role}
                  </span>
                </div>
                <div className="flex items-center text-gray-500 text-xs">
                  <Mail className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                  <span className="truncate">{user.email}</span>
                </div>
              </div>

              {/* More Button */}
              {!user.isYou && (
                <button className="p-1 text-gray-400 -mr-1">
                  <MoreVertical className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-28 right-6 w-14 h-14 bg-primary-brown rounded-full shadow-2xl flex items-center justify-center text-white z-20 active:scale-95 transition-transform">
        <Plus className="w-8 h-8" />
      </button>

      <BottomNav activeTab="users" />
    </div>
  );
}
