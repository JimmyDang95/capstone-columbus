import styled from 'styled-components/macro'
import Route from "./Route";


export default function RouteList({routes}){
    return(
        <StyledList>
            {routes.map((route, locations, locationName) => (
                <li key={route.name}>
                    <Route route={route}/>
                    Locations: {locationName + []}
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
