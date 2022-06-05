import {
  AppBar,
  Button,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid white",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  const [position, setPosition] = useState<string>("Full-stack developer");
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => clearInterval(timer);
  }, []);

  const onChangePosition = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => {
    setPosition(event.target.value as string);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          px={1}
          py={1}
        >
          <Typography variant="h6">My Movies</Typography>
          <Box textAlign={"center"}>
            <WelcomeMessage position={position} country="Italy" />
            <FormControl>
              <Select
                color="primary"
                value={position}
                onChange={onChangePosition}
                className={classes.positionSelect}
              >
                <MenuItem value="Full-stack developer">
                  Full-stack developer
                </MenuItem>
                <MenuItem value="Front-end developer">
                  Front-end developer
                </MenuItem>
                <MenuItem value="Back-end developer">
                  Back-end developer
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box textAlign={"center"} py={1}>
          <Box my={1}>
            <Typography variant="h6">{time.toUTCString()}</Typography>
          </Box>
          <Button variant="contained">Login</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
