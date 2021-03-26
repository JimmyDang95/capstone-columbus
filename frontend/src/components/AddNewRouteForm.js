
import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Button} from "@material-ui/core";

export default function AddNewRouteForm({onSubmit, handleChange, routeToAdd}) {

    return (
        <div>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField name="name" id="outlined-basic" placeholder="Routename" value={routeToAdd.name} variant="outlined" type="text" onChange={handleChange}/>
                <TextField name="country" id="outlined-basic" placeholder="Country" value={routeToAdd.country} variant="outlined" type="text" onChange={handleChange}/>
                <TextField name="creatorUserName" id="outlined-basic" placeholder="Creator" value={routeToAdd.creatorUserName} variant="outlined" type="text" onChange={handleChange}/>
                <Button variant="contained" color="secondary" type="submit">
                    Save
                </Button>
            </form>
        </div>
    )
}
