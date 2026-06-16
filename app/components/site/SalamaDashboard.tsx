"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

// FIX: Keys zote zimeratibiwa kuwa 'salama' ili chati isikatike katikati
const simulationData = [
  { load: 'Low Load', legacy: 3.5, salama: 1.1 },
  { load: 'Moderate Load', legacy: 4.8, salama: 1.2 },
  { load: 'High Load', legacy: 5.9, salama: 1.3 },
  { load: 'Peak Load', legacy: 7.4, salama: 1.6 }, 
  { load: 'Stress Test', legacy: 9.5, salama: 1.9 }, 
];

export default function SalamaDashboard() {
  return (
    <div className="w-full max-w-md mx-auto bg-[#111726] border border-white/[0.06] p-3.5 sm:p-6 rounded-2xl shadow-2xl flex flex-col justify-between space-y-4">
      
      {/* Top Meta Info */}
      <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
        <div>
          <h4 className="text-[#F4F4F4] font-serif text-sm sm:text-base tracking-wide">Salama SOS: Alert Dispatch Simulation</h4>
          <p className="text-[#94A3B8] text-[10px] sm:text-xs font-sans mt-0.5 opacity-80 leading-normal">
            Comparative simulation of alert routing and location-sharing workflows against traditional emergency communication processes.
          </p>
        </div>
      </div>

      {/* Engineering Value Cards */}
      <div className="grid grid-cols-3 gap-2">
        <div className="p-2 rounded-xl border border-white/[0.02] bg-white/[0.01] flex flex-col justify-center text-center">
          <div className="flex items-center justify-center gap-1 text-[#94A3B8] mb-1">
            <Zap size={11} className="text-[#D8B79A]" />
            <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider">Alert Routing</span>
          </div>
          <p className="text-[10px] sm:text-xs font-semibold text-[#F4F4F4] font-sans">
            Faster Alert Distribution
          </p>
        </div>

        <div className="p-2 rounded-xl border border-white/[0.02] bg-white/[0.01] flex flex-col justify-center text-center">
          <div className="flex items-center justify-center gap-1 text-[#94A3B8] mb-1">
            <ShieldCheck size={11} className="text-[#10b981]" />
            <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider">Location Sync</span>
          </div>
          <p className="text-[10px] sm:text-xs font-semibold text-[#10b981] font-sans">
            Real-Time Tracking
          </p>
        </div>

        <div className="p-2 rounded-xl border border-white/[0.02] bg-white/[0.01] flex flex-col justify-center text-center">
          <div className="flex items-center justify-center gap-1 text-[#94A3B8] mb-1">
            <Activity size={11} className="text-blue-400" />
            <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider">Comm Model</span>
          </div>
          <p className="text-[10px] sm:text-xs font-semibold text-blue-400 font-sans">
            Event-Driven
          </p>
        </div>
      </div>

      {/* Graph Framework */}
      <div className="w-full h-[200px] sm:h-[240px] pt-1">
        <p className="text-[9px] text-[#475569] font-mono mb-1 text-right">Y-Axis: Dispatch Processing Time</p>
        <ResponsiveContainer width="99%" height="90%">
          <AreaChart data={simulationData} margin={{ top: 5, right: 5, left: -35, bottom: 0 }}>
            <defs>
              <linearGradient id="colorSalama" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D8B79A" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#D8B79A" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(214,214,214,0.03)" />
            <XAxis dataKey="load" stroke="#475569" fontSize={8} className="font-mono" />
            <YAxis stroke="#475569" fontSize={8} className="font-mono" ticks={[0, 2, 4, 6, 8, 10]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#111726', borderColor: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '6px' }}
              labelStyle={{ color: '#94A3B8', fontFamily: 'monospace', fontSize: '10px' }}
              itemStyle={{ fontSize: '11px' }}
            />
            <Legend 
              verticalAlign="top" 
              height={32} 
              iconSize={10}
              wrapperStyle={{ fontSize: '10px', fontFamily: 'monospace', paddingBottom: '10px' }}
            />
            <Area type="monotone" dataKey="legacy" stroke="#EF4444" strokeWidth={2} strokeDasharray="4 4" fill="none" name="Legacy Workflow" />
            {/* Hapa dataKey sasa inasoma 'salama' vizuri bila makosa */}
            <Area type="monotone" dataKey="salama" stroke="#D8B79A" strokeWidth={2.5} fillOpacity={1} fill="url(#colorSalama)" name="Salama SOS Workflow" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}