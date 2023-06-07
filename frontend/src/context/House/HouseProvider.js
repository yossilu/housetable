import { createContext, useEffect, useMemo, useCallback, useState } from "react";
import axios from 'axios';

const HouseContext = createContext({});

// const GET_ALL_HOUSE_URL = 'http://localhost:3500/api/houses/getAll';
const GET_ONE_HOUSE_URL = 'http://localhost:3500/api/houses';

/* provider for get a house by id, preperation for getAll method*/
export const HouseProvider = ({ children }) => {
    const [houses, setHouses] = useState([]);
    const [currHouseObj, setCurrHouseObj] = useState({});

    // const getAllHousesApi = useCallback(async (house) => {
    //     const response = await axios.get(GET_ALL_HOUSE_URL,
    //         {
    //             headers: { 'Content-Type': 'application/json' },
    //         }
    //     )

    //     if(response.data) {
    //         setHouses(response.data)
    //     }
        
    // },[setHouses])

    const getOneHousesApi = useCallback(async (id) => {
        const response = await axios.get(GET_ONE_HOUSE_URL + `/${id}`,
            {
                headers: { 'Content-Type': 'application/json' },
            }
        )

        if(response.data) {
            // alert(response.data.msg)
            setCurrHouseObj({house: response.data.house, msg: response.data.msg});
        }
        
    },[])

    useEffect(() =>{
        // getAllHousesApi()
    },[]);



    const contextValue = useMemo(() => ({
        houses,
        setHouses,
        getOneHousesApi,
        currHouseObj
      }), [houses, setHouses, getOneHousesApi, currHouseObj])
    
    return (
        <HouseContext.Provider value={contextValue}>
            {children}
        </HouseContext.Provider>
    )
}

export default HouseContext;