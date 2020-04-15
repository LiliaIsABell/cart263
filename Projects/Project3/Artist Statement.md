Lilia Isabel Aguirre Lugo
Pippin Barr
CART 263
April 19 2020

Artist Statement

For this final project, I decided to make an interactive program in
which the user interacts with a very lonely computer named Loneputer.
I created the character this character because I hope that by giving 
the program a name and personality, the user will feel emotions towards 
Loneputer. I made Loneputer’s dialog sound like that of a child because 
children have very strong emotions and also tend to see the world in a 
very black and white way which makes them very annoying but you can’t
hate them to much because they are just children. This project is inspired 
by the current pandemic. Since we all have to be quarantined it is natural
that some people will feel very lonely and desperate for any type of interaction
and I wanted to represent that through Loneputer.

There are four main aspects to my project:

- The first one is that the user can play pong with Loneputer. This game of 
pong was made using p5 for a previous assignment in cart253. The user moves 
the right paddle by using the arrow keys, the left one randomly moves up and
down using Perlin noise. This makes it seem as if Loneputer was controlling
that paddle. The points are counted using colors and the progress of the background
color shows who is in the lead.
- The second one is that the user communicates with Loneputer through dialog boxes
which are made using jQuery UI. Each one gives two choices of answers and the 
background cannot be interacted with unless a decision is made. These dialogue boxes
mainly trigger the event of whether or not the game of pong will start, but the 
decisions made are saved in the browser which is why it is important to not skip them. 
- That then brings to the next aspect. The decisions are remembered by the program 
using local storage. This allows Loneputer to have a memory and also a little more 
of a personality. For example, if the user refuses to play pong with Loneputer, 
then it will get upset and ignore the user forever. The page will be blank and then
the program will never be interactable again. If the user accepts, then Loneputer will 
get excited and each time the game is replayed, the instructions will not be repeated 
and, when the page is refreshed, Loneputer will remember the user and give a different greeting.
- Finally, because Loneputer is a lonely computer, when the user leaves the window, 
Loneputer will plead to stay and play more pong. This is done using jQuery’s mouseleave () 
making it that when the cursor leaves an established area, in this case the window,
then that will trigger an event. Loneputer will continuously plea the user to stay
each time the cursor leaves and it is up to the user is they want to keep playing 
pong or leave Loneputer. 
