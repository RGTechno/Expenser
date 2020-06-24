$(() => {
    let totalexpense = 0;
    $.get("/dashboard/transactions", (transactions) => {
        for (let t of transactions) {
            totalexpense+=t.price
            $("#ulexpense").prepend(
                `<li class="list-group-item" id="listitem">
                    <div class="container m-1 p-1 col">
                        <div class="row">
                            <p class="font-weight-bolder border border-dark rounded-pill p-3 col-sm-8 col-md-8" id="listprice">RS. ${t.price}/=</p>
                        </div>
                        <div class="row">
                            <p class="font-weight-bold p-3 col-sm-10 col-md-10" id="listtitle">${t.title}</p>
                            <small class="col-sm-2 col-md-2 p-3">${t.createdAt.substr(0,10)}</small>
                        </div>                    
                    </div>
                </li>`
            )
        }
        $(".expense").append(
            `<hr>
            <p class="m-1 p-1 text-dark">Total Spent : ${totalexpense}</p>
            <hr>`
        )        
    })    
})
