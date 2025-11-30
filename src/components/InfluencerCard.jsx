export default function InfluencerCard({ influencer, onDelete, onEdit }) {
  return (
    <div className="p-4 rounded-xl bg-slate-800/60 dark:bg-slate-900 border border-slate-700 flex justify-between">
      <div>
        <h3 className="font-bold">{influencer.name}</h3>
        <p className="text-sm text-slate-300">{influencer.niche}</p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onEdit}
          className="text-blue-400 hover:text-blue-500 text-sm"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(influencer.id)}
          className="text-red-400 hover:text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
