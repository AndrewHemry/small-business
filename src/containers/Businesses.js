import { connect } from "react-redux";
import Businesses from "../components/Businesses";
import { removeBusiness } from "../redux/actions";

const mapStatetoProps = (state) => {
    return {
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBusiness: (index) => dispatch(removeBusiness(index))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Businesses)