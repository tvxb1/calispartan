import {Box, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import PropTypes from "prop-types";

export default function WorkoutPicker({workoutPreferences, onDifficultyChange, onBodyPartChange, onDurationChange}) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
            }}
        >
            <Typography variant={"body2"}>I want a</Typography>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="difficulty-picker">Difficulty</InputLabel>
                <Select
                    labelId="difficulty-picker-label"
                    id="difficulty-picker"
                    value={workoutPreferences.difficulty}
                    label="Difficulty"
                    onChange={e => onDifficultyChange(e)}
                >
                    <MenuItem value={"easy"}>easy</MenuItem>
                    <MenuItem value={"medium"}>medium</MenuItem>
                    <MenuItem value={"hard"}>hard</MenuItem>
                    <MenuItem value={"any"}>any</MenuItem>
                </Select>
            </FormControl>
            <Typography variant={"body2"}>difficulty workout for the</Typography>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="bodypart-picker">Body part</InputLabel>
                <Select
                    labelId="bodypart-picker-label"
                    id="bodypart-picker"
                    value={workoutPreferences.bodyPart}
                    label="Difficulty"
                    onChange={e => onBodyPartChange(e)}
                >
                    <MenuItem value={"full"}>full body</MenuItem>
                    <MenuItem value={"upper"}>upper body</MenuItem>
                    <MenuItem value={"lower"}>lower body</MenuItem>
                    <MenuItem value={"any"}>any</MenuItem>
                </Select>
            </FormControl>
            <Typography variant={"body2"}>for a</Typography>
            <FormControl sx={{m: 1, minWidth: 120}}>
                <InputLabel id="duration-picker">Duration</InputLabel>
                <Select
                    labelId="duration-picker-label"
                    id="duration-picker"
                    value={workoutPreferences.duration}
                    label="Difficulty"
                    onChange={e => onDurationChange(e)}
                >
                    <MenuItem value={"short"}>short</MenuItem>
                    <MenuItem value={"medium"}>medium</MenuItem>
                    <MenuItem value={"long"}>long</MenuItem>
                    <MenuItem value={"any"}>any</MenuItem>
                </Select>
            </FormControl>
            <Typography variant={"body2"}>duration.</Typography>
        </Box>
    )
}

WorkoutPicker.propTypes = {
    workoutPreferences: PropTypes.object,
    onDifficultyChange: PropTypes.func,
    onBodyPartChange: PropTypes.func,
    onDurationChange: PropTypes.func,
}