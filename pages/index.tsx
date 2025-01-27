import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';

import { useState, useEffect } from 'react';
import dataUser from './mockup_data_person.json';
import Grid2DisplayData from "./GridDataDisplay";
import SearchField from './SearchField';
import { userDetailsTransformed } from './SearchFunctionality';


export default function Home() {

  
  const [filteredData, setFilteredDatas] = useState([]);
  
  const [transformedUserData, setTransformedUserData] = useState([]);

  useEffect(() => {
    const transformed = userDetailsTransformed(dataUser);
    console.log("Transformed User Data:", transformed); // Debug
    setTransformedUserData(transformed);
  }, []);

  console.log("filtered dAta:", filteredData)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <div style={{ position: "fixed", top: "20px", zIndex: 1000 }}>
            <SearchField
              setFilteredData={setFilteredDatas}
              transformedData={transformedUserData} // Pass full data here
              transformedUserData={transformedUserData}
            />
          </div>

          <Box
            sx={{
              width: "100%",
              marginTop: "30px",
              minHeight: "calc(100vh - 80px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid2 container spacing={1}>
              <Grid2DisplayData filteredDatas={filteredData} />
            </Grid2>
          </Box>
        </Box>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}