import Attributes from "@/components/Attributes"
import Offensive from "@/components/Offensive"
import Defensive from "@/components/Defensive"
// import Dropdown from "@/components/Dropdown"
//rafce
const Calculator = () => {


    return (
        <div className="">

            <div className="crTracker ">
                <div>
                    CR: ##
                </div>
            </div>

            <div className=" mb-4  justify-center min-w-100 border-2 border-red-800">
                <Attributes />
            </div>




            <div className="flex flex-row gap-1 justify-around items-center">
                <div className="mb-4 w-full">
                    <Defensive />
                </div>

                <div className="mb-4  w-full">
                    <Offensive />
                </div>
            </div>


        </div>

    )
}

export default Calculator