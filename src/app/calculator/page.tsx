import Attributes from "@/components/Attributes"
import Offensive from "@/components/Offensive"
import Defensive from "@/components/Defensive"

//rafce
const Calculator = () => {

    return (
        <div className="">

            <div className="crTracker ">
                <div>
                    CR: ##
                </div>
            </div>

            <div className="mb-4">
                <Attributes />
            </div>

            <div className="mb-4">
                <Defensive />
            </div>

            <div className="mb-4">
                <Offensive />
            </div>

        </div>

    )
}

export default Calculator