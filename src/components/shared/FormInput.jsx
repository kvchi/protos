export default function FormInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  const isControlled = value !== undefined && onChange !== undefined;
  return (
    <div>
      <label className="text-sm font-semibold text-primary">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...(isControlled ? { value, onChange } : {})}
        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
      />
    </div>
  );
}
