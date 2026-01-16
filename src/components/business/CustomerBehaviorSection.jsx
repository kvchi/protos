import BehaviorHeader from "./BehaviorHeader";
import BehaviorEmptyState from "./BehaviorEmptyState";
import BehaviorChart from "./BehaviorChart";

export default function CustomerBehaviorSection({ title, tag, data, filterType }) {
  const hasData = data && data.length > 0;

  return (
    <section className="bg-secondary rounded-lg p-4 space-y-4">
      <BehaviorHeader title={title} tag={tag} filterType={filterType} />

      {hasData ? (
        <BehaviorChart data={data} />
      ) : (
        <BehaviorEmptyState tag={tag} />
      )}
    </section>
  );
}
