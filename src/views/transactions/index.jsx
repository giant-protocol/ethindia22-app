import { InputAdornment, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { S } from "./style";
import Searchicon from "../../assets/icons/SearchIcon.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Transactions = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <S.TransactionsWrapper>
      <S.TransactionsContainer>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="All" {...a11yProps(0)} />
              <Tab label="Send" {...a11yProps(1)} />
              <Tab label="Received" {...a11yProps(2)} />
              <Tab label="Request" {...a11yProps(3)} />
              <Tab label="Escrow" {...a11yProps(4)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <S.ContactsInput
              type="text"
              placeholder="Find transactions"
              disableUnderline={true}
              startAdornment={
                <InputAdornment sx={{ cursor: "pointer" }} position="start">
                  <img src={Searchicon} alt="" />
                </InputAdornment>
              }
            />
            {/* <S.AllTransactionsContainer>
              all transactions
            </S.AllTransactionsContainer> */}
          </TabPanel>
        </Box>
      </S.TransactionsContainer>
    </S.TransactionsWrapper>
  );
};

export default Transactions;
