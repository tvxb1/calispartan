import './App.css'
import {Box, Container, Typography} from "@mui/material";

function App() {
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
        </Container>
    )
}

export default App
