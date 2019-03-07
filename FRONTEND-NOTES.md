Name: Babajide Fowotade
Email: jide.b.tade@gmail.com
Time to complete: 2hrs: 23mins

Notes:
 
- Installation 
 
  Getting started with the project, i ran into issues getting npm install to work, as packages were broken maybe due to my node version.
  What i did was upgrade the packages
  And to avoid this kind of issue, i decided it's best to use Docker, therefore in this project, there's a docker file

  How to run
   - install docker if you don't have it
   - run docker-compose up
   - visit localhost:3000 in your browser

-
 I'm using React context to manage global state, for me there's no need to add any extra library like redux, because this is a small feature/app.

- Because this is a small feature, this doesn't really require using stateful components, and i already upgraded React to the latest version. So i built this in a functional way and used fancy Apis like useState to update state.

-
 Decided to go with using Drag and drop (using React DnD) feature as that has a better user experience to clicking to move into the menu.

- Things i took into consideration
  - What happens when a user adds to the menu?
    - Remove item from items list, and add it to the menu list
    - Show the total number of selected items in the header
    - Show the total number of each dietary type selected in the header
  - What happens when a user removes from the menu?
    - Add item back into items list, and remove from menu list
    - Update total number of selected items in the header
    - Update total number of each dietary type left in the menu displayed in the header

- A little bit of thought when working on the dietary total number
 - Each Dietary is an array
 - And i wanted to update the count in the header after an item was removed from the menu
 - Solution was to create a 2d array [[],[],[]]
  - To update the count, all i did was push to the array, flatten it then get the count of the unique diets
  - To remove i had to find the index of the array in the 2d array, by doing an array comparison.

- One thing for sure was to do this without using any extra libraries, like lodash, etc.

- What i could have done if i had more time?
 - Write tests to be very confident of what i've written.
 - Use react drag and drop by yahoo, because of touch events for mobile.

