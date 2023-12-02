const Banner = () => {
    return(
        <div>
        <img
        className="banner"
      height={300}
      width={300}
       src={require("./images/banner.jpg")}
       alt="logo"
       style={{padding: '40px', borderRadius: '50px'}}
  />
        </div>
    )
}
export default Banner;