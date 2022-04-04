import styled from '@emotion/styled';
import Button from '@/components/common/Button';

export interface ModalProps {
  visible: boolean;
  cancelText?: string;
  confirmText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = ({
  visible,
  cancelText = '취소',
  confirmText = '확인',
  onCancel,
  onConfirm,
}: ModalProps) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <ModalBlock>
        <h3>포스트 삭제</h3>
        <p>정말 삭제하시겠습니까?</p>
        <ButtonArea>
          <Button size="small" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button size="small" onClick={onConfirm}>
            {confirmText}
          </Button>
        </ButtonArea>
      </ModalBlock>
    </Fullscreen>
  );
};

const Fullscreen = styled('div')`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(249, 249, 249, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled('div')`
  width: 25rem;
  background: white;
  padding: 2rem 1.5rem;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 9%) 0px 2px 12px 0px;
  h3 {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: 700;
  }
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const ButtonArea = styled('div')`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.75rem;
  }
`;
export default Modal;
