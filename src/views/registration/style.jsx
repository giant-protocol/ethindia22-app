import styled from "@emotion/styled";
import { Box } from "@mui/system";

const HomeWrapper = styled(Box)(({ theme }) => ({
  //   background: theme.palette.common.white,
  color: theme.palette.text.primary,
  height: "100vh",
  paddingTop: "5rem",
  width: "100%",
  display: "grid",
  placeContent: "center",
}));

export const S = {
  HomeWrapper,
};
