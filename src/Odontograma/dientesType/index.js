import { Box } from "@mui/material"

export function diente1(obj) {

    const handleClick = () => {
        console.log("hice clikc en plyghon")
    }
    return (
        <>
            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent" }}>{obj.box1}</Box>

            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent" }}>{obj.box2}</Box>

            <Box onClick={handleClick} sx={{ border: "1px solid transparent", borderRadius: "2px", margin: "0px", padding: "2px", marginTop: "40px" }}>{obj.label}</Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ transform: "scale(1)", marginLeft: "0px", display: "flex", flexDirection: "column" }} >
                    <Box sx={{ marginBottom: "0" }}>
                        <svg style={{ marginBottom: "0" }} width="60" height="70">
                            <g onClick={handleClick} style={{ cursor: 'pointer' }}>
                                <polygon
                                    points="0,30 0,70 60,70 60,30"
                                    fill={'red'}
                                    stroke={"red"}
                                    stroke-width="1"
                                />
                            </g>
                            <polygon
                                points="30,0 0,30 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 20,50 40,50 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 0,70 20,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="20,50 0,70 60,70 40,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="60,30 40,50 60,70"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="5,30 0,35 0,67 5,70 57,70 60,67 60,33 57,30"
                                fill="transparent"
                                stroke="transparent"
                                stroke-width="2"
                            />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export function diente2(obj) {
    return (
        <>
            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent" }}>{obj.box1}</Box>

            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent" }}>{obj.box2}</Box>

            <Box sx={{ border: "1px solid transparent", borderRadius: "2px", margin: "0px", padding: "2px", marginTop: "40px" }}>{obj.label}</Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ transform: "scale(1)", marginLeft: "0px", display: "flex", flexDirection: "column" }} >
                    <Box sx={{ marginBottom: "0" }}>
                        <svg style={{ marginBottom: "0" }} width="60" height="70">
                            <polygon
                                points="0,30 0,70 60,70 60,30"
                                fill={"red"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,0 0,30 30,30"
                                fill={"red"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="60,0 30,30 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-dasharray="2"
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 10,40 60,40 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 0,70 10,60 10,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,60 0,70 60,70 50,60"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="50,40 50,60 60,70 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,40 10,50 50,50 50,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,50 10,60 50,60 50,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="5,30 0,35 0,67 5,70 57,70 60,67 60,33 57,30"
                                fill="transparent"
                                stroke="transparent"
                                stroke-width="2"
                            />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export function diente3(obj) {
    return (
        <>
            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent" }}>{obj.box1}</Box>

            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent" }}>{obj.box2}</Box>

            <Box sx={{ border: "1px solid transparent", borderRadius: "2px", margin: "0px", padding: "2px", marginTop: "40px" }}>{obj.label}</Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ transform: "scale(1)", marginLeft: "0px", display: "flex", flexDirection: "column" }} >
                    <Box sx={{ marginBottom: "0" }}>
                        <svg style={{ marginBottom: "0" }} width="60" height="70">
                            <polygon
                                points="30,0 0,30 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 10,40 60,40 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 0,70 10,60 10,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,60 0,70 60,70 50,60"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="50,40 50,60 60,70 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,40 10,50 50,50 50,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,50 10,60 50,60 50,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="5,30 0,35 0,67 5,70 57,70 60,67 60,33 57,30"
                                fill="transparent"
                                stroke="transparent"
                                stroke-width="2"
                            />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export function diente4(obj) {
    return (
        <>
            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent", display: obj.id === 4 ? "none" : "flex" }}>{obj.box1}</Box>

            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent", display: obj.id === 4 ? "none" : "flex" }}>{obj.box2}</Box>

            <Box sx={{ border: "1px solid transparent", borderRadius: "2px", margin: "0px", padding: "2px", marginTop: "40px" }}>{obj.label}</Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ transform: "scale(1)", marginLeft: "0px", display: "flex", flexDirection: "column" }} >
                    <Box sx={{ marginBottom: "0" }}>
                        <svg style={{ marginBottom: "0" }} width="60" height="70">
                            <polygon
                                points="30,0 0,30 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,0 0,30 30,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="60,0 30,30 60,30"
                                fill={"white"}
                                stroke={"black"}
                                // stroke-dasharray="2"
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 10,40 60,40 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 0,70 10,60 10,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,60 0,70 60,70 50,60"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="50,40 50,60 60,70 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,40 10,50 30,50 30,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,50 10,60 30,60 30,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="30,40 30,50 50,50 50,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="30,50 30,60 50,60 50,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="5,30 0,35 0,67 5,70 57,70 60,67 60,33 57,30"
                                fill="transparent"
                                stroke="transparent"
                                stroke-width="2"
                            />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export function diente5(obj) {
    return (
        <>
            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent" }}>{obj.box1}</Box>

            <Box sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: "transparent" }}>{obj.box2}</Box>

            <Box sx={{ border: "1px solid transparent", borderRadius: "2px", margin: "0px", padding: "2px", marginTop: "40px" }}>{obj.label}</Box>

            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ transform: "scale(1)", marginLeft: "0px", display: "flex", flexDirection: "column" }} >
                    <Box sx={{ marginBottom: "0" }}>
                        <svg style={{ marginBottom: "0" }} width="60" height="70">

                            <polygon
                                points="30,0 0,30 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,0 0,30 30,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="60,0 30,30 60,30"
                                fill={"white"}
                                stroke={"black"}
                                // stroke-dasharray="2"
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 10,40 60,40 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="0,30 0,70 10,60 10,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,60 0,70 60,70 50,60"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="50,40 50,60 60,70 60,30"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,40 10,50 23.33,50 23.33,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="10,50 10,60 23.33,60 23.33,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="23.33,40 23.33,50 36.66,50 36.66,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="23.33,50 23.33,60 36.66,60 36.66,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="36.66,50 36.66,60 50,60 50,50"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="36.66,40 36.66,50 50,50 50,40"
                                fill={"white"}
                                stroke={"black"}
                                stroke-width="1"
                            />
                            <polygon
                                points="5,30 0,35 0,67 5,70 57,70 60,67 60,33 57,30"
                                fill="transparent"
                                stroke="transparent"
                                stroke-width="2"
                            />
                        </svg>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
