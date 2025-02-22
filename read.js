const fs = require('fs');

// Read the JSON file
fs.readFile('count.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Calculate the sum of Count
        const totalCount = jsonData.brandCounts.reduce((sum, item) => {
            return sum + (item.Count || 0);
        }, 0);

        console.log("Total  Count:", totalCount);
    } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
    }
});
