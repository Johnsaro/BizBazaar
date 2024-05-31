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

document.addEventListener("DOMContentLoaded", async () => {
  const productData = document.getElementById("productData");

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      return products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }

  function displayProducts(products) {
    productData.innerHTML = "";
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.className = "product";

      productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
            `;
      productData.appendChild(productDiv);
    });
  }

  const products = await fetchProducts();
  displayProducts(products);
});

// document.querySelector(".main-grid").appendChild(userCard);
