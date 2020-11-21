const Content = {
    intro:
        `
Scotland yard is a popular board game, named after Scotland Yard, the headquarters of London's Metropolitan Police Service. It is played 
by 2-6 players in which one of the players is the criminal (Mr. X) and the remaining are detectives. As is intuitive, *the objective of the 
game for the detectives is to catch the criminal, while the objective of the criminal is to run away from its pursuers for 22 rounds*. 
**It is an asymmetric board game since the players do not have the same goal**. 
    `,
    rule1:
        `
Let's take a look at the rules once, before we jump into analysing the game.

#### **Movement of players**:

Each detective and the criminal is assigned a pawn to mark their position on the board. There are a **total of 199 positions on the Scotland Yard 
board**. Each *position can represent 1-3 stations, a taxi, a bus, and an underground route*, which is marked by a number and the colour of 
the station it represents.

**Every station on the map can be reached with the taxi** (*yellow*). However, the distance that you can travel is short: 
You can only move (along the yellow line) to the next station.

The bus (*turquoise*) **only drives from stations with a turquoise semi-circle**; a bus will take you a little further than the taxi (along the bus line).

The underground (*red*) **travels along the red line and covers the furthest distances the quickest**. However, there are only a few underground 
stations (stations with a red inner rectangle) on the map.

All playing pieces can only be moved to unoccupied stations. **If there are no unoccupied stations for Mister X to travel to, he has lost 
the game. Mister X also loses if one of the detectives moves to the station where Mister X is located**.
    `,
    rule2:
        `
#### **Tickets :**

Each detective receives ticket cards that allow him to across the board. At the start of the game, each detective gets \`4 underground tickets, 
8 bus tickets, and 11 taxi tickets, and each detective receives 5 black tickets and 2 double move tickets\`.

In each round, after **a detective** has used up a ticket to travel to another position, **they cannot use them again**, however, this *ticket is now available 
for Mr. X's use*. If a detective no longer has any tickets or can't move from his current station with the tickets he has left, they have to sit out.

A black ticket allows Mr.X to hide the route he used and also travel by ferry (a route only he is allowed), and a double move ticket allows him to make two 
moves to two different stations in one round.

#### **Initial Starting Position:**

To determine each player’s starting position, a set of start cards marked D and X are shuffled separately and each detective selects from the D cards and 
places their playing piece on the respective position. Mr. X picks an X card but doesn’t reveal his position to the detectives or place his playing piece on the board.

#### **Game Play:**

In total, **22 rounds are played**. In each round, *Mr. X first makes their move, concealing his new position from the remaining players*, and 
writes down the station he moved to on a paper, hiding the station with the ticket they used. (The detectives can see which mode of transport Mr.X has used.)

When a detective makes a move, the used-up ticket is placed in the general draw pile where Mr. X gets his tickets (**so Mr. X basically has an unlimited number of tickets**).

#### **Moving Mr.X:**

Each turn Mr. X conceals his move. However, there are **special moves** (\`3rd, 8th,13th, 18th, and 24th moves\`) where Mr. X **must surface**. He has to reveal his current position 
before moving to a new station, which gives detectives the chance to co-ordinate and corner the criminal!

#### **Moving the Detectives:**

The detectives use their tickets to move around the board. *If they run out of tickets or don't have the required ticket to move out of a station, they must 
sit out of the game*. Detectives can't trade tickets among themselves and all their remaining tickets have to be visible to Mr. X, so he can see the remaining means of transportation they have left.

#### **Winning The Game**

Mr. X wins if - 

- He is able to move around the board for 22 rounds without being caught.

The detectives win if - 

- They corner Mr. X (he has no stations to go to where a detective is not present)
- They move to a station where Mr. X is currently

Now that we understand how to play, let's dive into different aspects of the game!
    `,
    obj:
        `
The goal of this page is to analyze the game Scotland Yard. 

We start off by venturing into proofs for **Scotland Yard being a PSPACE problem and the similarities between Scotland Yard and a game of 
perfect information**. It is easy to feel daunted by these claims, \`trust me we felt it too\`. *To make it easier, we remove all the layers of 
abstraction from the game first. We convert the game into a problem of Groups, Graphs, and Sets*. 

It is understandable if you think it still is going to be tough. We ensure that you will understand what these jargons are and how they interact with the 
game itself. We firstly introduce Games with the viewpoint of perfect and imperfect information. Then we connect Scotland Yard to that idea and 
remove all the layers of abstraction. Once that is done, we proceed with proofs. 

We then explore some heuristic approaches - strategies that you might tend to use after playing the game a few times. These are 
unproven methods, but after some experience, arise as the best way to win, either as detectives or as Mr. X.
    `,
    foundation:
        `
To properly explain some concepts, we need to define some terms: 

**Extensive Games:** Games that allow the representation of various key aspects. These aspects include a set of players, each player's moves, 
their decisions, the information (possibly imperfect) about a player, and their payoffs for all possible outcomes. Essentially, they are 
games that can be represented with a game (decision) tree.

**Perfect Information Game:** In a perfect information game, a player has complete information about all events which have previously occurred in the game.

**Imperfect Information Game:** Games which have some aspects of the game hidden are called imperfect information game. 

It is easily understandable why Scotland Yard comes under the bracket of the extensive game with imperfect information. For it to be an extensive 
game, it should formally represent each and every aspect of the game, which is the moves and mode of commutation each player uses. Even if the moves are 
hidden, they are definite and are represented. Since the moves are hidden, it is impossible for the detectives to know which route the criminal has 
taken, which makes it an imperfect information game. 

Now, let's look into some abstraction or representations. 

Any win-loss game $G$ with perfect information can be represented as a 4-tuple

$$
\\text{G} \\space = \\space <N, H, P, U>
$$

- **$N$:** Represents the number of total players. 

- **$H$:** Is a set of histories. A history ($h$) represents a given state of the board at some point in time. Every $h$ = $<a_1, a_2 . . . a_p>$ , where 
$a_i$ is an action. Each history is an ordered list of actions. 
- $h'$ = <$h$, $a'$> represents the immediate successor of $h$, where $h'$ = $< a_1, a_2 . . . a_p, a'>$. There are two types of history, terminal ($Z$) and 
non-terminal ($H-Z$). Terminal represents an end condition, after which no other action can be taken. A history becomes terminal when a player wins. 

- **$P$:** Is the player function. It assigns to each non-terminal history a particular player. Formally, we define it as $P: \\{H - Z\\} \\rightarrow N$. 
We say that a history $h$  belongs to $P(h)$, essentially when the last action in the set of actions that is $h$ is made by the player.

- $U:$  Is the utility function, assigning each terminal history to a player. (the player has won the game). The formal definition would be $U: Z \\rightarrow N$.

Given $G$  defined as above, a function $S$ is called a strategy for a player  $\\space i \\in N$ if it maps for every history $h$  belonging to $i$ to an action $A(h)$. 

An extensive game with imperfect information extends a game with perfect information. To represent the former, all you need is to add is an 
Information function in the original tuple.

$$
\\text{G} = \\space < N, H, P, {\\langle\\mathcal{I}_i\\rangle}_{i\\in N}, U>
$$

The only difference in this is that  $\\mathcal{I}_i$ carries information sets for each $i \\in N$. $\\space \\mathcal{I}_i = \\{I_1, I_2, . . . Iq\\}$ 
where each $I$ represents a set of histories, there having been $q$ rounds of the game played so far. Each $I$ basically is a set 
of histories (or state changes of the board) of that round (till $i$ makes an action again).  Intuitively, an extensive game 
with imperfect information models the situation in which player $i$ knows that some history $h \\in I \\in \\mathcal{I}_i$  has happened, but there 
are unable to tell $h$  apart from the other histories in $I$. In simple terms, they know other players have made a move based on the last action 
they took, but are not completely sure of the previous actions the player took. 

A function $S$  is called a strategy for a player $i$  in $\\text{G}$ if it maps every information partition $I \\in \\mathcal{I}_i$ belonging to $i$ onto action in $A(I)$

### **Assumptions for Mathematical Modelling**
For convenience, there are some assumptions which have been taken.

1. **There is only 1 mode of transport**, that is Taxi. The same method described as follows can be easily translated with more modes of transport.
2. A player will have $k$ amount of tickets of Taxi, where $k$ = number of rounds.
3. There are only two players, Detective and Mr X.
4. *Only 1 player will be controlling all detectives.*
5. Value of $k$ will be always $\\leq |V|$, where $V$ is the number of nodes in the graph.
6. We have used digraph to represent the game board.
7. **Mr. X will always play the first move in each round**.
8. *Mr. X will be considered to be caught IF AND IF ONLY it is on a node occupied by a detective at the END of the round (after detectives have moved)*.
9. Mr X will win if and if only the game goes on for $> k$ rounds, otherwise Detectives have won.
    `,
    formal1:
        `
We now *know how to formalise any given perfect or imperfect information game*. Now let's connect it to the game Scotland Yard. 

Let $SY$ = $\\langle G, \\langle u_*, \\overrightarrow{v_{*}}\\rangle, f\\rangle$  be a Scotland Yard instance. Then, let the extensive 
Scotland Yard game constitute by $\\mathcal{SY}$ be defined as the tuple 

$$
\\mathcal{SY}(\\text{SY}) = \\langle N, H, P, \\bullet, U\\rangle
$$

Here, 

- $G$ represents a digraph.
- $u_*$ represents the position of Mr X.
- $\\overrightarrow{v_*}$  is $n$ dimensional vector, where n is the number of detectives. Each element in the vector represents the initial node of the detective.
- $f$ is a function which when fed a number (no. of rounds) chooses one of the two elements from the set $\\{ show, hide\\}$ . This denotes whether 
Mr X needs to show their position or not.
- $N$ represents total number of players. For convenience, $N = \\{ \\forall, \\exists \\}$ where $\\forall$ represents Mr X and $\\exists_1, 
\\exists_2 . . \\exists_{N-1}$ represent the detectives.
- $H$ represents a set of histories.  Let $\\prec$ be the immediate successor relation on $H$ . So you can say that $\\langle h \\rangle \\prec \\langle h, u \\rangle$  
where $\\langle h \\rangle, \\langle h, u\\rangle \\in H$
- $P$ represents the player function. Due to notational convenience, it is easy to assign the value of the player function.  
$P( \\langle h, u \\rangle ) = \\forall$  and $P(\\langle h, u , \\overrightarrow{v} \\rangle ) = \\exists$ no matter $u$  or $\\overrightarrow{v}$.
- $\\bullet$  is the indistinguishability relation. It is defined on the group $H$. For any two histories  $h, h' \\in H$ , where the length of both histories is equal, $h \\bullet h'$ when:

If $h = \\langle u_* , \\overrightarrow{v_*}, u_1, \\overrightarrow{v_1}, . . . u_i, \\overrightarrow{v_i} \\rangle$ and $h' = \\langle u_* , \\overrightarrow{v_*}, u'_1, \\overrightarrow{v'_1}, . . . u'_i, \\overrightarrow{v'_i} \\rangle$ then

1. $\\overrightarrow{v_j} = \\overrightarrow{v'_j} \\space \\forall \\space 1 \\leq j \\leq i\\ $ and
2. $u_j = u'_j \\space \\forall \\space 1 \\leq j \\leq 1$   such that  $f(j)  = show$ 
- $U: Z \\rightarrow \\{win, lose\\}$  is the utility function which determines whether $\\exists$ won or not.

$$
U(\\langle h, u, \\overrightarrow{v} \\rangle) = 
\\begin{cases}
win, \\space \\space u\\in \\overrightarrow{v} \\\\
lose, \\space \\space u \\notin \\overrightarrow{v}
\\end{cases}
$$

It is easy to see that the operation $\\bullet$  is Equivalent to the group $H$. We write $\\mathcal{H} \\subseteq \\wp(H)$ for the set of 
equivalent classes, or information cells, in which $H$ is partitioned by $\\bullet$ . 

$\\mathcal{H} = \\{ C_1, C_2 . . . C_n\\}$, where $H = C_1 \\cup C_2 . . \\cup C_m$ for every $1 \\leq i \\leq m$ , if $h \\bullet h'$  where $h, h' \\in C_i$.  

We lift the relation $\\prec$  to $H$, using the same symbol: For any pair $C, C' \\in H$, we write $C \\prec C'$ if there exists histories $h \\in C$ and $h' \\in C'$ such that $h \\prec h'$. 

We can also extend this as if $h, h' \\in C$  and $C \\in H$, then $P(h) = P(h')$. Thus the player function is meaningfully lifted as follows: if $C \\in H$ and $h \\in C$, then $P(C) = P(h)$.
    `,
    formal2:
        `
Consider an example game $G^x$ . Let $f^x$ be the information function where $f^x(1) = hide$ and $f^x(2) = show$. Let $u_*$ and $v_*$ as the initial position 
of $\\forall$ and $\\exists$ . Consider that number of detectives to be 1. Let's play this game.

 The set of histories we can get from this game are:
    `,
    formal3:
        `
where ! marks terminal histories. To reflect that this is a game of imperfect information, we can write \\mathcal{H} as
    `,
    formal4:
        `
A graphical representation of this would be: 
    `,
    formal5:
        `
#### **Perfect Information Scotland Yard**
So, Perfect Information means that each and every aspect of the game is explicitly expressible. The only difference we need to model here is 
$\\forall$'s whereabouts. Since describing each position will convert Scotland Yard into a simple game of Cops and Thieves, we don't do that. 
Instead, to preserve the game, we describe the position of $\\forall$ as a set of possible nodes.

More abstractly, ∀’s powers are lifted from the level of picking up vertices to the level of picking up sets of vertices. ∃’s powers remain unaltered, as compared to 
the game with imperfect information that was explicated above. It is defined as:

$$
\\mathcal{SY-PI}(SY) : \\langle N_{PI}, H_{PI}, P_{PI}, U_{PI} \\rangle 
$$

The above mentioned example will be converted to
    `,
    formal6:
        `
#### **Effective Equivalence**
In this section, we establish that $\\exists$ has a winning strategy in $\\mathcal{SY}(SY)$ iff it has a winning strategy in $\\mathcal{SY-PI}(SY)$. 
In order to prove this, it will be shown that $\\langle H, \\prec \\rangle$  is isomorphic to $\\langle H_{PI}, \\prec_{PI} \\rangle$ in virtue of the bijection $\\beta$

The function $\\beta$ is a map from histories in the perfect information game $\\mathcal{SY-PI}(SY)$ to information cells in the game $\\mathcal{SY}$. 
To formally define it, $\\beta: H_{PI} \\rightarrow \\wp(H)$.

For example, in the above mention $G^X$, we will map $\\beta(\\langle u_*, v_*, u_1 \\rangle)$ where $u_1 = \\{a, b\\}$ to $C_1$ where 
$C_1 = \\{\\langle u_*, v_* , a\\rangle , \\langle u_*, v_*, b \\rangle \\}$

Just as a reminder, $C_i$ represents an indistinguishable state for $\\exists$ in $\\mathcal{SY}(SY)$.

The perfect information Scotland Yard game was defined in such a way that $\\exists$'s imperfect
information in $\\mathcal{SY}(SY)$ is propagated to perfect information about sets in $\\mathcal{SY-PI}(SY)$.

Example of $\\beta$ in lieu of above mentioned example would be:
    `,
    formal7:
        `
It is important to note that though here $\\beta$ is defined to have a codomain $\\wp(H)$, it ends up having a range of $\\mathcal{H}$. This is due to 
the output always being $C_i$ and $\\mathcal{H} = \\{C_1, C_2 . . C_m \\}$. 

To better define $\\beta$ and actually make it bijective, we redefine it as

$$\\beta: H_{PI} \\rightarrow \\mathcal{H}$$

Now, let's prove that the groups $\\langle H, \\prec \\rangle$  and $\\langle H_{PI}, \\prec_{PI} \\rangle$  are isomorphic. 

It is proved that $\\beta$ is a bijection between $H_{PI}$ and $\\mathcal{H}$. It remains to be shown that $\\beta$ preserves structure. 

Recall that for $C' \\in \\mathcal{H}$  to be an immediate successor of $C \\in \\mathcal{H}$, there must exist two histories $g, g'$ in $C, C'$ 
respectively such that $g \\prec g'$ (Proved earlier).

What this proves is that for any histories $h, h' \\in H_{PI}$ it is the case that $h \\prec_{PI} h'$ iff $\\beta(h) \\prec \\beta(h')$. 

The claim is proved by a straightforward inductive argument on the length of the histories in
$H_{PI}$

Making use of the fact that $\\langle H_{PI}, \\prec_{PI} \\rangle$  and $\\langle H, \\prec \\rangle$ are isomorphic groups, an inductive argument 
proves that $S$ is a winning strategy for $\\exists$  in $\\mathcal{SY-PI}$ iff $S(\\beta)$ is a winning strategy for $\\exists$ in $\\mathcal{SY}(SY)$.
    `,
    pspace:
        `
Let $\\text{SCOTLAND YARD}$ be the set of all Scotland Yard instances such that  $\\exists$  has a winning strategy in $\\mathcal{SY}(SY)$

If we are able to prove that there is a winning strategy in PSPACE for $\\mathcal{SY}(SY)$, then it will stand true for $\\mathcal{SY-PI}(SY)$ as well.

Papadimitriou, namely, observed that deciding the value of a game with perfect information can be done in PSPACE if the following requirements are met:

- The length of any legal sequence of moves is bounded by a polynomial in the size of the input
- Given a “board position” of the game there is a polynomial-space algorithm which constructs all possible subsequent actions and board 
positions; or, if there aren’t any, decides whether the board position is a win for either player.

$\\mathcal{SY-PI}(SY)$ meets those condition. 

For the first point, the length of the description of any history is bounded by the number of rounds $k$, of the game. By 
assumption, $k \\leq |V|$, thus it is polynomially bounded. 

For the second point, as we have seen till now, each board game can be represented in form of a decision tree. More formally, 
if $\\langle h, U, \\overrightarrow{v} \\rangle$ is a non terminal history, then its successors are 
either (depending on $f$) m only $\\langle h, U, \\overrightarrow{v}, \\{w_1 ,. . ., w_m \\} \\rangle$ or 
all of $\\langle h, U, \\overrightarrow{v}, \\{ w_1 \\} \\rangle$ , . . . , $\\langle h, U, \\overrightarrow{v}, \\{ w_m \\} \\rangle$ 

Where $E(U-\\{\\overrightarrow{v}\\}) = \\{ w_1, w_2 , . . , w_m\\}$. These can easily be constructed in PSPACE.

HENCE PROVED $\\mathcal{SY-PI}(SY)$, AND CONSEQUENTLY, $\\mathcal{SY}(SY)$ ARE PSPACE IN COMPLEXITY.

---
**NOTE**    
It is later shown that if there were a Scotland yard instance such that each $f = show$, then it would be **PSPACE HARD** in complexity. Also if each $f = hide$, 
then it would be **NP HARD** in complexity. These proofs are omitted due to the complexity of the math involved.

---
    `,
    heuristics:
        `
Now that we've covered the complexity of Scotland Yard, let's go through a few strategies one would adopt after gaining a good amount of experience with the game. These strategeies are the best plan of action when trying to win the game either as Mr.X or as the detectives, but aren't proven to work for all cases and all layouts of the board.

#### **The Detectives**

In order to capture Mr. X, the *detectives have to contain him to a portion of the board, and then keep  narrowing down on his position*. At the **start, the primary 
motive of all detectives should be to move to highly connected stations**, as Mr. X will surface at the end of their second turn.

Once Mr. X has surfaced, *detectives should aim to close in as fast as possible, and try to keep Mr. X contained in 1/4 of the map. The underground 
and ferry routes should be kept covered so that the criminal cannot escape quickly*. The best way to contain him is to ensure that before each 
move Mr. X has to surface, detectives are at highly connected stations.

To **capture Mr. X**, make sure *detectives are within one move of underground or river routes at all time, which will force Mr. X to make a double move*. The 
**earlier in the game Mr. X is forced to play a double move, the greater the advantage for detectives**, as he will have fewer options towards the end of the game.

In the previous section, *we showed how the game of imperfect information the detectives play is isomorphic to a game of perfect information by 
introducing a set of all possible positions Mr. X could be at*. In real gameplay, it could be useful to note down the possible sets of stations Mr. X 
could be at in order to maximize their coverage of that region. 

#### **Mr. X**

*By making detectives believe Mr. X could be at a large number of possible locations, there are too many for them to now guard properly*. 

On the turn where he must surface, *do so at a highly connected station, as in the next move, detectives will have a bigger set of possible stations Mr. X 
could be at to worry about*. As undergrounds are limited in number, avoid them as much as possible, as it could give detectives a fairly clear idea of 
Mr. X's position. On the other hand, as taxis can go anywhere, they are the most promiscuous mode of transport, increasing the number of locations he 
could be hiding. However, they limit Mr. X to a portion of the board. 

When *Mr. X has to surface, at this round, detectives know exactly where his location his, so use a double move, taking 
away the advantage detectives had to narrow their containment circle*. If double move has been used up, surface at a location with more than one 
mode of transportation, which will increase the set of locations detectives have to worry about.

**Playing with a lesser number of detectives will obviously be in Mr. X's favour.**

## AI Simulation

A simulation that plays the game will be that of perfect information, as it will keep track of the possible set of locations Mr. X 
could be at while playing as the detectives. *In reality, as described as a strategy in the Heuristics part, people narrow down Mr. X's 
position by attempting to keep track of Mr. X's locations as a set as well, but obviously not to the efficient extent a computer can.*

Through some **AI simulations that were run**, it was found that if both detectives and Mr. X employed the above strategies and played 
intelligently, *Mr. X won only about 30% of the time*.
    `,
    solve1:
        `
Now that we have analyzed the game and its complexity, let's move forward and try to begin to solve it by using a very famous algorithm called the **Monte Carlo Tree Search**.

Due to limited information about the domain of the game and its probabilistic nature, applying generic ML algorithms like Minimax and alpha-beta pruning either 
turn out to be very complex or just not enough. 

#### **Monte Carlo Tree Search Overview**

The basic idea of the Monte Carlo Tree Search algorithm is that it further improves on basic recursive tree searching algorithms(BFS, DFS, etc.), by giving all 
paths a fair chance. It balances **Exploration** and **Exploitation.** 

Exploration is when the other possible paths other than the current (perceived) optimal one in a search are periodically checked so 
as to not miss a better one to the required win condition. This expands on the breadth of the tree.

Exploitation is using the current optimal path and traversing deeper down from it. This expands on the length of the tree.

A trade off of these two is what MCTS balances to give the best and most fair answer at the end. An MCTS iteration generally contains 4 steps:-

1.  **Selection** - This is the first step in the iteration and is performed by traversing down the root by selecting nodes at every level using a max value returned after checking all nodes. The max value here is chosen by a formula , which takes into account factors like how many wins resulted when that node was visited , total number of visits to that node etc.. The formula is :-

$$
v_i = x_i + C*\\sqrt{\\frac{\\ln({n_p})}{n_i}}
$$

Here $v_i$ is the value from each node $i$ and the node chosen is the one that gives the maximum value of $v_i$ .

$x_i$ here represents the average value of the node. This could have the form of $(number \\  of \\ wins / number \\ of \\ visits)$  , for example. This 
value is updated whenever , this node is revisited during a back propagation to the root (eg. number of visits increased by 1).

$C$ is just a constant , and it controls the rate of exploration part. ($x_i$ represents the exploitation part as you would further want to 
explore a node which has had many wins in few visits , so more the $x_i$ , more the exploitation)

$n_p$ is the number of times the parent of the node $i$ has been visited.

$n_i$ is the number of visits of the node $i$.

Now here the part inside the square root indicates exploration. As number of visits to the node(denominator) increases , you 
would want to explore this node less and less , and correspondingly this value will also decrease. However , the exploration 
possibilities increase logarithmic-ally ( $ln(n_p)$ ) with the visits to the parents (the more times you visit 
the parent , the more curious you will get about exploring this node , makes sense right?)

So, using this formula , nodes are selected one by one as we traverse down the tree, until we reach a leaf node , from where we jump to the expansion step.
    `,
    solve2:
        `
Here the fractions inside the nodes represent the (number of wins / number of visits ). 
The colour of the nodes represent whose turn it is (red player or blue player)

2. **Expansion -** This step comprises of just adding a new node at the leaf node , reached by the selection step. This is the first step 
towards expanding the tree. (and exploring more paths to a win)
    `,
    solve3:
        `
A new node is added after the leaf node from the selection step

3. **Simulation -** In this step , random (or with some heuristics , which we will discuss later) moves are performed and the game is actually simulated 
between the two players. This is equivalent to adding one long path starting from the node added in the expansion step. This can be repeated several 
times, and huge number of moves can be simulated until a win or lose (or any end condition) is encountered , i.e another leaf node. From this leaf 
node, now, back propagation starts.
    `,
    solve4:
        `
Random moves are then played from this new node until an end condition

4. **Back Propagation -** After determining the value of the last node of the simulation(win ,lose , draw , points etc.) , we recurs back till the root. 
During this , we increment number of visits of each node by 1. We can also update other things , like number of wins of each node , if the node resulted 
in a win for example. By this method , the average value of each node is updated.
    `,
    solve5:
        `
We recurse back to the root and at each node, the number of wins and number of visits is incremented by one.

#### **MCTS in Scotland Yard**

Now that we know quite a bit about Monte Carlo Tree Search , let's see what do we need to setup before using it for Scotland Yard

**A. Limiting Possible Locations**

Now it's obvious that at every turn we can somehow narrow down the possibilities of where Mr. X could have gone by seeing the tickets he took, 
his previous possible locations etc..

So let's formalize that!

Let's take the following sub graph of Scotland Yard as an example..
    `,
    solve6:
        `
Let's say Mr. X revealed his position at 86. So our initial set of possible locations is just a singleton , which is \`{86}\`. Now let's say Mr. X 
plays a ticket but chooses a hidden card so we don't know whether he took the taxi or bus. So therefore, looking at the graph, the next set of 
possible locations becomes- \`N {69 , 87 , 102 , 116 , 104 , 103}\`. 

Now let's say the 5 Detectives move such that their positions now are - \`D{53 , 55 , 103 , 127 , 87}\`.

Now assuming that the game didn't end there , we can remove \`103\` and \`87\` from the set N of locations of Mr. X as two detectives are on those 
locations. So the final set before the next move becomes \`{69 , 102 , 116 , 104}\`. And after this seeing Mr. Xs set and the ticket he took we can construct the 
next set. A formal way to write this algorithm could be : -
    `,
    solve7:
        `
Here $N$ represents the next set of possible Mr. X locations to be calculated. 

$M$ represents the previous set before this (This is initialized to the 29 possible locations of Mr. X when the game is started)

$targets(p,t)$  is a function that gets us all the possible locations one can move to from a current location using a particular ticket.

$D$ represents the current set of detective locations

So , using this before every iteration , we can narrow down the set for MCTS. But does this look right? Why would Mr. X try to go to 87 which 
is so close to a detective location (the detective literally lands on it). So we need a better way to bias some of the locations in the set 
than the others. We look at that ahead.

**B. Location Categorization**

Let's try to categorize the locations in the set using $\\text{Minimum Distance}$ , which is the distance of the **nearest detective** to this location. 
By distance here we mean number of moves ofcourse.

Let's set up a model where we have 5 categories : -

$\\text{Minimum Distance} = 1$

$\\text{Minimum Distance} = 2$

$\\text{Minimum Distance} = 3$

$\\text{Minimum Distance} = 4$

$\\text{Minimum Distance} \\geq 5$

Now how do we give weights and bias to each of these and store them in a data structure which our beloved MCTS can use easily.

Let's say we ran a lot of simulations of a game , and we noticed the following :-
    `,
    solve8:
        `
Here $a$ represents *number of times Mr. X himself was found to be in a location of the mentioned category*.

$n$ represents *when a location in the set of possible locations of Mr. X was in the mentioned category* (includes the actual position)

What we can do is now create a vector of length 5 (each field is a category) and give the value to each field as $\\frac a n$. Why does this 
make sense? **Well obviously if percentage of Mr. Xs actual position out of all possible being in that category is more , that means that category is 
best suited for the next consideration**. So now comes the question how to apply this bias. 

Each field in this vector is given a weighted probability based on its value ( $\\frac a n$ ) , and then the vector is chosen from randomly. This 
way obviously now the categories with the better value will get chosen with higher probability. 

**Notice** that we gave them *weighted probability and didn't simply select the one with the maximum valued*. We wanna make them smarter but not 
completely ignore the other possibilities. There is always a chance that Mr. X could have played a sneaky on us and deliberately gone to a risky location (He's Mr. X after all)

**C. Heuristics During Simulation**

During the *Simulation step of MCTS*, we cant simply simulate random moves , because that destroys the whole purpose. What we can do is give 
Mr. X and the Detectives both some Heuristic way of playing so that both sides play kind of optimally and the simulation is a smart but fair one.

Here's two possibilities : -

1) **Detective – In a move he will try to minimize, the sum of distances to all possible locations of Mr. X.**

What this **means is we will make the detective player biased towards going to such locations so that the squared sum of distances to all the 
locations in Mr. X's set is minimized**

2) **Mr. X - In a move , he will try to maximize distance from the nearest detective. If multiple such moves, he will choose the one that maximizes the 
size of the possible moves set (to make it harder for detectives)**

This is pretty intuitive as well. *All this says is Mr. X will look at his nearest detective after the move and see if the distance 
to him is maximized*. If multiple such moves exist , he will move such that the next set of his possible locations that the detectives try 
to construct is very large (For eg. go to a junction with lot of taxi , bus and train routes or use a hidden/double ticket)

These are just what we thought were best. Maybe you could suggest some other smarter ones! (For eg. Using average distance to all detectives rather than minimum to nearest)

**D. Coalition Reduction**

This is a small detail that tends to be overlooked. **Since the detectives play together as one player, the one detective that goes first, 
makes it easy for the others after his move**. So, this could result in the *other detectives becoming "lazy" , and relying on just the first one or two*. 

To avoid this , what we can model is this : -

If the first detective succeeds , a score 1 is returned. If the second succeeds , score $1 - r$ is returned , if 3rd $1- 2r$ and so on. 
Here $r$ is just a number between 0 and 1. If r is too small , the above problem prevails. Also if r is too large , the detectives 
might get selfish and only try to maximize their score!
    `
}

export default Content; 