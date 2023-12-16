const Banner = () => {
    return(
        <div className="banner-container">
        <img
        className="banner"
       src={require("./images/banner.jpg")}
       alt="logo"
  />
  <button className= 'button' style={{display: 'flex', padding: '15px', margin: '10px'}}>Online Menu</button>
 </div>
    )
}
export default Banner;