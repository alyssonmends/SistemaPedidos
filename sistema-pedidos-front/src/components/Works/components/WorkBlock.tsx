import styled from "styled-components";
import { Flex } from "../WorkStyles";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useState } from "react";

type TechsProps = {
  name: string;
  image: string;
};

type HeaderProps = {
  title: string;
  urlImg: string;
  techs: TechsProps[];
  description: string;
  gitUrl: string;
};

function WorkBlock({ title, urlImg, techs, description, gitUrl }: HeaderProps) {
  console.log("gitUrl", gitUrl);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const openInNewTab = (url: string) => {
    window.open(url);
  };

  return (
    <>
      <Block onClick={toggle}>
        <Image src={urlImg} alt={title} width={350} height={200} />
        <Hover>
          <Text>{title}</Text>
          <Flex>
            {techs.map((tech, index) => {
              return (
                <Image
                  key={index}
                  src={tech.image}
                  alt={tech.name}
                  width={20}
                  height={20}
                />
              );
            })}
          </Flex>
        </Hover>
      </Block>
      <Modal isOpen={modal} toggle={toggle} style={{maxWidth: '800px', width: '100%'}}>
        <StyledModalContent>
          <ModalHeader toggle={toggle}>{title}</ModalHeader>
          <ModalBody>
            <Image src={urlImg} alt={title} width={450} height={250} />
            <TextBlock>
              {description}
              <ul>
              {
                  techs.map((tech) => {
                  return <li>{tech.name}</li>
                  })
              }
              </ul>
              <Button color="primary" onClick={() => openInNewTab(gitUrl)}>
              Link do projeto
              </Button>
            </TextBlock>
          </ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </StyledModalContent>
      </Modal>
    </>
  );
}

export default WorkBlock;

const TextBlock = styled.div` 
  margin-left: 30px;
`;

const StyledModalContent = styled.div`
   background-color: ${({ theme }) => theme.colors.secondary};
   color: ${({ theme }) => theme.colors.white};
   padding: 10px;
   width: 100%;
   .modal-header {
    border: none;

    .modal-title {
      font-size: 18px;
      font-weight: bold;
      color: #6c57b3;
    }
    button {
      background-color: #6c57b3;
    }
  }
  .modal-body {
    border: none;
    display: flex;
    flex-direction: row;
    justify-content: start;
    color: ${({ theme }) => theme.colors.text2};

    ul {
      margin-top: 10px;
    }
    button {
      background-image: linear-gradient(90deg, rgb(108, 87, 179) 0%, rgb(79 50 177) 90%);
      border: none;
      font-size: 12px;
      padding: 6px 12px;
    }
  }

  .modal-footer {
    border: none;


  }
 `;

const Hover = styled.div`
  position: absolute;
  bottom: -300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  padding-bottom: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  -webkit-transition: all, 0.7s;
  -o-transition: all, 0.7s;
  transition: all, 0.7s;
`;

const Block = styled.div`
  position: relative;
  margin-top: 40px;
  cursor: pointer;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 3px;
    background-image: linear-gradient(90deg, #24add9 0%, #bb5fcc 50%);
  }
  &:hover {
    ${Hover} {
      bottom: 0px;
    }
  }
`;

const Image = styled.img``;

const Text = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
`;
