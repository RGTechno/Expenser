$(() => {
    $.get("/dashboard/transactions", (transactions) => {
        for (let t of transactions) {
            $("#ulexpense").append(
                `<li class="list-group-item">
                    <div class="container m-1 p-1 col">
                        <div class="row">
                            <p class="font-weight-bolder border border-dark rounded-pill p-3 col-8" id="listprice">RS. ${t.price}/=</p>
                        </div>
                        <div class="row">
                            <p class="font-weight-bold p-3 col" id="listtitle">${t.title}</p>
                        </div>                    
                    </div>
                </li>`
            )
        }
        $(".expense").append(
            `Total Spent : ${totalexpense}`
        )
    })
})