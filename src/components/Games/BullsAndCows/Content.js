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

Now for each guess, we can get one of $m$ responses, represented by:

$$
r_1, r_2\\dots r_m\\ (m = 14 \\text{ in case of 4 digits})
$$

Now for each guess we want to see its worst case size left so we can define a $\\text{Score}$ for each guess $i$ and stores the worst case size of each reponse $r_j$
as $s_{ij}$. Mathematically,

$$
\\text{Score}_i=max(S_{i\\ 1}, S_{i\\ 2}\\dots S_{i\\ m})
$$

And then to choose our best guess, we need to take the smallest of these scores:

$$
\\text{Best}=min(\\text{Score}_1, \\text{Score}_2\\dots \\text{Score}_n)
$$

This results in the most optimal guess at each level. We are basically doing this till we find the secret code. Due to the optimal guessing stratergy, *we are
able to find the secret code in atmost 7 guesses*. 
    `,
    process:
        `
Initially we started out with just thinking about basic algorithms to obtain the code, nothing too efficient:

### Our First Approach

To find the secret digits in the number, first we could *be sure of the digits that are actually in the secret code*

We can do that by checking the string of type $(i,\\ i\\ ,\\ i ,\\ i)$ where $i\\  \\epsilon \\ [0,\\ 9],\\ i\\ \\epsilon\\ Z$ and whenever the response is of the type,
$1\\ \\text{Bulls}\\ 3\\ \\text{Cows}$ **we can be sure that that digit $\\ i$ exists in the secret code**. So to figure out all the digits *(for any length of secret code)* will take atmost 10 steps 
which is a constant amount of time.

After figuring out the digits then we have $4!$ possibilities of what the the secret code can be. This felt like *a very brute force method* and as I expected was really not that efficient.

So Worst Case ⇒ I could get my secret code in within $34$ steps, but that's not so good considering according to a research paper I read that any secret code based on the 
Bulls and Cows game can be solved within **$7$ steps maximum.** 

---
### Second Approach
I actually just added this method as a baseline for any other algorithm that I created since it was a very basic procedure: **to just search the entire sample space**.

So we know that there are **4 distinct digits in the code**, that makes the total sample space's cardinality to be  $^{10}P_4$ ways which equals $5040$. 
Not too big a number for modern computers to brute force but still if you compare this to our *First approach*, its almost 150 times slower in worst case scenario, taking upto 
$5040$ steps in worst case.

---
### Lets talk about their scalability now

Assume the length of the code to be some value $n$ where $n \\ \\leq\\ 10$  since its a requirement of Bulls and Cows that all the digits be *distinct.*

- **First Algorithm**

Its first part of obtaining the digits in the secret code will always take $10$  tries whatsoever in worst case and is fixed, since we are supposed to check 
for all $i\\  \\epsilon \\ [0,\\ 9] \\ \\text{where}\\ i\\ \\epsilon\\ Z$.

For the second part we have the worst case scenario of $n!$ which can go upto $10! = 3628800$ (quite a big number). 

So overall worst case complexity for first algorithm comes out to be $O(n!\\ + 10)\\ \\sim O(n!)$

- **Second Algorithm**

This is a straight forward algorithm with its worst case scenario will be always going till the end of the sample space whose length will be  $^{10}P_n$, which 
equates to $^{10}C_n \\ *\\ n!$  where $n\\  \\epsilon \\ [1,\\ 10] \\ and\\ n\\ \\epsilon\\ Z$. Therefore the overall worst case complexity of the second algorithm is $O(n!\\ * ^{10}C_n)$ 

Clearly since $^{10}C_n$ is a factor greater than $1$ here, the first algorithm fares out to be better in worst case complexity, even though its not the most ground breaking algorithm out there.

