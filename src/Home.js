import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";



function Homepage() {
    return (
        <div className="nav">
            <Chicago />
            <Specials />
            <CustomersSay />

        </div>
    )
}
export default Homepage;