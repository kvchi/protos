export default function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-primary text-white px-6 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}