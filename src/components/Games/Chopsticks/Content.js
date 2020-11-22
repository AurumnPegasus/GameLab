const Content = {
    intro:
        `
Chopsticks is a game of strategy as well as basic math. It is also known as Finger Chess, Swords, Split, Magic Fingers, Chinese Fingers, 
Cherries, Sticks, and Twiddly Dinks. There are many variations of rules though the overall theory and spirit of the game remain the same.
    `,
    rule1:
        `
Both players start with both hands holding up one finger each.
*The hands on the right side of the pictures below used for explaining the game belong to player 1 and the hands on the left belong to player 2.*
    `,
    rule2:
        `
One player begins the game by tapping one of his fingers onto one of the other player's hands. 
Let's say \`player 1\` used his right hand to tap \`player 2\`'s right hand.
    `,
    rule3:
        `
The second player now has to put up an additional one finger (**add the number of fingers the hand that had tapped with the pre-existing number 
of fingers**) on his right hand (the hand that was tapped), and *thus has two fingers up*.
    `,
    rule4:
        `
Once a player has 5 fingers up, on one hand, the hand is dead and should be held as a fist behind the person's back. 
**A player cannot play with all five fingers up on one hand**.
    `,
    rule5:
        `
**A player loses when both his hands are dead (no fingers remaining up)**.

Let's say \`player 1\` had three and two fingers up respectively on his right and left hands, and \`player 2\` had 0 and 2 fingers up respectively on 
his left and right hands. By \`player 1\` tapping \`player 2\`'s right hand with their right hand,
    `,
    rule6: "**Both the hands of &nbsp; `player 2` &nbsp;are dead, which means player 1 has won The game has ended.**",
    variant1:
        `
There are a few different rules one can adopt regarding when **one of the player's hand** is "dead" : 
    `,
    variant2:
        `
Let's say it is player 2's turn, and they have 4 fingers up on their left hand and one finger on their right hand. Player 1 has three 
fingers up on their right and one on their left hand.

There are two variants of the game which will arise when player 2's left hand hits player 1's right hand,
    `,
    variant3:
        `
Bringing a hand **back** from \`dead\` state:

- An added move of being able to *redistribute the total numbers of fingers between the two hands*
- Or an added move to be able to *stall by switiching fingers on either hand*
    `,
    abst1:
        `
### Using Arrays
We were using \`2D-arrays\` or vectors to *store the state of every turn*. The problem with this was that as the game progresses, the 
**number of states increase almost exponentially**. This means that our space complexity would tend to infinity.

### Using Graphs

With the help of graphs, our space complexity would be a finite value. Each node would store the states of each player. We construct the node 
having $P_1$ in mind and hence the weights on the edges would be $\\infty$ when $P_1$'s state is $(0,0)$. The weight of all other nodes is $1$. 
Let $n$ be the number of fingers.

The number of nodes (N) is $N = \\frac{n^2(n+1)^2}{4}$

The maximum number of edges (E) is $E = \\frac{n^2(n+1)^2(n^2(n+1)^2-4)}{32}$

### Time complexity

$$
O(n) = \\frac{n^2(n+1)^2}{4} [\\frac{1}{2}+\\frac{n^2(n+1)^2}{8}]
$$

Therefore it is $n^8$ complexity.

### Visualizing the graphs

This is what a 3-turn demonstration looks like, where $P_1$ is player one and $P_2$ is player two.
    `,
    abst2:
        `
Where each node in the actual graph is going to have the states of both players $(P_1, P_2)$. **The green and purple colored paths are the possible paths for the player to 
win the game** &nbsp; (1 and 2 just represent the path number). Here the $\\text{root node is}\\ ((1,1),(1,1)),  P_1\\ wins\\ is\\ ((x,y),(0,0))$ and every 
other node is $((x_1,y_1),(x_2,y_2))$.
    `,
    algo1:
        `
### DFS or BFS

The idea is to DFS or BFS through the graph *starting at the root node* till we find the node which has a $(0,0)$ state for the opponent 
and **avoiding the path if we come across our own $(0,0)$ state**.

#### Time complexity

The time complexity of performing DFS or BFS once is $O(n^8)$. We would *have to perform this at every turn and since we cannot determine the 
number of turns the game will run for*, this might not be the best solution if we have to repeat it several times.

---

### Floyd Warshall

Running Floyd Warshall on the graph would give us **a distance matrix which contains the distance between any two given states**. During run time we 
only need to lookup this matrix and find the distance. 

#### Advantages

1. We get the information on how many moves it would take for us to win from the given state and if it is not possible to win at all.
2. An additional dfs will also give us the path or moves to make in order to win.

#### Time complexity

The time complexity to run Floyd Warshall is $O(n^{12})$. However, **we will have to run this only once and lookup from this matrix**. Also, the 
dfs can be modified for finding the path as we know the number of moves. This *dfs will be programmed to stop after* $k$ *number of moves 
to increase efficiency*.

---

### Final Solution

We construct the graph by simulating the game for an arbitrary $r$ rounds (*basically takes every state it comes across and links it to 
the previous state it has come from*) which is complexity of $O(n^8)$. Then *we run Floyd Warshall to obtain the distance matrix which is of 
complexity* $O(n^{12})$. 

Further, a **hint button** that tells the player what the next move should be is done by running a DFS with the *number 
of moves as the constraint whose complexity is* $m$ moves. The pseudocode is:
\`\`\`
Construct the weighted graph 
Floyd Warshall with n nodes
if hint then DFS with m moves
\`\`\`

---
### Scalability of The Algorithm
In case a different specie with say F fingers and H hands want to play a N player game, 

The complexity = $F^3(N+H)$

We can model a more general model if required, but with respect to the game-chopsticks we assume that only $5$ fingers will be present on 
every hand and that is constant. To give a reference of the scale here is a table:
    `,
    resource:
        `

    `
};

export default Content;