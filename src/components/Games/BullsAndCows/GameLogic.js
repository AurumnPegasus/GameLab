import React, { Component } from 'react'
import GameComponent from './GameComponent'


class GameLogic extends Component {
    state = {
        bulls: null,
        cows: null,
        left: [],
        all: [],
        guess: "0123",
        freq: 1,
    }

    // initialize the left and all arrays
    componentDidMount() {
        let all = [];
        let left = [];
        // converting numbers to string to creat the all array
        let s;
        for (let i = '0'; i <= '9'; i++)
            for (let j = '0'; j <= '9'; j++)
                for (let k = '0'; k <= '9'; k++)
                    for (let l = '0'; l <= '9'; l++) {
                        s = "";
                        s += i;
                        s += j;
                        s += k;
                        s += l;

                        all.push(s);
                        if (i !== j && i !== k && i !== l)
                            if (j !== k && j !== l)
                                if (k !== l)
                                    left.push(s);
                    }

        // initializing the array states
        this.setState({
            left: left,
            all: all,
        })
    }

    choose_best = () => {
        // return the best choice, which eliminates the maximum sample space
        let best;
        let worst_res = 1000000;

        this.state.all.forEach((num) => {

            let used = [];
            for (let i = 0; i < 10; i++)
                used.push(false);

            // checking which digits exist in the given code
            for (let c = 0; c < 4; c++) {
                used[num[c] - '0'] = true;
            }

            // the array to store information regarding the 14 response classes
            let count = [];
            // initializing the 2D 5x5 matrix
            for (let i = 0; i < 5; i++) {
                count.push([0, 0, 0, 0, 0]);
            }

            // finding the distribution of sample space among the response classes
            this.state.left.forEach((s) => {
                let B = 0;
                let C = 0;

                for (let i = 0; i < 4; i++) {
                    if (used[s[i] - '0'])
                        C += 1;
                    if (s[i] === num[i])
                        B += 1;
                }
                // since cows and bulls are mutually exclusive
                C -= B;
                count[B][C] += 1;
            })

            // finding the best guessing choice
            let worst = 0;
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    worst = Math.max(worst, count[i][j]);
                }
            }

            if (worst < worst_res) {
                worst_res = worst;
                best = num;
            }
            else if (worst === worst_res && this.state.left.includes(num))
                best = num;
        })
        // updating the best guess
        this.setState({
            guess: best,
        })
    }


    guess = () => {
        // To reduce the search space A.T the reponse given by the user
        let bulls = this.state.bulls;
        let cows = this.state.cows;

        let used = [];
        for (let i = 0; i < 10; i++)
            used.push(false);

        // checking which digits exist in the given code
        for (let c = 0; c < 4; c++) {
            used[this.state.guess[c] - '0'] = true;
        }

        // output string for the next guess' sample space
        let out = [];

        this.state.left.forEach((s) => {
            let B = 0;
            let C = 0;

            for (let i = 0; i < 4; i++) {
                if (used[s[i] - '0'])
                    C += 1;
                if (s[i] === this.state.guess[i])
                    B += 1;
            }
            // since cows and bulls are mutually exclusive
            C -= B;

            // eslint-disable-next-line eqeqeq
            if (B == bulls && C == cows)
                out.push(s)
        })

        this.setState({
            left: out,
        }, () => { this.choose_best() })
    }

    startNew = () => {
        let all = [];
        let left = [];
        // converting numbers to string to creat the all array
        let s;
        for (let i = '0'; i <= '9'; i++)
            for (let j = '0'; j <= '9'; j++)
                for (let k = '0'; k <= '9'; k++)
                    for (let l = '0'; l <= '9'; l++) {
                        s = "";
                        s += i;
                        s += j;
                        s += k;
                        s += l;

                        all.push(s);
                        if (i !== j && i !== k && i !== l)
                            if (j !== k && j !== l)
                                if (k !== l)
                                    left.push(s);
                    }

        // reset the state to default
        this.setState({
            bulls: null,
            cows: null,
            left: left,
            all: all,
            guess: "0123",
            freq: 1,
        })
    }

    updateResponse = (res) => {
        this.setState({
            bulls: res.bulls,
            cows: res.cows,
        }, () => {
            this.guess();

            // updating no. of times asked
            let num_asked = this.state.freq + 1;
            this.setState({
                freq: num_asked,
            })
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Bulls and Cows Predictor</h1>
                <GameComponent updateResponse={this.updateResponse} guess={this.state.guess} freq={this.state.freq} startNew={this.startNew} />
            </div>
        );
    }
}

export default GameLogic;