import React from 'react'
import styled from 'styled-components'
import Section from './section'
function Home() {
  return (
    <><Container>
        <Section title="Model" desc="Good car Good car" backgroundImg="BG.avif"
        LeftBtnText="Custom order" rgtBtnText=" Existing inventory"/>
        <Section
        title="Model2" desc="Good car Good car popm popm" backgroundImg="BG!.avif"
        LeftBtnText="Custom order" rgtBtnText=" Existing inventory"
        />
        <Section
        title="Model3" desc="Good car Good car 3333" backgroundImg="BG.avif"
        LeftBtnText="Custom order" rgtBtnText=" Existing inventory"/>
        <Section
        title="Model4" desc="Good car Good car" backgroundImg="BG!.avif"
        LeftBtnText="Custom order" rgtBtnText=" Existing inventory"/>
        <Section
          title="Model5" desc="Good car Good car 3333" backgroundImg="BG.avif"
        LeftBtnText="Custom order" rgtBtnText=" Existing inventory"/>
        <Section
        title="Solo car in idia" desc="MADE IN INdia" backgroundImg="BG1.avif"
        LeftBtnText="order Now" rgtBtnText="Learn more"/>
        <Section
          title="Accesaries" desc="MADE IN INdia" backgroundImg="BG.avif"
        LeftBtnText="order Now" />
    
        </Container></>
  )
}

export default Home

const Container=styled.div
`height:100vh;`