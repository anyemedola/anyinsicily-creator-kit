import { styled } from "@mui/material/styles";
import { palette } from "@/lib/theme";
import { playfair, dmMono } from "@/lib/fonts";

export const Grid = styled("div")({
    display: "flex",
    flexDirection: "row",
    gap: 16,
    marginBottom: 48,
    overflowX: "auto",
    overflowY: "hidden",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media (max-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      overflowX: "hidden",
    },
    "@media (max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
});

export const Card = styled("div")<{ gradient: string }>(({ gradient }) => ({
    minWidth: 340,
    height: 380,
    flexShrink: 0,
    borderRadius: 16,
    background: gradient,
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    transition: "transform 0.25s ease",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    "&:hover": {
      transform: "scale(1.03)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(28,14,14,0.92) 0%, rgba(28,14,14,0.5) 50%, transparent 100%)",
      zIndex: 1,
    },
    "& .video": {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: 0,
    },
    "@media (max-width: 768px)": {
      minWidth: "unset",
      width: "100%",
      height: 300,
    },
}));

export const Content = styled("div")({
    position: "relative",
    zIndex: 2,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: 6,
    height: "100%",
    maxWidth: 260,
});

export const Badge = styled("div")({
    alignSelf: "flex-start",
    background: palette.lemon,
    color: palette.white,
    fontFamily: dmMono.style.fontFamily,
    fontSize: 9,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "4px 10px",
    borderRadius: 999,
});

export const Views = styled("div")({
    fontFamily: playfair.style.fontFamily,
    fontSize: 26,
    fontStyle: "italic",
    color: "white",
    lineHeight: 1,
});

export const ViewsLabel = styled("div")({
    fontSize: 10,
    color: "rgba(255,255,255,0.6)",
    fontFamily: dmMono.style.fontFamily,
    letterSpacing: "0.08em",
});

export const Topic = styled("div")({
    fontSize: 16,
    fontWeight: 600,
    color: "white",
    marginTop: 6,
    lineHeight: 1.3,
});

export const Detail = styled("p")({
    fontSize: 12,
    color: "rgba(255,255,255,0.82)",
    marginTop: 6,
    lineHeight: 1.4,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    "& strong": {
      color: "white",
      fontWeight: 600,
    },
    "@media (max-width: 480px)": {
      WebkitLineClamp: 1,
    },
});
