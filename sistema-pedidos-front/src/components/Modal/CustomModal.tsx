import {
  MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { IoMdClose } from "react-icons/io";
import styled, { ThemeContext } from "styled-components";

interface ModalProps {
  show: boolean;
  onClose: Function;
  children: any;
  title?: ReactNode;
}
export function CustomModal({ show, onClose, children, title }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);
  const { colors } = useContext(ThemeContext);
  const modalWrapperRef: any = useRef();

  useEffect(() => {
    setIsBrowser(true);
  }, [modalWrapperRef, onClose]);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModalWrapper>
        <StyledModal>
          {title ? (
            <StyledModalHeaderWithTitle>
              {title}
              <StyledButtonClose
                onClick={(e) => {
                  handleCloseClick(e);
                }}
              >
                <IoMdClose color={colors.black} size={20} />
              </StyledButtonClose>
            </StyledModalHeaderWithTitle>
          ) : (
            <StyledModalHeader>
              <StyledButtonClose
                onClick={(e) => {
                  handleCloseClick(e);
                }}
              >
                <IoMdClose color={colors.black} size={20} />
              </StyledButtonClose>
            </StyledModalHeader>
          )}
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root") as Element
    );
  } else {
    return null;
  }
}

const StyledModalBody = styled.div`
  /* height: calc(100% - 36px); */
`;

const StyledModalHeaderWithTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButtonClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  overflow: hidden;
  cursor: pointer;
`;

const StyledModalWrapper = styled.div.attrs(
  (props: { ref: MutableRefObject<undefined> }) => props
)``;

const StyledModal = styled.div`
  background: white;
  height: 100%;
  width: 34rem;
  border-radius: 1.5rem;
  padding: 2rem;
`;

const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
