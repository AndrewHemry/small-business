import React, { Component, } from "react";
import { TextField, Button, Container } from "@mui/material";
// import cookie from "cookie";

class AddBusiness extends Component {
    state = {
        name: "",
        address: "",
        open_time: "",
        close_time: "",
        description: ""
    }

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
        console.log('The props is handleTextChange', this.props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...this.state }
        payload.id = this.props.businessTotal + 1
        delete payload.open
        console.log("The Business Payload", payload)
        this.props.addBusiness(payload)        
        console.log('The props is handleSubmit', this.props)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                name: "",
                address: "",
                open_time: "",
                close_time: "",
                description: ""
            })
        }
    }

    render() {
        return (
            <div className="App">
                <Container maxWidth="sm">
                    <form className="add-form" onSubmit={this.handleSubmit}>
                        <TextField
                            id="name"
                            onChange={this.handleTextChange}
                            value={this.state.name}
                            name="name"
                            label="Name"
                            variant="standard"
                        />
                        <TextField
                            id="address"
                            onChange={this.handleTextChange}
                            value={this.state.address}
                            name="address"
                            label="Address"
                            variant="standard"
                        />
                        <TextField
                            id="open_time"
                            onChange={this.handleTextChange}
                            value={this.state.open_time}
                            name="open_time"
                            label="Open Time"
                            variant="standard"
                        />
                        <TextField
                            id="close_time"
                            onChange={this.handleTextChange}
                            value={this.state.close_time}
                            name="close_time"
                            label="Close Time"
                            variant="standard"
                        />
                        <TextField
                            id="description"
                            onChange={this.handleTextChange}
                            value={this.state.description}
                            name="description"
                            label="Description"
                            variant="standard"
                        />
                        <Button
                            type="submit"
                            className="submit-button"
                            variant="contained"
                            color="primary"
                        > Save </Button>
                    </form>
                </Container>
            </div>
        )
    }
}

export default AddBusiness;
