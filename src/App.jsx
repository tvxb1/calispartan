import './App.css'
import {Box, Button, Container, Typography} from "@mui/material";
import {useState} from "react";
import WorkoutPicker from "./components/WorkoutPicker.jsx";
import workouts from "./Workouts.js";
import WorkoutDisplayer from "./components/WorkoutDisplayer.jsx";

function App() {
    const [workoutPreferences, setWorkoutPreferences] = useState({
        difficulty: "any",
        bodyPart: "any",
        duration: "any",
    })
    const [currentWorkout, setCurrentWorkout] = useState({})
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
        let filteredWorkouts = workouts

        if (workoutPreferences.difficulty !== "any") {
            filteredWorkouts = filteredWorkouts.filter(w => w.difficulty === workoutPreferences.difficulty)
        }

        if (workoutPreferences.bodyPart !== "any") {
            filteredWorkouts = filteredWorkouts.filter(w => w.bodyPart === workoutPreferences.bodyPart)
        }

        if (workoutPreferences.duration !== "any") {
            filteredWorkouts = filteredWorkouts.filter(w => w.duration === workoutPreferences.duration)
        }

        setCurrentWorkout(filteredWorkouts[Math.floor(Math.random() * filteredWorkouts.length)])
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
            <Box
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

            <Box sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
            mt={5}>
                <WorkoutPicker
                    workoutPreferences={workoutPreferences}
                    onDifficultyChange={setWorkoutDifficulty}
                    onBodyPartChange={setWorkoutBodyPart}
                    onDurationChange={setWorkoutDuration}
                />

                <Button size={"large"} variant="contained" onClick={generateWorkout}>Generate</Button>
            </Box>


            {isWorkoutGenerated && (
                <Box mt={10}>
                    <WorkoutDisplayer workout={currentWorkout} />
                </Box>
            )}
        </Container>
    )
}

export default App
