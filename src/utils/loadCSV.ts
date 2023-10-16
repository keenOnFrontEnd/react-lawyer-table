import * as fs from 'fs';
import csvParser from 'csv-parser';
import { DataArrayType } from '../types/types';
import { useDispatch } from 'react-redux'
import { errorHandler, setData } from '../context/reducers/fileReducer';

export const LoadCSVFile = async (filePath: string) => {

    let dispatch = useDispatch()

    if (!filePath.endsWith('.csv')) {
        dispatch(errorHandler(true))
    }

    const results: DataArrayType = [];

    try {
        const stream = fs.createReadStream(filePath);

        stream.pipe(csvParser());

        for await (const data of stream) {
            if (!data.fullname || !data.phone || !data.email) {
                return { data: [], isCSV: false };
            }
            results.push(data);
        }

        dispatch(setData(results))
    } catch (error) {
        throw error;
    }

}