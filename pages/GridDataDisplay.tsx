import * as React from 'react';
import { useState, useEffect } from 'react';
import data from './mockup_data.json';
import { Grid2 } from '@mui/material';
import ClientDetailProps from './MockData';

interface Grid2DisplayDataProps {
  filteredDatas: ClientDetailProps[];
}

interface OpenIndexes {
  [key: number]: boolean; 
}

function transformData(data: any): ClientDetailProps[] {
  return data.map((item: any) => ({
    KontoID: item['Konto-ID'],
    Kundegruppe: item.Kundegruppe,
    Valuta: item.Valuta,
    Produkttype: item.Produkttype,
    Rentebane: item.Rentebane,
    Forfallsdato: item.Forfallsdato,
    Terminer: item.Terminer,
    Lånetype: item.Lånetype,
    Hovedstol: item.Hovedstol,
    Rente: item.Rente,
    Gebyr: item.Gebyr,
    Forfalterenter: item['Forfalterenter'],
    Avdragbetalt: item['Avdragbetalt'],
    Termingebyr: item.Termingebyr,
    Utestående: item.Utestående,
    Etablering: item.Etablering,
    LoanID: item['Loan-ID'],
  }));
}

const transformedData = transformData(data);

const Grid2DisplayData: React.FC<Grid2DisplayDataProps> = ({ filteredDatas }) => {
  const [filteredLoans, setFilteredLoans] = useState<ClientDetailProps[]>([]);
  const [openIndexes, setOpenIndexes] = useState<OpenIndexes>({});

  // Function to get filtered loans
  function getLoanDetailsItem(personDataArray: ClientDetailProps[]) {
    if (!personDataArray || personDataArray.length === 0) return [];
    const personData = personDataArray[0];
    const filteredLoan = transformedData.filter((loan) => loan.LoanID === personData.LoanID);
    return filteredLoan;
  }

  // Fetch filtered loan data when component loads
  useEffect(() => {
    const loans = getLoanDetailsItem(filteredDatas);
    console.log('Filtered loans on load:', loans);
    setFilteredLoans(loans);
  }, [filteredDatas]);

  // Toggle function for individual elements
  const toggleDetails = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (!filteredLoans.length) {
    return <p>No data available.</p>;
  }

  return (
    <Grid2 container direction="column" spacing={2}>
      {filteredLoans.map((element, index) => (
        <Grid2
          container
          direction="row"
          key={index}
          style={{
            border: '1px solid black',
            padding: '10px 20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '10px',
          }}
        >
          <div style={{ width: 1000 }}>
            <div
              style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => toggleDetails(index)}
            >
              <p style={{ marginRight: '8px' }}>Lånedetaljer</p>
              <p>{openIndexes[index] ? '▲' : '▼'}</p>
            </div>
            <Grid2 container>
              {openIndexes[index] &&
                Object.entries(element).map(([key, value], subIndex, array) => (
                  <React.Fragment key={`${index}-${subIndex}`}>
                    <div
                      style={{
                        display: 'flex',
                        borderBottom: subIndex !== array.length - 1 ? '1px solid #ccc' : 'none',
                        padding: '10px 0',
                      }}
                    >
                      <Grid2 item xs={6} style={{ width: 200 }}>
                        <p style={{ fontWeight: 'bold' }}>{key}:</p>
                      </Grid2>
                      <Grid2 item xs={6} style={{ width: 200 }}>
                        <p style={{ fontWeight: 'medium' }}>{value}</p>
                      </Grid2>
                    </div>
                  </React.Fragment>
                ))}
            </Grid2>
          </div>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Grid2DisplayData;
