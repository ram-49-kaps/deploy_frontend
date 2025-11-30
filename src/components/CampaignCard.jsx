export default function CampaignCard({ campaign, onDelete, onEdit }) {
  return (
    <div className="p-4 bg-slate-800/60 dark:bg-slate-900 border border-slate-700 rounded-xl flex justify-between">
      <div>
        <h3 className="font-bold">{campaign.title}</h3>
        <p className="text-sm text-slate-300">{campaign.description}</p>
        <p className="text-sm text-slate-400">Brand: {campaign.brand_name}</p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onEdit}
          className="text-blue-400 hover:text-blue-500 text-sm"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(campaign.id)}
          className="text-red-400 hover:text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
