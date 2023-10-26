import React, { useEffect, useState } from 'react'
import Dientes from './dientes/Dientes'
import { Box } from '@mui/material'
import { block1 } from './objetos'

export default function Odontograma() {

    const [parte1, setParte1] = useState(block1)

    const [selectExtra, setSelectExtra] = useState('') // key4
    const [selectedDates, setSelectedDates] = useState([]); // para seleccion multiple

    const handleSelectChange = (event) => { // para selecionar key4
        setSelectExtra(event.target.value);
    }

    const handleDateClick = (data) => { // para seleccion multiple

        if (selectedDates.includes(data)) {
            // Si ya está seleccionado, no hacemos nada.
            return;
        }
        else {
            setSelectedDates([...selectedDates, data]);
        }
    }


    useEffect(() => {
        console.log(selectedDates)
        let tmp1 = 0
        let tmp2 = 0

        if (selectedDates.length === 2) {

            if (selectedDates[0] > selectedDates[1]) {
                tmp1 = selectedDates[1]
                tmp2 = selectedDates[0]
                console.log("menor dato: ", tmp1)
                console.log("mayor dato: ", tmp2)


                setParte1(x => x.reduce((arr, item) => {

                    if (item.id === tmp1 && item.aparatoOrtodonticoFijo.select && !item.eraser) {
                        arr.push({
                            ...item,
                            aparatoOrtodonticoFijo: {
                                ...item.aparatoOrtodonticoFijo,
                                aparatoOrtodonticoFijoInicial: true,
                                aparatoOrtodonticoFijoMedio: false,
                            }
                        })
                    }
                    else if (item.id === tmp2 && item.aparatoOrtodonticoFijo.select && !item.eraser) {
                        arr.push({
                            ...item,
                            aparatoOrtodonticoFijo: {
                                ...item.aparatoOrtodonticoFijo,
                                aparatoOrtodonticoFijoFinal: true,
                                aparatoOrtodonticoFijoMedio: false,
                            }
                        })
                    }
                    else if ((item.id > tmp1 && item.id < tmp2) && item.aparatoOrtodonticoFijo.select && !item.eraser) {
                        arr.push({
                            ...item,
                            aparatoOrtodonticoFijo: {
                                ...item.aparatoOrtodonticoFijo,
                                aparatoOrtodonticoFijoMedio: true,
                            }
                        })
                    }
                    else if (item.id === tmp1 && item.protesisFija.select && !item.eraser) {
                        arr.push({
                            ...item,
                            protesisFija: {
                                ...item.protesisFija,
                                protesisFijaInicial: true,
                                protesisFijaMedio: false,
                            }
                        })
                    }
                    else if (item.id === tmp2 && item.protesisFija.select && !item.eraser) {
                        arr.push({
                            ...item,
                            protesisFija: {
                                ...item.protesisFija,
                                protesisFijaFinal: true,
                                protesisFijaMedio: false,
                            }
                        })
                    }
                    else if (item.id > tmp1 && item.id < tmp2 && item.protesisFija.select && !item.eraser) {
                        arr.push({
                            ...item,
                            protesisFija: {
                                ...item.protesisFija,
                                protesisFijaMedio: true,
                            }
                        })
                    }
                    else {
                        arr.push(item)
                    }

                    return arr
                }, []))
            }
            if (selectedDates[1] > selectedDates[0]) {
                tmp1 = selectedDates[0]
                tmp2 = selectedDates[1]

                console.log("menor dato: ", tmp1)
                console.log("mayor dato: ", tmp2)

                setParte1(x => x.reduce((arr, item) => {

                    if (item.id === tmp1 && item.aparatoOrtodonticoFijo.select && !item.eraser) {
                        arr.push({
                            ...item,
                            aparatoOrtodonticoFijo: {
                                ...item.aparatoOrtodonticoFijo,
                                aparatoOrtodonticoFijoInicial: true,
                                aparatoOrtodonticoFijoMedio: false,
                            }
                        })
                    }
                    else if (item.id === tmp2 && item.aparatoOrtodonticoFijo.select && !item.eraser) {
                        arr.push({
                            ...item,
                            aparatoOrtodonticoFijo: {
                                ...item.aparatoOrtodonticoFijo,
                                aparatoOrtodonticoFijoFinal: true,
                                aparatoOrtodonticoFijoMedio: false,
                            }
                        })
                    }
                    else if (item.id > tmp1 && item.id < tmp2 && item.aparatoOrtodonticoFijo.select && !item.eraser) {
                        arr.push({
                            ...item,
                            aparatoOrtodonticoFijo: {
                                ...item.aparatoOrtodonticoFijo,
                                aparatoOrtodonticoFijoMedio: true,
                            }
                        })
                    }
                    else if (item.id === tmp1 && item.protesisFija.select && !item.eraser) {
                        arr.push({
                            ...item,
                            protesisFija: {
                                ...item.protesisFija,
                                protesisFijaInicial: true,
                                protesisFijaMedio: false,
                            }
                        })
                    }
                    else if (item.id === tmp2 && item.protesisFija.select && !item.eraser) {
                        arr.push({
                            ...item,
                            protesisFija: {
                                ...item.protesisFija,
                                protesisFijaFinal: true,
                                protesisFijaMedio: false,
                            }
                        })
                    }
                    else if (item.id > tmp1 && item.id < tmp2 && item.protesisFija.select && !item.eraser) {
                        arr.push({
                            ...item,
                            protesisFija: {
                                ...item.protesisFija,
                                protesisFijaMedio: true,
                            }
                        })
                    }
                    else {
                        arr.push(item)
                    }

                    return arr
                }, []))
            }
            setSelectedDates([])
        }
    }, [selectedDates])

    const handleBorrarBracketsAndProtesisFija = (id, key1) => {
        setParte1(x => x.reduce((arr, item) => {
            if (key1 === 'aparatoOrtodonticoFijo' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        aparatoOrtodonticoFijo: {
                            ...item.aparatoOrtodonticoFijo,
                            select: false,
                            aparatoOrtodonticoFijoInicial: false,
                            aparatoOrtodonticoFijoFinal: false,
                            aparatoOrtodonticoFijoMedio: false,
                        },
                    })
                    setSelectedDates([])
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'protesisFija' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        protesisFija: {
                            ...item.protesisFija,
                            select: false,
                            protesisFijaInicial: false,
                            protesisFijaFinal: false,
                            protesisFijaMedio: false,
                        },
                    })
                    setSelectedDates([])
                }
                else {
                    arr.push(item)
                }
            }
            else {
                arr.push(item)
            }
            return arr
        }, []))
        setSelectedDates([])
    }

    const handleSelectionDoble = (id, key1) => {
        // console.log("llegue a seleccionar doble")
        setParte1(x => x.reduce((arr, item) => {
            if (item.id === id) {
                arr.push({
                    ...item,
                    [key1]: {
                        ...item[key1],
                        [`${key1}Derecho`]: true
                    }
                })
            }
            else if (id !== 8 && item.id === id + 1) {
                arr.push({
                    ...item,
                    [key1]: {
                        ...item[key1],
                        [`${key1}Izquierdo`]: true
                    }
                })
            }
            else {
                arr.push(item)
            }
            return arr
        }, []))
    }

    const handleSlection = (valor, valor2) => {
        // console.log("La seleción es: ", valor)
        setParte1(x => x.reduce((arr, item) => {
            if (valor === 'eraser') {
                // console.log("entre a", valor)
                arr.push({
                    ...item,
                    eraser: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'carie') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'restauracionTemporal') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'desgasteOclusalIncisal') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'dienteDiscromico') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'dienteEctopico') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'impactacion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'implante') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'macrodoncia') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'microdoncia') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'semiImplantacion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'sellantes') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'coronaTemporal') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'coronaDefinitiva') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'movilidad') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'restauracion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'remanenteReticular') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'dienteAusente') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'exodoncia') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'dienteClavija') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'dienteIntruido') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'dienteExtraido') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'fracturas') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'germinacion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'giroversion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'migracion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'dienteErupcion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'tratamientoPulparRealizado') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'tratamientoPulparPorRealizar') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'munon') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    [valor2]: true,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'diastema') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: true,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'fusion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: true,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'supernumerario') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: true,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'transposicion') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: true,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'aparatoOrtodonticoRemovible') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: true,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'protesisRemovible') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: true,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'protesisTotal') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: true,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'edentuloTotal') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: true,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
            }
            else if (valor === 'aparatoOrtodonticoFijo') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: true,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: false,
                    },
                })
                setSelectedDates([])
            }
            else if (valor === 'protesisFija') {
                arr.push({
                    ...item,
                    option: valor,
                    eraser: false,
                    diastema: {
                        ...item.diastema,
                        select: false,
                    },
                    fusion: {
                        ...item.fusion,
                        select: false,
                    },
                    supernumerario: {
                        ...item.supernumerario,
                        select: false,
                    },
                    transposicion: {
                        ...item.transposicion,
                        select: false,
                    },
                    aparatoOrtodonticoRemovible: {
                        ...item.aparatoOrtodonticoRemovible,
                        select: false,
                    },
                    protesisRemovible: {
                        ...item.protesisRemovible,
                        select: false,
                    },
                    protesisTotal: {
                        ...item.protesisTotal,
                        select: false,
                    },
                    edentuloTotal: {
                        ...item.edentuloTotal,
                        select: false,
                    },
                    aparatoOrtodonticoFijo: {
                        ...item.aparatoOrtodonticoFijo,
                        select: false,
                    },
                    protesisFija: {
                        ...item.protesisFija,
                        select: true,
                    },
                })
                setSelectedDates([])
            }
            else {
                arr.push(item)
            }
            return arr
        }, []))
    }

    const hanleFunction = (id, key1, key2, key4) => {

        setParte1(x => x.reduce((arr, item) => {
            if (key1 === 'carie' && item.eraser === false) {
                if (item.id === id) {
                    if (key2 === "topUp") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "top") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "bottom") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "left") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "right") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    // añadido para demas partes de dientes
                    else if (key2 === "topUpLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "topUpRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTop") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottom") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterCenter") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterCenter") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    // fin añadido
                    else if (key2 === "") {
                        arr.push({
                            ...item,
                        })
                    }
                    else {
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'carie' && item.eraser === true) {
                if (item.id === id) {
                    if (key2 === "topUp") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "top") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "bottom") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "left") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "right") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    // añadido para demas partes de dientes
                    else if (key2 === "topUpLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "topUpRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTop") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottom") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterCenter") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterCenter") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterLeft &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterLeft") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterRight") {
                        arr.push({
                            ...item,
                            carie: {
                                ...item.carie,
                                [key2]: false,
                                select:
                                    (
                                        !item.carie.topUp &&
                                        !item.carie.top &&
                                        !item.carie.left &&
                                        !item.carie.right &&
                                        !item.carie.bottom &&
                                        !item.carie.topUpLeft &&
                                        !item.carie.topUpRight &&
                                        !item.carie.centerTop &&
                                        !item.carie.centerBottom &&
                                        !item.carie.centerTopLeft &&
                                        !item.carie.centerTopRight &&
                                        !item.carie.centerBottomLeft &&
                                        !item.carie.centerBottomRight &&
                                        !item.carie.centerTopCenterCenter &&
                                        !item.carie.centerTopCenterLeft &&
                                        !item.carie.centerTopCenterRight &&
                                        !item.carie.centerBottomCenterCenter &&
                                        !item.carie.centerBottomCenterLeft
                                    ) ? false : true,
                            }
                        })
                    }
                    // fin añadido
                    else if (key2 === "") {
                        arr.push({
                            ...item,
                        })
                    }
                    else {
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'restauracionTemporal' && item.eraser === false) {
                if (item.id === id) {
                    if (key2 === "topUp") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "top") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "bottom") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "left") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "right") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    // añadido para demas partes de dientes
                    else if (key2 === "topUpLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "topUpRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTop") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottom") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterCenter") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterCenter") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    // fin añadido
                    else if (key2 === "") {
                        arr.push({
                            ...item,
                        })
                    }
                    else {
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'restauracionTemporal' && item.eraser === true) {
                if (item.id === id) {
                    if (key2 === "topUp") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "top") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "bottom") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "left") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "right") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    // añadido para demas partes de dientes
                    else if (key2 === "topUpLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "topUpRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTop") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottom") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterCenter") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterCenter") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterLeft &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterLeft") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterRight") {
                        arr.push({
                            ...item,
                            restauracionTemporal: {
                                ...item.restauracionTemporal,
                                [key2]: false,
                                select:
                                    (
                                        !item.restauracionTemporal.topUp &&
                                        !item.restauracionTemporal.top &&
                                        !item.restauracionTemporal.left &&
                                        !item.restauracionTemporal.right &&
                                        !item.restauracionTemporal.bottom &&
                                        !item.restauracionTemporal.topUpLeft &&
                                        !item.restauracionTemporal.topUpRight &&
                                        !item.restauracionTemporal.centerTop &&
                                        !item.restauracionTemporal.centerBottom &&
                                        !item.restauracionTemporal.centerTopLeft &&
                                        !item.restauracionTemporal.centerTopRight &&
                                        !item.restauracionTemporal.centerBottomLeft &&
                                        !item.restauracionTemporal.centerBottomRight &&
                                        !item.restauracionTemporal.centerTopCenterCenter &&
                                        !item.restauracionTemporal.centerTopCenterLeft &&
                                        !item.restauracionTemporal.centerTopCenterRight &&
                                        !item.restauracionTemporal.centerBottomCenterCenter &&
                                        !item.restauracionTemporal.centerBottomCenterLeft
                                    ) ? false : true,
                            }
                        })
                    }
                    // fin añadido
                    else if (key2 === "") {
                        arr.push({
                            ...item,
                        })
                    }
                    else {
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'sellantes' && item.eraser === false) {
                if (item.id === id) {
                    if (key2 === "topUp") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "top") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "bottom") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "left") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "right") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    // añadido para demas partes de dientes
                    else if (key2 === "topUpLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "topUpRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTop") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottom") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterCenter") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterCenter") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                select: true,
                                [key2]: true
                            }
                        })
                    }
                    // fin añadido
                    else if (key2 === "") {
                        arr.push({
                            ...item,
                        })
                    }
                    else {
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'sellantes' && item.eraser === true) {
                if (item.id === id) {
                    if (key2 === "topUp") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "top") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "bottom") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "left") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "right") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    // añadido para demas partes de dientes
                    else if (key2 === "topUpLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "topUpRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTop") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottom") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterCenter") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerTopCenterRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterCenter") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterLeft &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterLeft") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterRight
                                    ) ? false : true,
                            }
                        })
                    }
                    else if (key2 === "centerBottomCenterRight") {
                        arr.push({
                            ...item,
                            sellantes: {
                                ...item.sellantes,
                                [key2]: false,
                                select:
                                    (
                                        !item.sellantes.topUp &&
                                        !item.sellantes.top &&
                                        !item.sellantes.left &&
                                        !item.sellantes.right &&
                                        !item.sellantes.bottom &&
                                        !item.sellantes.topUpLeft &&
                                        !item.sellantes.topUpRight &&
                                        !item.sellantes.centerTop &&
                                        !item.sellantes.centerBottom &&
                                        !item.sellantes.centerTopLeft &&
                                        !item.sellantes.centerTopRight &&
                                        !item.sellantes.centerBottomLeft &&
                                        !item.sellantes.centerBottomRight &&
                                        !item.sellantes.centerTopCenterCenter &&
                                        !item.sellantes.centerTopCenterLeft &&
                                        !item.sellantes.centerTopCenterRight &&
                                        !item.sellantes.centerBottomCenterCenter &&
                                        !item.sellantes.centerBottomCenterLeft
                                    ) ? false : true,
                            }
                        })
                    }
                    // fin añadido
                    else if (key2 === "") {
                        arr.push({
                            ...item,
                        })
                    }
                    else {
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'desgasteOclusalIncisal' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key2] === '20' ? true : false,
                            [key2]: item[key2] === '20' ? true : false,
                        },
                        [key2]: item[key2] === '20' ? 'DES' : item[key2]
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'desgasteOclusalIncisal' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key1].box1 === '20' && item[key1].box2 === '20' ? false : true,
                            [key2]: false,
                        },
                        [key2]: '20',
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteDiscromico' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key2] === '20' ? true : false,
                            [key2]: item[key2] === '20' ? true : false,
                        },
                        [key2]: item[key2] === '20' ? 'DIS' : item[key2]
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteDiscromico' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key1].box1 === '20' && item[key1].box2 === '20' ? false : true,
                            [key2]: false,
                        },
                        [key2]: '20',
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteEctopico' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key2] === '20' ? true : false,
                            [key2]: item[key2] === '20' ? true : false,
                        },
                        [key2]: item[key2] === '20' ? 'E' : item[key2]
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteEctopico' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key1].box1 === '20' && item[key1].box2 === '20' ? false : true,
                            [key2]: false,
                        },
                        [key2]: '20',
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'impactacion' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key2] === '20' ? true : false,
                            [key2]: item[key2] === '20' ? true : false,
                        },
                        [key2]: item[key2] === '20' ? 'I' : item[key2]
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'impactacion' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key1].box1 === '20' && item[key1].box2 === '20' ? false : true,
                            [key2]: false,
                        },
                        [key2]: '20',
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'implante' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key2] === '20' ? true : false,
                            [key2]: item[key2] === '20' ? true : false,
                        },
                        [key2]: item[key2] === '20' ? 'IMP' : item[key2]
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'implante' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key1].box1 === '20' && item[key1].box2 === '20' ? false : true,
                            [key2]: false,
                        },
                        [key2]: '20',
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'macrodoncia' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key2] === '20' ? true : false,
                            [key2]: item[key2] === '20' ? true : false,
                        },
                        [key2]: item[key2] === '20' ? 'MAC' : item[key2]
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'macrodoncia' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key1].box1 === '20' && item[key1].box2 === '20' ? false : true,
                            [key2]: false,
                        },
                        [key2]: '20',
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'microdoncia' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key2] === '20' ? true : false,
                            [key2]: item[key2] === '20' ? true : false,
                        },
                        [key2]: item[key2] === '20' ? 'MIC' : item[key2]
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'microdoncia' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key1].box1 === '20' && item[key1].box2 === '20' ? false : true,
                            [key2]: false,
                        },
                        [key2]: '20',
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'semiImplantacion' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key2] === '20' ? true : false,
                            [key2]: item[key2] === '20' ? true : false,
                        },
                        [key2]: item[key2] === '20' ? 'SI' : item[key2]
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'semiImplantacion' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item[key1],
                            select: item[key1].box1 === '20' && item[key1].box2 === '20' ? false : true,
                            [key2]: false,
                        },
                        [key2]: '20',
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'coronaTemporal' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.coronaTemporal,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'coronaTemporal' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.coronaTemporal,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'coronaDefinitiva' && item.eraser === false) {
                if (item.id === id) {
                    if (item.box2 === 'CC' || item.box2 === 'CF' || item.box2 === 'CMC' || item.box2 === '3/4' || item.box2 === '4/5' || item.box2 === '7/8' || item.box2 === 'CV' || item.box2 === 'CJ' || item.box2 === '20') {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4 === 'coronaCompleta' ? 'CC' :
                                        key4 === 'coronaFenestrada' ? 'CF' :
                                            key4 === 'coronaMetalCeramica' ? 'CMC' :
                                                key4 === 'coronaParcial3_4' ? '3/4' :
                                                    key4 === 'coronaParcial4_5' ? '4/5' :
                                                        key4 === 'coronaParcial7_8' ? '7/8' :
                                                            key4 === 'coronaVeneer' ? 'CV' :
                                                                key4 === 'coronaJacket' && 'CJ',
                            [key1]: {
                                ...item.coronaDefinitiva,
                                select: item.box2 === 'CC' || item.box2 === 'CF' || item.box2 === 'CMC' || item.box2 === '3/4' || item.box2 === '4/5' || item.box2 === '7/8' || item.box2 === 'CV' || item.box2 === 'CJ' ? true : false,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? true : false,
                                [key4]: true,
                            },
                        })
                    }
                    else {
                        alert('Borre casilla')
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'coronaDefinitiva' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        box2: '20',
                        [key1]: {
                            ...item.coronaDefinitiva,
                            select: false,
                            [key4]: false,
                            box2: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'movilidad' && item.eraser === false) {
                if (item.id === id) {
                    if (item.box2 === 'M1' || item.box2 === 'M2' || item.box2 === 'M3' || item.box2 === '20') {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.movilidad,
                                select: item.box2 === 'M1' || item.box2 === 'M2' || item.box2 === 'M3' ? true : false,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? true : false,
                                [key4]: true,
                            },
                        })
                    }
                    else {
                        alert('Borre casilla')
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'movilidad' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        box2: '20',
                        [key1]: {
                            ...item.movilidad,
                            select: false,
                            [key4]: false,
                            box2: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'restauracion' && item.eraser === false) {
                if (item.id === id) {
                    if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "topUp") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "top") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "bottom") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "left") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "right") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    // añadido
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "topUpLeft") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "topUpRight") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTop") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottom") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopLeft") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopRight") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomLeft") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomRight") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopCenterCenter") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopCenterLeft") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopCenterRight") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomCenterCenter") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomCenterLeft") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomCenterRight") {
                        arr.push({
                            ...item,
                            box2:
                                item.box2 !== '20' ? item.box2 :
                                    key4,
                            [key1]: {
                                ...item.restauracion,
                                select: true,
                                // box1: item.box1 !== '20' ? false : true,
                                box2: item.box2 !== '20' ? false : true,
                                [key2]: true,
                                [key4]: true,
                            },
                        })
                    }
                    //final añadido
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "") {
                        arr.push({
                            ...item,
                        })
                    }
                    else {
                        alert('Borre casilla')
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'restauracion' && item.eraser === true) {
                if (item.id === id) {
                    if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "topUp") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "top") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "bottom") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "left") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "right") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    // añadido para demas partes de dientes
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "topUpLeft") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "topUpRight") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTop") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottom") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopLeft") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopRight") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomLeft") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomRight") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopCenterCenter") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopCenterLeft") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerTopCenterRight") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomCenterCenter") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterLeft &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomCenterLeft") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterRight
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "centerBottomCenterRight") {
                        arr.push({
                            ...item,
                            box2: '20',
                            [key1]: {
                                ...item.restauracion,
                                select: (
                                    !item.restauracion.top &&
                                    !item.restauracion.left &&
                                    !item.restauracion.right &&
                                    !item.restauracion.bottom &&
                                    !item.restauracion.topUp &&
                                    !item.restauracion.topUpLeft &&
                                    !item.restauracion.topUpRight &&
                                    !item.restauracion.centerTop &&
                                    !item.restauracion.centerBottom &&
                                    !item.restauracion.centerTopLeft &&
                                    !item.restauracion.centerTopRight &&
                                    !item.restauracion.centerBottomLeft &&
                                    !item.restauracion.centerBottomRight &&
                                    !item.restauracion.centerTopCenterCenter &&
                                    !item.restauracion.centerTopCenterLeft &&
                                    !item.restauracion.centerTopCenterRight &&
                                    !item.restauracion.centerBottomCenterCenter &&
                                    !item.restauracion.centerBottomCenterLeft
                                ) ? false : true,
                                box2: false,
                                [key2]: false,
                                [key4]: false,
                            },
                        })
                    }
                    // fin añadido
                    else if ((item.box2 === 'AM' || item.box2 === 'R' || item.box2 === 'IV' || item.box2 === 'IM' || item.box2 === 'IE' || item.box2 === 'CE' || item.box2 === '20') && key2 === "") {
                        arr.push({
                            ...item,
                        })
                    }
                    else {
                        alert('Borre casilla')
                        arr.push(item)
                    }
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'remanenteReticular' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.remanenteReticular,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'remanenteReticular' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.remanenteReticular,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteAusente' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteAusente,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteAusente' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteAusente,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'exodoncia' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.exodoncia,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'exodoncia' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.exodoncia,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteClavija' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteClavija,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteClavija' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteClavija,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteIntruido' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteIntruido,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteIntruido' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteIntruido,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteExtraido' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteExtraido,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteExtraido' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteExtraido,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'fracturas' && item.eraser === false) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.fracturas,
                            select: true,
                            [key4]: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'fracturas' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.fracturas,
                            select: false,
                            [key4]: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'germinacion' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.germinacion,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'germinacion' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.germinacion,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'giroversion' && item.eraser === false) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.giroversion,
                            select: true,
                            [key4]: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'giroversion' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.giroversion,
                            select: false,
                            [key4]: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'migracion' && item.eraser === false) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.migracion,
                            select: true,
                            [key4]: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'migracion' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.migracion,
                            select: false,
                            [key4]: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteErupcion' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteErupcion,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'dienteErupcion' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.dienteErupcion,
                            select: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'tratamientoPulparRealizado' && item.eraser === false) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.tratamientoPulparRealizado,
                            select: true,
                            [key4]: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'tratamientoPulparRealizado' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.tratamientoPulparRealizado,
                            select: false,
                            [key4]: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'tratamientoPulparPorRealizar' && item.eraser === false) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.tratamientoPulparPorRealizar,
                            select: true,
                            [key4]: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'tratamientoPulparPorRealizar' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.tratamientoPulparPorRealizar,
                            select: false,
                            [key4]: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'munon' && item.eraser === false) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.munon,
                            select: true,
                            [key4]: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'munon' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.munon,
                            select: false,
                            [key4]: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'diastema' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.diastema,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'diastema' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.diastema,
                            select: false,
                            diastemaDerecho: false,
                            diastemaIzquierdo: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'fusion' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.fusion,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'fusion' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.fusion,
                            select: false,
                            fusionDerecho: false,
                            fusionIzquierdo: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'supernumerario' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.supernumerario,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'supernumerario' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.supernumerario,
                            select: false,
                            supernumerarioDerecho: false,
                            supernumerarioIzquierdo: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'transposicion' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.transposicion,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'transposicion' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.transposicion,
                            select: false,
                            transposicionDerecho: false,
                            transposicionIzquierdo: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'aparatoOrtodonticoRemovible' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.aparatoOrtodonticoRemovible,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'aparatoOrtodonticoRemovible' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.aparatoOrtodonticoRemovible,
                            select: false,
                            aparatoOrtodonticoRemovibleDerecho: false,
                            aparatoOrtodonticoRemovibleIzquierdo: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'protesisRemovible' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.protesisRemovible,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'protesisRemovible' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.protesisRemovible,
                            select: false,
                            protesisRemovibleDerecho: false,
                            protesisRemovibleIzquierdo: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'protesisTotal' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.protesisTotal,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'protesisTotal' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.protesisTotal,
                            select: false,
                            protesisTotalDerecho: false,
                            protesisTotalIzquierdo: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'edentuloTotal' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.edentuloTotal,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'edentuloTotal' && item.eraser === true) {
                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.edentuloTotal,
                            select: false,
                            edentuloTotalDerecho: false,
                            edentuloTotalIzquierdo: false,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'aparatoOrtodonticoFijo' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.aparatoOrtodonticoFijo,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else if (key1 === 'protesisFija' && item.eraser === false) {
                // console.log(key1)
                // console.log(key2)
                // console.log(id)

                if (item.id === id) {
                    arr.push({
                        ...item,
                        [key1]: {
                            ...item.protesisFija,
                            select: true,
                        },
                    })
                }
                else {
                    arr.push(item)
                }
            }
            else {
                arr.push(item)
            }
            return arr
        }, []))
    }

    useEffect(() => {
        console.log(parte1)
    }, [parte1])

    return (
        <>
            <Box sx={{ transform: "scale(1)", margin: "1rem" }}>
                <Dientes
                    parte1={parte1}
                    handleSlection={handleSlection}
                    hanleFunction={hanleFunction}
                    selectExtra={selectExtra}
                    handleSelectChange={handleSelectChange}
                    selectedDates={selectedDates}
                    handleDateClick={handleDateClick}
                    handleSelectionDoble={handleSelectionDoble}
                    handleBorrarBracketsAndProtesisFija={handleBorrarBracketsAndProtesisFija}
                // handleMultipleInitial={handleMultipleInitial}
                />
            </Box>
        </>
    )
}
