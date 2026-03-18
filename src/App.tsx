/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useCallback, useRef } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  GitBranch, 
  BrainCircuit, 
  Footprints, 
  FileText, 
  Settings, 
  Database, 
  Upload, 
  Search, 
  Grid, 
  List,
  ChevronRight,
  Info,
  AlertTriangle,
  LogOut,
  Bell,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { MOCK_PLAYERS } from './mockData';
import { Player } from './types';

type View = 'jugadores' | 'podografia' | 'estadisticas';

export default function App() {
  const [activeView, setActiveView] = useState<View>('jugadores');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Todos');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [selectedPlayerForDetail, setSelectedPlayerForDetail] = useState<Player | null>(null);

  const filteredPlayers = MOCK_PLAYERS.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'Todos' || player.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getPlayerDisplayName = (player: Player, index: number) => {
    if (!isAnonymous) return player.name;
    // Find absolute index in MOCK_PLAYERS for consistent numbering
    const absoluteIndex = MOCK_PLAYERS.findIndex(p => p.id === player.id);
    return `Jugador ${absoluteIndex + 1}`;
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1e293b] text-slate-300 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xl">
            LCM
          </div>
          <div>
            <h1 className="text-white font-bold text-sm leading-tight">LCM Performance Analyzer</h1>
            <p className="text-[10px] opacity-60">UPC × Sporting Cristal — Evaluación 2026</p>
          </div>
        </div>

        <nav className="flex-1 mt-4 overflow-y-auto">
          <SidebarItem 
            icon={<Users size={20} />} 
            label="Jugadores" 
            active={activeView === 'jugadores'} 
            onClick={() => setActiveView('jugadores')}
          />
          <SidebarItem 
            icon={<Footprints size={20} />} 
            label="Podografía" 
            active={activeView === 'podografia'} 
            onClick={() => setActiveView('podografia')}
          />
          <SidebarItem 
            icon={<BarChart3 size={20} />} 
            label="Estadísticas" 
            active={activeView === 'estadisticas'} 
            onClick={() => setActiveView('estadisticas')}
          />
        </nav>

        <div className="p-4 border-t border-slate-700 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center">
                <User size={16} />
              </div>
              <div className="text-xs">
                <p className="text-white font-medium">Anónimo</p>
                <div className="flex items-center gap-1">
                   <div 
                    onClick={() => setIsAnonymous(!isAnonymous)}
                    className={`w-8 h-4 rounded-full relative cursor-pointer transition-colors ${isAnonymous ? 'bg-emerald-500' : 'bg-slate-600'}`}
                   >
                    <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${isAnonymous ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </div>
              </div>
            </div>
            <button className="p-1.5 hover:bg-slate-700 rounded text-amber-500 border border-amber-500/30 text-[10px] flex items-center gap-1">
              <Settings size={12} /> Propietario
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button className="p-1.5 hover:bg-slate-700 rounded"><Search size={16} /></button>
              <button className="p-1.5 hover:bg-slate-700 rounded"><LogOut size={16} /></button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            Dashboard / {activeView === 'jugadores' ? 'Jugadores' : activeView === 'podografia' ? 'Podografía' : 'Estadísticas'}
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
              MC
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 bg-[#f8fafc]">
          <AnimatePresence mode="wait">
            {activeView === 'jugadores' ? (
              <PlayersView 
                key="players"
                players={filteredPlayers}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                isAnonymous={isAnonymous}
                getPlayerDisplayName={getPlayerDisplayName}
                onPlayerClick={(player: Player) => setSelectedPlayerForDetail(player)}
              />
            ) : activeView === 'podografia' ? (
              <PodographyView 
                key="podography"
                players={MOCK_PLAYERS.filter(p => p.hasPodography)}
                isAnonymous={isAnonymous}
                getPlayerDisplayName={getPlayerDisplayName}
              />
            ) : (
              <StatisticsView 
                key="statistics"
                players={MOCK_PLAYERS.filter(p => p.hasPodography)}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Player Detail Modal */}
      <AnimatePresence>
        {selectedPlayerForDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1e293b] text-white flex items-center justify-center font-bold text-xl">
                    {getPlayerDisplayName(selectedPlayerForDetail, 0).split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{getPlayerDisplayName(selectedPlayerForDetail, 0)}</h2>
                    <p className="text-slate-500">{selectedPlayerForDetail.category} • ID: {selectedPlayerForDetail.id}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPlayerForDetail(null)}
                  className="p-2 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <LogOut size={24} className="rotate-180" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                <div className="grid grid-cols-1 gap-8">
                  {/* Podography Metrics */}
                  <div className="space-y-6">
                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                      <Footprints size={20} className="text-emerald-500" />
                      Análisis Podográfico
                    </h3>
                    {selectedPlayerForDetail.hasPodography ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                            <p className="text-xs font-bold text-emerald-400 uppercase mb-1">Izquierdo (ICS)</p>
                            <p className="text-xl font-bold text-emerald-900">{selectedPlayerForDetail.podography?.ics_izquierdo}</p>
                            <p className="text-xs text-emerald-700 font-medium mt-1">{selectedPlayerForDetail.podography?.huella_izquierdo}</p>
                          </div>
                          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                            <p className="text-xs font-bold text-emerald-400 uppercase mb-1">Derecho (ICS)</p>
                            <p className="text-xl font-bold text-emerald-900">{selectedPlayerForDetail.podography?.ics_derecho}</p>
                            <p className="text-xs text-emerald-700 font-medium mt-1">{selectedPlayerForDetail.podography?.huella_derecho}</p>
                          </div>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex justify-between items-center">
                          <div>
                            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Categoría Final</p>
                            <p className="font-bold text-slate-800">{selectedPlayerForDetail.podography?.categoria_final}</p>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${selectedPlayerForDetail.podography?.isDiscordant ? 'bg-amber-100 text-amber-600' : 'bg-emerald-100 text-emerald-600'}`}>
                            {selectedPlayerForDetail.podography?.isDiscordant ? 'Discordante' : 'Concordante'}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="p-8 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-center text-slate-400">
                        No hay datos de podografía disponibles
                      </div>
                    )}
                  </div>
                </div>

                {/* Footprint Images */}
                {selectedPlayerForDetail.hasPodography && (
                  <div className="mt-8 pt-8 border-t border-slate-100">
                    <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                      <Upload size={20} className="text-slate-400" />
                      Imágenes de Huella Plantar
                    </h3>
                    <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <p className="text-sm font-bold text-slate-500 text-center">Pie Izquierdo</p>
                        <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                          {selectedPlayerForDetail.podography?.imageIzquierda ? (
                            <img 
                              src={selectedPlayerForDetail.podography.imageIzquierda} 
                              alt="Huella Izquierda" 
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                              <Footprints size={64} strokeWidth={1} />
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <p className="text-sm font-bold text-slate-500 text-center">Pie Derecho</p>
                        <div className="aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                          {selectedPlayerForDetail.podography?.imageDerecha ? (
                            <img 
                              src={selectedPlayerForDetail.podography.imageDerecha} 
                              alt="Huella Derecha" 
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                              <Footprints size={64} strokeWidth={1} />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function StatisticsView({ players }: { players: Player[], key?: string }) {
  const [statCategoryFilter, setStatCategoryFilter] = useState('Todos');

  const filteredPlayers = players.filter(p => 
    statCategoryFilter === 'Todos' || p.category === statCategoryFilter
  );

  // Calculate foot type distribution
  const footTypeData = [
    { name: 'Normal', value: 0 },
    { name: 'Plano', value: 0 },
    { name: 'Cavo', value: 0 },
  ];

  filteredPlayers.forEach(p => {
    if (p.podography) {
      [p.podography.huella_izquierdo, p.podography.huella_derecho].forEach(type => {
        if (type.includes('Normal')) footTypeData[0].value++;
        else if (type.includes('Plano')) footTypeData[1].value++;
        else if (type.includes('Cavo')) footTypeData[2].value++;
      });
    }
  });

  // Calculate concordance
  const concordanceData = [
    { name: 'Concordante', value: filteredPlayers.filter(p => !p.podography?.isDiscordant).length },
    { name: 'Discordante', value: filteredPlayers.filter(p => p.podography?.isDiscordant).length },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Estadísticas Podográficas</h2>
          <p className="text-slate-500">Análisis agregado de la población evaluada</p>
        </div>
        <div className="flex items-center gap-2">
          <FilterButton active={statCategoryFilter === 'Todos'} onClick={() => setStatCategoryFilter('Todos')}>Todos</FilterButton>
          <FilterButton active={statCategoryFilter === 'Sub-16'} onClick={() => setStatCategoryFilter('Sub-16')}>Sub-16</FilterButton>
          <FilterButton active={statCategoryFilter === 'Sub-17'} onClick={() => setStatCategoryFilter('Sub-17')}>Sub-17</FilterButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Foot Type Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Footprints size={20} className="text-blue-500" />
            Distribución de Tipos de Pie
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={footTypeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {footTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Concordance Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
            <GitBranch size={20} className="text-emerald-500" />
            Concordancia Podográfica
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={concordanceData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  <Cell fill="#10b981" />
                  <Cell fill="#f59e0b" />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SidebarItem({ icon, label, active, onClick, badge }: { 
  icon: React.ReactNode, 
  label: string, 
  active?: boolean, 
  onClick?: () => void,
  badge?: string
}) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-6 py-2.5 text-sm transition-colors relative ${
        active 
          ? 'text-white bg-blue-500/10 border-r-4 border-blue-500' 
          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
      }`}
    >
      <span className={active ? 'text-blue-400' : ''}>{icon}</span>
      <span className={`flex-1 text-left ${active ? 'font-medium text-white' : ''}`}>{label}</span>
      {badge && (
        <span className="text-[10px] bg-slate-700 px-1.5 py-0.5 rounded text-slate-400">
          {badge}
        </span>
      )}
    </button>
  );
}

function PlayersView({ players, searchQuery, setSearchQuery, categoryFilter, setCategoryFilter, isAnonymous, getPlayerDisplayName, onPlayerClick }: { 
  players: Player[], 
  searchQuery: string, 
  setSearchQuery: (q: string) => void, 
  categoryFilter: string, 
  setCategoryFilter: (c: string) => void, 
  isAnonymous: boolean,
  getPlayerDisplayName: (p: Player, i: number) => string,
  onPlayerClick: (p: Player) => void,
  key?: string
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Jugadores</h2>
          <p className="text-slate-500">{players.length} jugadores encontrados</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar jugador..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <div className="flex bg-white border border-slate-200 rounded-lg p-1">
            <button className="p-1.5 bg-slate-800 text-white rounded shadow-sm"><Grid size={18} /></button>
            <button className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"><List size={18} /></button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <FilterButton active={categoryFilter === 'Todos'} onClick={() => setCategoryFilter('Todos')}>Todos</FilterButton>
        <FilterButton active={categoryFilter === 'Sub-16'} onClick={() => setCategoryFilter('Sub-16')}>Sub-16</FilterButton>
        <FilterButton active={categoryFilter === 'Sub-17'} onClick={() => setCategoryFilter('Sub-17')}>Sub-17</FilterButton>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player: Player, index: number) => (
          <PlayerCard 
            key={player.id} 
            player={player} 
            displayName={getPlayerDisplayName(player, index)}
            onClick={() => onPlayerClick(player)}
          />
        ))}
      </div>
    </motion.div>
  );
}

