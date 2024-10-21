// STATE
// Global object that keeps track of the condition of our site
const state = {
  animalList: [
    {
      id: 1,
      imageUrl: `./images/bunnyWithCorn.jpeg`,
      animalType: `bunny`,
      name: `Floofer`,
      age: 2,
      bio: `A cute bunny that loves corn`
    }, 
    {
      id: 2,
      imageUrl: `./images/llama.jpg`,
      animalType: `llama`,
      name: `Carl`,
      age: 10,
      bio: `A stylish llama that isn't allowed near humans`
    },
    {
      id: 3,
      imageUrl: `./images/platypus.jpg`,
      animalType: `platypus`,
      name: `Perry`,
      age: 7,
      bio: `Sometimes goes missing for long periods of time and we don't know where he goes`
    },
    {
      id: 4,
      imageUrl: `./images/raccoon.jpg`,
      animalType: `raccoon`,
      name: `Rocket`,
      age: 14,
      bio: `Very unstable`
    },
    {
      id: 5,
      imageUrl: `./images/llama.jpg`,
      animalType: `llama`,
      name: `Carl`,
      age: 10,
      bio: `A stylish llama that isn't allowed near humans`
    }
  ]
}

// DOM Selectors
const main = document.querySelector('main');

// RENDER
// Show on the page
const renderAllAnimals = () => {
  const allAnimals = state.animalList;
  // go through the list of animals one by one
  const animalHTMLList = allAnimals.map((animal) => {
    // create a section with an image and a button for each animal
    return `
      <section>
        <img 
          src="${animal.imageUrl}" 
          width="250"
          height="250"  
        />

        <button id="${animal.id}">Details</button>
      </section>
    `;
  })
  
  // display the section inside the main
  main.innerHTML = animalHTMLList.join('');

  // grab all the detail buttons
  const detailButtons = document.querySelectorAll('button');
  
  // go through each detail button
  detailButtons.forEach((detailButton) => {
    // add event listener to the detail buttons
    detailButton.addEventListener(`click`, (event) => {
      // find the animal based on the id on the details button that was clicked
      const animalIdToFind = event.target.id;
      
      const foundAnimal = state.animalList.find((animal) => {
        return Number(animalIdToFind) === animal.id;
      });
      
      // show the animal details for the animal that was clicked
      renderAnimalDetails(foundAnimal);
    })
  });
}

const renderAnimalDetails = (animal) => {  
  // change the innerHTML to show the details

  main.innerHTML = `
    <h2>Name: ${animal.name}</h2>
    <h2>Age: ${animal.age}</h2>
    
    <p>${animal.bio}</p>

    <button>Back to All Animals</button>
  `;

  // const button = document.createElement(`button`);
  // button.innerText = `Back to All Animals`;
  // main.append(button);
  
  // when you click the back button
  const button = document.querySelector(`button`);
  // renderAllAnimals
  button.addEventListener(`click`, renderAllAnimals)
}

renderAllAnimals();