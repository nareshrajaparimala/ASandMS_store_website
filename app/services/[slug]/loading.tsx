export default function ServiceLoading() {
  return (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="mx-auto max-w-5xl px-4 py-24 space-y-8">
        <div className="h-8 w-48 bg-gray-100 rounded-full" />
        <div className="h-12 w-2/3 bg-gray-100 rounded-xl" />
        <div className="h-5 w-1/2 bg-gray-100 rounded-full" />
        <div className="h-64 bg-gray-100 rounded-2xl" />
      </div>
    </div>
  );
}
