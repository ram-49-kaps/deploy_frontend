import { useEffect, useState } from "react";
import {
  getInfluencers,
  createInfluencer,
  deleteInfluencer,
  updateInfluencer,
} from "../services/influencerService";
import toast from "react-hot-toast";
import Input from "../components/Input";
import InfluencerCard from "../components/InfluencerCard";

export default function InfluencerPage() {
  const [influencers, setInfluencers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    platform: "",
    niche: "",
    followers: "",
    rate_per_post: "",
    bio: "",
  });

  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const data = await getInfluencers();
    setInfluencers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editId) {
      await updateInfluencer(editId, form);
      toast.success("Influencer updated successfully!");
      setEditId(null);
    } else {
      await createInfluencer(form);
      toast.success("Influencer added successfully!");
    }

    setForm({
      name: "",
      email: "",
      platform: "",
      niche: "",
      followers: "",
      rate_per_post: "",
      bio: "",
    });

    fetchData();
  };

  const handleEdit = (inf) => {
    setEditId(inf.id);
    setForm({
      name: inf.name,
      email: inf.email,
      platform: inf.platform,
      niche: inf.niche,
      followers: inf.followers,
      rate_per_post: inf.rate_per_post,
      bio: inf.bio,
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Influencers</h2>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-2">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <Input
          placeholder="Platform"
          value={form.platform}
          onChange={(e) => setForm({ ...form, platform: e.target.value })}
        />
        <Input
          placeholder="Niche"
          value={form.niche}
          onChange={(e) => setForm({ ...form, niche: e.target.value })}
        />
        <Input
          placeholder="Followers"
          value={form.followers}
          onChange={(e) => setForm({ ...form, followers: e.target.value })}
        />
        <Input
          placeholder="Rate Per Post"
          value={form.rate_per_post}
          onChange={(e) => setForm({ ...form, rate_per_post: e.target.value })}
        />

        <textarea
          className="col-span-2 p-2 bg-slate-900/40 dark:bg-slate-800/60 rounded-lg"
          placeholder="Bio"
          value={form.bio}
          onChange={(e) => setForm({ ...form, bio: e.target.value })}
        />

        <button className="col-span-2 bg-emerald-500 hover:bg-emerald-600 py-2 rounded-lg text-white">
          {editId ? "Update Influencer" : "Add Influencer"}
        </button>
      </form>

      {/* LIST */}
      <div className="space-y-3">
        {influencers.map((inf) => (
          <InfluencerCard
            key={inf.id}
            influencer={inf}
            onEdit={() => handleEdit(inf)}
            onDelete={async (id) => {
              await deleteInfluencer(id);
              toast.success("Influencer deleted!");
              fetchData();
            }}
          />
        ))}
      </div>
    </div>
  );
}
