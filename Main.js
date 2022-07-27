const mainbody = document.querySelector('mainbody');
const menuList = document.querySelector('.menulist');
const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.menu-closebtn .times');
const menuItems = Array.from(document.querySelectorAll('.menuitem'));

hamburger.addEventListener('click', () => {
  menuList.classList.add('active');
  closeIcon.classList.add('icon');
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuItems.forEach((Item) => { Item.classList.remove('active'); });
    menuList.classList.remove('active');
    menuItem.classList.add('active');

    if (menuItem.textContent === 'pro' && !mainbody.classList.contains('homepage')) {
      localStorage.setItem(menuItem.textContent, 'active');
    }
  });
});

window.addEventListener('resize', () => {
  if (mainbody.clientWidth >= 768 && menuList.classList.contains('active')) {
    window.location.reload();
  }
});

window.onload = () => {
  if (localStorage.getItem('pro') !== null) {
    menuItems[3].classList.add(localStorage.getItem('pro'));
    localStorage.removeItem('pro');
  }
};

const speakerdata = [
  {
    name: 'TONY HAWK',
    image: './Images/TonyHawk.png',
    title: 'Tony Hawk',
    desc: 'In December of 2011, Tony Hawk was identified by Transworld Skateboarding magazine as the second most influential skateboarder of all time, only after Mark “The Gonz” Gonzales.',
  },
  {
    name: 'NYJAH HUSTON',
    image: './Images/NyjahHuston.png',
    title: 'Nyjah Huston',
    desc: 'Currently the top-ranked skateboarder globally, Nyjah Huston is gearing for the biggest skate of his life, skating for Team USA in the 2021 Tokyo Summer Olympics. That’s right, 2021 marks a new era of skateboarding, as it will make its Olympic debut as an official sport.',
  },
  {
    name: 'ROB DYRDEK',
    image: './Images/RobDyrdek1.png',
    title: 'Rob Dyrdek',
    desc: 'By 12 years old, Rob Dyrdek acquired sponsorship and began his skateboarding career. A few years later, Dyrdek quit his board sponsor, alongside Neil Blender, and joined the newly created Alien Workshop. Alien Workshop had been the new brainchild of Neil Blender, Chris Carter, and Mike Hill.',
  },
  {
    name: 'SAMARRIA BREVARD',
    image: './Images/SamarriaBrevard.png',
    title: 'Samarria Brevard',
    desc: 'Some skateboarders were born to be on a skateboard. Samarria Brevard is that skateboarder. Quickly making a name for herself with her 2017 X-Games silver medal, the Riverside native has drawn comparisons as the “Serena Williams of skating".',
  },
  {
    name: 'TOM SCHAAR',
    image: './Images/TomSchaar.png',
    title: 'Tom Schaar',
    desc: 'At age 17, Tom Schaar has already made eight X Games appearances, won five medals and is on pace to be one of the most accomplished and winningest X Games skaters ever. The Cardiff, California natives list of accomplishments before he has even graduated high school are so unbelievable that its comical. From being the youngest skater to land a 900 in December 2011 to landing skateboardings first 1080 air, Schaar is on track to break more records and win more medals than most skaters could ever dream of.',
  },
  {
    name: 'ALEXIS SABLONE',
    image: './Images/AlexisSablone.png',
    title: 'Alexis Sablone',
    desc: 'Alexis Sablone broke onto the skate scene with her memorable section in "P.J. Ladds Wonderful, Horrible Life," but that was just the beginning for her skate career. It turns out, Sablone could skate competitions pretty well, even though by her own admittance, she has "always kinda hated them." From 2009 to 2012, Sablone earned X Games medals in her first four appearances. Then in 2015, she returned to X Games Austin to earn the gold medal in Womens Skateboard Street. But theres much more to Sablone than skating. She recently finished her masters degree at MIT with a focus on architecture after graduating from Columbia University in 2008. So throughout all of these X Games medals, she also has been juggling school full time.',
  },
];

const speakers = document.querySelector('.featuredspeakers');

const speakersList = document.createElement('ul');
speakersList.className = 'speakerslist';
speakers.appendChild(speakersList);

speakerdata.forEach((speaker) => {
  const li = document.createElement('li');
  li.className = 'speaker';
  speakersList.appendChild(li);

  const speakerImage = document.createElement('div');
  speakerImage.className = 'speakerimg';
  speakerImage.innerHTML = `<img src=${speaker.image} alt="Featured speaker">`;
  li.appendChild(speakerImage);

  const speakerInfo = document.createElement('div');
  speakerInfo.className = 'speakerinfo';
  li.appendChild(speakerInfo);

  const speakerName = document.createElement('h3');
  speakerName.className = 'speakername';
  speakerName.innerHTML = speaker.name;
  speakerInfo.appendChild(speakerName);

  const speakerTitle = document.createElement('p');
  speakerTitle.className = 'speakertitle';
  speakerTitle.innerHTML = speaker.title;
  speakerInfo.appendChild(speakerTitle);

  const speakerDesc = document.createElement('p');
  speakerDesc.className = 'speakerdesc';
  speakerDesc.innerHTML = speaker.desc;
  speakerInfo.appendChild(speakerDesc);
});

const morespeakers = document.createElement('button');
morespeakers.className = 'morebtn';
morespeakers.type = 'button';
morespeakers.innerHTML = 'MORE <i class="chevron down icon"></i>';
speakers.appendChild(morespeakers);

const speakerCards = Array.from(document.querySelectorAll('.speaker'));

speakerCards.forEach((card, index) => {
  if (index > 1) {
    card.classList.add('hide');
  }
});

const moreBtn = document.querySelector('.morebtn');

const moreBtnText = (card) => {
  if (card.classList.contains('hide')) {
    moreBtn.innerHTML = 'MORE <i class="chevron down icon"></i>';
  } else {
    moreBtn.innerHTML = 'LESS <i class="chevron up icon"></i>';
  }
};

moreBtn.addEventListener('click', () => {
  speakerCards.forEach((card, index) => {
    if (index > 1) {
      card.classList.toggle('hide');
      moreBtnText(card);
    }
  });
});