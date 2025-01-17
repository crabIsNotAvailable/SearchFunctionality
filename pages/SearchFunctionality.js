import { Grid2 } from "@mui/material";
import * as React from 'react';
import data from "/Users/marti/Documents/nextjs-mui-grid/nextjs-blog/pages/mockup_data.json";

const arrayData = data

function getArrayItem() {
    
    arrayData.forEach((Kundegruppe) => {
        
        console.log(Kundegruppe["Avdrag betalt"])
    })
}

export default function DataTest() {
    const stringifiedData = JSON.stringify(data, null, 2);

    return (
        <div>
            <input class="hallo"></input>
            <button onClick={getArrayItem}> Search</button>
        </div>
    );
};
