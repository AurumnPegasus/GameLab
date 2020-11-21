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

It is important to realize here that the game logic itself is quite trivial. The really important part is to identify features
that will lead to optimal size feature sets. Also, this is not an "Always Win" algorithm as there is always a chance for the
opponent to get really lucky with their guesses. Rather, this is an approach with a definitive mean.
    `,
    spicyMath1:
        `
### **Strategy**

Before laying out the optimal strategy, it would be beneficial for us to define some variable and terms which will be used in the strategy
and further in this discussion:

* **$n$** is the number of candidates in the Player 1's pool.
* **$m$** is the number of candidates in the Player 2's pool.
* A **$\\text{Bid}$** of side $b$ refers to a player asking a question such that if the answer to the question is "Yes" then the size of the pool
of the candidates for the player who asked the question becomes $b$ and if the answer is "No", then then the size of the pool becomes
$n-b$ for the first player or $m-b$ for the second player.

Lets gets get into the crux: **The strategy**.

When it is Player 1's tunr, if Player 1 has $n$ candidates in their pool and Player 2 has $m$ candidates in their pool, then Player 1 has the
following optimal strategy:

* If $n \\geq 2^{k+1} + 1$ while $2^k+1 \\leq m \\leq 2^{k+1}$ for some $k \\in \\mathbb{N} \\cup 0$, then Player 1 is in the weeds and must gamble 
on a risky move to catch up. Their optimal play is a bid of

$$
b^*(n, m) = 2^k = 2^{\\log_2(m-1)}
$$

and the probability Player 1 wins if both players play optimally is:

$$
p^*(n, m) = \\frac{2^{k+1}}{n} - \\frac{2}{3} \\times \\frac{2^{2k+1}+1}{nm} 
$$

* If $2^k+1 \\leq n \\leq 2^{k+1}$ while $m \\geq 2^{k+1}$ for some $k \\in \\mathbb{N} \\cup 0$ then Player 1 has the upper hand and can stay in the
lead by making low risk, sure-shot plays. Their optimal bid is

$$
b^*(n, m) = \\lfloor\\frac{1}{2}n\\rfloor
$$

and the probability that Player 1 can win if both the players play optimally is:

$$
p^*(n, m) = 1 - \\frac{2^k}{m} + \\frac{2}{3} \\times \\frac{2^{2k} + 2}{nm}
$$

The winning probability for player 1 based on the size of the pool of candidates of player 1 vs player 2 from any situation is plotted as follows:
    `,
    spicyMath2:
        `
### **The Mathematical Model**

The first step to finding the optimal strategy is to fist convert the game into a mathematical model. To do this, we
make one simple assumption:

*The secret identity of the opponent is uniformly distributed amongst all possible candidates. Because of the eliminating nature of 
the “Yes”/“No” questions, this property persists throughout the game. With this assumption, only the number of remaining characters 
in the pool is relevant to the analysis, not the details of which characters in particular are remaining.*

With this assumption we can mode the game as a **Simple Stochastic Game**.

*In game theory, a stochastic game, introduced by Lloyd Shapley in the early 1950s, is a dynamic game with probabilistic transitions 
played by one or more players. The game is played in a sequence of stages. At the beginning of each stage the game is in some state. 
The players select actions and each player receives a payoff that depends on the current state and the chosen actions. The game then 
moves to a new random state whose distribution depends on the previous state and the actions chosen by the players. The procedure is
repeated at the new state and play continues for a finite or infinite number of stages. The total payoff to a player is often taken
to be the discounted sum of the stage payoffs or the limit inferior of the averages of the stage payoffs.*

We'll model the agme into the followinf statespace:
$$
S=\\{\\langle n,m,P_i\\rangle: n,m \\in \\mathbb{N} , i \\in \\{1,2\\}\\}
$$

The first entry $n$  indicates the size of the pool of candidates player 1 is left with and the second entry $m$ indicates the size of
the pool of candidates player 2 is left with. The last token tells which player has to take its turn.

Suppose the value of last token is $P_1$. This means that player 1 takes his turn. He will ask a "Yes"/"No" question from player 2 
regarding his character's secret identity, and based on the answer lets consider $b_1$ the size of pool left if the answer is "Yes". 
This is called Player 1 making a bid of $b_1$ Thus the next state would be something like this:
$$

\\text{Starting at }\\langle n,m,P_1 \\rangle \\text{ with Player 1 bidding }b_1\\longrightarrow 
\\begin{cases}
\\langle b_1,m,P_2 \\rangle & \\text{with probability } \\frac{b_1}{n} \\\\
\\langle n-b_1,m,P_2 \\rangle & \\text{with probability } \\frac{n-b_1}{n}
\\end{cases}
$$

