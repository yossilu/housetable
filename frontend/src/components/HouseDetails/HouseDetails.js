import { Fragment, useEffect, useState } from "react";
import './HouseDetails.scss';
import {
    useParams,
  } from "react-router-dom"
import useHouse from "../../hooks/House/useHouse";
import { Button } from "reactstrap";

import { FiEdit2 } from 'react-icons/fi';
import HouseForm from "../HouseForm/HouseForm";
import { HouseFormProvider } from "../../context/House/HouseFormProvider";


const HouseDetails = (props) => {
  const { getOneHousesApi, currHouseObj } = useHouse();
  const [isEdit, setIsEdit] = useState(false);
  
  let { id } = useParams();

  useEffect(() => {
    getOneHousesApi(id);
  }, [getOneHousesApi, id])

  const switchToEdit = () => {
    setIsEdit(oldValue => !oldValue)
  }

  return (
    <Fragment>
        <Button className="house_edit" onClick={switchToEdit}>
            <FiEdit2></FiEdit2>
        </Button>
        {!isEdit ? <section className='house_details'>
            {currHouseObj.house ? <Fragment>

                <h1>
                    House Number {id}
                </h1>
                <div className="house_field">
                    <h2>
                        Address
                    </h2>
                    <div className="text">
                        {currHouseObj.house.address}
                    </div>
                </div>
                <br/>
                <div className="house_field">
                    <h2>
                        Current Value
                    </h2>
                    <div className="text">
                        {currHouseObj.house.currentValue}
                    </div>
                </div>
                <br/>
                <div className="house_field">
                    <h2>
                        Loan Amount
                    </h2>
                    <div className="text">
                        {currHouseObj.house.loanAmount}
                    </div>
                </div>
                <br/>
                <div className="house_field">
                    <h2>
                        Risk
                    </h2>
                    <div className="text">
                        {currHouseObj.house.risk}
                    </div>
                </div>
            </Fragment>
            :
            <Fragment>
                <div className="no_data">
                    {currHouseObj.msg}
                </div>
            </Fragment>
            }
        </section>
        :
        <Fragment>
            <HouseFormProvider>
                <HouseForm>

                </HouseForm>
            </HouseFormProvider>
        </Fragment>
        }
    </Fragment>
  );
}

export default HouseDetails;