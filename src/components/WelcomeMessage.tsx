import { Box } from "@material-ui/core";
import React from "react";

interface WelcomeMessageProps {
  position: string;
  country?: string;
}


const WelcomeMessage = ({
  position,
  country = "Vietnam",
}: WelcomeMessageProps) => {
  return (
    <Box>
      Welcome {position} from {country}{" "}
    </Box>
  );
  
};

export default WelcomeMessage;
