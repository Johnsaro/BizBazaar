document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sidebar-link").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-target");
      if (target) {
        window.location.href = target;
      }
    });
  });
});
// Action if user click the sidebar options

// Function to export the table data to Excel
function exportToExcel() {
  // Select the table with the class "order-table"
  const table = document.querySelector("#tableContainer");
  // Ensure the table element exists
  if (!table) {
    console.error("Table element not found");
    return;
  }
  // Select all rows in the table
  const rows = table.querySelectorAll("tr");
  // Initialize a string to hold CSV content
  let csvContent = "data:text/csv;charset=utf-8,";
  // Iterate over each row in the table
  rows.forEach(function (row) {
    // Select all cells (both td and th) in the current row
    const cells = row.querySelectorAll("td, th");
    // Initialize an array to hold the data for the current row
    let rowData = [];
    // Iterate over each cell in the current row
    cells.forEach(function (cell) {
      // Add the text content of the cell to the rowData array, trimming any extra whitespace
      rowData.push(cell.textContent.trim());
    });
    // Join the rowData array into a comma-separated string and add it to the CSV content
    csvContent += rowData.join(",") + "\r\n";
  });
  // Encode the CSV content as a URI
  const encodedUri = encodeURI(csvContent);
  // Create a temporary link element
  const link = document.createElement("a");
  // Set the href attribute of the link to the encoded URI
  link.setAttribute("href", encodedUri);
  // Set the download attribute of the link to specify the filename
  link.setAttribute("download", "order_list.csv");
  // Append the link to the document body
  document.body.appendChild(link);
  // Programmatically click the link to trigger the download
  link.click();
  // Remove the link from the document after the download is triggered
  document.body.removeChild(link);
}

//Filtering a table
const data = [
  {
    id: 2750,
    customer: "Amanda Wilson",
    date: "2024-04-30",
    total: "$35",
    status: "Shipped",
  },
  {
    id: 3030,
    customer: "Kevin Garcia",
    date: "2024-05-14",
    total: "$45",
    status: "Shipped",
  },
  {
    id: 1203,
    customer: "Chris Borrus",
    date: "2024-05-08",
    total: "$120",
    status: "Pending",
  },
  {
    id: 2010,
    customer: "Michael Clark",
    date: "2024-04-27",
    total: "$300",
    status: "Delivered",
  },
  {
    id: 1688,
    customer: "James Brown",
    date: "2024-05-15",
    total: "$100",
    status: "Pending",
  },
  {
    id: 1992,
    customer: "Sarah Green",
    date: "2024-04-25",
    total: "$150",
    status: "Pending",
  },
  {
    id: 2345,
    customer: "Emily Davis",
    date: "2024-05-17",
    total: "$200",
    status: "Delivered",
  },
  {
    id: 1899,
    customer: "Robert Johnson",
    date: "2024-05-18",
    total: "$25",
    status: "Shipped",
  },
  {
    id: 1001,
    customer: "John Smith",
    date: "2024-05-02",
    total: "$20",
    status: "Shipped",
  },
  {
    id: 2598,
    customer: "Rachel Miller",
    date: "2024-05-06",
    total: "$60",
    status: "Pending",
  },
  {
    id: 2211,
    customer: "Daniel Anderson",
    date: "2024-05-12",
    total: "$90",
    status: "Pending",
  },
  {
    id: 1444,
    customer: "Kennith Sin",
    date: "2024-04-29",
    total: "$1200",
    status: "Delivered",
  },
  {
    id: 2975,
    customer: "Jennifer Thompson",
    date: "2024-04-26",
    total: "$250",
    status: "Delivered",
  },
  {
    id: 1577,
    customer: "Emma Watson",
    date: "2024-05-10",
    total: "$50",
    status: "Shipped",
  },
  {
    id: 2677,
    customer: "Matthew Harris",
    date: "2024-05-20",
    total: "$500",
    status: "Delivered",
  },
  {
    id: 2888,
    customer: "William Martinez",
    date: "2024-05-09",
    total: "$80",
    status: "Pending",
  },
  {
    id: 2456,
    customer: "Jason Taylor",
    date: "2024-04-22",
    total: "$180",
    status: "Shipped",
  },
  {
    id: 3150,
    customer: "Linda Robinson",
    date: "2024-05-19",
    total: "$110",
    status: "Pending",
  },
  {
    id: 2150,
    customer: "Laura White",
    date: "2024-05-05",
    total: "$75",
    status: "Shipped",
  },
  {
    id: 1735,
    customer: "Michelle Lee",
    date: "2024-04-20",
    total: "$800",
    status: "Delivered",
  },
];

const renderTable = () => {
  const tableContainer = document.getElementById("tableContainer");
  const table = document.createElement("table");
  table.id = "dataTable";
  table.className = "data-table";

  const caption = document.createElement("caption");
  caption.textContent = "Order List View";
  table.appendChild(caption);

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["ID", "Customer", "Date", "Total", "Status"].forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  data.forEach((order) => {
    const row = document.createElement("tr");
    ["id", "customer", "date", "total", "status"].forEach((key) => {
      const cell = document.createElement("td");
      cell.textContent = order[key];
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  tableContainer.innerHTML = ""; // Clear previous table
  tableContainer.appendChild(table);
};

const filterTable = () => {
  console.log("Filtering table...");

  const input = document.getElementById("filterInput").value.toLowerCase();
  console.log("Input:", input);

  const table = document.getElementById("dataTable");
  const rows = Array.from(table.getElementsByTagName("tr"));
  console.log("Rows:", rows);

  let found = false;
  const errorMessage = document.getElementById("errorMessage");

  errorMessage.innerHTML = ""; // Clear previous error message
  console.log("Error message cleared.");

  rows.forEach((row, index) => {
    if (index === 0) return; // Skip header row

    const cells = Array.from(row.getElementsByTagName("td"));
    console.log("Cells:", cells);

    row.style.display = "none"; // Hide all rows initially

    cells.forEach((cell) => {
      const text = cell.innerText.toLowerCase();
      if (text.includes(input)) {
        row.style.display = ""; // Show the row if it matches
        found = true;
        console.log("Match found:", text);
      }
    });
  });

  if (!found) {
    errorMessage.innerHTML = "No matching records found or invalid input.";
    console.log("Error: No matching records found.");
  }
};

// Initial table rendering
document.addEventListener("DOMContentLoaded", renderTable);

//
function sortById() {
  const table = document.getElementById("dataTable");
  let switching = true;

  while (switching) {
    switching = false;
    const rows = Array.from(table.rows);

    for (let i = 1; i < rows.length - 1; i++) {
      let shouldSwitch = false;
      const x = rows[i].getElementsByTagName("TD")[0];
      const y = rows[i + 1].getElementsByTagName("TD")[0];

      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        shouldSwitch = true;
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        break;
      }
    }
  }
}
