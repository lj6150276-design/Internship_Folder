$(document).ready(function () {

    $.get("https://jsonplaceholder.typicode.com/users", function (data) {

        // Challenge
        $("#user-count").text(`Showing ${data.length} users`);

        data.forEach((user, index) => {

            const bgClass = index % 2 === 0 ? "bg-info-subtle" : "";

            const card = `
                <div class="col-md-4">
                    <div class="card h-100 ${bgClass}">
                        <img src="https://i.pravatar.cc/150?img=${user.id}"
                             class="card-img-top p-3 rounded-circle"
                             style="width:150px;height:150px;object-fit:cover;margin:auto;">

                        <div class="card-body text-center">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text">
                                <strong>Email:</strong><br>
                                ${user.email}
                            </p>
                            <p class="card-text">
                                <strong>Company:</strong><br>
                                ${user.company.name}
                            </p>
                        </div>
                    </div>
                </div>
            `;

            // Append all cards into #user-container
            $("#user-container").append(card);
        });

    });

});