This type of play continues till one of the players is left with size of pool = 1. That is to say the following states are terminal states 

$$
\\forall m>1,\\langle 1,m,P_2 \\rangle \\leftrightarrow \\text{Player 1 immediately wins} 
$$

$$
\\forall n>1, \\langle n,1,P_1 \\rangle \\leftrightarrow \\text{Player 2 immediately wins}
$$

The state $\\langle 1,1,P_i \\rangle$ is not possible because before the other player reaches 1 the player which had already reached that 
state would declare the win.

This definition of the game puts it under the framework of *Simple Stochastic game.* 

The *Simple Stochastic Game* show the existence of an optimal bidding strategy. The bidding for this strategy can be denoted as:

$$
b^* : \\mathbb{N} \\times \\mathbb{N} \\rightarrow \\mathbb{N}
$$

and the optimal probability function can be denoted by 

$$
p^* : \\mathbb{N} \\times \\mathbb{N} \\rightarrow [0,1]
$$

that is optimal for Player 1 in the sense that:

* If Player 1 makes the bid $b^* : \\mathbb{N} \\times \\mathbb{N} \\rightarrow \\mathbb{N}$ when the state is $\\langle n,m,P_1\\rangle$ 
then no matter the strategy Player 1's probability of winning is $ \\geq p^*: \\mathbb{N} \\times \\mathbb{N} \\rightarrow [0,1]$.
* If Player 1 makes some other bid then the probability is $\\leq p^*$.

The game guess who is symmetric between Player 1 and Player 2 in the sense that the position $\\langle n,m,P_1\\rangle$ is functionally 
identical too $\\langle m,n,P_2\\rangle$. This means that if the probability for player 1 to win is $p^*(n,m)$ then probability for 
player 2 is $p^*(m,n)$. Because of this symmetry, the optimal probability function satisfies a nice recurrence relation:

$
\\textbf{Proposition: } p^*(n,m) \\text{ and } b^*(n,m) \\text{ satisfy the following recurrence}
$

$$
p^*(m,n)=\\max_{b \\in[1,n-1] } \\{ 1-\\frac{b}{n}p^*(m,b)-\\frac{n-b}{n}p^*(m,n-b) \\}
$$

$$
b^*(m,n)=\\arg \\max_{b \\in[1,n-1] } \\{ 1-\\frac{b}{n}p^*(m,b)-\\frac{n-b}{n}p^*(m,n-b) \\}
$$

$
\\textit{Proof}
$

Let $p_b(n,m)$ be the probability that player 1 wins from the position $\\langle n,m,P_1 \\rangle if he bids \\text{b} at \\langle n,m,P_1 \\rangle$ 
and both players play optimally thereafter. By the rules of the game then

$$
p_b(n,m) = \\frac{b}{n}(1-p^*(m,n)) + \\frac{n-b}{n}(1-p^*(m,n-b))
$$

since with probability $\\frac{b}{n}$ we move to the position $\\langle b,m,P_2 \\rangle$ where Player 1's probability to win is $1-p*(m,n)$ and 
with the probability $\\frac{n-b}{n}$ we move to the position $\\langle n-b,m,P_2 \\rangle$where Player 1's probability of win is $1-p^*(m,n-b)$.

The following is the psuedo code for finding the $p^* \\text{ and } b^*$

**Algorithm 1** Numerically computing $p^*(n,m)$ and $b^*(n,m)$
    `,
    spicyMath3:
        `
Now we are going to divide our statespace into two different sets which are namely **In the weeds** and **the upper hand**.

#### **In the Weeds**

$$
W_{k,P_1} := \\{\\langle n,m,P_1\\rangle : 2^{k+1} < n \\text{ and } 2^k < m \\leq 2^{k+1}\\} 
$$

When $\\langle n,m,P_1 \\rangle \\in W_{k,P_1}$ we say that Player 1 is in the weeds at level $k$.

#### **The Upper Hand**

$$
U_{k,P_1} := \\{\\langle n,m,P_1 \\rangle: 2^k < n \\leq 2^{k+1} \\text{ and } 2^k < m \\} 
$$

When $\\langle n,m,P_1 \\rangle \\in U_{k,P_2}$ we say that Player 1 has the Upper hand at level $k$.

## Proof time

Function $q(n,m)$ is used to find the probability for player 1 winning at a certain state and can be split in the following way.
    `
};

export default content;