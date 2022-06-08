/*
By Matt05 Dev
Website: https://matt05.ml
Github: @Matt0550
*/

$(document).ready(function () {
    var url = 'https://api.github.com/users/Matt0550/repos?sort=created&direction=desc';
    $.get(url, function (data) {
        $.each(data, function (index, repo) {
            // Get the repo name and description
            var repoName = repo.name;
            var repoDesc = repo.description;
            var repoUrl = repo.html_url;
            var repoDate = repo.created_at;
            var repoStars = repo.stargazers_count;
            // Format the date DD/MM/YYYY
            var date = new Date(repoDate);
            repoDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

            // Get user name and avatar
            var userName = repo.owner.login;
            var userAvatar = repo.owner.avatar_url;

            if (repoDesc === null) {
                repoDesc = '<i>No description</i>';
            }

            // Add new project item
            $("#projects").append(`  
                    <a class="project-item" href="`+ repoUrl + `" target="_blank">
                        <div class="item-inner">
                            <div class="content">
                                <h3>`+ repoName + `</h3>
                                <p>`+ repoDesc + `</p>
                            </div>
                            <div class="item-footer">
                                <div class="item-person"><img src="`+ userAvatar + `"><span>` + userName + `</span></div>
                                <div class="item-star"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"/></svg><span>`+ repoStars + `</span></div>
                                <div class="date">
                                    <h5>`+ repoDate + `</h5>
                                </div>
                            </div>
                        </div>
                    </a>
                `);
        });
    }).catch(function (err) {
        console.log(err.responseJSON.message);
        // Get the x-ratelimit-remaining header
        var rateLimitReset = err.getResponseHeader('x-ratelimit-reset');
        // Convert the unix timestamp to a date
        var date = new Date(rateLimitReset * 1000);
        // Format the date DD/MM/YYYY
        var resetDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        console.log(resetDate);
        $("#projects").append(`  
                <div class="project-item">
                    <div class="item-inner">
                        <div class="content">
                            <h3>Error</h3>
                            <p>There was an error loading the projects. Please try again later.</p>
                        </div>
                    </div>
                </div>
            `);
    });
});
