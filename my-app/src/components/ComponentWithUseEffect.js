import { Component } from "react";
import axios from "axios";

class ExampleComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            message: ''
        }
    }
    loadMessage = async() => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        this.setState={
            message: response.data
        }
    }
    render() {
        return <h2>{this.state.message}</h2>
    }
}

export default ExampleComponent;
