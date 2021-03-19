import styled from 'styled-components/macro'


export default function RouteList({routes}){
    return(
        <section>
        <StyledList>
            {routes.map((route) => (
                <li key={route.name}>
                    Routename: {route.name}
                </li>
                ))}
        </StyledList>
        </section>
    )
}



const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`
