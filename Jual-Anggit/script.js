let user = { id: "USR01", name: "Anggit", balance: "Unlimited" };

let items = [
  {
    id: "ITMS01",
    name: "Adiboss",
    image: "adiboss.jpg",
    qty: 10,
    price: 10000,
  },
  {
    id: "ITMS02",
    name: "Asicks1",
    image: "asicks1.jpg",
    qty: 10,
    price: 10000,
  },
  {
    id: "ITMS03",
    name: "Erbook",
    image: "erbook.jpg",
    qty: 10,
    price: 10000,
  },
  {
    id: "ITMS04",
    name: "Erbook Mid",
    image: "erbook-mid.jpg",
    qty: 10,
    price: 10000,
  },
  {
    id: "ITMS04",
    name: "Keke",
    image: "keke.jpg",
    qty: 10,
    price: 10000,
  },
];

let userPurchaseHistory = [];

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

              <button type="button" class="btn btn-primary w-100">
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

// function modal(id) {
//   document.getElementById("Filler").id = "Filler2";
// }
