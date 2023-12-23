import './App.css'
import {Box, Button, Container, Typography} from "@mui/material";
import {useState} from "react";
import WorkoutPicker from "./components/WorkoutPicker.jsx";
import {array} from "prop-types";
import workouts from "./Workouts.js";

function App() {
    const [workoutPreferences, setWorkoutPreferences] = useState({
        difficulty: "any",
        bodyPart: "any",
        duration: "any",
    })
    const [workout, setWorkout] = useState({})
    const [isWorkoutGenerated, setIsWorkoutGenerated] = useState(false)


    function setWorkoutDifficulty(e) {
        setWorkoutPreferences(prevState => {
            return {
                ...prevState,
                difficulty: e.target.value,
            }
        })
    }

    function setWorkoutBodyPart(e) {
        setWorkoutPreferences(prevState => {
            return {
                ...prevState,
                bodyPart: e.target.value,
            }
        })
    }

    function setWorkoutDuration(e) {
        setWorkoutPreferences(prevState => {
            return {
                ...prevState,
                duration: e.target.value,
            }
        })
    }

    function generateWorkout() {
        setWorkout(workouts[Math.floor(Math.random() * workouts.length)])
        setIsWorkoutGenerated(true)
    }

    return (
        <Container
            sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                height: "100vh",
                flexDirection: "column"
            }}
            maxWidth={false}
        >
            <Box mb={20}
            >
                <Typography
                    variant={"h2"}
                    align={"center"}

                >
                    CaliSpartan
                </Typography>
                <Typography
                    variant={"h4"}
                    align={"center"}
                >
                    Generate your workout
                </Typography>
            </Box>

            <WorkoutPicker
                workoutPreferences={workoutPreferences}
                onDifficultyChange={setWorkoutDifficulty}
                onBodyPartChange={setWorkoutBodyPart}
                onDurationChange={setWorkoutDuration}
            />

            <Button mt={10} size={"large"} variant="contained" onClick={generateWorkout}>Generate</Button>


            {isWorkoutGenerated && workout.directions.map((direction, index) => <Typography key={index}>{direction}</Typography>)}
        </Container>
    )
}

export default App
