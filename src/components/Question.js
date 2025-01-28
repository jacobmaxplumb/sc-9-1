import axios from "axios";
import { Component } from "react";

export class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            message: ""
        };
    }

    handleSubmit = async () => {
        const { data } = await axios.post('http://localhost:9000/surveyQuestions', {text: this.state.text});
        this.setState({ message: `${data.text} was added to the database`, text: "" });
    }

    render() {
        return (
            <div>
                <h1>Question</h1>
                {this.state.message && <p>{this.state.message}</p>}
                <input
                    type="text"
                    value={this.state.text}
                    onChange={(e) => this.setState({ text: e.target.value })} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}