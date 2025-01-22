import * as React from "react";
import data from "./mockup_data.json";
import ClientDetailProps from "./MockData";

function transformData(data: any): ClientDetailProps[] {
  return data.map((item: any) => ({
    KontoID: item["Konto-ID"],
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
    Forfalterenter: item["Forfalterenter"],
    Avdragbetalt: item["Avdragbetalt"],
    Termingebyr: item.Termingebyr,
    Utestående: item.Utestående,
    Etablering: item.Etablering,
  }));
}


const transformedData = transformData(data);

export function getArrayItem(searchQuery) {
  console.log("Search Query:", searchQuery); // Log input
  const matchingItems = transformedData.filter((item) => {
    const itemString = JSON.stringify(item).toLowerCase();
    return itemString.includes(searchQuery.toLowerCase());
  });
  console.log("Matching Items:", matchingItems); // Log output
  return matchingItems; // Ensure this is a flat array
}