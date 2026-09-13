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


    console.log(selectedStack);
    // console.log(stack)

    const addToStack = (tech) => {
        // console.log(id)
        // const filteredTech = stack.filter(item => item.id === id)
        // console.log(filteredTech)
        const existedTech = selectedStack.find(item => item.id === tech.id)
        console.log(existedTech);
        if (existedTech) {
            alert("this tech already exist")
            return
        }
        setSelectedStack([...selectedStack, tech])
    }

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
                            addToStack={addToStack}></TechCard>)
                    }

                </div>
                <div>

                    <div className=" border border-gray-200 rounded-xl p-5 sticky top-6">
                        <h3 className="font-semibold text-gray-900 mb-4">Your Stack</h3>

                        {/* Empty state - swap this out once you track selected items */}
                        {selectedStack.length == 0 ? (
                            <div className="flex flex-col items-center justify-center text-center py-10 text-gray-400">
                                <span className="text-2xl mb-2">+</span>
                                <p className="text-sm">
                                    Add technologies to build your ideal stack.
                                </p>
                            </div>
                        ) :
                            <StackSidebar></StackSidebar>
                        }
                    </div>
                    {/* {
                        selectedStack.map(tech => <StackSidebar key={tech.id} tech={tech}></StackSidebar>)
                    } */}
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;