export default function BehaviorEmptyState({ tag }) {
  return (
    <div className="h-40 flex items-center justify-center text-gray-500 text-sm">
      No customer behavior for {tag.toLowerCase()} yet
    </div>
  );
}
