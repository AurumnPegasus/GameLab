const Content = {
    intro:
        `
Connect-Four is a *game for two players*. Both have **\`21 identical coins\`**. In the standard form of the game, one set of coins is yellow, 
and the other is red. *You play the game on a vertical, rectangular board consisting of \`7\` vertical columns of \`6\` rows each*. Each time 
a player puts a coin down, it falls to the lowest unoccupied block in that column. Players make a move in turns.

If a player connects four coins either horizontally, vertically or diagonally, they win. Occupying each of the 7x6 blocks such that 
no other move is possible, and ensuring that there is no winning player, entails the draw condition.

Now, some definitions to make referencing the board easier. *The 7 columns are labelled 'a' through 'g', while the rows are 
numbered 1 through 6*. In this way, the *lowest square in the middle column is called* \`d1\`. For convenience's sake, we are taking 
the **first player as White (W) and second as Black (B) (similarities to Chess)**.
    `,
    approach:
        `
Before you show off your excellent techniques, we need to first prove that the dumb approach does not work. It is easy to 
see that the number of possible positions is at most $3^{42} (\\geq 10^{20})$. This upper bound is a very crude one and can be brought into 
better proportions. For this purpose, a program was written in the C programming language, which is mentioned later. 
For the standard, \`7 x 6\` board, the program saw an upper bound of $7.1* 10^{13}$.

So, **too many possibilities, significantly less accuracy, brute force is not an efficient approach**. A player cannot win just by instantiating 
each possible board and trying to follow it. You are a human after all, not a computer 😛
    `,
    boards:
        `
Let's start small. Consider a board of \`n columns\`, but only \`2 rows\`. My **claim is that Black will never lose a game on this board**. 
Even if n were to be practical infinity.

This is how B should play.

1. Pair up all the n rows in groups of 2. If n is odd let the nth row be alone.
2. If W plays in row 1, play in row 2 (pair). If W plays in row 2, play in row 1.
3. If W plays in row N, play in row N.

This will always result in a draw, since only way W could win is if it were to get its coin in 4 consecutive rows side by side. 
This is prevented by B.

Another solved board is with \`2n rows\` (even) and \`columns ≤ 6\`. This strategy could also be used for ensuring B always draws.

1. If W plays in columns 1, 2, 5 or 6, B plays in the same column.
2. If W plays for the first time in column 3 or 4, B plays in the other column.
3. Otherwise, if W plays in column 3 or 4, and B can still play in it, B plays in the same column
4. If W plays in column 3 or 4, and B can not play in it, B plays in the other column.

Since B never allows a vertical 4 for W, that is out of the question. For horizontal 4 at row 1, B ends up occupying at least 1 of 
the two bottom columns, hence denying that for W as well.  For any other horizontal 4, it is only possible in odd rows for W. But 
in column 3 and 4, B ends up having at least 1 in either of the two in all odd rows. Diagonal is not possible at all since W will 
have all coins at odd rows in column 1, 2, 5 and 6.
    `,
    threat1:
        `
#### **Useless Threat**
    `,
    threat2:
        `
The threats by **W** in \`row 3,4,5\` are considered to be useless, due to the threat by **B** in row 2. Since *W cannot move in \`column 2\` and \`6\`, 
it has to fill \`column 7\`*.  Even number of rows mean that W will still have the turn when column 7 is filled, meaning B will end up winning.

Whether a threat is useless or useful is dependant on control of Zugzwang (explained later). 

#### **Odd Even Threat**

A threat is only useful if a player is forced to play in a row just below that of the threat. Usually that happens when other columns are filled. 
In such cases, **generally**, *W has only odd rows, and B has even rows*. 

*Black has odd threats, and White has even*. If they are in the same column, the lower threat will win (as seen above)

Generally speaking, W threat is stronger than that of B. Here is how everything rolls out:

- W has odd, B has even threat: W will win.
- W has even, B has even threat: B will win.
- W has even, B has odd threat: Draw.
- W has odd, B has odd threat: Draw.

A simple example consisting of multiple threats is:
    `,
    threat3:
        `
Here, **B has odd threat** at \`c3\` and **W has odd threat** at \`f3\`. Going by the table, it should be a draw. Lets play it out. **W** has to give up its own threat 
to play the game, which would ideally result in a draw, since **B** will have to give up its threat in \`c\`. But what happens is that **B** 
gets to create a new threat at \`c2\` due to coin at \`f5\`. This gives B consecutive threats, and thus it wins. 

This tells us that **though parity of threats tells us a good amount about the winner, we need to be careful about new threats**.
    `,
    zug1:
        `
This is a very basic but powerful concept in Connect 4. **Zugzwang** basically means to force a player to make a move they would rather not make. 
This is due to the *simple rule that they have to make a move, and the constraints of the board*. 

#### **Initial Position**

**W always moves first**. Therefore B always is in a position to play follow up, hence to control the Zugzwang. Suppose B plays follow up from the beginning, 
you would end up with a board like this:
    `,
    zug2:
        `
Though this is an illegal position, *it is interesting to note who won first*. Since **W** controls whole first row, naturally **W** won the game first. 
This shows that follow up *is not a good strategy at the start of the game* for **B**. 

#### **Other positions**

The following board represents a position where **W** is in control of the Zugzwang:
    `,
    zug3:
        `
Here, **W** has an odd threat in \`column a\`. Knowing this, **B** won't play there. Since on the rest of the board, odd number of squares are remaining, 
whoever plays first here, the opposite will have to play in \`column a\`. Since **W** is playing the first, it can control the zugzwang to force **B** to play 
at \`a2\`. The only option **B** has to go against the zugzwang and connect its 4 men, but still, it is **W's game to lose**. 

**In this case, B has control of Zugzwang due to even threats**
    `,
    zug4:
        `
**B** and **W** *ideally do not want to be the first to play in* \`b\` or \`f\`. Other than these 2, *the total number of boxes remaining is even*. This means whoever plays 
first here, will be the player **forced to play first in either column* \`b\` or \`f\`. That means at the end, **W** will have to play in \`b1\` or \`f1\`, thus losing. 
**B** is in complete control of Zugzwang here and can play follow up.
    `,
    strat1:
        `
A formal definition is given of the nine rules which are used to refute potential threats of the opponent. These can be only applied by the player in control of the 
Zugzwang. These are always applied in the places opponent has to move. 

#### **Claimeven**

This makes direct use of the fact that player in control of Zugzwang can get all even unclaimed positions, giving odd positions to the other.
    `,
    strat2:
        `
**B** is in control of Zugzwang here since **W doesn't have any threat**. Here, if B were to use claimeven, he could end up getting a draw, since any threat of W will 
need to have a coin in even row, which will not be possible. 

#### **Baseinverse**

This is based on the logic that a player cannot play two directly playable moves in one turn. Therefore once the opponent has made the move, controller of 
Zugzwang can still cover the other position.
    `,
    strat3:
        `
Here, if W cannot play in a1 and b1 at the same time. That means if W plays in a1, B plays in b1, and vice versa. Thus the threat is nullified.

#### **Verticle**

Similar to Baseinverse, this is based on the fact that a player cannot play two directly playable moves in a single column in one turn. Depending on the 
opponent, the player controlling the Zugzwang can either play second or first in the column to prevent a verticle 4. 

#### **Aftereven**

Aftereven uses a special side-effect of the usage of one or more Claimevens. If a group can be completed by the controller of zugzwang, 
then they can complete the whole board using claim even, and then complete that group:
    `,
    strat4:
        `
Here, **B** can use aftereven to complete the group at either \`b2\` or \`f2\`. Here, then **B** can use claimeven to finally force **W** to play in either \`b1\` or \`f1\`. 
This is called as aftereven, where you can form a group and win by using claimevens.

#### **Lowinverse**

Lowinverse is based on the fact that two odd numbers when summed give an even number. Normally, controller of Zugzwang will play lowest even square of the column 
containing odd number of empty squares. But when we have two columns (doesn't have to be consecutive) having odd number of empty squares, this 
will force the opponent to play first. In such a way controller of zugzwang gets to take the odd square above the opponent. 

#### **Highinverse**

This is based on the same principle  as that of lowinverse:
    `,
    strat5:
        `
In lowinverse, we would consider \`c2, c3, d2, d3\` as important. Here we consider \`c4\` and \`d4\` as important too. Highinverse is nothing but a 
combination of lowinverse and claimeven. What this does is say **W** plays in \`c2\`, then using lowinverse **B** can get \`c3\`. Then **B** (controller of Zugzwang) 
convert \`d3 and d4\` into a claimeven, to get \`d4\`. In such a way **B** ends up getting \`c3\` and \`d4\`. 

#### **Baseclaim**

This is a combination of Baseinverse and Claimeven:
    `,
    strat6:
        `
Here, W can possibly have 3 threats formed: \`b1-e1, c1-f1, b1-e4\`(diagonal). **B** needs to play in a way to counter this. 

- **W** plays in \`b1\`, **B** plays in \`e1\` and then uses Claimeven at \`c1-c2\` to prevent \`b1-e4\`.
- **W** plays at \`c1\`, **B** plays in \`e1\` and then uses Baseinverse at \`b1-c2\` to prevent \`b1-e4\`.
- **W** plays at \`e1\`, **B** plays in \`c1\` and then uses Baseinverse at \`b1-c2\` to prevent \`b1-e4\`.

In such ways **B** can nullify all of **W**'s threats.

#### **Before**

This is a combination of Claimeven and Vertical:
    `,
    strat7:
        `
Here \`b4-e1\` is the Before group. Since \`b4\` and \`e1\` are still empty, this means it works for all  groups needing both \`b5 and e2 (b5-e2)\`. 
Here, before uses the squares \`b4-b5\` and \`e1-e2\`. As soon as \`b4\` is played, \`b5\` is played, and same with \`e1-e2\`. This will ensure **B** 
completing \`b4-e1\` or preventing **W**'s \`b5-e2\`. In both cases \`b5-e2\` is a useless threat. 

It basically means that if there is a before group, the opponent cannot claim all the unclaimed squares in the threat column.

#### **Special Before**
    `,
    strat8:
        `
We use \`d2-g2\` as the before group. This can contain claim evens at \`f1-f2\` and \`g1-g2\` and vertical at \`e2-e3\`. We need to use baseinverse to solve \`a1-d1\`, 
which would give **W** a possibility of \`b1-e4\`. To combat this, we can use claimeven to get \`e4\`. This claimeven, however, is conflicting with vertical at \`e2-e3\`. 

The only reason **B** needs to play \`e3\` is to prevent \`d3-g3\`. So **B** can play \`d3\` as well. If **W** were to play at \`d3\` before, then **B** 
should immediately get \`e2\` to continue with the Before play. Therefore to play a Special Before, we need a before group \`(d2-g2)\` with one of the 
empty squares as directly playable (\`e2\`). Furthermore, we need another playable square (\`d3\`).

#### **Combination**
    `,
    bw:
        `
#### **Black**

We have developed a set of rules which can be used to show that certain potential threats can be refuted. Since some of the rules depend on Zugzwang, it is important 
that the person who applies them is in control of the Zugzwang.

**B** is in control of Zugzwang until **W** creates an odd threat. Till then if **B** just plays using the strategy. If **W** were to create a good threat (odd threat), 
**B** is no more in control of Zugzwang. Here we observe that no matter what B does from here on out, there generally will not be any set of rules which can refute that threat.

From this we can conclude that we do not need to check who controls the Zugzwang for **B** before applying the rules. For if *B is in control, we can apply the rules, 
if not, it doesn't matter what B does*.

#### **White**

**W** needs an odd threat to gain control of Zugzwang. Once it has that, he just needs to follow the strategic rules to fill up the rest of the board. *If W has 
more than one odd threat, it can choose from which poison to kill B from*.

## Victor

A position in which **W** has to move, can be evaluated as *B as controller of Zugzwang, and vice versa*.  For **W** as a controller of Zugzwang, evaluation must be done 
removing the odd column out of viable options. *The evaluation begins with finding all possible instances of the $9$ strategic rules*.

For each position where any rule is applied, it is seen whether it can solve a problem or not. Each application of one of the rules which solve one or more 
problems is stored. These are called Solutions. This results in a list of solutions, where each solution is stored as a Struct. Struct consists of fields describing the 
rule, and the positions involved. Furthermore for each solution we have a list of groups solved by that solution.

We also **create a map with problem as the key and list of pointer(s) to the solution as the values**. After all this, we need to see which solutions 
can work together and which cannot. To work this out, solutions are seen as nodes of an undirected graph. If two solutions can't be used simultaneously, 
they are connected. These connections are stored in an adjacency matrix. *To fill it, it is important to know type of solutions and squares involved. Once 
it is filled, it is a normal square array*.

If we see the problems as nodes, too, and we connect a solution and a problem if the solution solves the problem, and no problems are connected, we can solve it 
as a pure graph problem.

Given are two sets of nodes, S(olutions) and P(roblems). We try to find an allowable (in graph
theory: independent) subset C(hosen) of S, with the property that P is contained in B(C) (*the set of all neighbours of nodes in C*)

*It can be solved using a simple backtracking algorithm*.

\`\`\`cpp
void FindChosenSet(P, S)
{
    if (P == EmptySet) {
        Eureka(); // We have found a subset C 
    }
    else {
        MostDifficultNode = NodeWithLeastNumberOfNeighbours(P);
        for (auto neighbours: MostDifficultNode ) {
            FindChosenSet(P - { MostDifficultNode },
                S - AllNeighbousrsOf(ChosenNeighbour));
        }
    }
}
\`\`\`

If a set of solutions is found for a given position, these **solutions show the plan which has to be
followed to play the game** until the desired result (win for White, or at least a draw for Black) is
reached.
    `,
    fft:
        `
Lets assume we have an oracle. This oracle cannot predict who will win, but for any given state of board, give the best possible outcome. Let us assume 
that we play such that for each state of board, we ask for help from the oracle. **Therefore it is a 'perfect' game. In such case, if W wins, does that mean 
W will always win if it were a perfect game?** 

The thing is, if *for B we were to choose that draw is fine, it will not change any result*. Since oracle predicts the best move, if the second scenario gives 
different result, that would mean Oracle could have chosen the best move, but did not. That is contradictory. That means that whoever will win with the help of 
the Oracle, is always at an advantage.

Another thought to explore is *number of legal ways to arrange* $N$ coins in board. For now, we take the board to be the standard $7 \\times 6$ board.
    `,
    resource:
        `
- Resources by Victor Allis
- Alpha Beta Pruning based heuristics
- Principles and Tehniques BY Stanford
- C4 Numbers by oeis org
- Math oriented resources behind Connect-4
    `
}

export default Content;