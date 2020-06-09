import React from 'react'
import * as styled from 'styled-components'

type MainLayoutProps = {
  children: React.ReactChildren
}



export const MainLayout: React.FunctionComponent<MainLayoutProps> = (props) => {
  return (
    <div>
      <header>header</header>
      <aside>aside</aside>
      <main>{props.children}</main>
      <footer>footer</footer>
    </div>
  )
}
export const StyledLayout = styled.default(MainLayout)`
  margin: 0;
  padding: 1em;
  display: inline-block;
  border-style: none;
  border-radius: .25em;
  font-size: 14px;  
  cursor pointer;  
`

export default StyledLayout