We first came accross the idea of **Response Classes**, which are essentially *the sections we can divide our response to any general guess that 
we make regarding a code*. For example if for a particular guess, we get \`[2 Bulls, 1 Cow]\`, this would a response class.

---
### Proceeding towards hitting the "Maximum 7 steps" Mark

For Bulls and Cows where we guess a 4 digit code, we have 14 classes:

- Case 1 -- \`0 Bulls\`
    1. \`0 Cows\`
    2. \`1 Cow\`
    3. \`2 Cows\`
    4. \`3 Cows\`
    5. \`4 Cows\`
- Case 2 -- \`1 Bull\`
    1. \`0 Cows\`
    2. \`1 Cow\`
    3. \`2 Cows\`
    4. \`3 Cows\`
- Case 3 -- \`2 Bulls\`
    1. \`0 Cows\`
    2. \`1 Cow\`
    3. \`2 Cows\`
- Case 4 -- \`3 Bulls\`
    1. \`0 Cows\`
- Case 5 -- \`4 Bulls\`
    1. \`0 Cows\`

Please note that from the general pattern of \`5\` choices in Case 1, \`4\` choices in Case 2, \`3\` choices in Case 3 and \`1\` choice in case 5, 
there is an **anomaly in Case 4** since the case of \`3 Bulls\` and \`1 Cow\` can't exist as that is essentially \`4 Bulls\` and \`0 Cows\`.

So if we were to generalize the number of response classes for an $m$ digit number, we it is basically:
$$
\\sum_{i=1}^{m+1}i
$$
**But in this case, we are repeating a case of** &nbsp; \`m - 1 Bulls\` and \`1 Cow\`, so w can subtract $1$ from the summation to get the number of 
response classes for a general $m$ digit number:
$$
(\\sum_{i=1}^{m+1}i) - 1 = \\frac{(m + 1)(m + 2)}{2} - 1
$$
You can also verify that for $m = 4$, total number of response classes comes out to be $14$. These response classes allow us to calculate how good a particular **guess** is
in eliminating the maximum number of codes from sample space and therefore are on the key ideas of our algorithm. We maintain the response classes of a particular guess using
a $5$X$5$ matrix.

---
### Where Do we Make The Guesses From?
We now know how to find an **optimal guess** using response classes but, from where should we pick these guesses from?

The *intuitive response* would be from the list of remaining possible options, since the secret number must be one of those only.

However, this is **putting a very large restriction on the sample space we can choose our next guess from**. It may so happen that no item in the remaining list 
has the minimum score out of every possible guess that we can make (*For example, a number we might have eliminated before might be a better guess*). This means that 
restricting ourselves to just this set of numbers may stop us from finding the optimal next guess.

A *second response* would be the list of all possible 5040 distinct 4-digit numbers, since this would give us a larger sample space to choose from and could even yield a 
guess which has a much lower score than any of the other guesses that are in the remaining list, hence eliminating more items from the list than was previously possible.

A *third*, more counter-intuitive, but the **most optimal approach** would be to pick the next guess from the set of all possible 4 digit numbers. This is quite 
counter-intuitive since the we know that the secret number can only be a 4 digit number with distinct digits, and not just any 4 digit number. This approach would've been 
wrong if we were simply relying on luck and trying to guess the secret number, but *since we are using the process of elimination, we want to find the 
absolute best guess that we can take, that would yield the minimum score* and we wo need even those numbers as guess that dont have all digits distinct.

Take for example a guess 0123, and a response to it as \`3 BULLS 0 COWS\`. This means that one of the digits is wrong and the other 3 are correct. In a situation like 
this, the guesses like 0000, 1111, 2222 and 3333, none of which is a valid secret number, could potentially give us an idea of which of the digits is wrong. Lets 
play out the scenario:

We make the guess 0123 and get the response \`3 BULLS 0 COWS\`. This means that the secret number is in one of the following forms:

- \`x123\`
- \`0x23\`
- \`01x3\`
- \`012x\`

Where \`x\` is a digit from $0\\rightarrow9$, except for the digit that was there in the guess. Say our next guess is 0000 and we get \`0 BULLS 0 COWS\`. This means that there 
is no 0 in the secret number at all, and so the secret number must be of the form \`x123\`, which leaves only 9 possible outcomes. On the other hand, if we get 
the response \`1 BULL 0 COWS\`, means that the secret number does have a 0 in its first digit's place and so its is of one of the other 3 forms.

So here taking numbers outside the standard space giave us an advantage and this shows why they can be handy in certain situations to minimize the steps required
to guess the secret code. At the same time increasing the space from a maximum of $5040$ (4-digit numbers, distinct digits) to $1000$ (all 4-digit numbers) is *more 
computationally expensive*.
    `,
    resource:
        `
- Paper by Alexy Slovesnov
- Paper by John Francis
- Bulls and Cows Wikipedia page
    `
};

export default Content;