import { Container, Content, Flex } from "./WorkStyles";
import SectionTitle from "../Ui/SectionTitle";
import WorkBlock from "./components/WorkBlock";
import Project1Image from "../../assets/images/projetos/agTur.png";
import Project2Image from "../../assets/images/projetos/allService.png";
import Project3Image from "../../assets/images/projetos/casaPet.png";
import Project4Image from "../../assets/images/projetos/cleanSkin.png";
import Project5Image from "../../assets/images/projetos/consultEmp.png";
import Project6Image from "../../assets/images/projetos/nutricaoEsportiva.png";
import Project7Image from "../../assets/images/projetos/trainingSport.png";
import Project8Image from "../../assets/images/projetos/robotron.png";
import Project9Image from "../../assets/images/projetos/mixer.png";
import Project10Image from "../../assets/images/projetos/filmeApi.png";
import Project11Image from "../../assets/images/projetos/gerenciadorEstacionamento.png";
import Project12Image from "../../assets/images/projetos/portfolio.png";

function Work() {
  const works = [
    {
      title: "Agência Tur",
      backgroundImage: Project1Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "Projeto que emprega os princípios essenciais e as melhores práticas de HTML, CSS e Javascript. O projeto se destaca pelo aproveitamento inteligente de classes no HTML, além de ser completamente responsivo, graças à utilização do FlexBox, que proporciona uma adaptação perfeita em diversas telas.",
      gitUrl: "https://alysson.dev.br/projetos/AgenciaTur",
    },
    {
      title: "All Service",
      backgroundImage: Project2Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "Projeto que emprega os princípios essenciais e as melhores práticas de HTML, CSS e Javascript. O projeto se destaca pelo aproveitamento inteligente de classes no HTML, além de ser completamente responsivo, graças à utilização do FlexBox, que proporciona uma adaptação perfeita em diversas telas.",
      gitUrl: "https://alysson.dev.br/projetos/AllService",
    },
    {
      title: "Casa Pet",
      backgroundImage: Project3Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "Projeto que emprega os princípios essenciais e as melhores práticas de HTML, CSS e Javascript. O projeto se destaca pelo aproveitamento inteligente de classes no HTML, além de ser completamente responsivo, graças à utilização do FlexBox, que proporciona uma adaptação perfeita em diversas telas.",
      gitUrl: "https://alysson.dev.br/projetos/CasaPet",
    },
    {
      title: "Clean Skin",
      backgroundImage: Project4Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "Projeto que emprega os princípios essenciais e as melhores práticas de HTML, CSS e Javascript. O projeto se destaca pelo aproveitamento inteligente de classes no HTML, além de ser completamente responsivo, graças à utilização do FlexBox, que proporciona uma adaptação perfeita em diversas telas.",
      gitUrl: "https://alysson.dev.br/projetos/CleanSkin",
    },
    {
      title: "Consult Emp",
      backgroundImage: Project5Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "Projeto que emprega os princípios essenciais e as melhores práticas de HTML, CSS e Javascript. O projeto se destaca pelo aproveitamento inteligente de classes no HTML, além de ser completamente responsivo, graças à utilização do FlexBox, que proporciona uma adaptação perfeita em diversas telas.",
      gitUrl: "https://alysson.dev.br/projetos/ConsultEmp",
    },
    {
      title: "Nutricao Esportiva",
      backgroundImage: Project6Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "Projeto que emprega os princípios essenciais e as melhores práticas de HTML, CSS e Javascript. O projeto se destaca pelo aproveitamento inteligente de classes no HTML, além de ser completamente responsivo, graças à utilização do FlexBox, que proporciona uma adaptação perfeita em diversas telas.",
      gitUrl: "https://alysson.dev.br/projetos/NutricaoEsportiva",
    },
    {
      title: "Training Sport",
      backgroundImage: Project7Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "Projeto que emprega os princípios essenciais e as melhores práticas de HTML, CSS e Javascript. O projeto se destaca pelo aproveitamento inteligente de classes no HTML, além de ser completamente responsivo, graças à utilização do FlexBox, que proporciona uma adaptação perfeita em diversas telas.",
      gitUrl: "https://alysson.dev.br/projetos/TrainingSport",
    },
    {
      title: "Robotron 2000",
      backgroundImage: Project8Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "",
      gitUrl: "https://alysson.dev.br/projetos/Robotron",
    },
    {
      title: "Mini Mixer",
      backgroundImage: Project9Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        }
      ],
      description: "",
      gitUrl: "https://alysson.dev.br/projetos/miniMixer",
    },
    {
      title: "Filme Api",
      backgroundImage: Project10Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/csharp/csharp-original.svg",
          name: "C#",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/dotnetcore/dotnetcore-original.svg",
          name: ".NET",
        }
      ],
      description: "",
      gitUrl: "https://github.com/alyssonmends/FilmeApi",
    },
    {
      title: "Gerenciador de Estacionamento",
      backgroundImage: Project11Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/csharp/csharp-original.svg",
          name: "C#",
        }
      ],
      description: "",
      gitUrl: "https://github.com/alyssonmends/GerenciadorEstacionamento",
    },
    {
      title: "Portfolio",
      backgroundImage: Project12Image,
      techs: [
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg",
          name: "HTML5",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg",
          name: "CSS3",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg",
          name: "JS",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/react/react-original.svg",
          name: "React",
        },
        {
          image:
            "https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/typescript/typescript-original.svg",
          name: "TypeScript",
        }
      ],
      description: "",
      gitUrl: "https://alysson.dev.br",
    },
  ];

  return (
    <>
      <Container id="work">
        <Content>
          <SectionTitle position={"center"} title={"Projetos"} />
          <Flex>
            {works.map((work, index) => {
              return (
                <WorkBlock
                      key={index}
                      title={work.title}
                      urlImg={work.backgroundImage}
                      techs={work.techs}
                      description={work.description || ""} gitUrl={work.gitUrl || ""} />
              );
            })}
          </Flex>
        </Content>
      </Container>
    </>
  );
}

export default Work;
