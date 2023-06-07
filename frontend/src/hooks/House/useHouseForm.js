import { useContext } from "react";
import HouseFormContext from "../../context/House/HouseFormProvider";

const useHouseForm = () => {
    const context = useContext(HouseFormContext);
    return context;
}

export default useHouseForm;