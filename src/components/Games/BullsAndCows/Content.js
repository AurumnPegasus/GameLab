const Content = {
    introAndRules:
        `
Bulls and Cows is an old code-breaking game, where one person thinks of a secret 
code and the other tries to guess it. **The code must consist of all distinct digits**.
For each guess, the player who is thinking of the secret code, gives the guesser a response
in the form of [\`x Bulls y Cows\`]. The response is interpreted as:

* [\`x Bulls\`] → \`x\` of the digits in the guess match the *digit* &nbsp;and *position* in the code.
* [\`y Cows\`] → \`y\` of the digits in the guess match the *digit* &nbsp;**but not the** *position* in the code.   

This implies that *Bulls* &nbsp; and *Cows* are mutually exclusive in nature. Also, if the guesser makes the right guess, its response would be [\`4 Bulls 0 Cows\`].  
#### **Example**:
Say the secret number is \`2673\` and the guess is \`1652\`, then the response is [\`1 Bull 1 Cow\`]. Here, \`6\` is the **bull**
since it is in the 2nd position in both the codes and \`2\` is the **cow** since it is in the 1st position in the secret code
and in the 4th position in the guess. The other two numbers are neither.

This game can be played with any number of digits (upto 10, since there are only 10 distinct digits), but the most common
practice is to consider a 4 digit code. This is what we have explored too.         
`,

    implementation:
        `
Here we have made a **Bulls and Cows Predictor** which can guess your code in at most 7 tries. Think of a secret code and
and give it a go! *Try to make sure your input values for the number of **bulls** and **cows** is correct as wrong input would throw the predictor for a spin* 🤖🔄
    `,

    explanation:
        `
Basically, the predictor tries to make the *best guess* each time, so that we can find the secret number in the fewest possible guesses.
But what does the term **best guess** actually mean?

We start with a list of all possible codes that the guess could be. This is the list of all 4 digit number with all 4 distinct digits.
Let us call this list \`S\`. The idea is that, for each guess that we make, we have \`14\` possible responses.
Using the response, we eliminate all the codes from \`S\` that would not give the same response as the secret code when compared to our guess. 
Each response would eliminate a different number of items from \`S\`, and consequently, the resulting list would have
different sizes for every combination of guess and response. Now, for every possible guess, we need to identify the response that leaves
the largest number of items in the list. This is the worst case that could occur if we make this guess.
We essentially want to *optimise the worst case scenario* and then we choose the guess with the **best "worst case scenario"**. This guess is
our **best guess**.

Say we make a guess \`abcd\` and get a response [\`x Bulls y Cows\`]. We perform the elimination as mentioned above. Then for every possible guess that
we can make, we go through every possible response that we can get and we identify the response for which we have the fewest eliminations from \`S\`.
We assign the size of the filtered \`S\` as the \`score\` of that guess. Formally:

The **score of a guess** is the *largest number of items still in the list after elimination that that guess would lead to,
out of all possible responses it can get*.

After finding the *scores* for each guess that could be made, to find the most optimal guess for a particular round,
we then need to take the minimum of these scores that are available to us (since a lower score means that that guess has eliminated more of \`S\` in its worst case
that the others). You can see that **there is some mini-max (Minimum of the Maximum) stratergy involved here**:

*We find the maximum possible size that could be left by each of the possible guesses and then pick the minimum of all those maximum sizes.*

At any point where we need to make a guess (after the first guess), say we choose one of \`n\` numbers as our guess, represented by:

$$
G_1, G_2\\dots G_n
$$

Now for each guess, we can get one of \`m\` responses, represented by:

$$
r_1, r_2\\dots r_m\\ (m = 14 \\text{ in case of 4 digits})
$$

Now for each guess we want to see its worst case size left so we can define a \`Score\` for each guess \`i\` and stores the worst case size of each reponse \`r[j]\`
as \`s[i][j]\`. Mathematically,

$$
\\text{Score}_i=max(S_{i\\ 1}, S_{i\\ 2}\\dots S_{i\\ m})
$$

And then to choose our best guess, we need to take the smallest of these scores:

$$
\\text{Best}=min(\\text{Score}_1, \\text{Score}_2\\dots \\text{Score}_n)
$$

This results in the most optimal guess at each level. We are basically doing this till we find the secret code. Due to the optimal guessing stratergy, *we are
able to find the secret code in atmost 7 guesses*. 
    `
};

export default Content;