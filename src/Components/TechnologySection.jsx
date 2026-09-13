import { useEffect, useState } from "react";
import StackSidebar from "./StackSidebar";
import TechCard from "./TechCard";

const TechnologySection = () => {

    const [stack, setStack] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedStack, setSelectedStack] = useState([])

    useEffect(() => {
        fetch("../../public/TechStack.json")
            .then(res => res.json())
            .then(data => {
                setStack(data)
                setLoading(false)
            })
    }, [])


    if (loading) return <div>loading.......</div>


    // console.log(selectedStack);
    // console.log(stack)

    const addToStack = (tech) => {
        // console.log(id)
        // const filteredTech = stack.filter(item => item.id === id)
        // console.log(filteredTech)
        const existedTech = selectedStack.find(item => item.id === tech.id)
        // console.log(existedTech);
        if (existedTech) {
            alert("this tech already exist")
            return
        }
        setSelectedStack([...selectedStack, tech])
    }
    const removeFromStack = (id) => {
    setSelectedStack(selectedStack.filter(t => t.id !== id));
};

    const removeStack =()=>setSelectedStack([])

    return (
        <section className="max-w-300 mx-auto">
            <div className=" mx-auto mb-10">
                <h2 className="text-3xl font-extrabold text-gray-900">
                    Explore the{" "}
                    <span className="bg-linear-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="mt-2 text-gray-500">
                    Pick a technology per category to build your ideal stack.
                </p>
            </div>
            <div className="flex flex-col md:flex-row  gap-6">
                <div className="grid grid-cols  md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
                    {
                        stack.map(tech => <TechCard
                            key={tech.id}
                            tech={tech}
                            addToStack={addToStack}
                            isAdded={selectedStack.some(t => t.id === tech.id)}></TechCard>)
                    }

                </div>
                <div>
                    <div className=" border border-gray-200 rounded-xl p-5 sticky top-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Your Stack</h3>

                        <p className="tex-sm text-gray-600 mb-5"><span className="text-pink-600 font-bold">{selectedStack.length}</span> technology selected</p>

                        <div className="space-y-4">
                            {/* Empty state - swap this out once you track selected items */}
                            {selectedStack.length == 0 ? (
                                <div className="flex flex-col items-center justify-center text-center py-10 text-gray-400">
                                    <span className="text-2xl mb-2">+</span>
                                    <p className="text-sm">
                                        Add technologies to build your ideal stack.
                                    </p>
                                </div>
                            ) :
                                selectedStack.map(stack =>
                                    <StackSidebar
                                        key={stack.id}
                                        stack={stack}
                                        removeFromStack={removeFromStack}
                                    ></StackSidebar>
                                )
                            }
                            {selectedStack.length === 0 || (
                                <button
                                    onClick={removeStack}
                                    className="w-full cursor-pointer py-2 rounded-lg border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition"
                                >
                                    Remove All
                                </button>
                            )

                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;