/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Adversarial Machine Learning",
    authors:
      " Xiaolin Li and Dapeng Wu",
    conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/first.jpg",
    citation: {
      vancouver:
        " Xiaolin Li and Dapeng Wu. it is useful for my new technologies explore journey",
    },
    abstract:
      "This is about how attackers can trick machine learning models (especially deep neural networks) by giving them “adversarial” inputs — data that’s subtly modified so the model makes mistakes.",
    absbox: "absPopup1",
  },

  {
    title: "Human-Computer Interaction (HCI) with AI",
    authors:
      "Gorka Labaka and Eneko Agirre",
    conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2024,
    citebox: "popup2",
    image: "assets/images/research-page/second.jpg",
    citation: {
      vancouver:
        " Gorka Labaka and Eneko Agirre. Study how users interact with AI systems — for example, how to design interfaces that make AI predictions interpretable, or how to build “human-in-the-loop” systems.",
    },
    abstract:
      "It bridges user experience (UX) + AI. For your portfolio, you can show you not only code but also think about usability, ethics, and human-centered design.",
    absbox: "absPopup2",
  },

  {
    title:
      "Quantum Computing Algorithms",
    authors: " Aijun An and Manos Papagelis",
    conferences:
      "The 58th Annual Meeting of the Association for Computational Linguistics",
    researchYr: 2024,
    citebox: "popup3",
    image: "assets/images/research-page/third.jpg",
    citation: {
      vancouver:
        "Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2024.",
    },
    abstract:
      "Quantum computing is super forward-looking; having something about it in your portfolio shows you’re interested in cutting-edge CS.",
    absbox: "absPopup3",
  },

  
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

