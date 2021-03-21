import styled from 'styled-components/macro'
import Route from "./Route";


export default function RouteList({routes}){
    return(
        <StyledList>
            {routes?.map((route) => (
                <li key={route.name}>
                    <Route route={route}/>
                </li>
                ))}
        </StyledList>
    )
}



const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
