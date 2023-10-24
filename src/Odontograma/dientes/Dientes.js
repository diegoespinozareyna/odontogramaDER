import { Box } from '@mui/material'
import React from 'react'
import Selections from '../Selections'
import { diente1, diente2, diente3, diente4, diente5 } from '../dientesType/index';
import Diente1 from '../dientesType/Diente1';
import Diente2 from '../dientesType/Diente2';

export default function Dientes({
    parte1,
    parte2,
    parte3,
    parte4,
    handleSlection,
    hanleFunction,
    hanleFunctionText,
    selectExtra,
    handleSelectChange,
    selectedDates,
    handleDateClick,
    handleSelectionDoble,
    selectBorrar,
    setSelectBorrar
}) {
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ border: "1px solid black", padding: "5px", borderRadius: "5px", marginLeft: "5px" }}>
                    <Selections handleSlection={handleSlection} selectExtra={selectExtra} handleSelectChange={handleSelectChange} />
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", transform: "scale(0.7)", marginLeft: "-150px", border: "1px solid transparent", padding: "10px" }}>
                    <Box sx={{ display: "flex" }}>

                        <Box sx={{ display: "flex" }}>
                            {
                                parte1.map((diente, ix) => (
                                    <Box ml={2.5} key={ix}>
                                        {diente.id === 1 && diente5(diente)}
                                        {diente.id === 2 && diente4(diente)}
                                        {diente.id === 3 && diente4(diente)}
                                        {diente.id === 4 && diente3(diente)}
                                        {diente.id === 5 && <Diente2 selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction} hanleFunctionText={hanleFunctionText} />}
                                        {diente.id === 6 && <Diente1 selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction} hanleFunctionText={hanleFunctionText} />}
                                        {diente.id === 7 && <Diente1 selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction} hanleFunctionText={hanleFunctionText} />}
                                        {diente.id === 8 && <Diente1 selectBorrar={selectBorrar} setSelectBorrar={setSelectBorrar} handleSelectionDoble={handleSelectionDoble} selectedDates={selectedDates} handleDateClick={handleDateClick} selectExtra={selectExtra} handleSelectChange={handleSelectChange} diente={diente} hanleFunction={hanleFunction} hanleFunctionText={hanleFunctionText} />}
                                        {/* {diente1(diente)} */}
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box sx={{ display: "flex", marginLeft: "50px" }}>
                            {
                                parte2.map((diente, ix) => (
                                    <Box ml={2.5} key={ix}>
                                        {diente.id === 8 && diente5(diente)}
                                        {diente.id === 7 && diente4(diente)}
                                        {diente.id === 6 && diente4(diente)}
                                        {diente.id === 5 && diente3(diente)}
                                        {diente.id === 4 && diente2(diente)}
                                        {diente.id === 1 && diente1(diente)}
                                        {diente.id === 2 && diente1(diente)}
                                        {diente.id === 3 && diente1(diente)}
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", transform: 'scaleY(-1)', marginTop: "100px" }}>

                        <Box sx={{ display: "flex" }}>
                            {
                                parte3.map((diente, ix) => (
                                    <Box ml={2.5} key={ix}>
                                        {diente.id === 1 && diente5(diente)}
                                        {diente.id === 2 && diente4(diente)}
                                        {diente.id === 3 && diente4(diente)}
                                        {diente.id === 4 && diente3(diente)}
                                        {diente.id === 5 && diente2(diente)}
                                        {diente.id === 6 && diente1(diente)}
                                        {diente.id === 7 && diente1(diente)}
                                        {diente.id === 8 && diente1(diente)}
                                        {/* {diente1(diente)} */}
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box sx={{ display: "flex", marginLeft: "50px" }}>
                            {
                                parte4.map((diente, ix) => (
                                    <Box ml={2.5} key={ix}>
                                        {diente.id === 8 && diente5(diente)}
                                        {diente.id === 7 && diente4(diente)}
                                        {diente.id === 6 && diente4(diente)}
                                        {diente.id === 5 && diente3(diente)}
                                        {diente.id === 4 && diente2(diente)}
                                        {diente.id === 1 && diente1(diente)}
                                        {diente.id === 2 && diente1(diente)}
                                        {diente.id === 3 && diente1(diente)}
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}
