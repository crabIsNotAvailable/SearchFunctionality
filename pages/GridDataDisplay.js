import * as React from 'react';
import { Grid2 } from '@mui/material';

export default function Grid2DisplayData({ filteredDatas = [] }) {
  console.log("recieved filteredDatas: ", filteredDatas)
  if (!filteredDatas.length) {
    return <p>No data available.</p>;
  }

  return (
    <Grid2 container direction="column" spacing={2}>
      {filteredDatas.map((element, index) => (
        <Grid2 container direction="row" key={index}>
          {Object.entries(element).map(([key, value], subIndex) => (
            <React.Fragment key={`${index}-${subIndex}`}>
              <Grid2 item xs={6} style={{ width: 200 }}>
                <p>{key}</p>
              </Grid2>
              <Grid2 item xs={6} style={{ width: 200 }}>
                <p>{value}</p>
              </Grid2>
            </React.Fragment>
          ))}
        </Grid2>
      ))}
    </Grid2>
  );
}
