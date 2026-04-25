import BottomNav from "@/components/BottomNav";
import { 
  Settings, 
  Globe, 
  Phone, 
  Mail, 
  Sparkles, 
  ChevronRight,
  User
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="mobile-container flex flex-col pb-24 bg-white">
      {/* Header */}
      <header className="px-4 py-4 bg-white sticky top-0 z-10 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
        <button className="text-primary-brown">
          <Settings className="w-6 h-6" />
        </button>
      </header>

      <div className="px-4 pt-2">
        {/* Profile Card */}
        <div className="bg-[#F5EFE9] rounded-3xl px-6 pt-8 pb-8 flex flex-col items-center text-center mb-6">
          {/* Avatar */}
          <div className="w-28 h-28 rounded-full border-[3px] border-primary-brown flex items-center justify-center bg-transparent mb-5">
            <User className="w-14 h-14 text-primary-brown/30" />
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-0.5">Instalearn User</h2>
          <p className="text-primary-brown font-semibold text-sm mb-3">Admin</p>
          <p className="text-gray-500 text-sm mb-0.5">admin@instalearnapp.com</p>
          <p className="text-gray-500 text-sm mb-3">+91 1234567893</p>
          <p className="text-primary-brown font-semibold text-sm">New Business</p>
        </div>

        {/* Info Cards */}
        <div className="space-y-3 mb-6">
          {/* Website */}
          <div className="bg-white rounded-2xl p-4 flex items-center border border-gray-100">
            <Globe className="w-6 h-6 text-primary-brown mr-4 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-400 font-medium mb-0.5">Website</p>
              <p className="text-gray-900 font-bold text-[15px]">https://www.training.com</p>
            </div>
          </div>

          {/* Organization Mobile */}
          <div className="bg-white rounded-2xl p-4 flex items-center border border-gray-100">
            <Phone className="w-6 h-6 text-primary-brown mr-4 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-400 font-medium mb-0.5">Organization Mobile</p>
              <p className="text-gray-900 font-bold text-[15px]">+911112223334</p>
            </div>
          </div>

          {/* Organization Email */}
          <div className="bg-white rounded-2xl p-4 flex items-center border border-gray-100">
            <Mail className="w-6 h-6 text-primary-brown mr-4 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-400 font-medium mb-0.5">Organization Email</p>
              <p className="text-gray-900 font-bold text-[15px]">admin@instalearnapp.com</p>
            </div>
          </div>
        </div>

        {/* AI Generated */}
        <button className="w-full bg-white rounded-2xl p-4 flex items-center justify-between border border-gray-100 mb-6 active:bg-gray-50 transition-colors">
          <div className="flex items-center">
            <Sparkles className="w-6 h-6 text-primary-brown mr-4" />
            <span className="text-gray-900 font-bold text-[15px]">AI</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-4"></div>

        {/* Actions */}
        <h3 className="text-2xl font-bold text-gray-900">Actions</h3>
      </div>

      <BottomNav activeTab="profile" />
    </div>
  );
}
