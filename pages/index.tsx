import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import { Grid2 } from '@mui/material';
import { getArrayItem } from "./SearchFunctionality";
import Grid2DisplayData from "./GridDataDisplay";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredDatas] = useState([]);

  function handleSearch() {
    const matchingItems = getArrayItem(searchQuery);
    const flatItems = Array.isArray(matchingItems[0]) ? matchingItems.flat() : matchingItems;
    setFilteredDatas(flatItems); // Store the flat array.
  }

  // Function to handle key down events in the search input
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
          <div style={{ position: 'fixed', top: '20px', zIndex: 1000 }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
              style={{ padding: '10px', borderRadius: '5px', marginRight: '10px', border: '1px solid #ccc' }} // Add padding, border radius, and margin
            />
            <button 
              onClick={handleSearch} 
              style={{ padding: '10px 20px', borderRadius: '5px', border: '1px solid #ccc', cursor: 'pointer' }} 
              onMouseDown={(e) => e.currentTarget.style.backgroundColor = '#ddd'} 
              onMouseUp={(e) => e.currentTarget.style.backgroundColor = ''} 
            >
              Search
            </button> 
          </div>
          <Box sx={{ width: '100%', marginTop: '30px', minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid2 container spacing={1}>
              <Grid2DisplayData filteredDatas={filteredData}></Grid2DisplayData>
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
