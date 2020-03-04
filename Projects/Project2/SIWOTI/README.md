Lilia Isabel Aguirre Lugo 

Pippin Barr 

CART 263

March 2nd 2020


Artist Statement 

For this project, we had to create something inspired by James Bridle’s essay “Something is wrong on the internet”. 
Overall, Bridle talks about how the content intended for children on Youtube are often very odd, creepy and sometimes 
completely inappropriate and that something should be done about this. This essay reminded me of a story of when a
mother found out that a racing game app, that was supposedly meant for children, would start making violent threats 
to the kid after a certain level. On that topic, I decided to create an interactive story inspired by that, but I also
wanted to include the issue that sometimes, young people who have low self-esteem get manipulated into doing things 
that they don’t necessarily want to do, such as getting into a toxic relationship, joining a  gang or do pornography.
And so, my interactive story will start off innocent but then become very unsettling.

The story is about a lonely dog who is bored and is looking for fun activities to do. The reader chooses the dog’s
adventure by clicking on buttons, created using jQuery UI, that reveal the different options. The way that these
buttons lead to different path is with “if” statements.  Each “if” statement applies the intended outcome to the 
right button. Also, each setting has its own function which replaces the text and the buttons presented. The text
in the HTML is inside a span which allows it to be replaced each time a button is pressed. The buttons change labels 
by having arrays for the titles and then applying them to different variables which are then added to an addButton function.

All the options lead to the same ending. The reader is presented with a black screen and a mysterious voice is talking
to them. The interaction happens in three phases. First, I used ResponsiveVoice to make the program talk. I chose UK 
English Male because I find that accent uncomfortable and I modified the voice to have a lower pitch and a slower rate
because I find that a deep voice that talks slowly is very creepy. Then, the voice talks to reader and makes them feel 
bad by insulting them, but then says that they are the key to the readers self-value. Second, I used jQuery’s mouse move 
event to make it that, when the mouse is moved, the voice starts making uncomfortable comments as a reaction to the cursor
being moved on the screen in a presumably sensual way. The comments are chosen randomly, using Math. floor(Math.random()), 
from an array called uncomfortableComments. To avoid having the first monologue interrupted when the mouse is moved,
I used ResonsiveVoice Callbacks to have an onstart and onend that will allow the mouse move event to function only when 
the first monologue has ended.  Lastly, the mouse over function is disabled after one minute has passed and then a new
monologue starts to play. The mysterious voice is satisfied and tells the reader that they are the only one that can make
them feel special. Then the voice threatens the reader to discourage them to talk about the interaction to anyone.  
