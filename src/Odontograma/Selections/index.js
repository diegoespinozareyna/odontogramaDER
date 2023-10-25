import { Box, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react'
import './index.css'

export default function Selections({ handleSlection, selectExtra, handleSelectChange }) {

    const [selectOption, setSelectOption] = useState(''); // Valor por defecto
    const [countBorrar, setCountBorrar] = useState(0); // Valor por defecto

    const customCursorRef = useRef(null);

    useEffect(() => {
        const cursor = customCursorRef.current;

        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            cursor.style.left = `${clientX}px`;
            cursor.style.top = `${clientY}px`;
        });
    }, []);

    const handleBorrar = (id) => {
        if (id !== 'eraser') {
            setCountBorrar(id)
        }
    }

    // const handleSelectChange = (event) => {
    //     setSelectExtra(event.target.value);
    // }

    useEffect(() => {
        console.log(selectExtra)
        // console.log(handleSlection())
    }, [selectExtra])

    return (
        <>


            <div className={selectOption === 'eraser' ? "app" : 'app1'}>
                <div className={selectOption === 'eraser' ? "custom-cursor" : 'app2'} ref={customCursorRef}>
                    <span className={selectOption === 'eraser' ? "cursor-message" : 'app2'}>{`Borre ${countBorrar}`}</span>
                </div>
                <Box sx={{ position: "relative", zIndex: "999" }}>
                    <RadioGroup
                        // name={dato.id}
                        // value={dato.data.isChecked ? 'si' : 'no'}
                        // onChange={(e) =>
                        //     handleDatosTextField2(dato.id, e.target.value, "patology")
                        // }
                        onChange={(e) => {
                            handleSlection(e.target.value, selectExtra)
                            setSelectOption(e.target.value)
                            handleBorrar(e.target.value)
                        }}
                    >
                        {/* <Box sx={{ borderBottom: "1px solid #888", position: "sticky", backgroundColor: "#fff", minWidth: "150px" }}>
                    <FormControlLabel
                        value={'eraser'}
                        control={<Radio />}
                        label="Borrar"
                    />
                </Box> */}
                        <Box display={"flex"} flexDirection={"column"} sx={{ maxHeight: "600px", overflowY: "scroll", maxWidth: "300px", padding: "10px" }}>
                            <Box sx={{ backgroundColor: "#fff" }}>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'carie'}
                                                control={<Radio />}
                                                label="Carie"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} />
                                        </Grid>
                                        {
                                            selectOption === 'carie' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }

                                        {
                                            selectOption === 'carie' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px", display: "flex" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'desgasteOclusalIncisal'}
                                                control={<Radio />}
                                                label="Desgaste Oclusal / Incisal"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} /> */}
                                            <h4>DES</h4>
                                        </Grid>
                                        {
                                            selectOption === 'desgasteOclusalIncisal' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }

                                        {
                                            selectOption === 'desgasteOclusalIncisal' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'dienteDiscromico'}
                                                control={<Radio />}
                                                label="Diente Discrómico"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} /> */}
                                            <h4>DIS</h4>
                                        </Grid>
                                        {
                                            selectOption === 'dienteDiscromico' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'dienteDiscromico' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'dienteEctopico'}
                                                control={<Radio />}
                                                label="Diente Ectópico"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} /> */}
                                            <h4>E</h4>
                                        </Grid>
                                        {
                                            selectOption === 'dienteEctopico' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'dienteEctopico' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'impactacion'}
                                                control={<Radio />}
                                                label="Impactación"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} /> */}
                                            <h4>I</h4>
                                        </Grid>
                                        {
                                            selectOption === 'impactacion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'impactacion' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'implante'}
                                                control={<Radio />}
                                                label="Implante"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} /> */}
                                            <h4>IMP</h4>
                                        </Grid>
                                        {
                                            selectOption === 'implante' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'implante' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'macrodoncia'}
                                                control={<Radio />}
                                                label="Macrodoncia"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} /> */}
                                            <h4>MAC</h4>
                                        </Grid>
                                        {
                                            selectOption === 'macrodoncia' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'macrodoncia' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'microdoncia'}
                                                control={<Radio />}
                                                label="Microdoncia"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} /> */}
                                            <h4>MIC</h4>
                                        </Grid>
                                        {
                                            selectOption === 'microdoncia' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'microdoncia' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'semiImplantacion'}
                                                control={<Radio />}
                                                label="Semi Implantación"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://img.freepik.com/vector-premium/gran-vector-signo-cuadrado-rojo-icono-bloque-rojo_302321-2467.jpg' alt='img' width={20} /> */}
                                            <h4>SI</h4>
                                        </Grid>
                                        {
                                            selectOption === 'semiImplantacion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'semiImplantacion' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'restauracionTemporal'}
                                                control={<Radio />}
                                                label="Restauración Temporal"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://img.freepik.com/vector-premium/marco-rojo-marco-realista-aislado-sobre-fondo-blanco-sus-presentaciones_178392-61.jpg' alt='img' width={20} />
                                            {/* <h4>DIS</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'restauracionTemporal' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'restauracionTemporal' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'sellantes'}
                                                control={<Radio />}
                                                label="Sellantes"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdaxCIMqGNZkH0eYB4W8EExEcBYDicVqoVNcuqCDGGKIARarLAZb4yazjJXFAtoAhhdSQ&usqp=CAU' alt='img' width={20} />
                                            {/* <h4>DIS</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'sellantes' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'sellantes' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'coronaTemporal'}
                                                control={<Radio />}
                                                label="Corona Temporal"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://cdn-icons-png.flaticon.com/512/399/399278.png' alt='img' width={20} />
                                            {/* <h4>DIS</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'coronaTemporal' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'coronaTemporal' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'coronaDefinitiva'}
                                                    control={<Radio />}
                                                    label="Corona Definitiva"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="coronaCompleta">Corona Completa</option>
                                                    <option value="coronaFenestrada">Corona Fenestrada</option>
                                                    <option value="coronaMetalCeramica">Corona Metal Ceramica</option>
                                                    <option value="coronaParcial3_4">Corona Parcial 3/4</option>
                                                    <option value="coronaParcial4_5">Corona Parcial 4/5</option>
                                                    <option value="coronaParcial7_8">Corona Parcial 7/8</option>
                                                    <option value="coronaVeneer">Corona Veneer</option>
                                                    <option value="coronaJacket">Corona Jacket</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://e7.pngegg.com/pngimages/515/485/png-clipart-circle-area-point-angle-blue-circle-blue-text-thumbnail.png' alt='img' width={20} />
                                            {/* <h4>DIS</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'coronaDefinitiva' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'coronaDefinitiva' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'movilidad'}
                                                    control={<Radio />}
                                                    label="Movilidad"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="M1">Menos de 1mm de movimiento de longitud</option>
                                                    <option value="M2">Más de 1mm de movimiento de longitud</option>
                                                    <option value="M3">Más de 1mm de movimiento de longitud y hundimiento en el alveolo</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://e7.pngegg.com/pngimages/515/485/png-clipart-circle-area-point-angle-blue-circle-blue-text-thumbnail.png' alt='img' width={20} /> */}
                                            <h4>M</h4>
                                        </Grid>
                                        {
                                            selectOption === 'movilidad' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'movilidad' &&
                                            <Grid container>
                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}

                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'restauracion'}
                                                    control={<Radio />}
                                                    label="Restauración"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="AM">Amalgama</option>
                                                    <option value="R">Resina</option>
                                                    <option value="IV">Ionomero de vidrio</option>
                                                    <option value="IM">Incrustación Metálica</option>
                                                    <option value="IE">Incrustación Estética</option>
                                                    <option value="CE">Carilla Estética</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://w7.pngwing.com/pngs/42/18/png-transparent-blue-web-colors-yellow-drawing-blue-square-square-blue-illustration-miscellaneous-purple-blue-thumbnail.png' alt='img' width={20} />
                                            {/* <h4>DIS</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'restauracion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'restauracion' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'remanenteReticular'}
                                                control={<Radio />}
                                                label="Remanente Reticular"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://w7.pngwing.com/pngs/42/18/png-transparent-blue-web-colors-yellow-drawing-blue-square-square-blue-illustration-miscellaneous-purple-blue-thumbnail.png' alt='img' width={20} /> */}
                                            <h4 style={{ color: "red" }}>RR</h4>
                                        </Grid>
                                        {
                                            selectOption === 'remanenteReticular' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'remanenteReticular' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'dienteAusente'}
                                                control={<Radio />}
                                                label="Diente Ausente"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://w7.pngwing.com/pngs/42/18/png-transparent-blue-web-colors-yellow-drawing-blue-square-square-blue-illustration-miscellaneous-purple-blue-thumbnail.png' alt='img' width={20} /> */}
                                            <h4 style={{ color: "blue" }}>X</h4>
                                        </Grid>
                                        {
                                            selectOption === 'dienteAusente' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'dienteAusente' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'exodoncia'}
                                                control={<Radio />}
                                                label="Exodoncia"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://w7.pngwing.com/pngs/42/18/png-transparent-blue-web-colors-yellow-drawing-blue-square-square-blue-illustration-miscellaneous-purple-blue-thumbnail.png' alt='img' width={20} /> */}
                                            <h4 style={{ color: "red" }}>X</h4>
                                        </Grid>
                                        {
                                            selectOption === 'exodoncia' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'exodoncia' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'dienteClavija'}
                                                control={<Radio />}
                                                label="Diente en Clavija"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://www.quia.com/files/quia/users/sandrarosado/FormaGeometricas/triangulo-azul' alt='img' width={20} />
                                            {/* <h4 style={{ color: "red" }}>X</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'dienteClavija' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'dienteClavija' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'dienteIntruido'}
                                                control={<Radio />}
                                                label="Diente Intruido"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://w7.pngwing.com/pngs/677/397/png-transparent-computer-icons-arrow-upward-blue-angle-triangle.png' alt='img' width={20} />
                                            {/* <h4 style={{ color: "red" }}>X</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'dienteIntruido' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'dienteIntruido' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'dienteExtraido'}
                                                control={<Radio />}
                                                label="Diente Extraido"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcy2hHcpHwSD7Mv1iOI6T0RSqi2wwAcNnQ3g&usqp=CAU' alt='img' width={20} />
                                            {/* <h4 style={{ color: "red" }}>X</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'dienteExtraido' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'dienteExtraido' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'fracturas'}
                                                    control={<Radio />}
                                                    label="Fracturas"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="fracturaIzquierda">/</option>
                                                    <option value="fracturaDerecha">\</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img style={{ transform: 'scaleX(-1)', marginRight: "20px" }} src='https://i.vippng.com/png/small/125-1254235_sciezka-edukacyjna-czerwona-clip-art-fondo-blanco-con.png' alt='img' width={20} />
                                            <img src='https://i.vippng.com/png/small/125-1254235_sciezka-edukacyjna-czerwona-clip-art-fondo-blanco-con.png' alt='img' width={20} />
                                            {/* <h4 style={{ color: "red" }}>X</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'fracturas' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'fracturas' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'germinacion'}
                                                control={<Radio />}
                                                label="Germinación"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img src='https://e7.pngegg.com/pngimages/515/485/png-clipart-circle-area-point-angle-blue-circle-blue-text-thumbnail.png' alt='img' width={20} />
                                            {/* <h4 style={{ color: "red" }}>X</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'germinacion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'germinacion' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'giroversion'}
                                                    control={<Radio />}
                                                    label="Giro versión"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="giroHorario">&#10558;</option>
                                                    <option value="giroAntihorario">&#10559;</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://e7.pngegg.com/pngimages/515/485/png-clipart-circle-area-point-angle-blue-circle-blue-text-thumbnail.png' alt='img' width={20} /> */}
                                            <h4 style={{ color: "blue" }}>&#10558;</h4>
                                            <h4 style={{ color: "blue", marginLeft: "20px" }}>&#10559;</h4>
                                        </Grid>
                                        {
                                            selectOption === 'giroversion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'giroversion' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'migracion'}
                                                    control={<Radio />}
                                                    label="Migración"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="migracionDerecha">{'-->'}</option>
                                                    <option value="migracionIzquierda">{'<--'}</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img src='https://e7.pngegg.com/pngimages/515/485/png-clipart-circle-area-point-angle-blue-circle-blue-text-thumbnail.png' alt='img' width={20} /> */}
                                            <h4 style={{ color: "blue" }}>&#129138;</h4>
                                            <h4 style={{ color: "blue", marginLeft: "20px" }}>&#129128;</h4>
                                        </Grid>
                                        {
                                            selectOption === 'migracion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'migracion' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'dienteErupcion'}
                                                control={<Radio />}
                                                label="Diente en Erupción"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img style={{ transform: 'scaleY(-1)' }} src='https://pruebas.pulsosalud.com/images/odonto/erup.gif' alt='img' width={50} />
                                            {/* <h4 style={{ color: "blue" }}>&#129138;</h4>
                                    <h4 style={{ color: "blue", marginLeft: "20px" }}>&#129128;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'dienteErupcion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'dienteErupcion' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'tratamientoPulparRealizado'}
                                                    control={<Radio />}
                                                    label="Tratamiento Pulpar Realizado"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="tratamientoPulparRealizadoCentral">{'Central'}</option>
                                                    <option value="tratamientoPulparRealizadoIzquierdo">{'Izquierdo'}</option>
                                                    <option value="tratamientoPulparRealizadoDerecho">{'Derecho'}</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img 
                                    // style={{ transform: 'scaleY(-1)' }} 
                                    src='https://pruebas.pulsosalud.com/images/odonto/erup.gif' alt='img' width={50} /> */}
                                            <h4 style={{ color: "blue" }}>&#11018;</h4>
                                            <h4 style={{ color: "blue", marginLeft: "20px" }}>&#11019;</h4>
                                            <h4 style={{ color: "blue", marginLeft: "20px" }}>&#11021;</h4>
                                        </Grid>
                                        {
                                            selectOption === 'tratamientoPulparRealizado' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'tratamientoPulparRealizado' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'tratamientoPulparPorRealizar'}
                                                    control={<Radio />}
                                                    label="Tratamiento Pulpar por Realizar"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="tratamientoPulparPorRealizarCentral">{'Central'}</option>
                                                    <option value="tratamientoPulparPorRealizarIzquierdo">{'Izquierdo'}</option>
                                                    <option value="tratamientoPulparPorRealizarDerecho">{'Derecho'}</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            {/* <img 
                                    // style={{ transform: 'scaleY(-1)' }} 
                                    src='https://pruebas.pulsosalud.com/images/odonto/erup.gif' alt='img' width={50} /> */}
                                            <h4 style={{ color: "red" }}>&#11018;</h4>
                                            <h4 style={{ color: "red", marginLeft: "20px" }}>&#11019;</h4>
                                            <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4>
                                        </Grid>
                                        {
                                            selectOption === 'tratamientoPulparPorRealizar' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'tratamientoPulparPorRealizar' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888", paddingBottom: "10px" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                                <FormControlLabel
                                                    value={'munon'}
                                                    control={<Radio />}
                                                    label="Muñon"
                                                />
                                                <select value={selectExtra} onChange={handleSelectChange}>
                                                    <option value="">-- Seleccione una Opción --</option>
                                                    <option value="munonCentral">{'Central'}</option>
                                                    <option value="munonIzquierdo">{'Izquierdo'}</option>
                                                    <option value="munonDerecho">{'Derecho'}</option>
                                                </select>
                                            </Box>
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/perno.gif' alt='img' width={50} />
                                            <h4 style={{ color: "black" }}>&#11018;</h4>
                                            <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4>
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'munon' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'munon' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'diastema'}
                                                control={<Radio />}
                                                label="Diastema"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/diastema.gif' alt='img' width={50} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'diastema' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'diastema' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'fusion'}
                                                control={<Radio />}
                                                label="Fusión"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/fusion.gif' alt='img' width={50} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'fusion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'fusion' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'supernumerario'}
                                                control={<Radio />}
                                                label="Supernumerario"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/supern.gif' alt='img' width={90} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'supernumerario' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'supernumerario' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'transposicion'}
                                                control={<Radio />}
                                                label="Transposición"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/transp.gif' alt='img' width={50} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'transposicion' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'transposicion' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'aparatoOrtodonticoRemovible'}
                                                control={<Radio />}
                                                label="Aparato Ortodontico Removible"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/lineaor.gif' alt='img' width={90} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'aparatoOrtodonticoRemovible' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'aparatoOrtodonticoRemovible' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'protesisRemovible'}
                                                control={<Radio />}
                                                label="Prótesis Removible"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/line9.gif' alt='img' width={90} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'protesisRemovible' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'protesisRemovible' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'protesisTotal'}
                                                control={<Radio />}
                                                label="Prótesis Total"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/line8.gif' alt='img' width={90} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'protesisTotal' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'protesisTotal' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'edentuloTotal'}
                                                control={<Radio />}
                                                label="Edentulo Total"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/line6.gif' alt='img' width={90} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'edentuloTotal' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'edentuloTotal' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'aparatoOrtodonticoFijo'}
                                                control={<Radio />}
                                                label="Aparato Ortodontico Fijo"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/lineapa.gif' alt='img' width={90} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'aparatoOrtodonticoFijo' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'aparatoOrtodonticoFijo' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                                <Box sx={{ borderBottom: "1px solid #888" }}>
                                    <Grid container>
                                        <Grid xs={12}>
                                            <FormControlLabel
                                                value={'protesisFija'}
                                                control={<Radio />}
                                                label="Protesis Fija"
                                            />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                            <img
                                                // style={{ transform: 'scaleY(-1)' }} 
                                                src='https://pruebas.pulsosalud.com/images/odonto/line3.gif' alt='img' width={90} />
                                            {/* <h4 style={{ color: "black" }}>&#11018;</h4>
                                    <h4 style={{ color: "black", marginLeft: "20px" }}>&#11019;</h4> */}
                                            {/* <h4 style={{ color: "red", marginLeft: "20px" }}>&#11021;</h4> */}
                                        </Grid>
                                        {
                                            selectOption === 'protesisFija' &&
                                            <Grid sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center" }} xs={6}>
                                                <FormControlLabel
                                                    value={'eraser'}
                                                    control={<Radio />}
                                                    label="Borrar"
                                                />
                                            </Grid>
                                        }
                                        {
                                            selectOption === 'protesisFija' &&
                                            <Grid container>
                                                <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione la parte del diente con ${selectOption} o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid>

                                                {/* <Grid border={"1px solid #efefef"} backgroundColor={"#ffa"} xs={12}><Typography sx={{ display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "centrer", alignItems: "center", padding: "10px" }}>{`Seleccione el recuadro correspondiente al diente o elija la opción borrar para borrar ${selectOption}`}</Typography></Grid> */}
                                            </Grid>
                                        }
                                    </Grid>
                                </Box>
                            </Box>

                        </Box>
                    </RadioGroup>
                </Box>
            </div>
        </>
    )
}
