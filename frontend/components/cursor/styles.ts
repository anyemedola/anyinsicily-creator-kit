import { styled } from "@mui/material/styles";

export const CursorWrapper = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  pointerEvents: "none",
  zIndex: 9999,
  transform: "translate(-50%, -50%)",
  fontSize: "24px", // controla o tamanho do emoji
});