export default function Input({ label, invalid, ...props }) {
  let labelClasses =
    "block mb-2 text-xs font-bold tracking-wide uppercase text-stone-3000";
  let inputClasses =
    "w-full px-3 py-2 leading-tight border rounded shadow bg-stone-300";
  if (invalid) {
    labelClasses += " text-red-400";
    inputClasses += " ";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }
  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
}
