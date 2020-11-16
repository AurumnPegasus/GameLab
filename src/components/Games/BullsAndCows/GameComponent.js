import React, { Component } from 'react';
import swal from 'sweetalert';

class GameComponent extends Component {
    state = {
        bulls: "Bulls",
        cows: "Cows",
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Check if no option has been selected
        if (this.state.bulls === "Bulls" || this.state.cows === "Cows") {
            swal({
                title: "Invalid Input",
                text: "Please choose valid values for the number of Bulls and Cows",
                icon: "warning",
            })
            return;
        }
        // Check if the given combination of bulls and cows is valid
        else if (Number(this.state.bulls) + Number(this.state.cows) > 4) {
            swal({
                title: "Invalid Input",
                text: "The sum of bulls and cows cannot exceed 4. Please check your input and try again",
                icon: "warning",
            })
            return;
        }
        else if (this.state.bulls === '3' && this.state.cows === '1') {
            swal({
                title: "Invalid Input",
                text: "The given input is invalid. Please correct it and try again",
                icon: "warning"
            })
            return;
        }
        else if (this.state.bulls === '4' && this.state.cows === '0') {
            swal({
                title: "Wooohoo!",
                text: "Looks like we guessed your number. But you need to click on the other button to end the game 😅"
            })
            return;
        }

        this.props.updateResponse(this.state);
        document.querySelector("#form").reset();
        this.setState({ bulls: "Bulls", cows: "Cows" })
    };
    handleSuccess = (e) => {
        e.preventDefault();
        swal({
            title: `The Secret Number was ${this.props.guess}`,
            text: `We got it in ${this.props.freq} guess${this.props.freq !== 1 ? 'es' : ''}!`,
            icon: "success"
        }).then(() => this.handleNew(null));
    }

    handleNew = (e) => {
        if (e)
            e.preventDefault();
        this.props.startNew();
        this.setState({
            bulls: "Bulls",
            cows: "Cows",
        })
    }

    handleFailure = () => {
        swal({
            title: "Invalid Secret Number",
            text: "Looks like either the number you were thinking of was an invalid secret number (all four digits must be distinct) or you messed up in feeding the inputs. Maybe try again?",
            icon: "error",
            dangerMode: true
        }).then(() => {
            this.handleNew(null);
        })
    }

    render() {
        if (this.props.guess === "0000")
            this.handleFailure();
        return (
            <div>
                <div className="text-center">
                    <h3 className="text-center mt-4">Guess: {this.props.guess}</h3>
                    <form className="form-group container" id="form" onSubmit={this.handleSubmit}>
                        <div className="row justify-content-center mt-4">
                            <select className="custom-select col-3 m-1" id="bulls" onChange={this.handleChange} value={this.state.bulls}>
                                <option value="Bulls" defaultValue disabled="disabled">Bulls</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                            <select className="custom-select col-3 m-1" id="cows" onChange={this.handleChange} value={this.state.cows}>
                                <option value="Cows" defaultValue disabled="disabled">Cows</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <button type="submit" className='btn btn-outline-primary mx-3'>Guess Again</button>
                            <button className='btn btn-outline-success mx-3' onClick={this.handleSuccess}>Yup that's right!</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default GameComponent;