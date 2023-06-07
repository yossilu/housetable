import { createContext, useMemo, useCallback, useState } from "react";
import axios from 'axios';

const HouseContext = createContext({});

const UPDATE_HOUSE_URL = 'http://localhost:3500/api/houses';

const defaultHouseForm = {
    address: '',
    currentValue: 0,
    loanAmount: 0,
    risk: 0,
}


export const HouseUpdateProvider = ({ children }) => {
    const [formData, setFormData] = useState({...defaultHouseForm});

    const handleSubmitUpdate = useCallback(async (id) => {
        const response = await axios.put(UPDATE_HOUSE_URL + `/${id}`,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        )

        if(response.data) {
            return response.data;
        }
        
    },[])


    const contextValue = useMemo(() => ({
        handleSubmitUpdate,
        formData,
        setFormData
      }), [handleSubmitUpdate, formData, setFormData])
    
    return (
        <HouseContext.Provider value={contextValue}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseUpdateProvider;