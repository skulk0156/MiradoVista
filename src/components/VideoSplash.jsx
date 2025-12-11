import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/miradovista-logo.png';

const VideoSplash = ({ videoSrc, onVideoEnd }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showLogo, setShowLogo] = useState(false);
    const [logoZoom, setLogoZoom] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const logoTimer = setTimeout(() => setShowLogo(true), 2000);
        const zoomTimer = setTimeout(() => {
            setLogoZoom(true);
            // Start transition after zoom animation completes
            setTimeout(() => {
                setIsTransitioning(true);
                setTimeout(() => onVideoEnd(), 1000);
            }, 1500);
        }, 8000);

        return () => {
            clearTimeout(logoTimer);
            clearTimeout(zoomTimer);
        };
    }, [onVideoEnd]);

    const handleVideoEnded = () => {
        // If video ends before 8 seconds, still proceed with normal flow
        if (!logoZoom) {
            setIsPlaying(false);
            setIsTransitioning(true);
            setTimeout(() => onVideoEnd(), 1000);
        }
    };

    return (
        <AnimatePresence>
            {(isPlaying || isTransitioning) && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                >
                    {/* Video Background */}
                    <motion.video
                        ref={videoRef}
                        initial={{ scale: 1 }}
                        animate={{ scale: logoZoom ? 1.5 : 1.2 }}
                        transition={{ 
                            duration: logoZoom ? 1.5 : 10, 
                            ease: logoZoom ? "easeInOut" : "linear" 
                        }}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnded}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </motion.video>

                    {/* Darker Overlay for Logo Zoom Effect */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60"
                        animate={{ opacity: logoZoom ? 0.9 : 1 }}
                        transition={{ duration: 1.5 }}
                    />
                    
                    {/* Logo with Smooth Fade-in Animation */}
                    <AnimatePresence>
                        {showLogo && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ 
                                    opacity: 1, 
                                    scale: 1,
                                }}
                                exit={{ 
                                    opacity: 0, 
                                    scale: logoZoom ? 8 : 0.9,
                                }}
                                transition={{ 
                                    duration: 1.5, 
                                    ease: "easeOut"
                                }}
                                className="relative z-20"
                            >
                                <div className="relative">
                                    {/* Subtle Glow Effect */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 blur-2xl scale-150"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.3 }}
                                        transition={{ 
                                            duration: 1.5,
                                            delay: 0.3
                                        }}
                                    />
                                    <img 
                                        src={logo} 
                                        alt="MiradoVista Logo" 
                                        className="relative h-56 md:h-64"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Flash Transition Effect */}
                    <AnimatePresence>
                        {isTransitioning && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                                className="absolute inset-0 z-30 bg-gradient-to-br from-yellow-100 to-amber-200"
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default VideoSplash;