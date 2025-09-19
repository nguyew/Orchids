import { useState } from 'react';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOrchid, setSelectedOrchid] = useState(null);

    const openModal = (orchid) => {
        setSelectedOrchid(orchid);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedOrchid(null);
    };

    return { isOpen, selectedOrchid, openModal, closeModal };
};

export default useModal;