import { connect } from "react-redux";
import Listings from "../components/Listings";

const mapStatetoProps = (state) => {
    return {
        listings: state.listings
    }
}

export default connect(mapStatetoProps)(Listings)