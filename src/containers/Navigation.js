import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStatetoProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStatetoProps)(Navigation)