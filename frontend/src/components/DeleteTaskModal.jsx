import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import useProjects from '../hooks/useProjects';
import { InfoIcon } from './Task/InfoIcon';

const DeleteTaskModal = () => {
  const { deleteTaskModal, handleModalDeleteTask, deleteTask } = useProjects();

  return (
    <Modal
      backdrop="blur"
      isOpen={deleteTaskModal}
      onClose={handleModalDeleteTask}
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="font-normal flex gap-4 bg-[#DC3545]">
              <InfoIcon className="text-white" />
              <p className="text-white">Eliminar Tarea</p>
            </ModalHeader>
            <Divider />
            <ModalBody>
              <p className="mt-4">
                Ten en cuenta que una tarea eliminada no se podrá recuperar.
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" className="rounded-3xl" onPress={onClose}>
                Cancelar
              </Button>
              <Button
                color="primary"
                className="rounded-3xl"
                onClick={deleteTask}
              >
                Eliminar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteTaskModal;
