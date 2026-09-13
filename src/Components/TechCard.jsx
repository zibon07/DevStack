export default function TechCard({ tech, addToStack, isAdded }) {
    return (
        <div
            className={`border space-y-5 max-w-70 h-71.25 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 ${isAdded
                    ? "border-green-500 ring-1 ring-green-200 bg-green-50/40"
                    : "border-gray-200"
                }`}
        >
            <div className="flex items-center justify-between mb-3">
                <div className="w-7 h-7 flex items-center justify-center rounded-lg text-lg">
                    <img src={tech.icon} alt="" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-100 text-pink-600">
                    {tech.badge}
                </span>
            </div>

            <h3 className="font-bold text-gray-900">{tech.name}</h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                {tech.description}
            </p>

            <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600">
                        {tech.category}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600">
                        {tech.difficulty}
                    </span>
                </div>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                    ⭐ {tech.rating}
                </span>
            </div>

            <button
                onClick={() => addToStack(tech)}
                disabled={isAdded}
                className={`mt-12  w-full  py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1.5 ${isAdded
                        ? "bg-green-100 text-green-700 cursor-not-allowed"
                        : "bg-gray-900 cursor-pointer text-white hover:bg-gray-800"
                    }`}
            >
                {isAdded && (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                )}
                {isAdded ? "Added to Stack" : "Add to Stack"}
            </button>
        </div>
    );
}