function FilterButton({ children, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        active 
          ? 'bg-[#1e293b] text-white shadow-md' 
          : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'
      }`}
    >
      {children}
    </button>
  );
}

function PlayerCard({ player, displayName, onClick }: { player: Player, displayName: string, onClick: () => void, key?: string }) {
  const initials = displayName.split(' ').map(n => n[0]).join('');
  
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-5 border border-slate-200 hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-[#1e293b] text-white flex items-center justify-center font-bold text-lg group-hover:scale-105 transition-transform">
            {initials}
          </div>
          <div>
            <h3 className="font-bold text-slate-800">{displayName}</h3>
            <p className="text-xs text-slate-500">{player.category}</p>
          </div>
        </div>
        <div className={`w-6 h-6 rounded-full text-white flex items-center justify-center text-[10px] font-bold ${
          player.hasPodography ? 'bg-emerald-500' : 'bg-amber-500'
        }`}>
          {player.hasPodography ? '✓' : '!'}
        </div>
      </div>

      {player.hasPodography ? (
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Izquierdo</div>
            <div className="text-sm font-bold text-slate-800">{player.podography?.ics_izquierdo}</div>
            <div className="text-[10px] text-slate-500">{player.podography?.huella_izquierdo}</div>
          </div>
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <div className="text-xs font-bold text-slate-400 uppercase mb-1">Derecho</div>
            <div className="text-sm font-bold text-slate-800">{player.podography?.ics_derecho}</div>
            <div className="text-[10px] text-slate-500">{player.podography?.huella_derecho}</div>
          </div>
        </div>
      ) : (
        <div className="py-4 text-center text-slate-400 text-xs italic">
          Sin datos de podografía
        </div>
      )}
    </div>
  );
}

function Metric({ label, sub }: { label: string, sub: string }) {
  return (
    <div className="text-center">
      <div className="text-lg font-bold text-slate-800">{label}</div>
      <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{sub}</div>
    </div>
  );
}

function PodographyView({ players, isAnonymous, getPlayerDisplayName }: { 
  players: Player[], 
  isAnonymous: boolean, 
  getPlayerDisplayName: (p: Player, i: number) => string, 
  key?: string 
}) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [podSearch, setPodSearch] = useState('');
  const [podCategoryFilter, setPodCategoryFilter] = useState('Todos');

  const filteredPodPlayers = players.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(podSearch.toLowerCase());
    const matchesCategory = podCategoryFilter === 'Todos' || p.category === podCategoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Análisis de Huella Plantar</h2>
          <p className="text-slate-500">Podografía por imagen PediScan — Chippaux-Smirak (CSI)</p>
        </div>
        <div className="flex items-center gap-2">
          <FilterButton active={podCategoryFilter === 'Todos'} onClick={() => setPodCategoryFilter('Todos')}>Todos</FilterButton>
          <FilterButton active={podCategoryFilter === 'Sub-16'} onClick={() => setPodCategoryFilter('Sub-16')}>Sub-16</FilterButton>
          <FilterButton active={podCategoryFilter === 'Sub-17'} onClick={() => setPodCategoryFilter('Sub-17')}>Sub-17</FilterButton>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total evaluados" value={players.length.toString()} color="blue" />
        <StatCard label="Concordantes" value={players.filter(p => !p.podography?.isDiscordant).length.toString()} color="emerald" />
        <StatCard label="Discordantes" value={players.filter(p => p.podography?.isDiscordant).length.toString()} color="amber" />
        <StatCard label="Sin datos" value="0" color="slate" />
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Player Selection */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-xl border border-slate-200 p-6 flex flex-col h-[500px] shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Seleccionar Jugador</h3>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar jugador..."
              value={podSearch}
              onChange={(e) => setPodSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

                  <div className="flex-1 overflow-y-auto space-y-1 pr-2">
            {filteredPodPlayers.length > 0 ? (
              filteredPodPlayers.map((player, index) => (
                <button
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center justify-between group ${
                    selectedPlayer?.id === player.id 
                      ? 'bg-blue-50 text-blue-600 shadow-sm' 
                      : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <span className={`font-medium ${selectedPlayer?.id === player.id ? 'text-blue-700' : ''}`}>
                    {getPlayerDisplayName(player, index)}
                  </span>
                  <ChevronRight size={16} className={`transition-transform ${selectedPlayer?.id === player.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))
            ) : (
              <div className="text-center py-12 text-slate-400">
                <p>No se encontraron jugadores con datos de podografía</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Analysis Display */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-xl border border-slate-200 p-8 flex flex-col items-center justify-center text-center shadow-sm min-h-[500px]">
          {!selectedPlayer ? (
            <>
              <div className="w-24 h-24 text-slate-200 mb-6">
                <Footprints size={96} strokeWidth={1} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Selecciona un jugador para ver su análisis podográfico
              </h3>
              <p className="text-slate-500 max-w-md">
                Los datos se muestran según la evaluación PediScan
              </p>
            </>
          ) : (
            <div className="w-full h-full flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-slate-800">Análisis de {getPlayerDisplayName(selectedPlayer, 0)}</h3>
                  <p className="text-slate-500">ID: {selectedPlayer.id} • Categoría: {selectedPlayer.category}</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Generar Informe
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-8 flex-1">
                <div className="flex flex-col gap-4">
                  <div className="aspect-[3/4] bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 gap-2 overflow-hidden relative">
                    {selectedPlayer.podography?.imageIzquierda ? (
                      <img 
                        src={selectedPlayer.podography.imageIzquierda} 
                        alt="Huella Izquierda" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <>
                        <Footprints size={48} className="opacity-20" />
                        <span className="text-sm font-medium">Huella Izquierda</span>
                      </>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded border border-slate-200 text-slate-800 text-xs font-bold">
                      {selectedPlayer.podography?.huella_izquierdo}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-left">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Métricas Izquierda</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div><p className="text-[10px] text-slate-500">CSI (ICS)</p><p className="font-bold">{selectedPlayer.podography?.ics_izquierdo}</p></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="aspect-[3/4] bg-slate-50 rounded-xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 gap-2 overflow-hidden relative">
                    {selectedPlayer.podography?.imageDerecha ? (
                      <img 
                        src={selectedPlayer.podography.imageDerecha} 
                        alt="Huella Derecha" 
                        className="w-full h-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <>
                        <Footprints size={48} className="opacity-20" />
                        <span className="text-sm font-medium">Huella Derecha</span>
                      </>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded border border-slate-200 text-slate-800 text-xs font-bold">
                      {selectedPlayer.podography?.huella_derecho}
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-left">
                    <p className="text-xs font-bold text-slate-400 uppercase mb-2">Métricas Derecha</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div><p className="text-[10px] text-slate-500">CSI (ICS)</p><p className="font-bold">{selectedPlayer.podography?.ics_derecho}</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 w-full flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Categoría Final</p>
                  <p className={`text-lg font-bold ${selectedPlayer.podography?.isDiscordant ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {selectedPlayer.podography?.categoria_final}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 uppercase font-bold">Estado</p>
                  <p className={`text-sm font-bold ${selectedPlayer.podography?.isDiscordant ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {selectedPlayer.podography?.isDiscordant ? 'Discordante (Indeterminado)' : 'Concordante'}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Info size={20} />
          </div>
          <div>
            <h4 className="font-bold text-blue-900 mb-2">Índices podográficos</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p><strong>Índices podográficos:</strong> CSI (Chippaux-Smirak): 25-45% normal</p>
              <p className="text-xs opacity-60 mt-2">Ref: Hernández-Morales et al. (2020).</p>
            </div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 flex gap-4 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
            <AlertTriangle size={20} />
          </div>
          <div>
            <h4 className="font-bold text-orange-900 mb-2">Aviso importante</h4>
            <p className="text-sm text-orange-800">
              La podografía por huella plantar es un tamizaje deportivo. No constituye diagnóstico médico ni podológico. Para diagnóstico, tratamiento o intervención clínica, consultar a un profesional habilitado.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
  const colorClasses: any = {
    blue: 'text-blue-600',
    emerald: 'text-emerald-600',
    amber: 'text-orange-600',
    slate: 'text-slate-600'
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{label}</p>
      <p className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  );
}
