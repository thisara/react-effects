import React, { useContext, useEffect } from "react";
import {SearchContext} from './Search';
import { fetchData } from "./service";

interface UsersDTO {
    id:number,
    name:string
}

const Result = () => {

    const formData = useContext(SearchContext);

    useEffect(() => {
      const v = fetchData(formData);
    },[])

//useEffects to fetch data
//DTO


    return (
        <div>test - {JSON.stringify(formData)}</div>
    );
}

export default Result;
