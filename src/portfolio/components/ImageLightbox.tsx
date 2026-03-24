import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { T } from "../constants";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  projectName: string;
}

export function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  projectName,
}: ImageLightboxProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(12px)",
          zIndex: 2000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          cursor: "zoom-out",
        }}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "rgba(0,0,0,0.6)",
            border: `1px solid ${T.border}`,
            borderRadius: "50%",
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            color: T.text,
          }}
        >
          <X size={24} />
        </motion.button>

        {/* Image Counter */}
        <div
          style={{
            position: "absolute",
            top: 30,
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${T.border}`,
            borderRadius: 100,
            padding: "8px 16px",
            color: T.text,
            fontSize: 14,
            fontWeight: 600,
            zIndex: 10,
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              style={{
                position: "absolute",
                left: 20,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${T.border}`,
                borderRadius: "50%",
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: T.text,
                zIndex: 10,
              }}
            >
              <ChevronLeft size={28} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              style={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${T.border}`,
                borderRadius: "50%",
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: T.text,
                zIndex: 10,
              }}
            >
              <ChevronRight size={28} />
            </motion.button>
          </>
        )}

        {/* Image */}
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          src={images[currentIndex]}
          alt={`${projectName} screenshot ${currentIndex + 1}`}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: "90%",
            maxHeight: "90%",
            objectFit: "contain",
            borderRadius: 8,
            cursor: "default",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
          }}
        />

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: 30,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 12,
              maxWidth: "90%",
              overflowX: "auto",
              padding: "12px",
              background: "rgba(0,0,0,0.6)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${T.border}`,
              borderRadius: 12,
            }}
          >
            {images.map((img, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  onNext(); // This will cycle through, but you can make it jump to specific index
                }}
                style={{
                  width: 80,
                  height: 60,
                  borderRadius: 6,
                  overflow: "hidden",
                  border:
                    idx === currentIndex
                      ? `2px solid ${T.accent}`
                      : `2px solid ${T.border}`,
                  cursor: "pointer",
                  flexShrink: 0,
                  opacity: idx === currentIndex ? 1 : 0.6,
                  transition: "all 0.2s ease",
                }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
