import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions } from "@tsparticles/engine";

const ParticlesComponent: React.FC = () => {
    const [init, setInit] = useState(false);
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

    // One-time initialization of the engine
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Theme observer
    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDark(document.documentElement.classList.contains('dark'));
                }
            });
        });
        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    const options: ISourceOptions = {
        background: {
            color: {
                value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                resize: {
                    enable: true,

                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.5
                    }
                },
            },
        },
        particles: {
            color: {
                value: isDark ? "#38bdf8" : "#94a3b8", // Sky blue in dark, Slate in light
            },
            links: {
                color: isDark ? "#38bdf8" : "#94a3b8",
                distance: 150,
                enable: true,
                opacity: 0.3, // Subtle
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1, // Slow movement
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    // area: 800,
                },
                value: 100, // Reasonable count
            },
            opacity: {
                value: 0.3,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 3 },
            },
        },
        detectRetina: true,
        fullScreen: {
            enable: true,
            zIndex: -1 // Behind everything
        }
    };

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                className="absolute inset-0 -z-10"
            />
        );
    }

    return <></>;
};

export default ParticlesComponent;
