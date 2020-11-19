const content = {
    introAndRules1:
        `
**Guess Who?** is a two-player character guessing game. Each player starts the game with a board that includes cartoon
images of 24 people and their first name with all the images standing up. Each player selects a card of their choice
from a separate pile of cards containing the same 24 images. The object of the game is to be the first to determine
which card one's opponent has selected. Players alternate asking various yes or no questions to eliminate candidates
such as *"Does your person wear glasses?"* The player will then eliminate candidates based on the opponents response
by flipping those images down until only one is left. The player who is able to guess the opponent's character in the
fewest moves is the winner. 
    `,
    quickAnalysis1:
        `
To get started with the formulation of a simple formula of the game of Guess Who?, we should first analyze the chance or
probability involved in the gameplay.

We will try to explain the ideas to the best of our abilities, as we have understood from this video:
    `,

    quickAnalysis2:
        `
A quick summary of the video:

* There can be two ways you can go about asking questions:
    1. Ask a specific question → If the answer is **NO** then it would result in very few cards being flipped down.
    On the other hand if the response is **YES** then a lot of cards can be eliminated in a single go.
    
    2. Ask a broad question → Both **YES** and **NO** responses would result in a moderate number of cards being flipped down.
* Here we will exploit the broad questioning strategy as the specific question strategy relies very heavily on luck, which is inherently
difficult to quantify.
* On an average (looking at any of the characters present in the game of Guess Who?), every feature (such as red hair, bald, glasses,etc)
is shared by around 5 people.
* A very well framed broad question can ideally result in hald the characters being flipped down every time. So given 24 characters, it
should take about 5 moves to narrow down the search space to a single character. Lets us analyze this!
    `,
    deeperDive1:
        `
The overall problem here becomes that of eliminating maximum possible characters with a single question each time.

Now since there are 24 characters, you need around $\\log_2 24$ moves, which rounds up to 5 moves on average. Let us simulate this in a fair sample space
where now there is an opponent (finally!). We can model how the opponent plays by collecting sample moves from a lot of games played with a lot
of people. This results in the following bell curve:
    `,
    deeperDive2:
        `
Here the horizontal axis of the curve represents the number of moves that you played to get all characters eliminated. The vertical axis is the probability
in percentage of thta happening. The bell curves here have standard results of how each bell curve with an average at the median would look like. Here,
the average is 5 with the highest probability ($38\\%$). Since these values were calculated independently, by multiplication law, the values in the grid are the
percentages on the left multiplied by the percentages above. For example $24\\% \\times 38\\% = 9\\%$.

What the colors represent:

* 🔵 → We **LOSE** as the number of moves used by us is more than that used by the opponent
* 🔴 → We **WIN** as the number of moves used by us is fewer than that used by the opponent
* 🟡 → It is a **TIE** as the number of moves used by us is equal to that used by the opponent

So if you add up all the red squares, we get $63\\%$ chance of winning with this broad questioning strategy.

The data being used here is for an opponent that is quite clever, i.e. they are also playing close to optimal. For an average opponent the win rate is
expected to increase to about $80\\%$. We can further push it to $96\\%$ if we challenge the opponent to a *Best of Five Games*, but that is irrelavent here.

Now let us connect this to the world of algorithms...
    `,

    maximumCoverageProblem:
        `
The **Maximum Coverage Problem** is a famous problem in the field of algorithms. Formally:

*As input you are given several sets and a number $k$. These sets may have some elements in common. You must select at most $k$ of these
sets such that the maximum number of elements are covered, i.e. the union of the selected sets has maximal size.*

Instance: A number $k$ and a collection of sets $S = {S_1, S_2, \\dots, S_m}$.

Objective: Find a subset $S' \\subseteq S$ of sets such that $\\vert S'\\vert \\leq k$ and the number of covered elements 
$\\left\\vert \\bigcup\\limits_{S_i\\in S'} S_i \\right \\vert$ is maximized.

The above mentioned problem is however, NP-Hard 😢. Fortunately for us, there is a greedy approximation which has an approximation factor of
$1-\\frac{1}{e}$ which comes out to be about $0.63$. Here approximation factor means the ratio of the answer obtained by the greedy solution
to the actual optimal solution.

Here is the greedy pseudocode for Maximum Coverage:

\`\`\`
Input: Universal Set U and the number k and the subsets

for i in 1 to k:
    do:
        pick the set with maximum elements
    done
\`\`\`

Now, we prove that the approximation factor comes to be $1-\\frac{1}{e}$.

Let:

* $a_i$ → Newly covered elements at the $i^{th}$ iteration
* $b_i$ → Total elements covered till the $i^{th}$ iteration
* $c_i$ → Elements left uncovered at the $i^{th}$ iteration
* $OPT$ → Optimal Answer
* $c_i = OPT - b_i$

**Lemma 1.** *Number of newly covered elements at the $(i+1)^{th}$ iteration is always greater than or equal to $\\frac{1}{k}$ of the number
of uncovered elements after the $i^{th}$ iteration, i.e. $a_{i+1} \\geq \\frac{c_i}{k}$.*

**Proof**. Optimal solution covers $OPT$ elements at $k$ iterations. That means, at each iteration there should be some set in $U$ whose size
is greater than or equal to the $\\frac{1}{k}$ of the remaining uncovered selements, i.e., $\\frac{c_i}{k}$. Otherwise, it was impossible to
cover $OPT$ many elements at $k$ steps by the optimal solution. Since the approximation algorithm is greedy, i.e., choosing always the set
covering maximum number of uncovered elements, the chose set at each iteration should be atleast the $\\frac{1}{k}$ of the remaining uncovered
elements. That is $a_{i+1} \\geq \\frac{c_i}{k}$.

**Lemma 2.** $c_{i+1} \\leq (1-\\frac{1}{k})^{i+1}.OPT$

*Proof*. We will prove by induction. Let us first show that the claim is true for  $i=0$.

$
c_1 \\leq (1-\\frac{1}{k}).OPT
$

$
c_1 \\leq OPT-OPT.\\frac{1}{k}
$

$
OPT - b_1 \\leq OPT-OPT.\\frac{1}{k} \\space (\\text{since } c_1 = OPT - b_1)
$

$
-b_1 \\leq -OPT.\\frac{1}{k} \\space (OPT\\text{'s cancels each other})
$

$
b_1 \\geq OPT.\\frac{1}{k}
$

$
a_1 \\geq OPT.\\frac{1}{k} \\space (\\text{since } b_1 = a_1)
$

$
a_1 \\geq c_0;\\frac{1}{k} \\space (\\text{since } c_0 = OPT \\text{ by our initial assumptions})
$

&nbsp;

By lemma 1, we actually know that $a_1 \\geq c_0.\\frac{1}{k}$. Hence, the proof for $i=0$ follows. Now, for the inductive hypothesis
assume $c_i \\leq (1-\\frac{1}{k})^i$. $OPT$ is true, and show that $c_{i+1} \\leq (1-\\frac{1}{k})^{i+1}$. $OPT$ is true.

$
c_{i+1} = c_i - a_{i+1} \\space (\\text{by definition of } c_i = OPT - \\sum_{j=1}^{i}a_j)
$

$
c_{i+1} \\leq c_i - \\frac{c_i}{k} \\space (\\text{by lemma 1})
$

$
c_{i+1} \\leq c_i(1- \\frac{1}{k})
$

$
c_{i+1} \\leq (1-\\frac{1}{k})^i.OPT.(i-\\frac{1}{k}) \\space (\\text{by inductive hypothesis})
$

$
c_{i+1} \\leq (1-\\frac{1}{k})^{i+1}.OPT
$

&nbsp;

Having proved the lemma 1 and 2, now we are ready to prove the approximation factor for greedy algorithm for maximum coverage problem.

**Theorem.** *Greedy approximation algorithm has $(1-\\frac{1}{e})$ approximation factor.*

*Proof.* By lemma 2, we know that $c_k \\leq (1-\\frac{1}{k})^k.OPT$. Since $(1-\\frac{1}{k})^k \\approx \\frac{1}{e}$, we can say that
$c_k \\leq \\frac{OPT}{e}$. Then,

$
b_k = OPT - c_k \\space (\\text{by definition})
$

$
b_k = OPT - \\frac{OPT}{e}
$

$
b_k = OPT(1-\\frac{1}{e})
$

Since $b_k = \\sum_{j=1}^ka_j$, i.e., the total number covered elements after the $k^{th}$ iteration which is the output of the greedy algorithm,
we can conclude that the greedy approximation has $(1-\\frac{1}{e})$ approximation factor.

And hence, this greedy apprpximation is a nice way to solve the maximum coverage problem. Now let us apply this idea to the game of Guess Who?
    `,
    application1:
        `
We're finally here! 🙌

### **Features as Sets**

The "sets" that we will consider in Guess Who? are nothing but the facial features of the characters. We can name the sets according to the
corresponding features. For example: *Only Bald, Bald with Glasses, Red Hair, Hat and Facial Hair, etc..*

Consider Sam for example:

    `,
    application2:
        `
This character would be part of the *Bald with Glasses* set. It is evident that many sets will have overalapping elements, just like in the
Maximum Coverage Problem.

### **The Pseudocode**

The input \`k\` that we will be using here (number of moves in which we have to win to maximize our chances) is 5 for reasons described above.

Let

\`F_x\` is the feature set corresponding to some feature \`x\`

\`U\` be the set of all feature sets, i.e. \`U\` = {\`F_redHair\`, \`F_glasses\`, \`F_rosyCheeks\`, etc.}.

Let \`|F_x|\` denote the number of elements in set \`F_x\`.

Let \`k\` denote the number of moves we should perform to win which is 5 as described above.

Each character can be represented as a bit-vector along with a string, with each position in the vector corresponding to some feature. 
A 1 in a position means that that character does have that feature and 0 means that that character doesn't have said feature. The last
position of the bit-vector is reserved for a special purpose. It is set to 1 if that character is possibly the character the opponent is
thinking of, and it is 0 if that character has been eliminated. We'll call it the flag. The name of the character is stored in the string.

\`\`\`
k = 5
Input: Array of 24 characters.
Input: SC = Your secret character.
Char_Count = 24
Win_Flag = 0

while k > 0:
    for every feature set F:
        remove all elements from F
    for every character C:
        if C.flag == 1:
            for every feature set F:
                if C has feature corresponding to F:
                    Insert C into F
    
    Max = -1
    Chosen_Set = none
    for every feature set F:
        if |F| > Max:
            Max = |F|
            Chosen_Set = F
    
    Make Guess with the feature corresponding to Chosen_Set
    Response = Get Response

    if Response == YES:
        for every feature set F:
            if F != Chosen_Set: 
                for every character C in F:
                    C.flag = 0
                
        for every character C in Chosen_Set:
            C.flag = 1
        Char_Count = Max

    else:
        for every character C in Chosen_Set:
            C.flag = 0
        Char_Count = Char_Count - Max

    if Char_Count == 1:
        for every character C:
            if C.flag==1:
                Make guess C
        Win_Flag = 1
    
    Let opponent's turn play out.
    Let x = Opponent's guess

    if x == SC:
        if Win_Flag == 0:
            The opponent Wins. Terminate Algorithm.
        else:
            It is a draw. Terminate Algorithm.
    else if Win_Flag == 1:
        You win. Terminate Algorithm.
\`\`\`
    `
};

export default content;