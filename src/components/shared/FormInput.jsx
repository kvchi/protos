export default function FormInput({
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-primary">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
      />
    </div>
  );
}
