import { Box, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';

export default function Diente5({
    diente,
    hanleFunction,
    hanleFunctionText,
    selectExtra,
    selectedDates,
    handleDateClick,
    handleSelectionDoble,
    handleMultipleInitial,
    handleBorrarBracketsAndProtesisFija
}) {

    useEffect(() => {
        console.log(selectExtra)
        console.log(selectedDates)
    }, [selectExtra, selectedDates])

    return (
        <>

            <Box onClick={() => hanleFunction(diente.id, diente.option, 'box1', selectExtra !== null && selectExtra !== undefined && selectExtra)} sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: diente.box1 !== '20' ? 'black' : "transparent", display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" }}>{diente.box1}</Box>

            <Box onClick={() => hanleFunction(diente.id, diente.option, 'box2', selectExtra !== null && selectExtra !== undefined && selectExtra)} sx={{ border: "1px solid black", borderRadius: "2px", margin: "0px", padding: "2px", color: diente.box2 !== '20' ? 'black' : "transparent", display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" }}>{diente.box2}</Box>

            <Box sx={{ border: "1px solid transparent", borderRadius: "2px", margin: "0px", padding: "2px", marginTop: "40px", display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" }}>{diente.label}</Box>

            <Box onClick={() => {
                hanleFunction(diente.id, diente.option, '', selectExtra !== null && selectExtra !== undefined && selectExtra)
                handleDateClick(diente.id)
            }} sx={{ display: "flex", flexDirection: "column" }}>
                <Box sx={{ transform: "scale(1)", marginLeft: "0px", display: "flex", flexDirection: "column" }} >
                    <Box sx={{ marginBottom: "0" }}>
                        {/* Parte de numeros */}
                        <Box mt={-4}>
                            <svg width="60" height="30">
                                <g>
                                    <polygon
                                        points={diente.dienteClavija.select ? "30,0 10,30 50,30 30,0" : "30,null 0,30 60,0 30,null"}
                                        fill="transparent"
                                        stroke="blue"
                                        stroke-width="5"
                                    />
                                </g>
                                <g>
                                    <circle
                                        cx={diente.germinacion.select ? "30" : 'null'}
                                        cy={diente.germinacion.select ? "15" : 'null'}
                                        r={diente.germinacion.select ? "13" : 'null'}
                                        fill="transparent"
                                        stroke="blue"
                                        stroke-width="5"
                                    />
                                </g>
                            </svg>
                            
                        </Box>
                        <Box sx={{ position: "absolute", border: "1px solid transparent" }} mt={-3.8} ml={0}>
                            <svg width="80" height="30">
                                {/* Fusion */}
                                <>
                                    <g>
                                        <ellipse cx={diente.fusion.fusionDerecho ? "90" : "null"} cy={diente.fusion.fusionDerecho ? "15" : "null"} rx={diente.fusion.fusionDerecho ? "40" : "null"} ry={diente.fusion.fusionDerecho ? "10" : "null"} fill="none" stroke='blue' />
                                        <ellipse cx={diente.fusion.fusionDerecho ? "50" : "null"} cy={diente.fusion.fusionDerecho ? "15" : "null"} rx={diente.fusion.fusionDerecho ? "40" : "null"} ry={diente.fusion.fusionDerecho ? "10" : "null"} fill="none" stroke='blue' />
                                        {/* <text x="65" y="22" fill="#f00" font-size="18">S</text> */}
                                    </g>
                                </>
                                <>
                                    <g>
                                        <ellipse cx={diente.fusion.fusionIzquierdo ? "12" : "null"} cy={diente.fusion.fusionIzquierdo ? "15" : "null"} rx={diente.fusion.fusionIzquierdo ? "40" : "null"} ry={diente.fusion.fusionIzquierdo ? "10" : "null"} fill="none" stroke='blue' />
                                        <ellipse cx={diente.fusion.fusionIzquierdo ? "-30" : "null"} cy={diente.fusion.fusionIzquierdo ? "15" : "null"} rx={diente.fusion.fusionIzquierdo ? "40" : "null"} ry={diente.fusion.fusionIzquierdo ? "10" : "null"} fill="none" stroke='blue' />
                                        {/* <text x="65" y="22" fill="#f00" font-size="18">S</text> */}
                                    </g>
                                </>
                                {/* Sueprnumerario */}
                                <>
                                    <g>
                                        <ellipse cx={diente.supernumerario.supernumerarioDerecho ? "80" : "null"} cy={diente.supernumerario.supernumerarioDerecho ? "15" : "null"} rx={diente.supernumerario.supernumerarioDerecho ? "80" : "null"} ry={diente.supernumerario.supernumerarioDerecho ? "10" : "null"} fill="none" stroke='blue' />

                                        <text x={diente.supernumerario.supernumerarioDerecho ? "65" : 'null'} y={diente.supernumerario.supernumerarioDerecho ? "22" : 'null'} fill="#00f" font-size="18">S</text>
                                    </g>
                                </>
                                <>
                                    <g>
                                        <ellipse cx={diente.supernumerario.supernumerarioIzquierdo ? "0.5" : "null"} cy={diente.supernumerario.supernumerarioIzquierdo ? "15" : "null"} rx={diente.supernumerario.supernumerarioIzquierdo ? "70" : "null"} ry={diente.supernumerario.supernumerarioIzquierdo ? "10" : "null"} fill="none" stroke='blue' />

                                        {/* <text x="65" y="22" fill="#f00" font-size="18">S</text> */}
                                    </g>
                                </>
                                {/* transposicion */}
                                <>
                                    <text x={diente.transposicion.transposicionDerecho ? "20" : 'null'} y={diente.transposicion.transposicionDerecho ? "40" : 'null'} fill="#00f" font-size="50">&#8631;</text>

                                    <text x={diente.transposicion.transposicionIzquierdo ? "0" : 'null'} y={diente.transposicion.transposicionIzquierdo ? "40" : 'null'} fill="#00f" font-size="50">&#8630;</text>
                                </>

                            </svg>
                        </Box>
                        <Box sx={{ position: "absolute", border: "1px solid transparent" }} mt={-3.8} ml={-1.5}>
                            <svg width="80" height="30">
                                {/* aparatoOrtodonticoRemovible */}
                                <>
                                    <g>
                                        <polygon
                                            points={diente.aparatoOrtodonticoRemovible.aparatoOrtodonticoRemovibleDerecho ? "0,0 20,15" : "null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.aparatoOrtodonticoRemovible.aparatoOrtodonticoRemovibleDerecho ? "20,15 40,0" : "null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.aparatoOrtodonticoRemovible.aparatoOrtodonticoRemovibleDerecho ? "40,0 60,15" : "null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.aparatoOrtodonticoRemovible.aparatoOrtodonticoRemovibleDerecho ? "60,15 80,0" : "null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                </>
                                <>
                                    <g>
                                        <polygon
                                            points={diente.aparatoOrtodonticoRemovible.aparatoOrtodonticoRemovibleIzquierdo ? "0,0 20,15" : "null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.aparatoOrtodonticoRemovible.aparatoOrtodonticoRemovibleIzquierdo ? "20,15 40,0" : "null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.aparatoOrtodonticoRemovible.aparatoOrtodonticoRemovibleIzquierdo ? "40,0 60,15" : "null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.aparatoOrtodonticoRemovible.aparatoOrtodonticoRemovibleIzquierdo ? "60,15 80,0" : "null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                </>
                                {/* aparatoOrtodonticoFijo */}
                                <g>
                                    <polygon
                                        points={diente.aparatoOrtodonticoFijo.aparatoOrtodonticoFijoInicial ? "40,0 40,10 50,10 50,0 40,0" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.aparatoOrtodonticoFijo.aparatoOrtodonticoFijoInicial ? "45,0 45,10" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.aparatoOrtodonticoFijo.aparatoOrtodonticoFijoInicial ? "40,5 50,5" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.aparatoOrtodonticoFijo.aparatoOrtodonticoFijoInicial ? "50,5 80,5" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.aparatoOrtodonticoFijo.aparatoOrtodonticoFijoMedio ? "0,5 80,5" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.aparatoOrtodonticoFijo.aparatoOrtodonticoFijoFinal ? "0,5 50,5" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.aparatoOrtodonticoFijo.aparatoOrtodonticoFijoFinal ? "40,0 40,10 50,10 50,0" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.aparatoOrtodonticoFijo.aparatoOrtodonticoFijoFinal ? "45,0 45,10" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="2"
                                    />
                                </g>
                                {/* protesisFija */}
                                <g>
                                    <polygon
                                        points={diente.protesisFija.protesisFijaInicial ? "40,0 40,10" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="4"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.protesisFija.protesisFijaInicial ? "40,0 80,0" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="4"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.protesisFija.protesisFijaMedio ? "0,0 80,0" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="4"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.protesisFija.protesisFijaFinal ? "0,0 40,0" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="4"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.protesisFija.protesisFijaFinal ? "40,10 40,0" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="4"
                                    />
                                </g>
                                {/* protesisRemovible */}
                                <g>
                                    <polygon
                                        points={diente.protesisRemovible.protesisRemovibleIzquierdo ? "5,5 40,5" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="5"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.protesisRemovible.protesisRemovibleIzquierdo ? "5,15 40,15" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="5"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.protesisRemovible.protesisRemovibleDerecho ? "5,5 80,5" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="5"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.protesisRemovible.protesisRemovibleDerecho ? "5,15 80,15" : "null"}
                                        fill="transparent"
                                        stroke="red"
                                        stroke-width="5"
                                    />
                                </g>
                            </svg>
                        </Box>
                        {console.log(diente.diastema.select)}
                        {
                            (diente.diastema.select || diente.fusion.select || diente.supernumerario.select || diente.transposicion.select || diente.aparatoOrtodonticoRemovible.select || diente.protesisRemovible.select || diente.protesisTotal.select || diente.edentuloTotal.select || diente.aparatoOrtodonticoFijo.select) &&
                            <Box sx={{ position: "absolute" }} mt={3.5} ml={6.2}>
                                <IconButton
                                    onClick={() => handleSelectionDoble(diente.id, diente.option)}
                                    size="medium"
                                >
                                    <CodeIcon color="info" fontSize="medium" />
                                </IconButton>
                            </Box>
                        }
                        {/* Fin parte numeros */}
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            {/* Boton borrar */}
                            <Box sx={{ margin: "0 auto" }}>
                                {
                                    diente.eraser && diente.option !== "carie" && diente.option !== "restauracionTemporal" && diente.option !== "sellantes" && diente.option !== "restauracion" && diente.option !== "desgasteOclusalIncisal" && diente.option !== "dienteDiscromico" && diente.option !== "dienteEctopico" && diente.option !== "impactacion" && diente.option !== "implante" && diente.option !== "macrodoncia" && diente.option !== "microdoncia" && diente.option !== "semiImplantacion" && diente.option !== "dienteIntruido" && diente.option !== "dienteExtraido" && diente.option !== "dienteClavija" && diente.option !== "germinacion" &&
                                    <Box sx={{ zIndex: "99999" }} mt={0}>
                                        <IconButton
                                            color="primary"
                                            onClick={() => {
                                                handleBorrarBracketsAndProtesisFija(diente.id, diente.option)
                                                console.log("boton borrar ACTIVADOOO")
                                            }
                                            }
                                            size="small"
                                            sx={{ backgroundColor: "#fdd" }}
                                        >
                                            <CloseIcon color="error" fontSize="small" />
                                        </IconButton>
                                    </Box>
                                }
                            </Box>
                            {/* fin boton borrar */}
                            <Box>
                                {/* Parte todo el diente raiz-centro */}
                                <svg width="60" height="70">
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'topUp', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="30,0 0,30 60,30"
                                            fill={
                                                diente.carie.topUp === true ? "red" :
                                                    diente.restauracion.topUp === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.topUp === true ? "red" :
                                                    diente.sellantes.topUp === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.topUp === true ? "5" :
                                                    diente.sellantes.topUp === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'topUpLeft', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="0,0 0,30 30,30"
                                            fill={
                                                diente.carie.topUpLeft === true ? "red" :
                                                    diente.restauracion.topUpLeft === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.topUpLeft === true ? "red" :
                                                    diente.sellantes.topUpLeft === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.topUpLeft === true ? "5" :
                                                    diente.sellantes.topUpLeft === true ? "5" :
                                                        '1'
                                            }
                                        />

                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'topUpRight', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="60,0 30,30 60,30"
                                            fill={
                                                diente.carie.topUpRight === true ? "red" :
                                                    diente.restauracion.topUpRight === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.topUpRight === true ? "red" :
                                                    diente.sellantes.topUpRight === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.topUpRight === true ? "5" :
                                                    diente.sellantes.topUpRight === true ? "5" :
                                                        '1'
                                            }
                                            stroke-dasharray="2"
                                        />

                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'top', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="0,30 20,50 40,50 60,30"
                                            fill={
                                                diente.carie.top === true ? "red" :
                                                    diente.restauracion.top === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.top === true ? "red" :
                                                    diente.sellantes.top === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.top === true ? "5" :
                                                    diente.sellantes.top === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'left', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="0,30 0,70 20,50"
                                            fill={
                                                diente.carie.left === true ? "red" :
                                                    diente.restauracion.left === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.left === true ? "red" :
                                                    diente.sellantes.left === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.left === true ? "5" :
                                                    diente.sellantes.left === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'bottom', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="20,50 0,70 60,70 40,50"
                                            fill={
                                                diente.carie.bottom === true ? "red" :
                                                    diente.restauracion.bottom === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.bottom === true ? "red" :
                                                    diente.sellantes.bottom === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.bottom === true ? "5" :
                                                    diente.sellantes.bottom === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'right', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="60,30 40,50 60,70"
                                            fill={
                                                diente.carie.right === true ? "red" :
                                                    diente.restauracion.right === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.right === true ? "red" :
                                                    diente.sellantes.right === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.right === true ? "5" :
                                                    diente.sellantes.right === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    {/* <g onClick={() => hanleFunction(diente.id, diente.option, 'centerTop', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                <polygon
                                    points="10,40 10,50 50,50 50,40"
                                    fill={
                                        diente.carie.centerTop === true ? "red" :
                                            diente.restauracion.centerTop === true ? "blue" :
                                                "white"
                                    }
                                    stroke={
                                        diente.restauracionTemporal.centerTop === true ? "red" :
                                            diente.sellantes.centerTop === true ? "blue" :
                                                'black'
                                    }
                                    stroke-width={
                                        diente.restauracionTemporal.centerTop === true ? "5" :
                                            diente.sellantes.centerTop === true ? "5" :
                                                '1'
                                    }
                                />
                            </g>
                            <g onClick={() => hanleFunction(diente.id, diente.option, 'centerBottom', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                <polygon
                                    points="10,50 10,60 50,60 50,50"
                                    fill={
                                        diente.carie.centerBottom === true ? "red" :
                                            diente.restauracion.centerBottom === true ? "blue" :
                                                "white"
                                    }
                                    stroke={
                                        diente.restauracionTemporal.centerBottom === true ? "red" :
                                            diente.sellantes.centerBottom === true ? "blue" :
                                                'black'
                                    }
                                    stroke-width={
                                        diente.restauracionTemporal.centerBottom === true ? "5" :
                                            diente.sellantes.centerBottom === true ? "5" :
                                                '1'
                                    }
                                />
                            </g> */}
                                    {/* centerTopCenterLeft */}
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'centerTopCenterLeft', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="10,40 10,50 23.33,50 23.33,40"
                                            fill={
                                                diente.carie.centerTopCenterLeft === true ? "red" :
                                                    diente.restauracion.centerTopCenterLeft === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.centerTopCenterLeft === true ? "red" :
                                                    diente.sellantes.centerTopCenterLeft === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.centerTopCenterLeft === true ? "5" :
                                                    diente.sellantes.centerTopCenterLeft === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'centerBottomCenterLeft', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="10,50 10,60 23.33,60 23.33,50"
                                            fill={
                                                diente.carie.centerBottomCenterLeft === true ? "red" :
                                                    diente.restauracion.centerBottomCenterLeft === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.centerBottomCenterLeft === true ? "red" :
                                                    diente.sellantes.centerBottomCenterLeft === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.centerBottomCenterLeft === true ? "5" :
                                                    diente.sellantes.centerBottomCenterLeft === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'centerTopCenterCenter', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="23.33,40 23.33,50 36.66,50 36.66,40"
                                            fill={
                                                diente.carie.centerTopCenterCenter === true ? "red" :
                                                    diente.restauracion.centerTopCenterCenter === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.centerTopCenterCenter === true ? "red" :
                                                    diente.sellantes.centerTopCenterCenter === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.centerTopCenterCenter === true ? "5" :
                                                    diente.sellantes.centerTopCenterCenter === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'centerBottomCenterCenter', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="23.33,50 23.33,60 36.66,60 36.66,50"
                                            fill={
                                                diente.carie.centerBottomCenterCenter === true ? "red" :
                                                    diente.restauracion.centerBottomCenterCenter === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.centerBottomCenterCenter === true ? "red" :
                                                    diente.sellantes.centerBottomCenterCenter === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.centerBottomCenterCenter === true ? "5" :
                                                    diente.sellantes.centerBottomCenterCenter === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'centerBottomCenterRight', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="36.66,50 36.66,60 50,60 50,50"
                                            fill={
                                                diente.carie.centerBottomCenterRight === true ? "red" :
                                                    diente.restauracion.centerBottomCenterRight === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.centerBottomCenterRight === true ? "red" :
                                                    diente.sellantes.centerBottomCenterRight === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.centerBottomCenterRight === true ? "5" :
                                                    diente.sellantes.centerBottomCenterRight === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    {/* centerTopCenterRight */}
                                    <g onClick={() => hanleFunction(diente.id, diente.option, 'centerTopCenterRight', selectExtra !== null && selectExtra !== undefined && selectExtra)} style={{ cursor: 'pointer' }}>
                                        <polygon
                                            points="36.66,40 36.66,50 50,50 50,40"
                                            fill={
                                                diente.carie.centerTopCenterRight === true ? "red" :
                                                    diente.restauracion.centerTopCenterRight === true ? "blue" :
                                                        "white"
                                            }
                                            stroke={
                                                diente.restauracionTemporal.centerTopCenterRight === true ? "red" :
                                                    diente.sellantes.centerTopCenterRight === true ? "blue" :
                                                        'black'
                                            }
                                            stroke-width={
                                                diente.restauracionTemporal.centerTopCenterRight === true ? "5" :
                                                    diente.sellantes.centerTopCenterRight === true ? "5" :
                                                        '1'
                                            }
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.coronaTemporal.select ? `0,30 0,70 60,70 60,30` : `0,${'null'} 0,70 60,70 60,${'null'}`}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width={diente.coronaTemporal.select ? "5" : "1"}
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.coronaDefinitiva.select ? `0,30 0,70 60,70 60,30` : `0,${'null'} 0,70 60,70 60,${'null'}`}
                                            fill="transparent"
                                            stroke="blue"
                                            stroke-width={diente.coronaDefinitiva.select ? "5" : "1"}
                                        />
                                    </g>
                                    <g>
                                        <text x={diente.remanenteReticular.select ? "0" : 'null'} y={diente.remanenteReticular.select ? "35" : 'null'} font-family="Arial" font-size="45" stroke-width="5" fill="red">R</text>
                                    </g>
                                    <g>
                                        <text x={diente.remanenteReticular.select ? "30" : 'null'} y={diente.remanenteReticular.select ? "35" : 'null'} font-family="Arial" font-size="45" stroke-width="5" fill="red">R</text>
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.dienteAusente.select ? "00,00 55,70 60,70 5,0 0,0" : "00,null 55,70 60,70 5,0 0,null"}
                                            fill="blue"
                                            stroke="blue"
                                            stroke-width="1"
                                        />
                                        <polygon
                                            points={diente.dienteAusente.select ? "55,00 0,70 5,70 60,0 55,0" : "55,null 0,70 5,70 60,0 55,null"}
                                            fill="blue"
                                            stroke="blue"
                                            stroke-width="1"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.exodoncia.select ? "00,00 55,70 60,70 5,0 0,0" : "00,null 55,70 60,70 5,0 0,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="1"
                                        />
                                        <polygon
                                            points={diente.exodoncia.select ? "55,00 0,70 5,70 60,0 55,0" : "55,null 0,70 5,70 60,0 55,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="1"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.fracturas.fracturaIzquierda ? "55,30 0,70 5,70 60,30 55,30" : "55,null 0,70 5,70 60,30 55,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="1"
                                        />
                                        <polygon
                                            points={diente.fracturas.fracturaDerecha ? "0,30 55,70 60,70 5,30 0,30" : "0,null 55,70 60,70 5,30 0,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="1"
                                        />
                                    </g>
                                    {/* Diente en Erupcion */}
                                    <g>
                                        <polygon
                                            points={diente.dienteErupcion.select ? "30,0 0,15" : "30,null 0,30 60,0 30,null"}
                                            fill="transparent"
                                            stroke="blue"
                                            stroke-width="5"
                                        />
                                        <polygon
                                            points={diente.dienteErupcion.select ? "0,15 60,30" : "30,null 0,30 60,0 30,null"}
                                            fill="transparent"
                                            stroke="blue"
                                            stroke-width="5"
                                        />
                                        <polygon
                                            points={diente.dienteErupcion.select ? "60,30 0,40" : "30,null 0,30 60,0 30,null"}
                                            fill="transparent"
                                            stroke="blue"
                                            stroke-width="5"
                                        />
                                        <polygon
                                            points={diente.dienteErupcion.select ? "0,40 30,47" : "30,null 0,30 60,0 30,null"}
                                            fill="transparent"
                                            stroke="blue"
                                            stroke-width="5"
                                        />
                                        <polygon
                                            points={diente.dienteErupcion.select ? "20,50 30,70 40,50 20,50" : "30,null 0,30 60,0 30,null"}
                                            fill="blue"
                                            stroke="blue"
                                            stroke-width="1"
                                        />
                                    </g>
                                    {/* tratamientoPulparRealizado */}
                                    <g>
                                        <polygon
                                            points={diente.tratamientoPulparRealizado.tratamientoPulparRealizadoCentral ? "30,0 30,30" : "30,null 0,30 60,0 30,null"}
                                            fill="blue"
                                            stroke="blue"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.tratamientoPulparRealizado.tratamientoPulparRealizadoIzquierdo ? "0,0 15,30" : "30,null 0,30 60,0 30,null"}
                                            fill="blue"
                                            stroke="blue"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.tratamientoPulparRealizado.tratamientoPulparRealizadoDerecho ? "60,0 45,30" : "30,null 0,30 60,0 30,null"}
                                            fill="blue"
                                            stroke="blue"
                                            stroke-width="5"
                                        />
                                    </g>
                                    {/* tratamientoPulparPorRealizar */}
                                    <g>
                                        <polygon
                                            points={diente.tratamientoPulparPorRealizar.tratamientoPulparPorRealizarCentral ? "30,0 30,30" : "30,null 0,30 60,0 30,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.tratamientoPulparPorRealizar.tratamientoPulparPorRealizarIzquierdo ? "0,0 15,30" : "30,null 0,30 60,0 30,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.tratamientoPulparPorRealizar.tratamientoPulparPorRealizarDerecho ? "60,0 45,30" : "30,null 0,30 60,0 30,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    {/* Muñon */}
                                    <g>
                                        <polygon
                                            points={diente.munon.munonCentral ? "30,0 30,45" : "30,null 0,30 60,0 30,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.munon.munonCentral ? "20,45 20,55 40,55 40,45 20,45" : "30,null 0,30 60,0 30,null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="3"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.munon.munonIzquierdo ? "0,0 30,45" : "30,null 0,30 60,0 30,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.munon.munonIzquierdo ? "20,45 20,55 40,55 40,45 20,45" : "30,null 0,30 60,0 30,null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="3"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.munon.munonDerecho ? "60,0 30,45" : "30,null 0,30 60,0 30,null"}
                                            fill="red"
                                            stroke="red"
                                            stroke-width="5"
                                        />
                                    </g>
                                    <g>
                                        <polygon
                                            points={diente.munon.munonDerecho ? "20,45 20,55 40,55 40,45 20,45" : "30,null 0,30 60,0 30,null"}
                                            fill="transparent"
                                            stroke="red"
                                            stroke-width="3"
                                        />
                                    </g>
                                    {/* Diastema */}
                                    <>
                                        <g>
                                            <polygon
                                                points={diente.diastema.diastemaDerecho ? "50,30 60,40" : "30,null 0,30 60,0 30,null"}
                                                fill="transparent"
                                                stroke="blue"
                                                stroke-width="5"
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points={diente.diastema.diastemaDerecho ? "60,35 60,60" : "30,null 0,30 60,0 30,null"}
                                                fill="transparent"
                                                stroke="blue"
                                                stroke-width="8"
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points={diente.diastema.diastemaDerecho ? "60,60 50,70" : "30,null 0,30 60,0 30,null"}
                                                fill="transparent"
                                                stroke="blue"
                                                stroke-width="5"
                                            />
                                        </g>
                                    </>
                                    <>
                                        <g>
                                            <polygon
                                                points={diente.diastema.diastemaIzquierdo ? "10,30 0,40" : "30,null 0,30 60,0 30,null"}
                                                fill="blue"
                                                stroke="blue"
                                                stroke-width="5"
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points={diente.diastema.diastemaIzquierdo ? "0,40 0,60" : "30,null 0,30 60,0 30,null"}
                                                fill="blue"
                                                stroke="blue"
                                                stroke-width="8"
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points={diente.diastema.diastemaIzquierdo ? "0,60 10,70" : "30,null 0,30 60,0 30,null"}
                                                fill="blue"
                                                stroke="blue"
                                                stroke-width="5"
                                            />
                                        </g>
                                    </>
                                    {/* protesisTotal */}
                                    <>
                                        <g>
                                            <polygon
                                                points={diente.protesisTotal.protesisTotalIzquierdo ? "0,50 80,50" : "null"}
                                                fill="transparent"
                                                stroke="red"
                                                stroke-width="5"
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points={diente.protesisTotal.protesisTotalIzquierdo ? "0,60 80,60" : "null"}
                                                fill="transparent"
                                                stroke="red"
                                                stroke-width="5"
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points={diente.protesisTotal.protesisTotalDerecho ? "0,50 80,50" : "null"}
                                                fill="transparent"
                                                stroke="red"
                                                stroke-width="5"
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points={diente.protesisTotal.protesisTotalDerecho ? "0,60 80,60" : "null"}
                                                fill="transparent"
                                                stroke="red"
                                                stroke-width="5"
                                            />
                                        </g>
                                    </>
                                    {/* edentuloTotal */}
                                    <>
                                        <g>
                                            <polygon
                                                points={diente.edentuloTotal.edentuloTotalIzquierdo ? "0,50 80,50" : "null"}
                                                fill="transparent"
                                                stroke="blue"
                                                stroke-width="5"
                                            />
                                        </g>
                                        <g>
                                            <polygon
                                                points={diente.edentuloTotal.edentuloTotalDerecho ? "0,50 80,50" : "null"}
                                                fill="transparent"
                                                stroke="blue"
                                                stroke-width="5"
                                            />
                                        </g>
                                    </>
                                </svg>
                                {/* Fin Parte todo el diente raiz-cento */}
                            </Box>
                        </Box>

                        {/* Parte encima de la parte central del diente (parte opuesta a la raiz) */}
                        <Box mt={0}>
                            <svg width="60" height="30">
                                <g>
                                    <polygon
                                        points={diente.dienteIntruido.select ? "30,0 20,5 40,5 30,0" : "30,null 25,5 35,5 30,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="1"
                                    />
                                    <polygon
                                        points={diente.dienteIntruido.select ? "25,5 25,20 35,20 35,5 25,5" : "25,null 25,20 35,20 35,5 25,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="1"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.dienteExtraido.select ? "25,0 25,15 35,15 35,0 25,0" : "25,null 25,20 35,20 35,0 25,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="1"
                                    />
                                    <polygon
                                        points={diente.dienteExtraido.select ? "20,15 30,20 40,15 20,15" : "30,null 25,5 35,5 30,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="1"
                                    />
                                </g>
                                {/* giroversion */}
                                <g>
                                    <path
                                        d={diente.giroversion.giroAntihorario ? "M5,5 Q30,30 55,5" : "M5,null Q30,30 55,null"}
                                        fill="transparent"
                                        stroke="blue"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.giroversion.giroAntihorario ? "56,5 41,8 58,10" : "56,null 41,8 58,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <path
                                        d={diente.giroversion.giroHorario ? "M5,5 Q30,30 55,5" : "M5,null Q30,30 55,null"}
                                        fill="transparent"
                                        stroke="blue"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.giroversion.giroHorario ? "4,5 19,8 2,10" : "56,null 41,8 58,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="2"
                                    />
                                </g>
                                {/* Migracion */}
                                <g>
                                    <polygon
                                        points={diente.migracion.migracionDerecha ? "0,5 0,10 50,10 50,5 0,5" : "0,null 0,10 50,10 50,5 0,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.migracion.migracionDerecha ? "50,0 50,15 60,8 50,0" : "50,null 0,15 60,7 50,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.migracion.migracionIzquierda ? "10,0 0,8 10,15 10,0" : "56,null 41,8 58,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="2"
                                    />
                                </g>
                                <g>
                                    <polygon
                                        points={diente.migracion.migracionIzquierda ? "10,5 10,10 60,10 60,5 10,5" : "56,null 41,8 58,null"}
                                        fill="blue"
                                        stroke="blue"
                                        stroke-width="2"
                                    />
                                </g>
                            </svg>
                        </Box>
                        {/* Fin Parte encima de la parte central del diente (parte opuesta a la raiz) */}
                    </Box>
                </Box>
            </Box >
        </>
    )
}
