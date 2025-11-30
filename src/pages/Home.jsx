import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-10">
      
      {/* Title */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">
          Welcome to Micro Influencer Platform
        </h1>
        <p className="text-slate-400 mt-2 text-sm">
          Manage influencers, campaigns, and collaborations — all in one place.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Influencer Card */}
        <Link
          to="/influencers"
          className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 hover:bg-slate-800 transition shadow-lg"
        >
          <h2 className="text-xl font-semibold text-white">Influencers</h2>
          <p className="text-slate-400 mt-2 text-sm">
            View, add, and manage influencer profiles.
          </p>
          <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm">
            Manage Influencers
          </button>
        </Link>

        {/* Campaigns Card */}
        <Link
          to="/campaigns"
          className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 hover:bg-slate-800 transition shadow-lg"
        >
          <h2 className="text-xl font-semibold text-white">Campaigns</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Create and manage brand marketing campaigns.
          </p>
          <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm">
            Manage Campaigns
          </button>
        </Link>
      </div>

      {/* Footer */}
      <div className="text-center mt-10">
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Micro Influencer Platform • Minimal FSD Project
        </p>
      </div>
    </div>
  );
}
