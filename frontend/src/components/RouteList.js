import styled from 'styled-components/macro'


export default function RouteList({routes}){
    return(
        <StyledList>
            {routes.map((route) => (
                <li key={route.name}>
                    {"Name der Route: " + route.name}
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
