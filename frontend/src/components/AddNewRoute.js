import {useState} from 'react';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Button, Dialog, DialogActions, DialogTitle} from "@material-ui/core";


export default function AddNewRoute({onAdd}) {
    const [open, setOpen] = useState(false);
    const [routeName, setRouteName] = useState('')
    const [country, setCountry] = useState('')
    const [creatorUserName, setCreatorUserName] = useState('')

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!routeName) {
            return
        }
        onAdd(routeName, country, creatorUserName)
        setRouteName('')
        setCountry('')
        setCreatorUserName('')
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} position="fixed">
                Add new Route
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add new Route</DialogTitle>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField type="text"
                               placeholder="Routename"
                               value={routeName}
                               autoFocus
                               margin="dense"
                               fullWidth
                               onChange={(event) => setRouteName(event.target.value)}/>
                    <TextField type="text"
                               placeholder="Country"
                               value={country}
                               autoFocus
                               margin="dense"
                               fullWidt
                               onChange={(event) => setCountry(event.target.value)}/>
                    <TextField type="text"
                               placeholder="Creator"
                               value={creatorUserName}
                               autoFocus
                               margin="dense"
                               fullWidt
                               onChange={(event) => setCreatorUserName(event.target.value)}/>
                    <DialogActions>
                        <Button disabled={!routeName} type="submit" onClick={handleClose} color="primary">
                            Add new Route
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}
