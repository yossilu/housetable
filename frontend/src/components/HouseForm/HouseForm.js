import { Fragment, useRef, useEffect, useState } from "react";
import './HouseForm.scss';
import {
  Form,
  Input,
  Button,
  Label
} from 'reactstrap';
import { useNavigate, useLocation } from "react-router-dom";
import useHouseForm from '../../hooks/House/useHouseForm';
import useHouse from "../../hooks/House/useHouse";

/* The component holds a form for both Add method and Update method. using path as flag*/ 
const HouseForm = () => {
  const { formData, handleSubmit, lastAdded, errMsg, handleSubmitUpdate } = useHouseForm();
  const { currHouseObj } = useHouse();
  const [currForm, setCurrForm] = useState(currHouseObj?.house ? currHouseObj.house : formData)

  const navigate = useNavigate();
  const location = useLocation();

  const [isUpdate] = useState(location.pathname.includes('details'))

  const addressRef = useRef();
  const currentValueRef = useRef();
  const loanAmountRef = useRef();
  const errRef = useRef();

  useEffect(() => {
      addressRef.current.focus();
      currentValueRef.current.focus();
      loanAmountRef.current.focus();
  }, [])

  const navigateHouseDetails = () => {
    navigate('/house-details/'+lastAdded.houseId)
  }

  const updateSubmit = (e) => {
    e.preventDefault();
    handleSubmitUpdate(currForm);
  }

  const addSubmit = (e) => {
    e.preventDefault();
    handleSubmit(currForm);
  }


  return (
    <Fragment>
        <section className='form-section'>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <Form onSubmit={isUpdate? updateSubmit : addSubmit} className="step-form">
              <div className='container-content'>
                  <h1>{isUpdate ? "Update" : "Add"} House</h1>
                  <div className='form-item'>
                      <Label htmlFor="address">Address</Label>
                      <Input
                          type="text"
                          id="address"
                          ref={addressRef}
                          autoComplete="on"
                          onChange={(e) => setCurrForm({...currForm, address: e.target.value})}
                          value={currForm.address}
                          required={!isUpdate}
                      />
                  </div>
                  <div className='form-item'>
                      <Label htmlFor="currentValue">Current Value</Label>
                      <Input
                          type="number"
                          id="currentValue"
                          ref={currentValueRef}
                          autoComplete="on"
                          onChange={(e) => setCurrForm({...currForm, currentValue: e.target.value})}
                          value={currForm.currentValue}
                          required={!isUpdate}
                      />
                  </div>
                  <div className='form-item'>
                      <Label htmlFor="loanAmount">Loan Amount</Label>
                      <Input
                          type="number"
                          id="loanAmount"
                          ref={loanAmountRef}
                          autoComplete="on"
                          onChange={(e) => setCurrForm({...currForm, loanAmount: e.target.value})}
                          value={currForm.loanAmount}
                      />
                  </div>
              </div>
              <Button type='submit'>{isUpdate ? "Update" : "Add"}</Button>
              --------------------------------------------------------------------------------------
          </Form>
          {
            lastAdded.isSuccess && <div className="preview_data">
              <p>House Local Number: {lastAdded.houseId}</p>
              <Button onClick={navigateHouseDetails}>
                Check House Details
              </Button>
            </div>
          }
        </section>
    </Fragment>
  );
}

export default HouseForm;