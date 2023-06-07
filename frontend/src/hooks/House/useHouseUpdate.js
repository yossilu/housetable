import { useContext } from "react";
import HouseUpdateContext from "../../context/House/HouseUpdateProvider";

const useHouseUpdate = () => {
    const context = useContext(HouseUpdateContext);
    return context;
}

export default useHouseUpdate;