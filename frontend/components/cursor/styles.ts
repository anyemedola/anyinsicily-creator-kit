import { styled } from "@mui/material/styles";

export const CursorWrapper = styled("div")({
    position: "fixed",
    top: 0,
    left: 0,
    pointerEvents: "none",
    zIndex: 9999,
    transform: "translate(-50%, -50%)",
});

export const Lemon = styled("div")({
    position: "relative",
    width: 20,
    height: 30,
    transform: "rotate(28deg)",
    borderRadius: "52% 48% 46% 54% / 62% 62% 38% 38%",
    background: `
    radial-gradient(ellipse at 32% 28%, #fff9b8 0%, #fff9b8 16%, rgba(255,255,255,0) 17%),
    radial-gradient(ellipse at 38% 34%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.42) 18%, rgba(255,255,255,0) 42%),
    linear-gradient(145deg, #fff27a 0%, #f8e34f 30%, #f1d63d 58%, #e7c52a 100%)
  `,
    boxShadow: `
    inset -2px -4px 0 rgba(206, 171, 25, 0.28),
    inset 2px 2px 0 rgba(255, 255, 255, 0.35),
    0 1px 2px rgba(0,0,0,0.12)
  `,

    "&::before": {
        content: '""',
        position: "absolute",
        bottom: -2,
        left: "50%",
        width: 8,
        height: 8,
        transform: "translateX(-50%) rotate(45deg)",
        borderRadius: "1px",
        background: "linear-gradient(135deg, #f5df4c 0%, #e4bf22 100%)",
        boxShadow: "inset -1px -1px 0 rgba(170,130,10,0.22)",
    },

    "&::after": {
        content: '""',
        position: "absolute",
        top: -6,
        left: "50%",
        width: 12,
        height: 8,
        transform: "translateX(-5%) rotate(-28deg)",
        transformOrigin: "left bottom",
        borderRadius: "80% 10% 80% 10% / 80% 10% 80% 10%",
        background: "linear-gradient(135deg, #66b84f 0%, #2f8f31 100%)",
        boxShadow: `
      inset 1px 1px 0 rgba(255,255,255,0.18),
      inset -1px -1px 0 rgba(0,0,0,0.12)
    `,
    },
});

export const Stem = styled("div")({
    position: "absolute",
    top: -4,
    left: "50%",
    width: 4,
    height: 8,
    transform: "translateX(-80%) rotate(-18deg)",
    borderRadius: 999,
    background: "linear-gradient(180deg, #7b5a32 0%, #5c4121 100%)",
    zIndex: 2,
});

export const Shine = styled("div")({
    position: "absolute",
    top: 7,
    left: 5,
    width: 7,
    height: 13,
    transform: "rotate(-6deg)",
    borderRadius: "50% 45% 55% 45%",
    background: "linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.18) 100%)",
    filter: "blur(0.2px)",
    opacity: 0.9,
});
