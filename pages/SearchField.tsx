import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/system';
import useAutocomplete from '@mui/material/useAutocomplete';
import { getArrayItem } from './SearchFunctionality';
import ClientDetailProps from './MockData';
import UserDataProps from './MockDataUser';

const Label = styled('label')({
  display: 'block',
});

const Input = styled('input')(({ theme }) => ({
  width: 200,
  backgroundColor: '#fff',
  color: '#000',
  ...theme.applyStyles('dark', {
    backgroundColor: '#000',
    color: '#fff',
  }),
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: '#fff',
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
  ...theme.applyStyles('dark', {
    backgroundColor: '#000',
  }),
}));

interface SearchFieldProps {
  setFilteredData: (data: ClientDetailProps[]) => void;
  transformedUserData: UserDataProps[]; // Receive transformed user data as prop
  transformedData: ClientDetailProps[]; // Client details data
}

export default function SearchField({ setFilteredData, transformedUserData, transformedData }: SearchFieldProps) {
    const [searchQuery, setSearchQuery] = useState(""); // State for search input
  
    // Filter UserDataProps based on the search query
    const filteredUserData = transformedUserData.filter((user) => {
      const personNumberMatch = user.PersonNumber.toString().startsWith(searchQuery); // Match from start of PersonNumber
      const loanIdMatch = user.LoanID.toLowerCase().startsWith(searchQuery.toLowerCase()); // Match from start of LoanID
      return personNumberMatch || loanIdMatch;
    });
  
    const {
      getRootProps,
      getInputLabelProps,
      getInputProps,
      getListboxProps,
      getOptionProps,
      groupedOptions,
    } = useAutocomplete<UserDataProps>({
      id: 'search-field',
      options: searchQuery ? filteredUserData : [], // Use filtered user data for options
      getOptionLabel: (option) => `${option.PersonNumber} - ${option.LoanID}`, // Combine PersonNumber and LoanIDs
      onChange: (_, newValue) => {
        if (newValue) {
          // Find matching ClientDetailProps for the selected user's LoanIDs
          const clientMatches = transformedData.filter((client) =>
            newValue.LoanID.includes(client.LoanID)
          );
          setFilteredData(clientMatches); // Notify parent with filtered client data
        }
      },
    });
  
    const handleOptionClick = (option: UserDataProps) => {
      // Find matching ClientDetailProps for the clicked user's LoanIDs
      const clientMatches = transformedData.filter((client) =>
        option.LoanID.includes(client.LoanID)
      );
      setFilteredData(clientMatches); // Notify parent with filtered client data
      setSearchQuery(option.PersonNumber.toString()); // Set PersonNumber in the search input
    };
  
    return (
      <div>
        <div {...getRootProps()}>
          <Label {...getInputLabelProps()}>Search by PersonNumber or LoanID</Label>
          <Input
            {...getInputProps()}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
  
        {searchQuery && groupedOptions.length > 0 ? (
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => {
              const { key, ...optionProps } = getOptionProps({ option, index });
  
              return (
                <li
                  key={option.PersonNumber} // Use PersonNumber as key
                  {...optionProps}
                  onClick={() => handleOptionClick(option)}
                >
                  {/* Display PersonNumber and LoanIDs */}
                  {`${option.PersonNumber} - ${option.LoanID}`}
                </li>
              );
            })}
          </Listbox>
        ) : null}
      </div>
    );
  }
  