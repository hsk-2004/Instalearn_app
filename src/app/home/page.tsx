"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BottomNav from "@/components/BottomNav";
import { 
  Bell, 
  Camera, 
  Eye, 
  Heart, 
  Share2, 
  BarChart2, 
  Play, 
  Plus,
} from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/login');
      return;
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="mobile-container flex items-center justify-center min-h-screen bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-brown"></div>
      </div>
    );
  }

  return (
    <div className="mobile-container flex flex-col pb-24 bg-white" style={{ fontFamily: 'var(--font-inter)' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-10">
        <h1 className="text-base font-bold text-gray-900">New Business</h1>
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-700" />
        </button>
      </header>

      {/* Profile Section (HeroBanner) */}
      <section className="relative w-full">
        {/* Cover Photo - h-[100px] */}
        <div className="w-full h-[100px] relative overflow-hidden bg-gray-200">
          <img 
            src="/cover.png" 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
          {/* Edit button: top: 8, right: 12, padding: 8, borderRadius: 20, icon 18px */}
          <button className="absolute top-[8px] right-[12px] p-[8px] bg-white rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] z-10">
            {/* Edit3 icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-brown"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
          </button>
        </div>

        {/* Profile Info - columnGap: 12, paddingHorizontal: 12, paddingBottom: 12, height: 80 */}
        <div className="bg-white px-[12px] pb-[12px] relative h-[80px] flex flex-row items-start gap-[12px]">
          {/* Avatar Container: translateY -50px */}
          <div className="relative -mt-[50px]">
            {/* Image: w: 100, h: 100, borderRadius: 50, borderWidth: 3 */}
            <div className="w-[100px] h-[100px] rounded-[50px] border-[3px] border-white bg-gray-300 overflow-hidden flex items-center justify-center">
              <img 
                src="/avatar.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            {/* Camera: bottom: 6, right: 6, padding: 8, borderRadius: 20, icon 18px */}
            <button className="absolute bottom-[6px] right-[6px] bg-white p-[8px] rounded-[20px] shadow-[0_2px_4px_rgba(0,0,0,0.15)] active:opacity-70">
              <Camera width="18" height="18" className="text-primary-brown" />
            </button>
          </div>
          
          {/* Text Container: mt 10px */}
          <div className="mt-[10px]">
            {/* Name: fontSize: 18, InterSemiBold */}
            <h2 className="text-[18px] font-semibold text-gray-900 leading-tight">Instalearn User</h2>
            {/* Role: fontSize: 16, InterSemiBold, mt: 4 */}
            <p className="text-[16px] font-semibold text-primary-brown mt-[4px]">admin</p>
          </div>
        </div>
      </section>

      {/* Over Organization Section (BlockSection) */}
      <section className="mb-[12px] w-full">
        {/* Header: paddingHorizontal: 16, marginBottom: 6 */}
        <div className="flex items-center justify-between px-[16px] mb-[6px]">
          <h3 className="text-[16px] font-bold text-gray-900">Insights</h3>
          <button className="flex items-center gap-[6px] text-primary-brown active:opacity-70">
            <BarChart2 size={16} />
            <span className="text-[14px] font-medium">Insights</span>
          </button>
        </div>
        
        {/* Cards row: paddingHorizontal: 8, paddingVertical: 10 */}
        <div className="flex overflow-x-auto no-scrollbar px-[8px] py-[10px] w-full">
          {/* Views Card */}
          <div className="flex-shrink-0 w-[151px] h-[84px] bg-[#1E293B] rounded-[12px] p-[12px] mx-[6px] flex flex-col justify-between">
            <div className="flex items-center gap-[6px]">
              <Eye size={16} className="text-white opacity-90" />
              <span className="text-[12px] font-semibold text-white/80 uppercase">VIEWS</span>
            </div>
            <div className="text-[22px] font-extrabold text-white tracking-[0.3px]">3</div>
          </div>
          {/* Likes Card */}
          <div className="flex-shrink-0 w-[151px] h-[84px] bg-[#3B0764] rounded-[12px] p-[12px] mx-[6px] flex flex-col justify-between">
            <div className="flex items-center gap-[6px]">
              <Heart size={16} className="text-white opacity-90" />
              <span className="text-[12px] font-semibold text-white/80 uppercase">LIKES</span>
            </div>
            <div className="text-[22px] font-extrabold text-white tracking-[0.3px]">0</div>
          </div>
          {/* Share Card */}
          <div className="flex-shrink-0 w-[151px] h-[84px] bg-[#064E3B] rounded-[12px] p-[12px] mx-[6px] flex flex-col justify-between">
            <div className="flex items-center gap-[6px]">
              <Share2 size={16} className="text-white opacity-90" />
              <span className="text-[12px] font-semibold text-white/80 uppercase">SHARES</span>
            </div>
            <div className="text-[22px] font-extrabold text-white tracking-[0.3px]">0</div>
          </div>
          {/* Downloads Card */}
          <div className="flex-shrink-0 w-[151px] h-[84px] bg-[#7C2D12] rounded-[12px] p-[12px] mx-[6px] flex flex-col justify-between">
            <div className="flex items-center gap-[6px]">
              <BarChart2 size={16} className="text-white opacity-90" />
              <span className="text-[12px] font-semibold text-white/80 uppercase">DOWNLOADS</span>
            </div>
            <div className="text-[22px] font-extrabold text-white tracking-[0.3px]">0</div>
          </div>
        </div>
      </section>

      {/* Most Viewed Section (VideoSection) pb: 10 */}
      <section className="w-full pb-[10px]">
        {/* Header: px: 16, mb: 6 */}
        <div className="flex items-center justify-between px-[16px] mb-[6px]">
          <h3 className="text-[16px] font-bold text-gray-900">Most Viewed</h3>
          <button className="flex items-center gap-[6px] text-primary-brown active:opacity-70">
            <BarChart2 size={16} />
            <span className="text-[14px] font-medium">View All</span>
          </button>
        </div>
        
        {/* List: px: 12, pt: 8 */}
        <div className="flex overflow-x-auto no-scrollbar px-[12px] pt-[8px] pb-4">
          {/* Card wrapper: mr: 12 */}
          <div className="flex-shrink-0 mr-[12px] active:opacity-85 cursor-pointer">
            {/* videoCard: width: 120, height: 213, borderRadius: 14, bg: #000, elevation: 6 */}
            <div className="w-[120px] h-[213px] rounded-[14px] bg-black overflow-hidden relative shadow-[0_6px_8px_rgba(0,0,0,0.15)]">
              <img 
                src="/video_thumb.png" 
                alt="Video thumbnail" 
                className="w-full h-full object-cover opacity-90"
              />
              {/* gradientOverlay: height: 40% */}
              <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-black/45 to-transparent" />
              
              {/* title: top: 10, left: 8, right: 8, fontSize: 12, Medium */}
              <span className="absolute top-[10px] left-[8px] right-[8px] text-[12px] text-white font-medium truncate">
                New video
              </span>
              
              {/* playIconWrapper: center, w: 40, h: 40, borderRadius: 20, bg: rgba(0,0,0,0.55) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] rounded-[20px] bg-black/55 flex items-center justify-center">
                <Play size={20} className="text-white fill-current ml-1" />
              </div>
              
              {/* viewSection: bottom: 8, right: 8, gap: 4, px: 6, py: 3, borderRadius: 6, bg: rgba(0,0,0,0.6) */}
              <div className="absolute bottom-[8px] right-[8px] flex flex-row items-center gap-[4px] px-[6px] py-[3px] bg-black/60 rounded-[6px]">
                <Eye size={14} className="text-white" />
                <span className="text-[12px] text-white font-semibold">3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Videos Section (RecentVideosSection) wrapper: px: 16, py: 12 */}
      <section className="w-full px-[16px] py-[12px]">
        {/* headerTitle: fontSize: 16, SemiBold, mb: 12 */}
        <h3 className="text-[16px] font-semibold text-gray-900 mb-[12px]">Recent Videos</h3>
        
        {/* Card: flexDirection: row, borderRadius: 12, mb: 12, borderWidth: 0.5 */}
        <div className="flex flex-row rounded-[12px] mb-[12px] border-[0.5px] border-gray-200 bg-white overflow-hidden active:opacity-85 cursor-pointer shadow-sm">
          {/* thumbnailWrap: width: 120, height: 90, bg: #000 */}
          <div className="w-[120px] h-[90px] bg-black relative flex-shrink-0">
            <img 
              src="/video_thumb.png" 
              alt="Video" 
              className="w-full h-full object-cover opacity-90"
            />
            {/* playIcon: center, w: 32, h: 32, borderRadius: 16, bg: rgba(0,0,0,0.7) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px] rounded-[16px] bg-black/70 flex items-center justify-center">
              <Play size={18} className="text-white fill-current ml-0.5" />
            </div>
          </div>
          
          {/* content: flex: 1, padding: 10, justifyContent: space-between */}
          <div className="flex-1 p-[10px] flex flex-col justify-between min-w-0">
            <div>
              {/* title: fontSize: 14, SemiBold */}
              <h4 className="text-[14px] font-semibold text-gray-900 truncate">New video</h4>
              {/* description: fontSize: 12, lineHeight: 16, mt: 2 */}
              <p className="text-[12px] leading-[16px] mt-[2px] text-gray-600 line-clamp-2">Jdjdb</p>
            </div>
            {/* metaRow: flexDirection: row, alignItems: center, justifyContent: space-between, mt: 6 */}
            <div className="flex flex-row items-center justify-between mt-[6px]">
              {/* authorRow: gap: 6 */}
              <div className="flex flex-row items-center gap-[6px] min-w-0 flex-1 pr-2">
                {/* avatar: width: 20, height: 20, borderRadius: 10 */}
                <div className="w-[20px] h-[20px] rounded-[10px] bg-slate-800 flex-shrink-0 overflow-hidden">
                  <img src="/avatar.png" className="w-full h-full object-cover" onError={e => e.currentTarget.style.display='none'} />
                </div>
                {/* authorName: fontSize: 12, Medium */}
                <span className="text-[12px] font-medium text-gray-700 truncate">Instalearn User</span>
              </div>
              {/* viewRow: gap: 4 */}
              <div className="flex flex-row items-center gap-[4px] flex-shrink-0">
                <Eye size={14} className="text-gray-500" />
                <span className="text-[12px] font-medium text-gray-700">3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      {/* container: fixed to bottom relative to mobile container constraints */}
      <div className="fixed bottom-[110px] left-1/2 -translate-x-1/2 w-full max-w-[480px] z-20 pointer-events-none">
        <div className="absolute bottom-0 right-[20px] flex flex-col items-center pointer-events-auto">
          {/* Expanded Actions */}
          <div className="flex flex-col items-end absolute bottom-0 right-0 transition-all duration-300 pointer-events-none" id="fab-menu">
            
            {/* Add User */}
            <div className="absolute bottom-[140px] right-0 flex flex-row items-center bg-white border border-gray-200 rounded-[28px] px-[16px] py-[12px] min-w-[120px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] opacity-0 scale-50 transition-all duration-300 fab-item">
              <button className="flex flex-row items-center gap-[8px] active:opacity-80 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-brown flex-shrink-0"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>
                <span className="text-[14px] font-medium text-gray-900 whitespace-nowrap">Add User</span>
              </button>
            </div>
            
            {/* Add Video */}
            <div className="absolute bottom-[80px] right-0 flex flex-row items-center bg-white border border-gray-200 rounded-[28px] px-[16px] py-[12px] min-w-[120px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] opacity-0 scale-50 transition-all duration-300 fab-item" style={{transitionDelay: '50ms'}}>
              <button className="flex flex-row items-center gap-[8px] active:opacity-80 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-brown flex-shrink-0"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2.5"/></svg>
                <span className="text-[14px] font-medium text-gray-900 whitespace-nowrap">Add Video</span>
              </button>
            </div>
          </div>
          
          {/* mainButton */}
          <button 
            className="w-[56px] h-[56px] bg-primary-brown rounded-[28px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] flex items-center justify-center text-white active:opacity-80 transition-transform z-10 relative"
            onClick={(e) => {
              const items = document.querySelectorAll('.fab-item');
              const icon = e.currentTarget.querySelector('svg');
              const isExpanded = items[0].classList.contains('opacity-100');
              
              items.forEach(item => {
                if (isExpanded) {
                  item.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
                  item.classList.add('opacity-0', 'scale-50', 'pointer-events-none');
                } else {
                  item.classList.remove('opacity-0', 'scale-50', 'pointer-events-none');
                  item.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
                }
              });
              
              if (icon) {
                if (isExpanded) {
                   icon.style.transform = 'rotate(0deg)';
                } else {
                   icon.style.transform = 'rotate(45deg)';
                }
                icon.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
              }
            }}
          >
            <Plus size={24} className="text-white relative z-10" />
          </button>
        </div>
      </div>

      <BottomNav activeTab="home" />
    </div>
  );
}
