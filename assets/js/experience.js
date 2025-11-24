AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Me as a Public speaker",
    cardImage: "image6.jpg",
    place: "DISTRICT SPEECH COMPETITON",
    time: "(NOVEMBER, 2018 - present)",
    desp: "<li>Won First time in sppech competition.</li><li> in my 6th standard</li><li>First time participation made a huge success, brings me a another level of confidence. that leads me for another 6 years</li>",
  },
  {
    title: "AI internship",
    cardImage: "image5.jpg",
    place: "K S R College of Engineering",
    time: "(may, 2025-present)",
    desp: "<li>A three days intern on generative AI.</li><li>A HANDS ON TRAINING ON LARGE LANGUAGE MODELS.</li><li>worktime experience in AI technology </li>",
  },
  {
    title: "Research Intern",
    cardImage: "intern.webp",
    place: "MIT,Chennai",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li> human cognition, such as learning, reasoning, problem-solving, and decision-making..</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  },
];
const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards
const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Workshop on AIML",
    cardImage: "assets/images/experience-page/workshop.jpg",
    description:
      "machine learning and artificial intelligence combined three days workshop.",
  },
  {
    title: "StudentCode-in 2025",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "startup event 2025",
    cardImage: "assets/images/experience-page/summit.jpg",
    description:
      "codissia two days biggest international event for startup TN 2025",
  },
 
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section
const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};

