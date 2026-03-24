import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { T } from "../constants";
import type { Project } from "../types";
import { iconMap } from "../iconMap";
import { ImageLightbox } from "./ImageLightbox";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  if (!project) return null;

  const IconComponent = iconMap[project.emoji];
  const hasImages = project.images && project.images.length > 0;

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length,
      );
    }
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

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
          background: "rgba(0,0,0,0.85)",
          backdropFilter: "blur(8px)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(16px,3vw,40px)",
          cursor: "pointer",
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: T.bg,
            border: `1px solid ${T.border}`,
            borderRadius: 16,
            maxWidth: 720,
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto",
            cursor: "default",
            position: "relative",
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
              background: T.s1,
              border: `1px solid ${T.border}`,
              borderRadius: "50%",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              color: T.accent,
            }}
          >
            <X size={18} />
          </motion.button>

          {/* Hero Image/Carousel */}
          <div
            style={{
              height: 280,
              background: hasImages
                ? "transparent"
                : `linear-gradient(135deg,${T.s2} 0%,${T.border} 100%)`,
              borderRadius: "16px 16px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {hasImages ? (
              <>
                {/* Image Display */}
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={project.images![currentImageIndex]}
                  alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                  onClick={() => openLightbox(currentImageIndex)}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    cursor: "zoom-in",
                  }}
                />

                {/* Navigation Arrows */}
                {project.images!.length > 1 && (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevImage}
                      style={{
                        position: "absolute",
                        left: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${T.border}`,
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: T.text,
                        zIndex: 10,
                      }}
                    >
                      <ChevronLeft size={20} />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextImage}
                      style={{
                        position: "absolute",
                        right: 16,
                        top: "50%",
                        transform: "translateY(-50%)",
                        background: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${T.border}`,
                        borderRadius: "50%",
                        width: 40,
                        height: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        color: T.text,
                        zIndex: 10,
                      }}
                    >
                      <ChevronRight size={20} />
                    </motion.button>

                    {/* Image Indicators */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 16,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: 8,
                        zIndex: 10,
                      }}
                    >
                      {project.images!.map((_, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.2 }}
                          onClick={() => setCurrentImageIndex(idx)}
                          style={{
                            width: idx === currentImageIndex ? 24 : 8,
                            height: 8,
                            borderRadius: 4,
                            background:
                              idx === currentImageIndex
                                ? T.accent
                                : "rgba(255,255,255,0.3)",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `repeating-linear-gradient(45deg,rgba(180,255,111,.03) 0,rgba(180,255,111,.03) 1px,transparent 0,transparent 50%)`,
                    backgroundSize: "18px 18px",
                  }}
                />
                <IconComponent
                  size={80}
                  color="rgba(180,255,111,0.15)"
                  strokeWidth={1.5}
                />
              </>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: "32px" }}>
            {/* Tags */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  background: T.accentDim,
                  color: T.accent,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "6px 12px",
                  borderRadius: 100,
                }}
              >
                {project.tag}
              </span>
              <span style={{ color: T.muted, fontSize: 13 }}>
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: T.fd,
                fontWeight: 800,
                fontSize: "clamp(28px,4vw,36px)",
                marginBottom: 16,
                lineHeight: 1.2,
              }}
            >
              {project.name}
            </h2>

            {/* Description */}
            <p
              style={{
                color: T.muted,
                fontSize: 15,
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              {project.desc}
            </p>

            {/* Tech Stack */}
            <div style={{ marginBottom: 28 }}>
              <h3
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: T.accent,
                  marginBottom: 12,
                }}
              >
                Tech Stack
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.stack.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      borderColor: "rgba(180,255,111,.4)",
                      color: T.accent,
                    }}
                    style={{
                      border: `1px solid ${T.border}`,
                      background: T.s1,
                      color: T.muted,
                      fontSize: 12,
                      padding: "6px 12px",
                      borderRadius: 6,
                      transition: "all .2s ease",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: T.accent,
                    color: T.bg,
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "12px 24px",
                    borderRadius: 8,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <ExternalLink size={16} />
                  Visit Live Site
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, borderColor: T.accent }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: "transparent",
                    color: T.text,
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "12px 24px",
                    borderRadius: 8,
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    border: `1px solid ${T.border}`,
                    cursor: "pointer",
                    transition: "all .2s ease",
                  }}
                >
                  <Code size={16} />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Image Lightbox */}
        {showLightbox && hasImages && (
          <ImageLightbox
            images={project.images!}
            currentIndex={currentImageIndex}
            onClose={() => setShowLightbox(false)}
            onNext={nextImage}
            onPrev={prevImage}
            projectName={project.name}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
