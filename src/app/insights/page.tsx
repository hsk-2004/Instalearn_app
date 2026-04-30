"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  BarChart2,
  Clock3,
  Download,
  Eye,
  Heart,
  Share2,
  TrendingUp,
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

const analytics = [
  { title: "Views", value: 3, icon: Eye },
  { title: "Likes", value: 0, icon: Heart },
  { title: "Shares", value: 0, icon: Share2 },
  { title: "Downloads", value: 0, icon: Download },
  { title: "Learners", value: 0, icon: Users },
  { title: "Watch Time", value: "2m", icon: Clock3 },
];

const rawGraphData = [
  { date: "2026-04-25", views: 0 },
  { date: "2026-04-26", views: 1 },
  { date: "2026-04-27", views: 0 },
  { date: "2026-04-28", views: 0 },
  { date: "2026-04-29", views: 2 },
  { date: "2026-04-30", views: 0 },
  { date: "2026-05-01", views: 0 },
];

type GraphItem = {
  date: string;
  views: number;
};

const maxBars = 7;

function formatDate(date: string) {
  if (date.includes(" ")) {
    return date;
  }

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
  });
}

function groupBy(data: GraphItem[], bucketSize: number) {
  if (data.length <= maxBars) {
    return data.map((item) => ({
      date: formatDate(item.date),
      views: item.views,
    }));
  }

  const result: GraphItem[] = [];
  let accumulatedViews = 0;
  let lastDate = "";

  data.forEach((item, index) => {
    accumulatedViews += item.views;
    lastDate = item.date;

    if ((index + 1) % bucketSize === 0 || index === data.length - 1) {
      result.push({
        date: formatDate(lastDate),
        views: accumulatedViews,
      });
      accumulatedViews = 0;
    }
  });

  return result.slice(-maxBars);
}

function normalizeData(data: GraphItem[], dayRange: number) {
  if (dayRange === 1) {
    return data.slice(-1).map((item) => ({
      date: formatDate(item.date),
      views: item.views,
    }));
  }

  if (dayRange <= 30) {
    return data.slice(-maxBars).map((item) => ({
      date: formatDate(item.date),
      views: item.views,
    }));
  }

  if (dayRange <= 90) {
    return groupBy(data, 7);
  }

  if (dayRange <= 180) {
    return groupBy(data, 14);
  }

  return groupBy(data, 30);
}

function getChartTitle(dayRange: number) {
  if (dayRange === 1) {
    return "Today";
  }

  if (dayRange <= 7) {
    return "Last 7 Days";
  }

  if (dayRange <= 30) {
    return "Recent Activity";
  }

  if (dayRange <= 90) {
    return "Weekly Views";
  }

  if (dayRange <= 180) {
    return "Bi-Weekly Views";
  }

  return "Monthly Views";
}

export default function InsightsPage() {
  const router = useRouter();
  const [selectedFilter, setSelectedFilter] = useState<keyof typeof filters>("Last Week");
  const dayRange = filters[selectedFilter];

  const chartData = useMemo(
    () => normalizeData(rawGraphData, dayRange),
    [dayRange]
  );
  const maxViews = Math.max(...chartData.map((item) => item.views), 1);

  return (
    <div className="mobile-container flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-20 flex w-full items-center gap-2 border-b border-[#E7E5E4] bg-white px-4 py-[14px]">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex items-center justify-center active:opacity-70"
          aria-label="Go back"
        >
          <ArrowLeft className="h-5 w-5 text-[#1C1917]" strokeWidth={2.5} />
        </button>
        <h1 className="text-xl font-bold text-[#1C1917]">Insights</h1>
      </header>

      <main className="flex-1 overflow-y-auto pb-6">
        <section className="mt-3 w-full px-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-[#1C1917]">Analytics</h2>
            <span className="text-sm font-semibold text-primary-brown">
              {selectedFilter}
            </span>
          </div>

          <div className="no-scrollbar mt-2.5 flex gap-2.5 overflow-x-auto pr-4">
            {Object.entries(filters).map(([label, range]) => {
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
                  aria-pressed={active}
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
                <article
                  key={item.title}
                  className="relative mr-3 w-[150px] shrink-0 rounded-xl border border-[#E7E5E4] bg-white p-4"
                >
                  <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-brown/10">
                    <Icon className="h-[18px] w-[18px] text-primary-brown" />
                  </span>
                  <p className="mb-1.5 text-[13px] text-[#1C1917]">{item.title}</p>
                  <p className="text-xl font-bold text-[#1C1917]">{item.value}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-[#1C1917]">
              {getChartTitle(dayRange)}
            </h2>
            <BarChart2 className="h-5 w-5 text-primary-brown" />
          </div>

          <div className="relative flex h-[210px] items-end gap-3 border-b border-l border-[#E7E5E4] px-2 pb-2">
            <div className="absolute inset-x-2 top-0 border-t border-[#E7E5E4]" />
            <div className="absolute inset-x-2 top-1/4 border-t border-[#E7E5E4]" />
            <div className="absolute inset-x-2 top-1/2 border-t border-[#E7E5E4]" />
            <div className="absolute inset-x-2 top-3/4 border-t border-[#E7E5E4]" />

            {chartData.map((item) => (
              <div
                key={item.date}
                className="relative z-10 flex flex-1 flex-col items-center justify-end gap-2"
              >
                <div
                  className="w-full max-w-[24px] rounded-t-md bg-primary-brown transition-all"
                  style={{
                    height: `${Math.max((item.views / maxViews) * 145, item.views ? 12 : 4)}px`,
                  }}
                />
                <span className="w-[44px] truncate text-center text-[11px] text-[#1C1917]">
                  {item.date}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-4 mt-3 rounded-2xl bg-white p-4 shadow-[0_2px_4px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-primary-brown/10">
              <TrendingUp className="h-[18px] w-[18px] text-primary-brown" />
            </span>
            <div>
              <h2 className="text-base font-bold text-[#1C1917]">Overview</h2>
              <p className="text-xs text-[#1C1917]/70">Static frontend analytics preview</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
