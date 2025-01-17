import * as React from "react";
import data from "/Users/marti/Documents/nextjs-mui-grid/nextjs-blog/pages/mockup_data.json";
import { useState } from "react";

export default function DataTest() {
    const [searchQuery, setSearchQuery] = useState(""); 

    function getArrayItem() {
        console.log("Data:", data);
    
        const matchingItems = data.filter((item) => {
            // Convert the object to a string to include all fields in the search
            const itemString = JSON.stringify(item).toLowerCase();
            return itemString.includes(searchQuery.toLowerCase());
        });
    
        console.log("Matching Items:", matchingItems);
    }
    

    return (
        <div>
            <input
                type="text"
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={getArrayItem}>Search</button>
        </div>
    );
}
