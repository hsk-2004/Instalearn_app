"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  Edit,
  Eye,
  HelpCircle,
  MousePointerClick,
  Play,
  Plus,
  Share2,
  ThumbsUp,
  Users,
} from "lucide-react";

const filters = {
  "Last Day": 1,
  "Last Week": 7,
  "Last Month": 30,
  "Last 3 Months": 90,
  "Last 6 Months": 180,
  "Last Year": 365,
};

const videoInfo = {
  id: 1,
  title: "New video",
  description: "Jdjdb",
  status: 2,
  status_display: "Published",
  thumbnail: "/video_thumb.png",
  total_flashcard: 0,
  total_quizes: 0,
};

const analytics = [
  { title: "Views", value: 3, icon: Eye },
  { title: "Likes", value: 0, icon: ThumbsUp },
  { title: "Shares", value: 0, icon: Share2 },
  { title: "Learners", value: 0, icon: Users },
  { title: "Clicks", value: 0, icon: MousePointerClick },
];

const graphData = [
  { date: "25 Apr", views: 0 },
  { date: "26 Apr", views: 1 },
  { date: "27 Apr", views: 0 },
  { date: "28 Apr", views: 0 },
  { date: "29 Apr", views: 2 },
  { date: "30 Apr", views: 0 },
  { date: "01 May", views: 0 },
];

function AnalyticsChart() {
  const maxViews = Math.max(...graphData.map((item) => item.views), 1);

  return (
    <section className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
      <h2 className="mb-4 text-[18px] font-bold text-[#1C1917]">Last 7 Days</h2>
      <div className="flex h-[170px] items-end gap-3 border-b border-l border-[#E7E5E4] px-2 pb-2">
        {graphData.map((item) => (
          <div key={item.date} className="flex flex-1 flex-col items-center justify-end gap-2">
            <div
              className="w-full max-w-[22px] rounded-t-md bg-primary-brown"
              style={{ height: `${Math.max((item.views / maxViews) * 112, item.views ? 12 : 4)}px` }}
            />
            <span className="w-[42px] truncate text-center text-[10px] text-[#1C1917]">
              {item.date}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function VideoDetailPage() {
  const router = useRouter();
  const params = useParams<{ slug: string }>();
  const [selectedFilter, setSelectedFilter] = useState<keyof typeof filters>("Last Week");

  return (
    <div className="mobile-container flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-20 flex w-full items-center justify-between border-b border-[#E7E5E4] bg-white px-3 pb-3 pt-3">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex h-6 w-6 items-center justify-center rounded-full active:bg-stone-100"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-[#1C1917]" strokeWidth={2.5} />
          </button>
          <h1 className="text-base font-semibold text-[#1C1917]">Video Detail</h1>
        </div>

        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center rounded-[10px] active:bg-stone-100"
          aria-label="Edit video"
        >
          <Edit className="h-5 w-5 text-primary-brown" strokeWidth={2.2} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto pb-6">
        <section className="flex justify-center bg-white py-4">
          <div className="relative h-[356px] w-[200px] overflow-hidden rounded-2xl bg-black shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
            <img
              src={videoInfo.thumbnail}
              alt={videoInfo.title}
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/45" />
            <button
              type="button"
              className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/60"
              aria-label="Play video"
            >
              <Play className="ml-1 h-7 w-7 fill-white text-white" />
            </button>
            <div className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-white/30">
              <div className="h-full w-1/3 rounded-full bg-white" />
            </div>
          </div>
        </section>

        <section className="px-4 pt-4">
          <div className="rounded-xl bg-white px-4 py-4 shadow-[0_4px_8px_rgba(0,0,0,0.08)]">
            <h2 className="text-[18px] font-semibold text-[#1C1917]">{videoInfo.title}</h2>
            <div
              className={`mt-2 inline-flex rounded-lg px-2.5 py-1 ${
                videoInfo.status === 2 ? "bg-[#DCFCE7]" : "bg-[#FEF3C7]"
              }`}
            >
              <span
                className={`text-xs font-medium ${
                  videoInfo.status === 2 ? "text-[#15803D]" : "text-[#B45309]"
                }`}
              >
                {videoInfo.status_display}
              </span>
            </div>

            <h3 className="mt-4 text-sm font-semibold text-[#1C1917]">Description</h3>
            <p className="mt-1.5 text-[13px] leading-[18px] text-[#1C1917]">
              {videoInfo.description.trim() || "No description provided."}
            </p>
            <p className="mt-3 text-[11px] font-medium text-[#78716C]">
              Slug: {params.slug}
            </p>
          </div>
        </section>

        <section className="px-4 pt-4">
          <h2 className="mt-4 text-sm font-semibold text-[#1C1917]">Interactive Content</h2>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <button className="relative rounded-xl bg-white p-4 text-left shadow-[0_2px_4px_rgba(0,0,0,0.1)] active:opacity-80">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B82F620]">
                <BookOpen className="h-6 w-6 text-[#3B82F6]" />
              </span>
              <span className="block text-base font-semibold text-[#1C1917]">Flashcards</span>
              <span className="mt-1 block text-xs font-medium text-[#1C1917]/70">
                {videoInfo.total_flashcard} cards
              </span>
              <span className="absolute right-3 top-3 rounded-xl bg-primary-brown/20 p-1.5">
                <Plus className="h-4 w-4 text-primary-brown" />
              </span>
            </button>

            <button className="relative rounded-xl bg-white p-4 text-left shadow-[0_2px_4px_rgba(0,0,0,0.1)] active:opacity-80">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#10B98120]">
                <HelpCircle className="h-6 w-6 text-[#10B981]" />
              </span>
              <span className="block text-base font-semibold text-[#1C1917]">Quizzes</span>
              <span className="mt-1 block text-xs font-medium text-[#1C1917]/70">
                {videoInfo.total_quizes} quizzes
              </span>
              <span className="absolute right-3 top-3 rounded-xl bg-primary-brown/20 p-1.5">
                <Plus className="h-4 w-4 text-primary-brown" />
              </span>
            </button>
          </div>
        </section>

        <section className="mt-3 w-full px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-[#1C1917]">Video Analytics</h2>
            <span className="text-sm font-semibold text-primary-brown">{selectedFilter}</span>
          </div>

          <div className="no-scrollbar mt-2 flex gap-2.5 overflow-x-auto pr-4">
            {Object.keys(filters).map((label) => {
              const active = selectedFilter === label;

              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedFilter(label as keyof typeof filters)}
                  className={`shrink-0 rounded-2xl border px-3 py-1.5 text-[13px] font-semibold ${
                    active
                      ? "border-primary-brown bg-primary-brown text-white"
                      : "border-[#E7E5E4] bg-white text-[#1C1917]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <div className="no-scrollbar flex overflow-x-auto py-3">
            {analytics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative mr-3 w-[150px] shrink-0 rounded-xl border border-[#E7E5E4] bg-white p-4"
                >
                  <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-brown/10">
                    <Icon className="h-[18px] w-[18px] text-primary-brown" />
                  </span>
                  <span className="mb-1.5 block text-[13px] text-[#1C1917]">{item.title}</span>
                  <span className="block text-xl font-bold text-[#1C1917]">{item.value}</span>
                </div>
              );
            })}
          </div>
        </section>

        <AnalyticsChart />

        <section className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary-brown" />
            <h2 className="text-base font-semibold text-[#1C1917]">Performance</h2>
          </div>
          <p className="mt-2 text-sm leading-5 text-[#1C1917]">
            This static frontend preview uses the same structure as the mobile video detail screen.
          </p>
        </section>
      </main>
    </div>
  );
}
