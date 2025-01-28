import axios from "axios";
import { Component } from "react";

export class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      answer: "",
      message: "",
    };
  }

  componentDidMount() {
    this.pickRandomQuestion();
  }

  pickRandomQuestion = async () => {
    const { data } = await axios.get("http://localhost:9000/surveyQuestions");
    const randomQuestionIndex = Math.floor(Math.random() * data.length);
    this.setState({ question: data[randomQuestionIndex] });
  }

  onSubmit = async () => {
    await axios.post("http://localhost:9000/answers", {
      questionId: this.state.question.id,
      answer: this.state.answer,
    });
    this.setState({ answer: "", message: "Answer submitted!" });
    setTimeout(() => {
      this.setState({ message: "" });
      this.pickRandomQuestion();
    }, 2000);
  };

  render() {
    return (
      <div>
        <h1>Answer</h1>
        {this.state.message && <p>{this.state.message}</p>}
        {this.state.question && (
          <div>
            <p>{this.state.question.text}</p>
            <input
              type="text"
              value={this.state.answer}
              onChange={(e) => this.setState({ answer: e.target.value })} />
              <button onClick={this.onSubmit}>Submit</button>
          </div>
        )}
      </div>
    );
  }
}
