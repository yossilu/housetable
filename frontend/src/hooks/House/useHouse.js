import { useContext } from "react";
import HouseContext from "../../context/House/HouseProvider";

const useHouse = () => {
    const context = useContext(HouseContext);
    return context;
}

export default useHouse;