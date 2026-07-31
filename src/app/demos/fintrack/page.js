"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Activity, Users, DollarSign, ArrowUpRight } from "lucide-react";

export default function FinTrackDemo() {
  return (
    <main className="relative min-h-screen w-full bg-[#030712] overflow-hidden selection:bg-cyan-500/30 text-white font-sans">
      
      {/* Return to Portfolio Button */}
      <div className="absolute top-6 left-6 z-50">
        <Link href="/#portfolio">
          <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors text-sm font-semibold bg-[#0F172A] border border-cyan-500/20 px-5 py-2.5 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>
        </Link>
      </div>

      {/* Hero Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
        <Image
          src="/demos/fintrack_bg.webp"
          alt="FinTrack Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
      </div>

      {/* Mock Sidebar & Header */}
      <div className="absolute inset-0 z-10 flex">
        {/* Sidebar */}
        <div className="hidden lg:flex w-64 border-r border-white/5 bg-[#030712]/80 backdrop-blur-xl flex-col p-6">
          <div className="text-xl font-bold text-white mb-12 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600" />
            FinTrack
          </div>
          <div className="space-y-4 text-sm font-medium text-white/50">
            <div className="text-white bg-white/5 p-3 rounded-lg border border-white/5">Overview</div>
            <div className="p-3 hover:text-white transition-colors cursor-pointer">Transactions</div>
            <div className="p-3 hover:text-white transition-colors cursor-pointer">Analytics</div>
            <div className="p-3 hover:text-white transition-colors cursor-pointer">Reports</div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col pt-24 lg:pt-8 px-6 lg:px-12">
          {/* Header */}
          <div className="flex justify-between items-end mb-10">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h1 className="text-3xl font-bold text-white mb-2">Financial Overview</h1>
              <p className="text-white/40 text-sm">Real-time metrics for Q3 2026</p>
            </motion.div>
            <div className="hidden sm:flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors">Export CSV</button>
              <button className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)]">Generate Report</button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Total Revenue", value: "$1,248,390", icon: DollarSign, trend: "+14.5%" },
              { title: "Active Users", value: "48,294", icon: Users, trend: "+5.2%" },
              { title: "Avg. Session", value: "4m 12s", icon: Activity, trend: "-0.8%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-[#0F172A]/80 backdrop-blur-lg border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.includes('+') ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                    {stat.trend}
                  </span>
                </div>
                <div className="text-sm font-medium text-white/50 mb-1">{stat.title}</div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                
                {/* Decorative background glow */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Large Chart Area Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex-1 min-h-[300px] bg-[#0F172A]/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 relative flex items-center justify-center"
          >
            <div className="absolute top-6 left-6 text-sm font-medium text-white/50">Revenue Analytics</div>
            <div className="text-center">
              <div className="text-cyan-400 mb-2"><Activity className="w-12 h-12 mx-auto opacity-50" /></div>
              <p className="text-white/30 text-sm">Interactive WebGL Chart rendering active...</p>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
