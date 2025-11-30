import { useEffect, useState } from "react";
import {
  getCampaigns,
  createCampaign,
  deleteCampaign,
  updateCampaign,
} from "../services/campaignService";
import toast from "react-hot-toast";
import Input from "../components/Input";
import CampaignCard from "../components/CampaignCard";

export default function CampaignPage() {
  const [campaigns, setCampaigns] = useState([]);

  const [form, setForm] = useState({
    brand_name: "",
    brand_email: "",
    title: "",
    description: "",
    budget: "",
    status: "open",
  });

  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const data = await getCampaigns();
    setCampaigns(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateCampaign(editId, form);
      toast.success("Campaign updated successfully!");
      setEditId(null);
    } else {
      await createCampaign(form);
      toast.success("Campaign added successfully!");
    }

    setForm({
      brand_name: "",
      brand_email: "",
      title: "",
      description: "",
      budget: "",
      status: "open",
    });

    fetchData();
  };

  const handleEdit = (c) => {
    setEditId(c.id);

    setForm({
      brand_name: c.brand_name,
      brand_email: "", // email not returned by list, optional
      title: c.title,
      description: c.description,
      budget: c.budget,
      status: c.status,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Campaigns</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
        <Input
          placeholder="Brand Name"
          value={form.brand_name}
          onChange={(e) => setForm({ ...form, brand_name: e.target.value })}
        />

        <Input
          placeholder="Brand Email"
          value={form.brand_email}
          onChange={(e) => setForm({ ...form, brand_email: e.target.value })}
        />

        <Input
          placeholder="Campaign Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <Input
          placeholder="Budget"
          type="number"
          value={form.budget}
          onChange={(e) => setForm({ ...form, budget: e.target.value })}
        />

        <select
          className="w-full rounded-lg border border-slate-600 bg-slate-900/40 dark:bg-slate-800/60 text-white px-3 py-2 text-sm"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <textarea
          className="col-span-2 p-2 rounded-lg bg-slate-900/40 dark:bg-slate-800/60"
          placeholder="Campaign Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <button className="col-span-2 bg-indigo-500 hover:bg-indigo-600 py-2 rounded-lg text-white">
          {editId ? "Update Campaign" : "Add Campaign"}
        </button>
      </form>

      {/* LIST */}
      <div className="space-y-3">
        {campaigns.length === 0 && (
          <p className="text-slate-400 text-sm">No campaigns found.</p>
        )}

        {campaigns.map((c) => (
          <CampaignCard
            key={c.id}
            campaign={c}
            onEdit={() => handleEdit(c)}
            onDelete={async (id) => {
              await deleteCampaign(id);
              toast.success("Campaign deleted!");
              fetchData();
            }}
          />
        ))}
      </div>
    </div>
  );
}
