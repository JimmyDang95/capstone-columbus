import styled from 'styled-components/macro'
import RouteListItem from "./RouteListItem";
import {Card} from "@material-ui/core";


export default function RouteList({routes, onDeleteRouteItem}){
    return(
        <StyledList>
            {routes.map((route) => (
                <li key={route.id}>
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
