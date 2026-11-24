// Kijk in index.html welke id's en classes je kunt gebruiken.
// API: https://dummyjson.com/products?limit=0

fetch('https://dummyjson.com/products?limit=0')
  .then(response => response.json())
  .then(data => {
    let out = '';
    for (let product of data.products) {
      out += `
        <section>
          <h2>${product.name}</h2>
          <p>Model: ${product.model}</p>
          <p>Gewicht: ${product.weight}</p>
          <p>Kleur: ${product.color}</p>
        </section>
      `;
    }
    console.log(data.products);
  });
