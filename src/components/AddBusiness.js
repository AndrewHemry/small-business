import React, { Component, } from "react";
import { TextField, Button, Container } from "@mui/material";

class AddBusiness extends Component {
    state = {
        Name: "",
        Address: "",
        Open_Time: "",
        Close_Time: "",
        Description: ""
    }

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...this.state }
        payload.id = this.props.businessTotal + 1
        delete payload.open
        this.props.addBusiness(payload)        
    }

    render() {
        return (
            <div className="App">
                <Container maxWidth="sm">
                    <form className="add-form" onSubmit={this.handleSubmit}>
                        <TextField
                            id="Name"
                            onChange={this.handleTextChange}
                            value={this.state.Name}
                            name="Name"
                            label="Name"
                            variant="standard"
                        />
                        <TextField
                            id="Address"
                            onChange={this.handleTextChange}
                            value={this.state.Address}
                            name="Address"
                            label="Address"
                            variant="standard"
                        />
                        <TextField
                            id="Open_Time"
                            onChange={this.handleTextChange}
                            value={this.state.Open_Time}
                            name="Open_Time"
                            label="Open Time (ex. 8 AM)"
                            variant="standard"
                        />
                        <TextField
                            id="Close_Time"
                            onChange={this.handleTextChange}
                            value={this.state.Close_Time}
                            name="Close_Time"
                            label="Close Time (ex. 5 PM)"
                            variant="standard"
                        />
                        <TextField
                            id="Description"
                            onChange={this.handleTextChange}
                            value={this.state.Description}
                            name="Description"
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

