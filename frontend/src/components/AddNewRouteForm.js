import React from 'react';

import {Button, Dialog} from "@material-ui/core";
import styled from "styled-components/macro";
import { IoArrowBackCircle, IoIosAddCircle} from "react-icons/all";
import {Link} from "react-router-dom";

export default function AddNewRouteForm({onSubmit, handleChange, routeToAdd}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <BoxWrapper>
            <Button color="primary" onClick={handleClickOpen}>
                <IoIosAddCircle size={35}/>
            </Button>
            <Button color="primary" >
                <Link to="/">
                    <IoArrowBackCircle size={35}/>
                </Link>
            </Button>
            <Dialog open={open} onClose={handleClose} onSubmit={onSubmit}>
                <Title className="form-dialog-title">Add new Route</Title>
                <Form>
                    <div className="input-container">
                        <input name="name" type="text" value={routeToAdd.name}
                               onChange={handleChange}/>
                        <label>Routename</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="country" value={routeToAdd.country}
                               onChange={handleChange}/>
                        <label>Country</label>
                    </div>
                    <div className="input-container">
                        <input name="creatorUserName" type="text" value={routeToAdd.creatorUserName}
                               onChange={handleChange}/>
                        <label>Creator</label>
                    </div>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </Dialog>
        </BoxWrapper>
    );
}
const BoxWrapper = styled.div`
  flex-direction: column;
  display: flex;
  font-weight: bold;
  color: black;
  margin-top: 10px;
  position: sticky;
  bottom: 10px;
  
`

const Title = styled.section`
  padding: 15px 20px 20px 20px;
  text-align: center;
  font-family: "Glacial Indifference", serif;
  font-size: 20px;
  font-weight: bold;
`

const Form = styled.form`
  font-family: "Glacial Indifference", serif;
  flex-direction: column;
  display: flex;
  font-weight: bold;
  color: black;
  padding: 15px 20px 10px 20px;

  .input-container {
    position: relative;
    margin-bottom: 12px;
  }

  .input-container label {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    transition: all 0.5s ease-in-out;
  }

  .input-container input {
    border: 0;
    border-bottom: 1px solid #555;
    background: transparent;
    width: 100%;
    padding: 8px 0 4px 0;
    font-size: 14px;
    font-weight: bold;
  }

  .input-container input:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid #e74c3c;
  }

  .btn {
    color: black;
    font-weight: bold;
    background-color: #e74c3c;
    outline: none;
    border: 0;
    padding: 10px 10px;
    text-transform: uppercase;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    text-align: center;
  }
  
  .input-container input:focus ~ label,
  .input-container input:valid ~ label {
    top: -12px;
    font-size: 12px;

  }
`