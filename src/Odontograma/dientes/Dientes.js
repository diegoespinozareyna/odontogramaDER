import { Box, Typography } from '@mui/material'
import React from 'react'
import Selections from '../Selections'
// import { diente1, diente2, diente3, diente4, diente5 } from '../dientesType/index';
import Diente1 from '../dientesType/Diente1';
import Diente2 from '../dientesType/Diente2';
import Diente3 from '../dientesType/Diente3';
import Diente4 from '../dientesType/Diente4';
import Diente5 from '../dientesType/Diente5';
import Diente1Abajo from '../dientesType/Diente1Abajo';
import Diente2Abajo from '../dientesType/Diente2Abajo';
import Diente3Abajo from '../dientesType/Diente3Abajo';
import Diente4Abajo from '../dientesType/Diente4Abajo';
import Diente5Abajo from '../dientesType/Diente5Abajo';

export default function Dientes({
    parte1,
    handleSlection,
    hanleFunction,
    selectExtra,
    handleSelectChange,
    selectedDates,
    handleDateClick,
    handleSelectionDoble,
    selectBorrar,
    setSelectBorrar,
    handleBorrarBracketsAndProtesisFija
}) {
    return (
        <>
            <Box sx={{ display: "flex", border: "1px solid black", borderRadius: "10px" }} >
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" }}>
                    <Box sx={{ position: "absolute", top: "30px" }}><Typography>Seleccione Opción Dental</Typography></Box>
                    <Box sx={{ border: "1px solid black", padding: "5px", borderRadius: "5px", marginLeft: "5px", minHeight: "600px", transform: "scale(0.8)", position: "relative", zIndex: "1" }}>
                        <Selections handleSlection={handleSlection} selectExtra={selectExtra} handleSelectChange={handleSelectChange} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", transform: "scale(0.6)", marginLeft: "-370px", marginTop: "-140px", border: "1px solid transparent", padding: "10px" }}>
                    <Box sx={{ display: "flex" }}>
                        {/*Dientes adulto */}
                        <Box sx={{ display: "flex" }}>
                            {
                                parte1.map((diente, ix) => (
                                    <Box ml={ix === 8 ? 10 : 2.5} key={ix}>
                                        {diente.id === 1 && <Diente5 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction} />}
                                        {diente.id === 2 && <Diente4 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 3 && <Diente4 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 4 && <Diente3 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 5 && <Diente2 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 6 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 7 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 8 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}

                                        {diente.id === 9 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} ml={0} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 10 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 11 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 12 && <Diente2 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 13 && <Diente3 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 14 && <Diente4 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 15 && <Diente4 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 16 && <Diente5 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}

                                        {/* <Box>Holas kdlsf</Box> */}
                                    </Box>
                                ))
                            }
                        </Box>

                    </Box>

                    <Box sx={{ display: "flex", marginTop: "500px", marginLeft: "-320px" }}>
                        <Box sx={{ display: "flex", position: "relative", zIndex: "0" }}>
                            {
                                parte1.map((diente, ix) => (
                                    <Box ml={diente.id === 25 ? 10 : 2.5} key={ix}>
                                        {diente.id === 17 && <Diente5Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 18 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 19 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 20 && <Diente3Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 21 && <Diente2Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 22 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 23 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 24 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}

                                        {diente.id === 25 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} ml={0} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 26 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 27 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 28 && <Diente2Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 29 && <Diente3Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 30 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 31 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 32 && <Diente5Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}

                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    {/* Fin Dientes adulto */}


                    {/* Dientes de leche */}
                    <Box sx={{ display: "flex", marginTop: "-750px", marginLeft: "-706px" }}>
                        <Box sx={{ display: "flex" }}>
                            {
                                parte1.map((diente, ix) => (
                                    <Box ml={diente.id === 38 ? 10 : 2.5} key={ix}>
                                        <Box width={"3.5px"} color="transparent">
                                            d
                                        </Box>
                                        <Box width={"7px"} color="transparent">
                                            d
                                        </Box>
                                        <Box width={"9.5px"} color="transparent">
                                            d
                                        </Box>
                                        {diente.id === 33 && <Diente4 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 34 && <Diente4 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 35 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 36 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 37 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}

                                        {diente.id === 38 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} ml={0} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 39 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 40 && <Diente1 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 41 && <Diente4 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 42 && <Diente4 handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        <Box display={"none"}>
                                            {diente.id === 30 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        </Box>
                                        <Box display={"none"}>
                                            {diente.id === 31 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        </Box>
                                        <Box display={"none"}>
                                            {diente.id === 32 && <Diente5Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        </Box>

                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "-80px", marginLeft: "-1000px" }}>
                        <Box sx={{ display: "flex" }}>
                            {
                                parte1.map((diente, ix) => (
                                    <Box ml={diente.id === 48 ? 10 : 2.5} key={ix}>
                                        <Box width={"3.5px"} color="transparent">
                                            d
                                        </Box>
                                        <Box width={"7px"} color="transparent">
                                            d
                                        </Box>
                                        <Box width={"9.5px"} color="transparent">
                                            d
                                        </Box>
                                        {diente.id === 43 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 44 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 45 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 46 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 47 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}

                                        {diente.id === 48 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} ml={0} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 49 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 50 && <Diente1Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 51 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        {diente.id === 52 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        <Box display={"none"}>
                                            {diente.id === 30 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        </Box>
                                        <Box display={"none"}>
                                            {diente.id === 31 && <Diente4Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        </Box>
                                        <Box display={"none"}>
                                            {diente.id === 32 && <Diente5Abajo handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija} selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction}  />}
                                        </Box>

                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    {/* Fin Dientes de leche */}
                </Box>

            </Box >
        </>
    )
}
