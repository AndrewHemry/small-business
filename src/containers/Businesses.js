import { connect } from "react-redux";
import Businesses from "../components/Businesses";

const mapStatetoProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStatetoProps)(Businesses)