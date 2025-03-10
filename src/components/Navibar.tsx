import ICON_CONTAINER from "./ICON_CONTAINER"
const Home_on = require("./assets/icon/home_on.png");

const Navibar = () =>{
  return(
    <>
      <ICON_CONTAINER iconSrc={Home_on} text="Home"/>
      <Image
            source={require('../assets/unlook.png')}
            style={styles.iconImage}
          />
    </>
  )
}

export default Navibar