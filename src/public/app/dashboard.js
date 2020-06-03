$(() => {
    let totalexpense = 0;
    $.get("/dashboard/transactions", (transactions) => {
        for (let t of transactions) {
            totalexpense+=t.price
            $("#ulexpense").append(
                `<li class="list-group-item" id="listitem">
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
            `<hr>
            <p class="m-1 p-1">Total Spent : ${totalexpense}</p>
            <hr>`
        )        
    })    
})
