const Specials = () => {
return(
    <div>
    <h3 style={{textAlign: 'center', margin: '80px'}}>This weeks specials!</h3>
    <div className="specials-container">

<div className="specials-image">
  <img
    src= {require("./images/dish.jpg")}
    alt="dish1"
    className="dish-image"
    />
    <h5>Bruchetta</h5>
    <h4 style={{color: 'red',marginLeft: '130px', marginTop: '-45px'}}>$ 20</h4>
</div>
<div className="specials-image">
    <img
    src= {require("./images/food.jpg")}
    alt="dish2"
    className="dish-image"
    />
    <h5>Little lemon dessert</h5>
    <h4 style={{color: 'red',marginLeft: '170px', marginTop: '-45px'}}>$ 20</h4>
</div>
<div className="specials-image">
    <img
    src= {require("./images/menu.jpg")}
    alt="dish3"
    className="dish-image"
    />
    <h5>Greek salad</h5>
    <h4 style={{color: 'red',marginLeft: '130px', marginTop: '-45px'}}>$ 20</h4>
</div>
</div>
    </div>
)
}
export default Specials;