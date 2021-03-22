import styled from 'styled-components/macro'
import Route from "./Route";


export default function RouteList({routes, onDeleteRouteItem}){
    return(
        <StyledList>
            {routes.map((route) => (
                <li key={route.id}>
                    <Route route={route} onDeleteRouteItem={onDeleteRouteItem}/>
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
