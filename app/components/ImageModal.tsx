import Image from "next/image";
import React, { useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

type ImageModalProps = {
  image: { src: string; alt: string };
  isOpen: boolean;
  handleClose: () => void;
};

const ImageModal: React.FC<ImageModalProps> = ({
  image,
  isOpen,
  handleClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: "50%" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: "50%" }}
        transition={{ type: "spring", duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-3xl relative mx-6">
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 text-lg md:text-2xl text-primary-content btn-circle btn btn-primary">
          <CgClose className="text-2xl cursor-pointer" />
        </button>
        <div className="p-6">
          <Image
            src={image.src}
            alt={image.alt}
            layout="responsive"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
          <p className="mt-4 text-center text-lg text-primary-content">
            {image.alt}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageModal;
