import ReactDOM from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: 5% auto;
  width: 80%;
  z-index: 2;
  padding: 1rem;
  min-height: 200px;
  border-radius: 1rem;
  min-width: 200px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
}

const Modal = ({ children, onClose, open }: ModalProps) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <ModalWrapper onClick={onClose}>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>,
    document.body
  );
};

export default Modal;
