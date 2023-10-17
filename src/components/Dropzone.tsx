import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import s from './dropzone.module.css'
import { useDispatch } from 'react-redux';
import Papa from 'papaparse'
import { errorHandler, setData, setHeaders } from '../context/fileReducer';
import { DataArrayType } from '../types/types';
import { transferDataRows, inititalRequiredValidation } from '../utils/validation';

export const DropFileZone = () => {

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
    } =
        useDropzone({ maxFiles: 1 });

    let dispatch = useDispatch()


    useEffect(() => {
        if (acceptedFiles.length > 0) {
            if (acceptedFiles[0].type !== "text/csv") {
                dispatch(errorHandler(true))
            } else {
                Papa.parse(acceptedFiles[0], {
                    header: true,
                    dynamicTyping: true,
                    complete: (results) => {
                        if (!Array.isArray(results.data) || !results.data.every(inititalRequiredValidation)) {
                            dispatch(errorHandler(true))
                        }
                        let rows: DataArrayType = results.data as DataArrayType
                        let headers: string[] = results.meta.fields as string[]
                        dispatch(setData(transferDataRows(rows)))
                        dispatch(setHeaders(headers))
                    }
                })
            }
        }
        return () => {
            dispatch(setData(transferDataRows([])))
            dispatch(setHeaders([]))
            dispatch(errorHandler(false))
        }
    }, [acceptedFiles])

    return (
        <div className={`${s.dragAndDrop} mt-3 d-flex flex-column text-center justify-content-center align-items-center`}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {acceptedFiles.length ? <div className="d-flex flex-column">{acceptedFiles[0].name}</div> : <p>Select or drag the csv file</p>}
            </div>
        </div>
    );
}