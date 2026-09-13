export default function StackSidebar() {
  return (
    <div className=" border border-gray-200 rounded-xl p-5 sticky top-6">
      <h3 className="font-semibold text-gray-900 mb-4">Your Stack</h3>

      {/* Empty state - swap this out once you track selected items */}
      <div className="flex flex-col items-center justify-center text-center py-10 text-gray-400">
        <span className="text-2xl mb-2">+</span>
        <p className="text-sm">
          Add technologies to build your ideal stack.
        </p>
      </div>
    </div>
  );
}