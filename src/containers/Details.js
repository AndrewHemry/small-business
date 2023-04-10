import { connect } from "react-redux";
import Details from "../components/Details";

const mapStatetoProps = (state) => {
    return {
        businesses: state.businesses
    }
}

export default connect(mapStatetoProps)(Details)