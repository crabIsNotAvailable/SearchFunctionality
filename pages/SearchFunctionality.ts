import * as React from "react";
import data from "./mockup_data.json";
import dataUser from "./mockup_data_person.json"
import ClientDetailProps from "./MockData";
import UserDataProps from "./MockDataUser"

function loanDetailsTransformed(data: any): ClientDetailProps[] {
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
    Forfalterenter: item.Forfalterenter,
    Avdragbetalt: item.Avdragbetalt,
    Termingebyr: item.Termingebyr,
    Utestående: item.Utestående,
    Etablering: item.Etablering,
    LoanID: item["Loan-ID"]
  }));
}

export function userDetailsTransformed(data: any): UserDataProps[] {
  return data.map((item: any) => ({
    PersonNumber: item["Person-Number"],
    LoanID: item["Loan-ID"]
  }))
}

// function transformUserData(dataUser: any): UserDataProps[] {
//   return data.map((item: any) => ({
//     PersonNumber: item["Person-Number"],
//     LoanId: item["Loan-ID"]
//   }))
// }


const transformedData = loanDetailsTransformed(data);

const transformedUserData = userDetailsTransformed(data)

// const transformedDataUser = transformUserData(dataUser)

export function getArrayItem(searchQuery: string) {
  console.log("Search Query:", searchQuery);

  // Search UserDataProps for matches in PersonNumber or LoanID
  const userMatches = transformedUserData.filter((user) => {
    const personNumberMatch = user.PersonNumber.toString().includes(searchQuery);
    let loanIdMatch = false;
  
    // Your logic for checking LoanID or other fields
  
    // Make sure this is the condition that logs the result
    if (personNumberMatch || loanIdMatch) {
      return true;
    }
  
    return false;
  });
  
  console.log("User Matches:", userMatches);
  

  // Extract all matched LoanIDs from users
  const matchingLoanIDs = userMatches.map((user) => user.LoanID).flat();

  // Use the matched LoanIDs to filter ClientDetailProps
  const clientMatches = transformedData.filter((loan) =>
    matchingLoanIDs.includes(loan.LoanID)
  );

  console.log("Client Matches:", clientMatches);

  return clientMatches; // Return the filtered client data
}





