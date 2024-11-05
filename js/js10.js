// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let  emptystory = 'It was 94 fahrenheit outside (far too hot), so :insertx: decided to go outside. When they exited their prison aka, :inserty:, they stared blankly, and foolishly and then they :insertz:, how tragic. Bob saw the whole thing, but was not surprised — :insertx: had 300 pounds of copper, the worst ore, and nobody liked them anyway, especially not me.'

let insertx = ['The SCAMMING Goblin Tinkerer',
    'The Guide',
    'The Tavernkeep']

let inserty = ['the soup store',
    'the dungeon from terraria',
    'the worst place to live, Florida']

let insertz = ['hit the ground too hard',
    'was torn to shreds by moonlord',
    'dropped all their platinum and died'
]


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let wholestory = emptystory;

    let choose_x = randomValueFromArray(insertx);
    let choose_y = randomValueFromArray(inserty);
    let choose_z = randomValueFromArray(insertz);

    wholestory = wholestory.replace(':insertx:',choose_x);
    wholestory = wholestory.replace(':inserty:',choose_y);
    wholestory = wholestory.replace(':insertz:',choose_z);
    wholestory = wholestory.replace(':insertx:',choose_x);


  if(customName.value !== '') {
    const name = customName.value;
    wholestory = wholestory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
        let temp = Math.round(((94-32)/9)*5) + ' celsius';
        let weig = Math.round(300*0.453592) + ' kilograms';

        wholestory = wholestory.replace('94 fahrenheit',temp);
        wholestory = wholestory.replace('300 pounds',weig);

  }



  story.textContent = wholestory;
  story.style.visibility = 'visible';
}