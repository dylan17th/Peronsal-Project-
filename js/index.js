function cardCreator(image, date, name, link, link2){
    //creating elements for the component and giving classes to elements 
    const card = document.createElement('div');
    card.classList.add('container');
    const imgHolder = document.createElement('div');
    imgHolder.classList.add('img-holder');
    const dateHolder = document.createElement('div');
    dateHolder.classList.add('date')
    const title = document.createElement('h2');
    title.classList.add('card-title')

    const divButton = document.createElement('div');
    divButton.classList.add('div-button')
    const buttonCode = document.createElement('div');
    buttonCode.classList.add('button');
    const anchorCode = document.createElement('a');
    const buttonWebsite = document.createElement('div');
    buttonWebsite.classList.add('button');
    const anchorWebsite = document.createElement('a');


    //appending children into the card
    card.appendChild(imgHolder);
    imgHolder.appendChild(dateHolder);
    card.appendChild(title);
    card.appendChild(divButton);
    divButton.appendChild(buttonCode);
    divButton.appendChild(buttonWebsite);
    buttonCode.appendChild(anchorCode);
    buttonWebsite.appendChild(anchorWebsite);



    //apply text content to the elements 
    imgHolder.style.backgroundImage= `url(${image})`;
    dateHolder.textContent = date; 
    title.textContent = name; 
    anchorCode.href = link;
    anchorWebsite.href = link2;
    anchorCode.textContent = 'View Code';
    anchorWebsite.textContent = 'View Website';

    buttonCode.addEventListener('mousemove', ()=>{
        buttonCode.style.transform = 'scale(1.1)'
        buttonCode.style.transition= '.3s';
        buttonCode.style.backgroundColor = 'black';
        anchorCode.style.color = 'white';
    })
    buttonCode.addEventListener('mouseleave', ()=>{
        buttonCode.style.transform = 'scale(1.0)';
        buttonCode.style.transition= '.3s';
        buttonCode.style.backgroundColor = 'white';
        anchorCode.style.color = 'black';
    })
    buttonWebsite.addEventListener('mousemove', ()=>{
        buttonWebsite.style.transform = 'scale(1.1)'
        buttonWebsite.style.transition= '.3s';
        buttonWebsite.style.backgroundColor = 'black';
        anchorWebsite.style.color = 'white';
    })
    buttonWebsite.addEventListener('mouseleave', ()=>{
        buttonWebsite.style.transform = 'scale(1.0)';
        buttonWebsite.style.transition= '.3s';
        buttonWebsite.style.backgroundColor = 'white';
        anchorWebsite.style.color = 'black';
    })

    return card
}


let projectContainer = document.getElementById('project-holder');

projectContainer.appendChild(cardCreator('../images/planet-planners.png', '7th Feb', 'Planet Planners', 'https://github.com/Build-Week-Water-My-Plants-2/Marketing-page/tree/dylan-collins', 'https://planetplanners.netlify.com/'))
projectContainer.appendChild(cardCreator('../images/planet-planners.png', '7th Feb', 'Planet Planners', 'https://github.com/Build-Week-Water-My-Plants-2/Marketing-page/tree/dylan-collins', 'https://planetplanners.netlify.com/'))
projectContainer.appendChild(cardCreator('../images/planet-planners.png', '7th Feb', 'Planet Planners', 'https://github.com/Build-Week-Water-My-Plants-2/Marketing-page/tree/dylan-collins', 'https://planetplanners.netlify.com/'))
projectContainer.appendChild(cardCreator('../images/planet-planners.png', '7th Feb', 'Planet Planners', 'https://github.com/Build-Week-Water-My-Plants-2/Marketing-page/tree/dylan-collins', 'https://planetplanners.netlify.com/'))

const submitButton = document.querySelector('buttonSub');
console.log(submitButton)