$(() => {
    $.get("/dashboard/transactions", (transactions) => {
        for (let t of transactions) {
            $("#ulexpense").append(
                `<li class="list-group-item">
                    <p class="font-weight-bolder border border-dark rounded-pill m-3 p-3" id="listprice">RS. ${t.price}/=</p>
                    <p class="font-weight-bold m-3 p-3" id="listtitle">${t.title}</p>
                </li>`
            )
        }
        $(".expense").append(
            `Total Spent : ${totalexpense}`
        )
    })
})