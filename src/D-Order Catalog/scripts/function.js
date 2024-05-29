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

//  Export In Excel
function exportToExcel() {
  const table = document.querySelector(".order-table");
  const rows = table.querySelectorAll("tr");
  let csvContent = "data:text/csv;charset=utf-8,";

  rows.forEach(function (row) {
    const cells = row.querySelectorAll("td, th");
    let rowData = [];

    cells.forEach(function (cell) {
      rowData.push(cell.textContent.trim());
    });

    csvContent += rowData.join(",") + "\r\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "order_list.csv");
  document.body.appendChild(link);
  link.click();
}
// Export Order table list in Excel
