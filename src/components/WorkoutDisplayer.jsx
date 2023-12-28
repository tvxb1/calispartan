import PropTypes from "prop-types";
import {Box, Typography} from "@mui/material";

export default function WorkoutDisplayer({ workout }) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        }}>
            <Typography variant={"h6"} align={"center"}>{workout.directions[0]}</Typography>

            {workout.directions.slice(1).map(direction => <Typography>{direction}</Typography>)}
        </Box>
    )
}

WorkoutDisplayer.propTypes = {
    workout: PropTypes.object
}