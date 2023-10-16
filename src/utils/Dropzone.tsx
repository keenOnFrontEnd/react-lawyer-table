import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import s from './dropzone.module.css'
import { useDispatch } from 'react-redux';
import Papa from 'papaparse'
import { errorHandler, setData } from '../context/reducers/fileReducer';
import { TransformedDataArrayType,DataArrayType } from '../types/types';
import { isValidTableRow, typeValidation } from './validation';

export const DropFileZone = () => {
    
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
    } = 
    useDropzone({ maxFiles: 1 });

    let dispatch = useDispatch()
    

    useEffect(() => {
        if (acceptedFiles.length) {
          Papa.parse(acceptedFiles[0],{
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                if(!Array.isArray(results.data) || !results.data.every(typeValidation)) {
                    dispatch(errorHandler(true))
                }
                

                // if (Array.isArray(results.data) && results.data.every(typeValidation)) {
                //     let res: TransformedDataArrayType = results.data as TransformedDataArrayType;
                //     dispatch(setData(res));
                //   } else {
                //     dispatch(errorHandler(true))
                //   }
            }
          })
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