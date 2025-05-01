[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/m3rrFl41)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18842570&assignment_repo_type=AssignmentRepo)

### MDDN 242 Project 2: Parametric Designs - Letterforms
### Jazzelle Richdale
# Bubbles!

### Design Intentions
In this project I wanted to create a typeface inspired by organic shapes, that has a very clear visual theme. This typeface would be created using P5JS, a visual coding language. I wanted to explore what kinds of visuals I could using only P5JS, and chose to create all my visuals through code, unlike my last project “Taking Sweet Time” where most of my visuals were created outside of code and imported in. I also wanted to design the webpage around my letterform canvas to brush up on my HTML/CSS skills.

### Inspiration
I started the project by looking on Pinterest for organic type inspiration, and found a letterform study (below) by graphic designer Nigel Cottier. I really liked the shape of the links between letter ‘modules’ and decided to base my typeface upon the idea of organically linked circles. This idea then reminded me of bubbles, and I decided to make a bubble inspired type. I wanted to capture the whimsical, dreamlike quality of bubbles in my project visuals.  

![Letterform Study](https://github.com/25-MDDN242/letterforms-jazzellelara/blob/main/letterformStudy.jpg "study")

### Design Process

#### *Sketch*
I used sketch.js to familiarise myself with the coding system. This resulted in very simple letterforms unrelated to the bubble font, and an understanding of the base code syntax. 


#### *Initial Ideas*
I first started by exploring what kind of connectors I wanted between circles, and settled on having one with a set width but differing length. I then limited myself to 5 circles per letter, with one circle changing in size. I sketched my first iteration of the bubble type (below). 

![Initial Sketch](https://github.com/25-MDDN242/letterforms-jazzellelara/blob/main/initialSketch.jpeg "sketch")

#### *Initial Code*
I then created my variables. I had one variable for the size of Circle 1, which changed between 30px and 70px. The other 4 circles were 30px. The next 10 variables were the X and Y coordinates for each of the 5 circles. I then used some mathematical formulas within the drawConnector() function to automatically draw in a connector between each circle. One of these formulas was to find an angle, and was made by Snow, 2013. I then placed a drawConnector() function per connector in an if statement each, and linked the condition of the if statements to 6 more variables. This allowed me to toggle the connectors on and off for letters like “j” which have a gap in them. 

#### *Illustrator*
In Adobe Illustrator I created gridded artboards for each character, in the same dimensions as the character bounding boxes. I used illustrator to easily create uniform letterforms, and then copied the coordinates of each letterform element over to my code. 

#### *Texturing*
After copying all code coordinates over, and debugging I worked on making the circles and connectors look like bubbles. To do this, I followed a tutorial from Kazuki Umeda, 2021, to create linear, radial and conic gradients, and altered the code to fit my design purposes. I used semi transparent layers of these gradients (found within the drawBubble() function) to texture my circles. I did the same for the connectors within the drawConnector() function. I chose to use pastel colors with white for the bubbles and connectors, and chose a sky blue for the background to lean into the dreamlike theming I was aiming for. Another reason sky blue was chosen for the background colour was because all other colors either didn’t contrast the bubbles enough, or didn’t match my theming. 

#### *Interpolation*
I added a variable that controls the transparency of all my connectors, which allowed me to fade them out and in during interpolation. I also chose to make all my circles 30px while interpolating, to give more interesting movement to the letterforms. A classmate was kind enough to help me in creating code that animated my letters to float up and down. Staggered, this gives a very bubbly effect. It was in the interpolation stage that I realised how far I’d progressed in P5JS knowledge, and I was very excited to see the final product of this project. 

#### *HTML and Finalisation*
I changed up my webpage, adding a background the same colour as my canvas background, and changed the navigation font and alignment. I found the project still looked like it was missing something. I overlaid white to transparent gradients on the borders of the webpage, again to enhance the dreamlike/whimsical qualities.  I then changed the project metadata, and added custom words that related to the qualities of a bubble. 

#### *Conclusion*
I am very happy with the final product of this project, and I’m really surprised with how detailed/complicated designs made entirely inside P5JS can be. This project allowed me to explore my love for organic shapes and pastel colours while improving my skills in P5JS, HTML and CSS. If I were to come back to this project in future, I would love to add bubble effects that occur when the mouse is clicked. 

---
#### *Sources*
Snow, J. (2013, May 2). Java: Calculating the angle between two points in degrees. [Online forum post]. Stack Overflow. https://stackoverflow.com/questions/9970281/java-calculating-the-angle-between-two-points-in-degrees 

Kazuki Umeda. (2021, December 23). Easiest Gradient Effect - p5.js tutorial [Video]. YouTube. https://www.youtube.com/watch?v=-MUOweQ6wac 

Cottier, N. (n.d.). Untitled Letterform. https://the-brandidentity.com/interview/nigel-cottier-details-how-he-created-19-840-letterforms-with-one-simple-grid-based-framework 