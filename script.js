let user = { id: "USR01", name: "Username", balance: "Unlimited" };

let items = [
  {
    id: "ITMS01",
    name: "Adiboss",
    image: "adiboss.jpg",
    price: 100000,
  },
  {
    id: "ITMS02",
    name: "Asicks1",
    image: "asicks1.jpg",
    price: 250000,
  },
  {
    id: "ITMS03",
    name: "Erbook",
    image: "erbook.jpg",
    price: 125000,
  },
  {
    id: "ITMS04",
    name: "Erbook Mid",
    image: "erbook-mid.jpg",
    price: 300000,
  },
  {
    id: "ITMS05",
    name: "Keke",
    image: "keke.jpg",
    price: 175000,
  },
  {
    id: "ITMS06",
    name: "Adiboss Stop",
    image: "adiboss-stop.jpg",
    price: 274999,
  },
  {
    id: "ITMS07",
    name: "Convert Chuck",
    image: "convertchuck.jpg",
    price: 249999,
  },
  {
    id: "ITMS08",
    name: "Convert Unisex",
    image: "convertunisex.jpg",
    price: 249999,
  },
  {
    id: "ITMS09",
    name: "Hokamars",
    image: "hokamars.jpg",
    price: 235000,
  },
  {
    id: "ITMS010",
    name: "Old Balance",
    image: "oldbalance.jpg",
    price: 249999,
  },
  {
    id: "ITMS11",
    name: "Puma Velo",
    image: "pumavelo.jpg",
    price: 199999,
  },
  {
    id: "ITMS12",
    name: "Erbook Club",
    image: "erbookclub.jpg",
    price: 134000,
  },
];

let userPurchaseHistory = [];

function confirmPayment(itemId) {
  console.log(itemId);
  let selected = items.find(({ id }) => id === itemId);

  console.log(items);
  console.log(selected);
  const deleteItems = items.findIndex((items) => items.id === itemId);
  items.splice(deleteItems, 1);
  // delete selected;

  userPurchaseHistory.push(selected);

  let purchased = "";
  userPurchaseHistory.map(
    (data) =>
      (purchased += `
    <div class="border-bottom border-dark my-3">
    <h5 class="card-title">${data.name}</h5>
    <br />
    <img
      src="./images/${data.image}"
      class="card-img-top border shadow-sm"
      alt="Hollywood Sign on The Hill"
    />
    <div class="card-body">
      <br />
      <p class="card-text float-start w-100 pb-3">Price: <span class="float-end">IDR ${data.price}</span></p>
      <p class="card-text">Status : <span class="float-end"><b>Pembelian Berhasil</b></span></p>
      <br />
    </div>
  </div>`)
  );

  document.querySelector("#purchaseHistory").innerHTML = purchased;

  let content = "";
  items.map(
    (data) =>
      (content += `
<div class="col">
  <div class="card">
    <img
      src="./images/${data.image}"
      class="card-img-top"
      alt="Hollywood Sign on The Hill"
    />
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text">
        Price: IDR ${data.price}
      </p>
      <button type="button" data-bs-toggle="modal" data-bs-target=${
        "#" + data.id
      } class="btn btn-primary w-100">Buy</button>
    </div>
  </div>
</div>`)
  );

  document.querySelector("#container").innerHTML = content;
}

let content = "";
items.map(
  (data) =>
    (content += `
<div class="col">
  <div class="card">
    <img
      src="./images/${data.image}"
      class="card-img-top"
      alt="Hollywood Sign on The Hill"
    />
    <div class="card-body">
      <h5 class="card-title">${data.name}</h5>
      <p class="card-text float-start w-100">Price: <span class="float-end">IDR ${
        data.price
      }</span></p>
      <button type="button" data-bs-toggle="modal" data-bs-target=${
        "#" + data.id
      } class="btn btn-primary w-100">Buy</button>
    </div>
  </div>
</div>`)
);

document.querySelector("#container").innerHTML = content;

let modal = "";
items.map(
  (data) =>
    (modal += `
    <div
    class="modal fade"
    id="${data.id}"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Confirm Payment
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="card">
            <img
              src="./images/${data.image}"
              class="card-img-top"
              alt="Hollywood Sign on The Hill"
            />
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <br />
              <p class="card-text float-start w-100 border-bottom border-dark pb-3">Price: <span class="float-end">IDR ${data.price}</span></p>
              <p class="card-text float-start w-100">Your Money: <span class="float-end"><b>${user.balance}</b></span></p>

              <button type="button" onclick=confirmPayment("${data.id}") class="btn btn-primary w-100" data-bs-dismiss="modal">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`)
);

document.querySelector("#modal").innerHTML = modal;
