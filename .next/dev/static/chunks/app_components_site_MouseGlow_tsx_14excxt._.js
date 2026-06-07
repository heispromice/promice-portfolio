(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/site/MouseGlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MouseGlow",
    ()=>MouseGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MouseGlow() {
    _s();
    const [mousePos, setMousePos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [opacity, setOpacity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MouseGlow.useEffect": ()=>{
            const handleMouseMove = {
                "MouseGlow.useEffect.handleMouseMove": (e)=>{
                    setMousePos({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["MouseGlow.useEffect.handleMouseMove"];
            const handleMouseEnter = {
                "MouseGlow.useEffect.handleMouseEnter": ()=>setOpacity(1)
            }["MouseGlow.useEffect.handleMouseEnter"];
            const handleMouseLeave = {
                "MouseGlow.useEffect.handleMouseLeave": ()=>setOpacity(0)
            }["MouseGlow.useEffect.handleMouseLeave"];
            window.addEventListener("mousemove", handleMouseMove);
            document.body.addEventListener("mouseenter", handleMouseEnter);
            document.body.addEventListener("mouseleave", handleMouseLeave);
            return ({
                "MouseGlow.useEffect": ()=>{
                    // IREKEBISHWE HAPA: Tunaita function moja kwa moja bila ku-assign kwenye window
                    window.removeEventListener("mousemove", handleMouseMove);
                    document.body.removeEventListener("mouseenter", handleMouseEnter);
                    document.body.removeEventListener("mouseleave", handleMouseLeave);
                }
            })["MouseGlow.useEffect"];
        }
    }["MouseGlow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block",
        style: {
            opacity,
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(216, 183, 154, 0.04), transparent 80%)`
        }
    }, void 0, false, {
        fileName: "[project]/app/components/site/MouseGlow.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(MouseGlow, "GBoi95I/hn8Hz0T2g+XxbQn3FWw=");
_c = MouseGlow;
var _c;
__turbopack_context__.k.register(_c, "MouseGlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_site_MouseGlow_tsx_14excxt._.js.map