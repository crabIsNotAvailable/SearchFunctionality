import Head from 'next/head';
import styles from '../styles/Home.module.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Grid2';
import DataTest from "./SearchFunctionality"



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <Box sx={{ width: '50%' }}>
        <Grid2 container spacing={1} >
          <Grid2 container direction="row">
            <div style={
              {width: 300}
            }>
              <p>1</p>
            </div>
            <div style={
              {width: 300}
            }>
              <p>2</p>
            </div>
          </Grid2>
          <Grid2 container direction="row">
          <div style={
              {width: 300}
            }>
              <p>3</p>
            </div>
            <div style={
              {width: 300}
            }>
              <p>4</p>
            </div>
          </Grid2>
          <Grid2 container direction="row">
          <div style={
              {width: 300}
            }>
              <p>5</p>
            </div>
            <div style={
              {width: 300}
            }>
              <p>6</p>
            </div>
          </Grid2>
          <Grid2 container direction="row">
          <div style={
              {width: 300}
            }>
              <p>7</p>
            </div>
            <div style={
              {width: 300}
            }>
              <p>8</p>
            </div>
          </Grid2>
          <Grid2 container direction="row">
          <div style={
              {width: 300}
            }>
              <p>9</p>
            </div>
            <div style={
              {width: 300}
            }>
              <p>10</p>
            </div>
          </Grid2>
          <Grid2 container direction="row">
          <div style={
              {width: 300}
            }>
              <p>11</p>
            </div>
            <div style={
              {width: 300}
            }>
              <p>12</p>
            </div>
          </Grid2>
        </Grid2>
      </Box>


      <input>
      </input>
      <button>
        Search
      </button>
      </main>

      <DataTest></DataTest>
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
