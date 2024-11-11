const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['image_1.jpg', 'image_2.jpg', 'image_3.jpg', 'image_4.jpg', 'image_5.jpg'];

/* Declaring the alternative text for each image file */
const desc = {
    'image_1.jpg': "wizard cat one",    
    'image_2.jpg': "BIG wizard cat two",
    'image_3.jpg': "magic cat three",
    'image_4.jpg': "this cat can do magic four",
    'image_5.jpg': "the most magic cat five"
};

/* Looping through images */
for (const image of images) {
  const replace = document.createElement('img');
  replace.setAttribute('src', `/js/jsimg/${image}`);
  replace.setAttribute('alt', desc[image]);
  thumbBar.appendChild(replace);  // Append replace, not newImage
  replace.addEventListener('click', e => { 
    displayedImage.src = e.target.src; 
    displayedImage.alt = e.target.alt; 
  });

}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,.7)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
