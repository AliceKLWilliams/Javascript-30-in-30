# Javascript-30-in-30
Javascript 30 in 30 Repo

Contains:

1. Javascript Drum Kit

 - **data-<key>** will allow us to add a custom attribute to HTML elements. 

 - The event object passed to an event listener contains the 'keyCode' attribute, which we can use to determine which keyboard button has been pressed.

 - Audio HTML element can be selected and played in HTML using **<audio-element>.play()**. The audio will not play if it has already started, so we can reset the audio back to the start using **<audio-element>.currentTime = 0;**

 - We can listen for a CSS transition end using the "transitionend" event. The event object for this listener will contains the property 'propertyName'. This tells us the property that finished transitioning.

2. CSS + JS Clock

 - We can use CSS to rotate elements using:
    **transform:rotate(<num>deg);**
By default this will use the centre of the element as the axis. To change this use the 'transform-origin' property. The value for this can be a percentage, with 100% being the rhs of the element, and 0% being the lhs.

 - **SetInterval(<function>, <ms>);** can be used to run <function> every <ms>.

3. Playing with CSS Variables and JS

 - We can declare variables in CSS using: **--<varName>:val**. To make these globally available we declare them in the **:root** element. 

 - To use CSS variables we use **var(--<varName>)**.

 - We can select multiple HTML elements using the **.querySelectorAll(<query>)** method. This returns a NodeList, which has less methods than an array.

 - The 'change' event handler can be used for detecting input change on sliders. The 'mousemouse' event handler can be used to detect the change AS it happens, not after. 

 - **element.dataset** contains an object with all the data attributes and their values.

 - **document.documentElement** returns the root element of the page.

 - **<element>.style.setProperty(<varName>, <value>);** can be used to set a CSS variable in JS.

 - CSS variables are scope based, so the closer variable with the same name as another is used instead of the further ones.

4. Array Cardio Day 1

 - **<array>.filter((<item>) => {<code>})** can be used to filter down an array. <items> which return true in function body will be in the returned array. We do not need to return false.
 
 - **console.table(<array of objects>)** will display the objects in a table format.

 - **<array>.map((item) => {<code>});** is used to return the same number of items as in the original array, but typically altered in some manner (e.g. only the .age value of each object).

 - **<array>.sort((a, b) => {<code>})** is used to sort the array. Within the function body we will compare a and b. Return < 0 to have a come before b. Else return > 0 to have b before a. 

 - **<array>.reduce((total, item) => {<code>}, <initialVal>)** is used to reduce the array into a single value. <total> is the running total, <item> is the current item, and <initialVal> is the initial value of the counter. <total> can be an object.

 - We can create an Array from a NodeList using **Array.from(<nodeList>)**.

 - **<string>.split(<value>)** will split the string using <value> into an array.

5. Flex Panels Image Gallery

 - **flex:1** on a flex children will have them equally use the remaining space in the parent. It is used as a proportion, between the children.

6. Ajax Type Ahead
7. Array Cardio Day 2
8. Fun with HTML5 Canvas
9. Dev Tool Domination
10. Hold Shift to Check Multiple Checkboxes
11. Custom HTML5 Video Player
12. Key Sequence Detection
13. Slide in on Scroll
14. Javascript - Reference VS Copy
15. LocalStorage and Event Delegation
16. CSS Text Shadow Mouse Move Effect
17. Sorting Band Names without Articles
18. Tally String Times with Reduce
19. Unreal Webcam Fun
20. Native Speech Recognition
21. Geolocation based Speedometer and Compass
22. Follow Along Links
23. Speech Synthesis
24. Sticky Nav
25. Event Capture, Propagation, Bubbling and Once
26. Stripe Follow Along Dropdown
27. Click and Drag to Scroll
28. Video Speed Controller UI
29. Countdown Clock
30. Whack a Mole