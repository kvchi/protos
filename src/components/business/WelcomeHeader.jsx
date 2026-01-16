export default function WelcomeHeader({ userName }) {
  return (
    <header>
      <h1 className="text-xl font-semibold text-primary">
        Welcome {userName},
      </h1>
      <p className="text-sm text-gray-500">
        Here is your business activity breakdown
      </p>
    </header>
  );
}
