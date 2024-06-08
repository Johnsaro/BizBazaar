document.getElementById("date").addEventListener("change", function () {
  const selectedValue = this.value;
  let salesValue;
  let sign = "+";
  let color = "green"; // Default color for positive values

  switch (selectedValue) {
    case "Daily":
      salesValue = "$1,000";
      break;
    case "Weekly":
      salesValue = "$7,000";
      break;
    case "Monthly":
      salesValue = "$30,000";
      break;
    default:
      salesValue = "";
  }

  // Example condition for changing sign and color
  if (selectedValue === "Weekly" && salesValue === "$7,000") {
    sign = "-";
    color = "red"; // Change color to red for negative values
  }

  const saleValueElement = document.getElementById("saleValue");
  saleValueElement.textContent = `${sign} ${salesValue}`;
  saleValueElement.style.color = color; // Apply color
});
document.getElementById("salesPeriod").addEventListener("change", function () {
  const selectedPeriod = this.value;
  const salesTrends = document.getElementById("salesTrends");
  salesTrends.innerHTML = "";

  let salesData;
  if (selectedPeriod === "Daily") {
    salesData = [
      { date: "June 1", value: 350 },
      { date: "June 2", value: 500 },
      { date: "June 3", value: 300 },
      { date: "June 4", value: 278 },
      { date: "June 5", value: 312 },
      { date: "June 6", value: 345 },
      { date: "June 7", value: -400 },
    ];
  } else if (selectedPeriod === "Weekly") {
    salesData = [
      { week: "Week 1", value: 12000 },
      { week: "Week 2", value: 7900 },
      { week: "Week 3", value: 13973 },
    ];
  }

  for (let i = 0; i < salesData.length; i++) {
    const listItem = document.createElement("li");
    if (i > 0) {
      const diff = salesData[i].value - salesData[i - 1].value;
      if (diff > 0) {
        listItem.style.color = "green"; // Set color to green for positive difference
      } else if (diff < 0) {
        listItem.style.color = "red"; // Set color to red for negative difference
      }
    }
    if ("date" in salesData[i]) {
      listItem.textContent = `${salesData[i].date}: $${salesData[i].value}`;
    } else if ("week" in salesData[i]) {
      listItem.textContent = `${salesData[i].week}: $${salesData[i].value}`;
    }
    salesTrends.appendChild(listItem);
  }
});

// Trigger change event to display the default sales period data (Daily)
document.getElementById("salesPeriod").dispatchEvent(new Event("change"));
