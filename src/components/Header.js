import React ,{useState}from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carslice'
import {useSelector} from 'react-redux'
function Header() {
  const [BurgerState,setBurgerState]=useState(false);
  const cars=useSelector(selectCars)
  console.log(cars);
  return (
    <Container>
<a><img src="/images/logo.png" alt=""/></a>
<Menu>
  {cars && cars.map((car,index)=><a key={index} href="#">{car}</a>)}
{/* <a href='#'>Model1</a>
<a href='#'>Model2</a>
<a href='#'>Model3</a>
<a href='#'>Model4</a> */}
</Menu>

<RightMenu>
<a href='#'>Shop</a>
<a href='#'>Tesla Account</a>



<CustomMenu onClick={()=>setBurgerState(true)}></CustomMenu>
</RightMenu>
<BurgerNav show={BurgerState}>
  <ClsWrap>
    <CustomClose onClick={()=>setBurgerState(false)}/>
  </ClsWrap>
  {cars && cars.map((car,index)=><li><a key={index} href="#">{car}</a></li>)}
 {/* <li href=""><a>Existing Inventory</a></li>
 <li href=""><a>Used inventory</a></li>
 <li href=""><a>Trade-in</a></li>
 <li href=""><a>CyberTruck</a></li>
 <li href=""><a>Roadaster</a></li> */}
 <li href=""><a>Inventary</a></li>
 <li href=""><a>Inten</a></li>
 <li href=""><a>interu</a></li>
</BurgerNav>


</Container>
  )
}

export default Header
const Container=styled.div`
min-height:40px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 10px;
top:0;
left:0;
right:0;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:no-wrap;
}
@media(max-width:768px){
  display:none;
}`
const RightMenu=styled.div`
display:flex;
align-items:center;

a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  
}
`
const  CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
right:0;
color:black;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
dispaly:flex;
flex-direction:column;
justify-content:flex-start;
text-align:start;
transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
transition:transform 0.2sec ease-in-ease-out;

bottom:0;

li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
  a{
    font-weight:600;
  }
}`
const CustomClose=styled(CloseIcon)`
cursor:pointer;
`
const ClsWrap=styled.div`
display:flex;
justify-content:flex-end;
`