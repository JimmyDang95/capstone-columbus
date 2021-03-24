import styled from 'styled-components/macro'
import RouteListItem from "./RouteListItem";


export default function RouteList({routes, onDeleteRouteItem}){
    return(
        <StyledList>
            {routes.map((route) => (
                <li key={route.name}>
                    <RouteListItem route={route} onDeleteRouteItem={onDeleteRouteItem}/>
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
