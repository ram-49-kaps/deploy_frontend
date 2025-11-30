export default function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-slate-600 bg-slate-900/60 px-3 py-2 text-white text-sm focus:ring-1 focus:ring-emerald-400"
    />
  );
}
