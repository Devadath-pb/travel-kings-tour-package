(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/OptimizedImage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptimizedImage",
    ()=>OptimizedImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function OptimizedImage({ src, alt, sizes = "100vw", fill = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        src: src,
        alt: alt,
        sizes: sizes,
        fill: fill,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/OptimizedImage.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = OptimizedImage;
var _c;
__turbopack_context__.k.register(_c, "OptimizedImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InquiryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/InquiryContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OptimizedImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OptimizedImage.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function HeroSection({ onExploreTours }) {
    _s();
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InquiryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInquiry"])();
    const [videoEnabled, setVideoEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ruleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const captionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const microRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Scroll-driven exit animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "HeroSection.useEffect.ctx": ()=>{
                    const scrollTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top top",
                            end: "+=100%",
                            pin: true,
                            scrub: true,
                            onLeaveBack: {
                                "HeroSection.useEffect.ctx.scrollTl": ()=>{
                                    // Reset all elements when scrolling back to top
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set([
                                        headlineRef.current,
                                        captionRef.current,
                                        microRef.current
                                    ], {
                                        opacity: 1,
                                        y: 0
                                    });
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(videoRef.current, {
                                        scale: 1,
                                        opacity: 1
                                    });
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(flashRef.current, {
                                        opacity: 0
                                    });
                                }
                            }["HeroSection.useEffect.ctx.scrollTl"]
                        }
                    });
                    // EXIT: begin immediately so CTA-driven scrolling never feels frozen.
                    // Headline exit
                    scrollTl.fromTo(headlineRef.current, {
                        y: 0,
                        opacity: 1
                    }, {
                        y: "-22vh",
                        opacity: 0,
                        ease: "power2.in"
                    }, 0);
                    // Rule exit
                    scrollTl.fromTo(ruleRef.current, {
                        scaleX: 1,
                        opacity: 1
                    }, {
                        scaleX: 0,
                        opacity: 0,
                        ease: "power2.in"
                    }, 0.02);
                    // Caption exit
                    scrollTl.fromTo(captionRef.current, {
                        y: 0,
                        opacity: 1
                    }, {
                        y: -30,
                        opacity: 0,
                        ease: "power2.in"
                    }, 0.04);
                    // Micro exit
                    scrollTl.fromTo(microRef.current, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: "power2.in"
                    }, 0.06);
                    // Video scale and fade
                    scrollTl.fromTo(videoRef.current, {
                        scale: 1,
                        opacity: 1
                    }, {
                        scale: 1.02,
                        opacity: 0.5,
                        ease: "power2.out"
                    }, 0);
                    // Flash overlay (scene change effect)
                    scrollTl.fromTo(flashRef.current, {
                        opacity: 0
                    }, {
                        opacity: 0.18,
                        ease: "power2.out"
                    }, 0.16);
                    scrollTl.to(flashRef.current, {
                        opacity: 0,
                        ease: "power2.in"
                    }, 0.28);
                }
            }["HeroSection.useEffect.ctx"], sectionRef);
            return ({
                "HeroSection.useEffect": ()=>ctx.revert()
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const enableVideo = {
                "HeroSection.useEffect.enableVideo": ()=>setVideoEnabled(true)
            }["HeroSection.useEffect.enableVideo"];
            window.addEventListener("pointermove", enableVideo, {
                once: true,
                passive: true
            });
            window.addEventListener("pointerdown", enableVideo, {
                once: true,
                passive: true
            });
            window.addEventListener("touchstart", enableVideo, {
                once: true,
                passive: true
            });
            window.addEventListener("scroll", enableVideo, {
                once: true,
                passive: true
            });
            window.addEventListener("keydown", enableVideo, {
                once: true
            });
            return ({
                "HeroSection.useEffect": ()=>{
                    window.removeEventListener("pointermove", enableVideo);
                    window.removeEventListener("pointerdown", enableVideo);
                    window.removeEventListener("touchstart", enableVideo);
                    window.removeEventListener("scroll", enableVideo);
                    window.removeEventListener("keydown", enableVideo);
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (!videoEnabled || !videoRef.current) return;
            videoRef.current.load();
            void videoRef.current.play().catch({
                "HeroSection.useEffect": ()=>undefined
            }["HeroSection.useEffect"]);
        }
    }["HeroSection.useEffect"], [
        videoEnabled
    ]);
    // Add seamless looping logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const video = videoRef.current;
            if (!video) return;
            const handleLoop = {
                "HeroSection.useEffect.handleLoop": ()=>{
                    if (video.currentTime >= video.duration - 0.2) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(video, {
                            opacity: 0,
                            duration: 0.3,
                            onComplete: {
                                "HeroSection.useEffect.handleLoop": ()=>{
                                    video.currentTime = 0;
                                    video.play();
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(video, {
                                        opacity: 1,
                                        duration: 0.3
                                    });
                                }
                            }["HeroSection.useEffect.handleLoop"]
                        });
                    }
                }
            }["HeroSection.useEffect.handleLoop"];
            video.addEventListener("timeupdate", handleLoop);
            return ({
                "HeroSection.useEffect": ()=>video.removeEventListener("timeupdate", handleLoop)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    const headlineWords = [
        "Escape",
        "To",
        "Your",
        "Dream",
        "Place"
    ];
    const runExploreTours = ()=>{
        onExploreTours();
    };
    const handleExploreToursPointerDown = (event)=>{
        if (!event.isPrimary) return;
        event.preventDefault();
        runExploreTours();
    };
    const handleExploreToursClick = (event)=>{
        if (event.detail === 0) {
            runExploreTours();
        }
    };
    const handlePlanTrip = ()=>{
        openModal("Custom South India Journey");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative w-screen h-screen overflow-hidden z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OptimizedImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                src: "/images/munnar/card-1day.jpg",
                alt: "",
                loading: "eager",
                fetchPriority: "high",
                className: "absolute inset-0 w-full h-full object-cover"
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                autoPlay: true,
                muted: true,
                playsInline: true,
                loop: true,
                preload: "none",
                className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoEnabled ? "opacity-80" : "opacity-0"}`,
                poster: "/images/munnar/card-1day.webp",
                children: videoEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/videos/hero/hero-optimized.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/src/sections/HeroSection.tsx",
                    lineNumber: 195,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overlay-gradient-top pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overlay-gradient-bottom pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(11,15,14,0.4) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: flashRef,
                className: "absolute inset-0 bg-white pointer-events-none opacity-0"
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex flex-col items-center justify-center z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: headlineRef,
                    className: "text-center px-6",
                    style: {
                        marginTop: "-2vh"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-display font-light tracking-[0.02em] text-brand-text",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[clamp(32px,6vw,80px)] leading-[1.05]",
                                children: headlineWords.map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-word inline-block mr-[0.25em]",
                                        children: word
                                    }, i, false, {
                                        fileName: "[project]/src/sections/HeroSection.tsx",
                                        lineNumber: 226,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/sections/HeroSection.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/sections/HeroSection.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: ruleRef,
                            className: "w-[12vw] min-w-[80px] max-w-[160px] h-[2px] mx-auto mt-5 bg-brand-gold/70",
                            style: {
                                transformOrigin: "center"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/sections/HeroSection.tsx",
                            lineNumber: 237,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onPointerDown: handleExploreToursPointerDown,
                                    onClick: handleExploreToursClick,
                                    className: "hero-cta hero-cta-primary",
                                    "aria-label": "Explore tour categories",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Explore Tours"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/HeroSection.tsx",
                                        lineNumber: 251,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/HeroSection.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handlePlanTrip,
                                    className: "hero-cta hero-cta-secondary",
                                    "aria-label": "Open trip planning inquiry",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Plan My Trip"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/HeroSection.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/HeroSection.tsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/HeroSection.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/HeroSection.tsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: captionRef,
                className: "absolute left-6 md:left-[6vw] bottom-[8vh] md:bottom-[6vh] z-10 max-w-[280px] md:max-w-[340px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-sm md:text-base text-brand-text/80 leading-relaxed",
                    children: "Premium South India group tours. Curated stays, local flavors, zero stress."
                }, void 0, false, {
                    fileName: "[project]/src/sections/HeroSection.tsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: microRef,
                className: "absolute right-6 md:right-[6vw] bottom-[8vh] md:bottom-[6vh] z-10 text-right hidden md:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-[11px] uppercase tracking-[0.15em] text-brand-muted",
                    children: "Scroll to Explore"
                }, void 0, false, {
                    fileName: "[project]/src/sections/HeroSection.tsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/HeroSection.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/HeroSection.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "C/6C01mW1deF2VES681v+ju4OVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InquiryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInquiry"]
    ];
});
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/CategoryCardSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryCardSection",
    ()=>CategoryCardSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OptimizedImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/OptimizedImage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function CategoryCardSection({ category, index, firstCardRef }) {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const zIndex = 20 + index * 10; // 20, 30, 40, 50, 60, 70
    const isVertical = category.layout === "vertical";
    const setCardRefs = (node)=>{
        cardRef.current = node;
        if (firstCardRef) {
            firstCardRef.current = node;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryCardSection.useEffect": ()=>{
            const section = sectionRef.current;
            const card = cardRef.current;
            const bg = bgRef.current;
            const panel = panelRef.current;
            if (!section || !card || !bg || !panel) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "CategoryCardSection.useEffect.ctx": ()=>{
                    const scrollTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        scrollTrigger: {
                            id: index === 0 ? "first-trip-card-trigger" : undefined,
                            trigger: section,
                            start: "top top",
                            end: "+=100%",
                            pin: true,
                            scrub: true,
                            onEnter: {
                                "CategoryCardSection.useEffect.ctx.scrollTl": ()=>{
                                    document.documentElement.style.overscrollBehavior = 'none';
                                }
                            }["CategoryCardSection.useEffect.ctx.scrollTl"],
                            onLeave: {
                                "CategoryCardSection.useEffect.ctx.scrollTl": ()=>{
                                    document.documentElement.style.overscrollBehavior = 'auto';
                                }
                            }["CategoryCardSection.useEffect.ctx.scrollTl"]
                        }
                    });
                    // Panel content elements
                    const eyebrow = panel.querySelector(".panel-eyebrow");
                    const title = panel.querySelector(".panel-title");
                    const body = panel.querySelector(".panel-body");
                    const cta = panel.querySelector(".panel-cta");
                    // ENTRANCE (0% - 30%)
                    if (isVertical) {
                        // Vertical layout: enter from bottom with rotateX
                        scrollTl.fromTo(card, {
                            y: "70vh",
                            rotateX: -18,
                            z: -220,
                            opacity: 0
                        }, {
                            y: 0,
                            rotateX: 0,
                            z: 0,
                            opacity: 1,
                            ease: "none"
                        }, 0);
                    } else {
                        // Horizontal layout: enter from right with rotateY
                        scrollTl.fromTo(card, {
                            x: "55vw",
                            rotateY: 28,
                            z: -220,
                            opacity: 0
                        }, {
                            x: 0,
                            rotateY: 0,
                            z: 0,
                            opacity: 1,
                            ease: "none"
                        }, 0);
                    }
                    // Background parallax entrance
                    scrollTl.fromTo(bg, {
                        scale: 1.08
                    }, {
                        scale: 1,
                        ease: "none"
                    }, 0);
                    // Panel content staggered entrance (5% - 30%)
                    if (eyebrow) {
                        scrollTl.fromTo(eyebrow, {
                            y: 24,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            ease: "none"
                        }, 0.05);
                    }
                    if (title) {
                        scrollTl.fromTo(title, {
                            y: 30,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            ease: "none"
                        }, 0.1);
                    }
                    if (body) {
                        scrollTl.fromTo(body, {
                            y: 18,
                            opacity: 0
                        }, {
                            y: 0,
                            opacity: 1,
                            ease: "none"
                        }, 0.14);
                    }
                    if (cta) {
                        scrollTl.fromTo(cta, {
                            y: 14,
                            opacity: 0,
                            scale: 0.96
                        }, {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            ease: "none"
                        }, 0.18);
                    }
                    // SETTLE (30% - 70%): Hold - nothing changes
                    // EXIT (70% - 100%)
                    if (isVertical) {
                        scrollTl.fromTo(card, {
                            y: 0,
                            rotateX: 0,
                            z: 0,
                            opacity: 1
                        }, {
                            y: "-60vh",
                            rotateX: 18,
                            z: -260,
                            opacity: 0,
                            ease: "power2.in"
                        }, 0.65);
                    } else {
                        scrollTl.fromTo(card, {
                            x: 0,
                            rotateY: 0,
                            z: 0,
                            opacity: 1
                        }, {
                            x: "-60vw",
                            rotateY: -32,
                            z: -260,
                            opacity: 0,
                            ease: "power2.in"
                        }, 0.65);
                    }
                    // Background parallax exit - keep background stable and smooth during section release
                    scrollTl.fromTo(bg, {
                        scale: 1
                    }, {
                        scale: 1.06,
                        ease: "none"
                    }, 0.65);
                    // Panel content exit (CTA first, then rest)
                    if (cta) {
                        scrollTl.fromTo(cta, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: "none"
                        }, 0.68);
                    }
                    if (body) {
                        scrollTl.fromTo(body, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: "none"
                        }, 0.72);
                    }
                    if (title) {
                        scrollTl.fromTo(title, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: "none"
                        }, 0.76);
                    }
                    if (eyebrow) {
                        scrollTl.fromTo(eyebrow, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: "none"
                        }, 0.80);
                    }
                    // Keep card and background transitions smooth without an overlay wipe
                    scrollTl.fromTo(bg, {
                        opacity: 1
                    }, {
                        opacity: 1,
                        ease: "none"
                    }, 0.65);
                }
            }["CategoryCardSection.useEffect.ctx"], section);
            return ({
                "CategoryCardSection.useEffect": ()=>ctx.revert()
            })["CategoryCardSection.useEffect"];
        }
    }["CategoryCardSection.useEffect"], [
        index,
        isVertical
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: index === 0 ? "first-trip-category" : undefined,
        ref: sectionRef,
        className: "relative w-screen h-screen overflow-hidden",
        style: {
            zIndex
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bgRef,
                className: "absolute inset-0 scale-[1.08] gpu-accelerate",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OptimizedImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                        src: category.bgImage,
                        alt: "",
                        className: "w-full h-full object-cover",
                        loading: index === 0 ? "eager" : "lazy",
                        fetchPriority: index === 0 ? "high" : "auto"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-brand-bg/50"
                    }, void 0, false, {
                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/CategoryCardSection.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center perspective-1000",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: index === 0 ? "first-trip-card" : undefined,
                    ref: setCardRefs,
                    className: `relative w-[88vw] md:w-[78vw] max-w-[1100px] shadow-card preserve-3d gpu-accelerate ${isVertical ? "h-[70vh] md:h-[62vh]" : "h-[55vh] md:h-[62vh]"}`,
                    style: {
                        borderRadius: "18px",
                        transform: isVertical ? "translateY(70vh) rotateX(-18deg) translateZ(-220px)" : "translateX(55vw) rotateY(28deg) translateZ(-220px)",
                        opacity: 0
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-full rounded-card overflow-hidden flex ${isVertical ? "flex-col" : "flex-col md:flex-row"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative overflow-hidden ${isVertical ? "h-[55%] w-full" : "h-[45%] md:h-full md:w-[58%]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$OptimizedImage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptimizedImage"], {
                                        src: category.cardImage,
                                        alt: category.title,
                                        className: "w-full h-full object-cover",
                                        loading: "lazy",
                                        fetchPriority: index === 0 ? "high" : "auto"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-transparent to-brand-bg/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/CategoryCardSection.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: panelRef,
                                className: `relative bg-brand-charcoal/70 backdrop-blur-xl flex flex-col justify-center p-5 md:p-8 ${isVertical ? "h-[45%] w-full" : "h-[55%] md:h-full md:w-[42%]"}`,
                                style: {
                                    background: "rgba(11,15,14,0.72)",
                                    backdropFilter: "blur(20px)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "panel-eyebrow font-body text-[11px] md:text-xs uppercase tracking-[0.15em] text-brand-gold mb-2 md:mb-3",
                                        children: category.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "panel-title font-display text-2xl md:text-4xl font-light text-brand-text leading-tight mb-2 md:mb-3",
                                        children: category.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "panel-body font-body text-sm md:text-base text-brand-muted leading-relaxed mb-4 md:mb-6",
                                        children: category.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])("package_click", {
                                                package: category.eyebrow,
                                                slug: category.slug
                                            });
                                            router.push(`/${category.slug}`);
                                        },
                                        className: "panel-cta btn-primary self-start text-xs md:text-sm py-2.5 md:py-3.5 px-5 md:px-8",
                                        children: [
                                            "Explore ",
                                            category.duration,
                                            " Day Trips"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                                        lineNumber: 249,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/CategoryCardSection.tsx",
                                lineNumber: 229,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/CategoryCardSection.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/CategoryCardSection.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/CategoryCardSection.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[10vh] md:bottom-[6vh] left-6 md:left-[6vw] z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-xs md:text-sm text-brand-muted",
                    children: category.destinations.map((d)=>d.name).join(" \u2022 ")
                }, void 0, false, {
                    fileName: "[project]/src/sections/CategoryCardSection.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/CategoryCardSection.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/CategoryCardSection.tsx",
        lineNumber: 175,
        columnNumber: 5
    }, this);
}
_s(CategoryCardSection, "dn159370e/SaECZOFrhCj67UNOE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = CategoryCardSection;
var _c;
__turbopack_context__.k.register(_c, "CategoryCardSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutSection",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/car.js [app-client] (ecmascript) <export default as Car>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/coffee.js [app-client] (ecmascript) <export default as Coffee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function AboutSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ruleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSection.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "AboutSection.useEffect.ctx": ()=>{
                    // Headline reveal
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(headlineRef.current, {
                        opacity: 0,
                        y: 40,
                        rotateX: 8
                    }, {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 90%",
                            toggleActions: "play none none none"
                        }
                    });
                    // Gold rule
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(ruleRef.current, {
                        scaleX: 0
                    }, {
                        scaleX: 1,
                        duration: 0.6,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    // Content items stagger
                    const items = contentRef.current?.querySelectorAll(".about-item");
                    if (items) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(items, {
                            opacity: 0,
                            y: 22
                        }, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            stagger: 0.08,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: contentRef.current,
                                start: "top 75%",
                                toggleActions: "play none none reverse"
                            }
                        });
                    }
                }
            }["AboutSection.useEffect.ctx"], sectionRef);
            return ({
                "AboutSection.useEffect": ()=>ctx.revert()
            })["AboutSection.useEffect"];
        }
    }["AboutSection.useEffect"], []);
    const features = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$car$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Car$3e$__["Car"],
            text: "Private transport & experienced drivers"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coffee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coffee$3e$__["Coffee"],
            text: "Curated stays with breakfast"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            text: "Flexible pacing + local recommendations"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative bg-brand-bg py-20 md:py-32 px-6 md:px-[6vw]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:gap-16 lg:gap-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: headlineRef,
                        className: "md:w-[45%] mb-8 md:mb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-[clamp(36px,5vw,64px)] font-light text-brand-text leading-[1.05]",
                                children: [
                                    "Travel",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/sections/AboutSection.tsx",
                                        lineNumber: 105,
                                        columnNumber: 15
                                    }, this),
                                    "With Us"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/AboutSection.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: ruleRef,
                                className: "w-16 h-[2px] bg-brand-gold/70 mt-5 mb-4",
                                style: {
                                    transformOrigin: "left"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/sections/AboutSection.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-sm md:text-base text-brand-muted",
                                children: "Small groups. Curated stays. Local flavors."
                            }, void 0, false, {
                                fileName: "[project]/src/sections/AboutSection.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/AboutSection.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contentRef,
                        className: "md:w-[55%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-item font-body text-base md:text-lg text-brand-text/90 leading-relaxed mb-8",
                                children: "We design South India trips that feel effortless—scenic drives, handpicked stays, and moments you'll talk about for years."
                            }, void 0, false, {
                                fileName: "[project]/src/sections/AboutSection.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-8",
                                children: features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about-item flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(feature.icon, {
                                                    size: 18,
                                                    strokeWidth: 1.5,
                                                    className: "text-brand-gold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/AboutSection.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/AboutSection.tsx",
                                                lineNumber: 131,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-body text-sm md:text-base text-brand-text/80",
                                                children: feature.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/AboutSection.tsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/sections/AboutSection.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/sections/AboutSection.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.push("/contact"),
                                className: "about-item btn-primary",
                                children: "Plan Your Trip"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/AboutSection.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/AboutSection.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/AboutSection.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/sections/AboutSection.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/AboutSection.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "Z4IGDKj6MQU8BrJ4t2Cb6qgv3m0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InquiryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/InquiryContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
function ContactSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { openModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InquiryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInquiry"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "ContactSection.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(leftRef.current, {
                        x: "-6vw",
                        opacity: 0
                    }, {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(rightRef.current, {
                        x: "6vw",
                        opacity: 0,
                        rotateY: 6
                    }, {
                        x: 0,
                        opacity: 1,
                        rotateY: 0,
                        duration: 0.8,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["ContactSection.useEffect.ctx"], sectionRef);
            return ({
                "ContactSection.useEffect": ()=>ctx.revert()
            })["ContactSection.useEffect"];
        }
    }["ContactSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "relative bg-brand-bg2 py-20 md:py-32 px-6 md:px-[6vw]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row gap-12 md:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: leftRef,
                        className: "md:w-[40%]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-[clamp(32px,4vw,52px)] font-light text-brand-text leading-tight mb-6",
                                children: [
                                    "Let's Plan",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    "Your Trip"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/ContactSection.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-body text-sm md:text-base text-brand-muted leading-relaxed mb-8",
                                children: "Ready to explore South India? Get in touch and we'll craft a journey tailored just for you."
                            }, void 0, false, {
                                fileName: "[project]/src/sections/ContactSection.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 16,
                                                    strokeWidth: 1.5,
                                                    className: "text-brand-gold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/ContactSection.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs uppercase tracking-wider text-brand-muted mb-0.5",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-sm text-brand-text",
                                                        children: "travelkings50@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/sections/ContactSection.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    size: 16,
                                                    strokeWidth: 1.5,
                                                    className: "text-brand-gold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/ContactSection.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs uppercase tracking-wider text-brand-muted mb-0.5",
                                                        children: "Phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-sm text-brand-text",
                                                        children: "+91 94006 78245"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/sections/ContactSection.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    size: 16,
                                                    strokeWidth: 1.5,
                                                    className: "text-brand-gold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/ContactSection.tsx",
                                                lineNumber: 105,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs uppercase tracking-wider text-brand-muted mb-0.5",
                                                        children: "Hours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-sm text-brand-text",
                                                        children: "Mon-Sat, 9am-8pm IST"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/sections/ContactSection.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                    size: 16,
                                                    strokeWidth: 1.5,
                                                    className: "text-brand-gold"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/ContactSection.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-xs uppercase tracking-wider text-brand-muted mb-0.5",
                                                        children: "Based In"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-body text-sm text-brand-text",
                                                        children: "Thrissur, Kerala"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/sections/ContactSection.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/ContactSection.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/ContactSection.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: rightRef,
                        className: "md:w-[60%] perspective-1000",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-brand-charcoal/50 backdrop-blur-xl rounded-2xl p-6 md:p-10 border border-white/5",
                            style: {
                                backdropFilter: "blur(20px)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-display text-xl md:text-2xl font-light text-brand-text mb-3",
                                    children: "Start Your Journey"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-body text-sm text-brand-muted leading-relaxed mb-6",
                                    children: "Share your travel dreams with us. We'll create a custom itinerary that matches your style, pace, and budget."
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-gold text-xs font-body",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-body text-sm text-brand-text/80",
                                                    children: "Tell us your preferred destinations and dates"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/sections/ContactSection.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-gold text-xs font-body",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-body text-sm text-brand-text/80",
                                                    children: "We'll design a curated itinerary for your group"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/sections/ContactSection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-brand-gold text-xs font-body",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/ContactSection.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-body text-sm text-brand-text/80",
                                                    children: "Pack your bags and leave the rest to us"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/sections/ContactSection.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>openModal(),
                                    className: "btn-primary w-full",
                                    children: "Send Inquiry"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/ContactSection.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/ContactSection.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/ContactSection.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/sections/ContactSection.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/sections/ContactSection.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/ContactSection.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(ContactSection, "0X71Id5ynIaL6Uya/vHvynla3KA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$InquiryContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInquiry"]
    ];
});
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LogoBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoBadge",
    ()=>LogoBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const logoSrc = "/android-chrome-192x192.png";
function LogoBadge({ compact = false, className = "", label = "Travel Kings" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: logoSrc,
        alt: label,
        loading: "eager",
        decoding: "async",
        className: `block object-contain ${compact ? "h-10 w-10" : "h-14 w-14"} ${className}`,
        "aria-label": label
    }, void 0, false, {
        fileName: "[project]/src/components/LogoBadge.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = LogoBadge;
var _c;
__turbopack_context__.k.register(_c, "LogoBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/sections/FooterSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterSection",
    ()=>FooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LogoBadge.tsx [app-client] (ecmascript)");
;
;
;
function FooterSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-brand-bg py-16 md:py-20 px-6 md:px-[6vw] border-t border-white/5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1200px] mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center justify-center mx-auto mb-4 rounded-full bg-black/10 p-2 shadow-[0_0_40px_rgba(255,207,101,0.12)] transition-all duration-300 hover:scale-[1.02]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LogoBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoBadge"], {}, void 0, false, {
                        fileName: "[project]/src/sections/FooterSection.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/FooterSection.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-sm text-brand-muted mb-8",
                    children: "Premium South India group tours."
                }, void 0, false, {
                    fileName: "[project]/src/sections/FooterSection.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-center gap-5 md:gap-6 mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/1-day-trips",
                            className: "font-body text-sm text-brand-muted hover:text-brand-text transition-colors",
                            children: "Packages"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/FooterSection.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            className: "font-body text-sm text-brand-muted hover:text-brand-text transition-colors",
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/FooterSection.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "font-body text-sm text-brand-muted hover:text-brand-text transition-colors",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/FooterSection.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/privacy",
                            className: "font-body text-sm text-brand-muted hover:text-brand-text transition-colors",
                            children: "Privacy"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/FooterSection.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/terms",
                            className: "font-body text-sm text-brand-muted hover:text-brand-text transition-colors",
                            children: "Terms"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/FooterSection.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/FooterSection.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-body text-xs text-brand-muted/60",
                    children: "© 2026 Travel Kings."
                }, void 0, false, {
                    fileName: "[project]/src/sections/FooterSection.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/FooterSection.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/FooterSection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = FooterSection;
var _c;
__turbopack_context__.k.register(_c, "FooterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/trips.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "destinationAtmospheres",
    ()=>destinationAtmospheres,
    "destinationImages",
    ()=>destinationImages,
    "getAllDestinationOptions",
    ()=>getAllDestinationOptions,
    "getCategoryBySlug",
    ()=>getCategoryBySlug,
    "tripCategories",
    ()=>tripCategories
]);
const destinationImages = {
    "Wayanad": "/images/wayanad/bg-2day.jpg",
    "Alappuzha": "/images/alappuzha/bg-1day.jpg",
    "Munnar": "/images/munnar/card-1day.jpg",
    "Vagamon": "/images/vagamon/meadows.jpg",
    "Mysore": "/images/mysore/palace.jpg",
    "Ooty": "/images/ooty/bg-4day.jpg",
    "Kodaikanal": "/images/kodaikanal/lake.jpg",
    "Coorg": "/images/coorg/card-2day.jpg",
    "Chikmagalur": "/images/wayanad/bg-3day.jpg",
    "Hampi": "/images/hampi/ruins.jpg",
    "Goa": "/images/goa/card-6day.jpg",
    "Dandeli": "/images/dandeli/card-4day.jpg",
    "Malpe": "/images/malpe/bg-6day.jpg",
    "Belur": "/images/hampi/card-5day.jpg",
    "Shimoga": "/images/dandeli/card-4day.jpg",
    "Hyderabad": "/images/mysore/bg-5day.jpg",
    "Bangalore": "/images/mysore/palace.jpg",
    "Pondicherry": "/images/pondicherry/colonial.jpg",
    "Gokarna": "/images/malpe/bg-6day.jpg",
    "Wonderla": "/images/pondicherry/colonial.jpg"
};
const destinationAtmospheres = {
    "Wayanad": [
        "Forests",
        "Waterfalls",
        "Mountain Roads"
    ],
    "Alappuzha": [
        "Backwaters",
        "Houseboats",
        "Sunset"
    ],
    "Munnar": [
        "Tea Plantations",
        "Rolling Hills",
        "Sunrise Fog"
    ],
    "Vagamon": [
        "Rolling Meadows",
        "Misty Hills",
        "Peace"
    ],
    "Mysore": [
        "Palace",
        "Heritage",
        "Culture"
    ],
    "Ooty": [
        "Pine Forests",
        "Cool Fog",
        "Hills"
    ],
    "Kodaikanal": [
        "Lake",
        "Pine Forests",
        "Fog Roads"
    ],
    "Coorg": [
        "Coffee Plantations",
        "Rain",
        "Forest Roads"
    ],
    "Chikmagalur": [
        "Coffee Estates",
        "Misty Roads",
        "Greenery"
    ],
    "Hampi": [
        "Ruins",
        "Rocky Sunset",
        "History"
    ],
    "Goa": [
        "Beaches",
        "Coastal Sunset",
        "Vibes"
    ],
    "Dandeli": [
        "Forests",
        "Rivers",
        "Adventure"
    ],
    "Malpe": [
        "Coast",
        "Beach Atmosphere",
        "Relaxation"
    ],
    "Belur": [
        "Temple Heritage",
        "Architecture",
        "History"
    ],
    "Shimoga": [
        "Waterfalls",
        "Greenery",
        "Nature"
    ],
    "Hyderabad": [
        "City Heritage",
        "Urban Mood",
        "Food"
    ],
    "Bangalore": [
        "Modern City",
        "Nightlife",
        "Parks"
    ],
    "Pondicherry": [
        "French Architecture",
        "Coastal Sunrise",
        "Charming"
    ],
    "Gokarna": [
        "Calm Beaches",
        "Temples",
        "Serenity"
    ],
    "Wonderla": [
        "Adventure",
        "Energy",
        "Fun"
    ]
};
const tripCategories = [
    {
        duration: 1,
        slug: "1-day-trips",
        eyebrow: "1 DAY TRIPS",
        title: "Quick Premium Escapes",
        subtitle: "A full day of scenery, culture, and calm - return by nightfall.",
        description: "A full day of scenery, culture, and calm - return by nightfall.",
        cardImage: "/images/munnar/card-1day.jpg",
        bgImage: "/images/alappuzha/bg-1day.jpg",
        layout: "horizontal",
        destinations: [
            {
                name: "Wayanad",
                atmosphere: destinationAtmospheres["Wayanad"],
                image: destinationImages["Wayanad"]
            },
            {
                name: "Alappuzha",
                atmosphere: destinationAtmospheres["Alappuzha"],
                image: destinationImages["Alappuzha"]
            },
            {
                name: "Munnar",
                atmosphere: destinationAtmospheres["Munnar"],
                image: destinationImages["Munnar"]
            },
            {
                name: "Vagamon",
                atmosphere: destinationAtmospheres["Vagamon"],
                image: destinationImages["Vagamon"]
            },
            {
                name: "Mysore",
                atmosphere: destinationAtmospheres["Mysore"],
                image: destinationImages["Mysore"]
            },
            {
                name: "Ooty",
                atmosphere: destinationAtmospheres["Ooty"],
                image: destinationImages["Ooty"]
            },
            {
                name: "Kodaikanal",
                atmosphere: destinationAtmospheres["Kodaikanal"],
                image: destinationImages["Kodaikanal"]
            }
        ]
    },
    {
        duration: 2,
        slug: "2-day-trips",
        eyebrow: "2 DAY TRIPS",
        title: "Weekend Getaways",
        subtitle: "Two days of hill roads, heritage walks, and starry evenings.",
        description: "Two days of hill roads, heritage walks, and starry evenings.",
        cardImage: "/images/coorg/card-2day.jpg",
        bgImage: "/images/wayanad/bg-2day.jpg",
        layout: "horizontal",
        destinations: [
            {
                name: "Wayanad + Coorg",
                atmosphere: [
                    "Forests",
                    "Coffee",
                    "Hills"
                ],
                image: destinationImages["Coorg"]
            },
            {
                name: "Coorg + Mysore",
                atmosphere: [
                    "Plantations",
                    "Palace",
                    "Culture"
                ],
                image: destinationImages["Mysore"]
            },
            {
                name: "Ooty + Mysore",
                atmosphere: [
                    "Fog",
                    "Heritage",
                    "Scenic"
                ],
                image: destinationImages["Ooty"]
            },
            {
                name: "Chikmagalur + Coorg",
                atmosphere: [
                    "Coffee",
                    "Greenery",
                    "Roads"
                ],
                image: destinationImages["Chikmagalur"]
            },
            {
                name: "Coorg + Goa",
                atmosphere: [
                    "Forests",
                    "Beaches",
                    "Variety"
                ],
                image: destinationImages["Goa"]
            }
        ]
    },
    {
        duration: 3,
        slug: "3-day-trips",
        eyebrow: "3 DAY TRIPS",
        title: "Short Journeys",
        subtitle: "Three days to wander, taste, and reset - without taking a full break.",
        description: "Three days to wander, taste, and reset - without taking a full break.",
        cardImage: "/images/wayanad/card-3day.jpg",
        bgImage: "/images/wayanad/bg-3day.jpg",
        layout: "vertical",
        destinations: [
            {
                name: "Wayanad + Coorg + Mysore",
                atmosphere: [
                    "Nature",
                    "Coffee",
                    "Heritage"
                ],
                image: destinationImages["Wayanad"]
            },
            {
                name: "Coorg + Mysore + Ooty",
                atmosphere: [
                    "Plantations",
                    "Palace",
                    "Hills"
                ],
                image: destinationImages["Coorg"]
            },
            {
                name: "Chikmagalur + Dandeli + Malpe",
                atmosphere: [
                    "Coffee",
                    "Rivers",
                    "Beach"
                ],
                image: destinationImages["Chikmagalur"]
            },
            {
                name: "Mysore + Hampi + Hyderabad",
                atmosphere: [
                    "Palace",
                    "Ruins",
                    "City"
                ],
                image: destinationImages["Hampi"]
            },
            {
                name: "Coorg + Hyderabad + Bangalore",
                atmosphere: [
                    "Forests",
                    "Heritage",
                    "Modern"
                ],
                image: destinationImages["Bangalore"]
            }
        ]
    },
    {
        duration: 4,
        slug: "4-day-trips",
        eyebrow: "4 DAY TRIPS",
        title: "Immersive Routes",
        subtitle: "Four days of landscapes, stories, and slow travel through the Western Ghats and coast.",
        description: "Four days of landscapes, stories, and slow travel through the Western Ghats and coast.",
        cardImage: "/images/dandeli/card-4day.jpg",
        bgImage: "/images/ooty/bg-4day.jpg",
        layout: "horizontal",
        destinations: [
            {
                name: "Wayanad + Coorg + Chikmagalur + Belur",
                atmosphere: [
                    "Nature",
                    "Coffee",
                    "Temples"
                ],
                image: destinationImages["Wayanad"]
            },
            {
                name: "Coorg + Chikmagalur + Dandeli + Malpe",
                atmosphere: [
                    "Plantations",
                    "Forests",
                    "Coast"
                ],
                image: destinationImages["Dandeli"]
            },
            {
                name: "Mysore + Bangalore + Hampi + Goa",
                atmosphere: [
                    "Heritage",
                    "Modern",
                    "Ruins",
                    "Beaches"
                ],
                image: destinationImages["Hampi"]
            },
            {
                name: "Ooty + Mysore + Bangalore + Wonderla",
                atmosphere: [
                    "Hills",
                    "Palace",
                    "City",
                    "Fun"
                ],
                image: destinationImages["Ooty"]
            }
        ]
    },
    {
        duration: 5,
        slug: "5-day-trips",
        eyebrow: "5 DAY TRIPS",
        title: "The Long Week",
        subtitle: "Five days to live the journey - forests, temples, coastlines, and quiet evenings.",
        description: "Five days to live the journey - forests, temples, coastlines, and quiet evenings.",
        cardImage: "/images/hampi/card-5day.jpg",
        bgImage: "/images/mysore/bg-5day.jpg",
        layout: "horizontal",
        destinations: [
            {
                name: "Coorg + Chikmagalur + Shimoga + Dandeli + Malpe",
                atmosphere: [
                    "Coffee",
                    "Waterfalls",
                    "Rivers",
                    "Beach"
                ],
                image: destinationImages["Coorg"]
            },
            {
                name: "Coorg + Chikmagalur + Goa + Gokarna",
                atmosphere: [
                    "Plantations",
                    "Beaches",
                    "Temples"
                ],
                image: destinationImages["Goa"]
            },
            {
                name: "Wayanad + Coorg + Mysore + Bangalore",
                atmosphere: [
                    "Forests",
                    "Palace",
                    "City"
                ],
                image: destinationImages["Mysore"]
            }
        ]
    },
    {
        duration: 6,
        slug: "6-day-trips",
        eyebrow: "6 DAY TRIPS",
        title: "Grand Journeys",
        subtitle: "Six days across South India - designed for travelers who want it all.",
        description: "Six days across South India - designed for travelers who want it all.",
        cardImage: "/images/goa/card-6day.jpg",
        bgImage: "/images/malpe/bg-6day.jpg",
        layout: "vertical",
        destinations: [
            {
                name: "Chikmagalur + Dandeli + Goa + Malpe",
                atmosphere: [
                    "Coffee",
                    "Rivers",
                    "Beaches",
                    "Coast"
                ],
                image: destinationImages["Chikmagalur"]
            },
            {
                name: "Pondicherry + Hyderabad + Bangalore + Wonderla",
                atmosphere: [
                    "Colonial",
                    "Heritage",
                    "Modern",
                    "Fun"
                ],
                image: destinationImages["Pondicherry"]
            }
        ]
    }
];
function getAllDestinationOptions() {
    const options = [];
    tripCategories.forEach((cat)=>{
        cat.destinations.forEach((dest)=>{
            options.push(`${cat.duration} Day - ${dest.name}`);
        });
    });
    return options;
}
function getCategoryBySlug(slug) {
    return tripCategories.find((cat)=>cat.slug === slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/seo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getTripSeo",
    ()=>getTripSeo,
    "seo",
    ()=>seo,
    "sitemapRoutes",
    ()=>sitemapRoutes,
    "useSEO",
    ()=>useSEO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/trips.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const siteUrl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://travelkings.vercel.app";
const defaultImage = `${siteUrl}/og-travel-kings.webp`;
const setMeta = (selector, attr, value)=>{
    let element = document.head.querySelector(selector);
    if (!element) {
        element = selector.startsWith("meta") ? document.createElement("meta") : document.createElement("link");
        const nameMatch = selector.match(/\[name="([^"]+)"\]/);
        const propertyMatch = selector.match(/\[property="([^"]+)"\]/);
        const relMatch = selector.match(/\[rel="([^"]+)"\]/);
        if (nameMatch) element.setAttribute("name", nameMatch[1]);
        if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
        if (relMatch) element.setAttribute("rel", relMatch[1]);
        document.head.appendChild(element);
    }
    element.setAttribute(attr, value);
};
function useSEO(config) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSEO.useEffect": ()=>{
            const canonical = `${siteUrl}${config.path}`;
            const image = config.image?.startsWith("http") ? config.image : `${siteUrl}${config.image || "/og-travel-kings.webp"}`;
            document.title = config.title;
            setMeta('meta[name="description"]', "content", config.description);
            setMeta('link[rel="canonical"]', "href", canonical);
            setMeta('meta[property="og:site_name"]', "content", "Travel Kings");
            setMeta('meta[property="og:title"]', "content", config.title);
            setMeta('meta[property="og:description"]', "content", config.description);
            setMeta('meta[property="og:url"]', "content", canonical);
            setMeta('meta[property="og:type"]', "content", config.type || "website");
            setMeta('meta[property="og:image"]', "content", image);
            setMeta('meta[property="og:image:alt"]', "content", "Travel Kings premium South India tours");
            setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
            setMeta('meta[name="twitter:title"]', "content", config.title);
            setMeta('meta[name="twitter:description"]', "content", config.description);
            setMeta('meta[name="twitter:image"]', "content", image);
        }
    }["useSEO.useEffect"], [
        config.description,
        config.image,
        config.path,
        config.title,
        config.type
    ]);
}
_s(useSEO, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const seo = {
    home: {
        title: "Travel Kings | Premium South India Tours",
        description: "Premium South India group tours with curated stays, cinematic routes, local flavors, and stress-free planning.",
        path: "/",
        image: defaultImage
    },
    about: {
        title: "About Travel Kings | Premium South India Travel Experts",
        description: "Meet Travel Kings, a Kerala-based travel team crafting premium group journeys through South India's hills, coast, culture, and heritage.",
        path: "/about",
        image: "/images/munnar/card-1day.webp"
    },
    contact: {
        title: "Plan Your Trip | Contact Travel Kings",
        description: "Send Travel Kings your dates, destination ideas, and group size to plan a premium South India journey over WhatsApp.",
        path: "/contact",
        image: defaultImage
    },
    privacy: {
        title: "Privacy Policy | Travel Kings",
        description: "Learn how Travel Kings handles inquiry details, contact information, WhatsApp messages, analytics, and customer privacy.",
        path: "/privacy",
        image: defaultImage
    },
    terms: {
        title: "Terms and Conditions | Travel Kings",
        description: "Review Travel Kings booking, itinerary, payment, cancellation, and travel responsibility terms before planning your trip.",
        path: "/terms",
        image: defaultImage
    }
};
function getTripSeo(slug) {
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCategoryBySlug"])(slug || "");
    if (!category) {
        return {
            title: "Trip Not Found | Travel Kings",
            description: "The requested Travel Kings trip package could not be found.",
            path: `/${slug || ""}`,
            image: defaultImage
        };
    }
    return {
        title: `${category.eyebrow} | ${category.title} | Travel Kings`,
        description: `${category.description} Explore premium ${category.duration}-day South India itineraries with Travel Kings.`,
        path: `/${category.slug}`,
        image: category.cardImage.replace(/\.(jpe?g|png)$/i, ".webp")
    };
}
const sitemapRoutes = [
    seo.home.path,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tripCategories"].map((category)=>`/${category.slug}`),
    seo.about.path,
    seo.contact.path,
    seo.privacy.path,
    seo.terms.path
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/page-views/HomePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollToPlugin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$CategoryCardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/CategoryCardSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/AboutSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/ContactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$FooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/FooterSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/trips.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seo.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollToPlugin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollToPlugin"]);
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].config({
    ignoreMobileResize: true
});
function HomePage() {
    _s();
    const firstCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSEO"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seo"].home);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            // Refresh ScrollTrigger after all elements are mounted
            // This ensures smooth pinning without aggressive snap hijacking scroll
            const timer = setTimeout({
                "HomePage.useEffect.timer": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].refresh();
                }
            }["HomePage.useEffect.timer"], 300);
            return ({
                "HomePage.useEffect": ()=>{
                    clearTimeout(timer);
                }
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    const scrollToFirstCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HomePage.useCallback[scrollToFirstCard]": ()=>{
            const firstCard = firstCardRef.current ?? document.getElementById("first-trip-card");
            const firstSection = firstCard?.closest("section");
            if (!firstCard || !firstSection) return;
            const firstCardTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getById("first-trip-card-trigger") ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].getAll().find({
                "HomePage.useCallback[scrollToFirstCard]": (trigger)=>trigger.trigger === firstSection
            }["HomePage.useCallback[scrollToFirstCard]"]);
            const start = firstCardTrigger?.start ?? firstSection.offsetTop;
            const end = firstCardTrigger?.end ?? start + window.innerHeight;
            // The category card is fully visible after its ScrollTrigger entrance phase.
            const targetY = start + (end - start) * 0.36;
            if (window.scrollY < start) {
                window.scrollTo({
                    top: start + 1,
                    left: 0,
                    behavior: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
            }
            const distance = Math.abs(window.scrollY - targetY);
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                window.scrollTo({
                    top: targetY,
                    left: 0,
                    behavior: "auto"
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update();
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(window);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(window, {
                duration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.clamp(0.45, 0.95, distance / 1400),
                scrollTo: {
                    y: targetY,
                    autoKill: false
                },
                ease: "power2.out",
                overwrite: true,
                onUpdate: {
                    "HomePage.useCallback[scrollToFirstCard]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update()
                }["HomePage.useCallback[scrollToFirstCard]"],
                onComplete: {
                    "HomePage.useCallback[scrollToFirstCard]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update()
                }["HomePage.useCallback[scrollToFirstCard]"]
            });
        }
    }["HomePage.useCallback[scrollToFirstCard]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSection"], {
                onExploreTours: scrollToFirstCard
            }, void 0, false, {
                fileName: "[project]/src/page-views/HomePage.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$trips$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tripCategories"].map((category, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$CategoryCardSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryCardSection"], {
                    category: category,
                    index: i,
                    firstCardRef: i === 0 ? firstCardRef : undefined
                }, category.slug, false, {
                    fileName: "[project]/src/page-views/HomePage.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$AboutSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AboutSection"], {}, void 0, false, {
                fileName: "[project]/src/page-views/HomePage.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                fileName: "[project]/src/page-views/HomePage.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$FooterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterSection"], {}, void 0, false, {
                fileName: "[project]/src/page-views/HomePage.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/page-views/HomePage.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(HomePage, "jDZC0NZMIzv64RoJ9oDaIWyzaI4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSEO"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0x9hv_q._.js.map