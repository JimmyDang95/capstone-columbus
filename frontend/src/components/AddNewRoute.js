import {useState} from 'react';
import styled from 'styled-components/macro'

export default function AddNewRoute({ onAdd }) {
    const [routeName, setRouteName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!routeName) {
            return
        }
        onAdd(routeName)
        setRouteName('')
    }


    return (
        <Form onSubmit={handleSubmit}>
            <input
                type="text"
                value={routeName}
                onChange={(event) => setRouteName(event.target.value)}
            />
            <button disabled={!routeName} type="submit">
                Add new Route
            </button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    
    input {
    flex-grow: 1;
    border-color: blue;
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
 }
 
    button {
    font-size: 1em;
    font-color: red;
    flex-grow: 
    background-color: yellow;
    border-color: orange;
    border-width: 2px;
    border-radius: 10px;
    padding: 8px;
    margin: 8px;
    
   }
`