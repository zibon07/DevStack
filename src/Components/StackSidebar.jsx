export default function StackSidebar({ stack, removeFromStack }) {
    // console.log(stack)
    return (

        <div className="flex flex-1 md:w-65 items-center justify-between bg-white border border-gray-100  rounded-lg px-3 py-2 shadow-sm">
            <div className="flex items-center gap-3">
                <img src={stack.icon} alt={stack.name} className="w-8 h-8" />
                <div>
                    <p className="text-sm font-medium text-gray-900">{stack.name}</p>
                    <p className="text-xs text-gray-400">{stack.category}</p>
                </div>
            </div>

            <button
                onClick={() => removeFromStack(stack.id)}
                className="text-gray-400 cursor-pointer hover:text-red-500"
            >
                ✕
            </button>
        </div>

    );
}