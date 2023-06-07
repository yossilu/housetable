import { createContext, useState, useEffect, useMemo, useCallback } from "react";
import axios from 'axios';

const HouseFormContext = createContext({});

const HOUSE_URL = 'http://localhost:3500/api/houses';

const defaultHouseForm = {
    address: '',
    currentValue: 0,
    loanAmount: 0,
    risk: 0,
}

export const HouseFormProvider = ({ children }) => {

    const [formData, setFormData] = useState({...defaultHouseForm});
    const [lastAdded, setLastAdded] = useState({isSuccess: false, houseId: undefined});

    const [errMsg, setErrMsg] = useState('');
    
    const handleSubmit = useCallback(async (house) => {
        // e.preventDefault();
        
        try {
            const response = await axios.post(HOUSE_URL,
                JSON.stringify(house),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            if(response.data){
                alert(response.data.msg)
                setLastAdded({isSuccess: true, houseId: response.data.houseId});
            }

        } catch (err) {
            if (!err?.response) {
                setErrMsg(err.response.msg);
            } 
        }
    },[setLastAdded])

    const handleSubmitUpdate = useCallback(async (house) => {

        const { address, loanAmount, currentValue } = house;

        try{
            const response = await axios.put(HOUSE_URL + `/${house.id}`,
                JSON.stringify({address, loanAmount, currentValue}),
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            )

            if(response.data){
                alert(response.data.msg);
                window.location.reload();
            }

        } catch(err) {
            if (!err?.response) {
                setErrMsg(err.response.msg);
            } 
        }
        
        
    },[])
    

    useEffect(() =>{
        
    },[handleSubmit, formData, lastAdded, handleSubmitUpdate]);
    

    const contextValue = useMemo(() => ({
        formData,
        setFormData,
        handleSubmit,
        errMsg, 
        setErrMsg,
        lastAdded,
        handleSubmitUpdate
      }), [formData, setFormData, handleSubmit, errMsg, setErrMsg, lastAdded, handleSubmitUpdate])
    
    return (
        <HouseFormContext.Provider value={contextValue}>
            {children}
        </HouseFormContext.Provider>
    )
}

export default HouseFormContext;