const Manager = require("../lib/Manager");

// create the team
const generateTeam = team => {

    const generateEmployee = emplyeeObj => {

        const role = emplyeeObj.getRole()
        let extraInfo;

        if (role === 'Manager') {
            extraInfo = `<li class="list-group-item">Office number: ${emplyeeObj.getOfficeNumber()}</li>`;
        } else if (role === 'Engineer') {
            extraInfo = `<li class="list-group-item">GitHub: <a href="https://github.com/${emplyeeObj.getGithub()}" target="_blank" rel="noopener noreferrer">${emplyeeObj.getGithub()}</a></li>`
        } else {
            extraInfo = `<li class="list-group-item">School: ${emplyeeObj.getSchool()}</li>`
        }

        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${emplyeeObj.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${emplyeeObj.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${emplyeeObj.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${emplyeeObj.getEmail()}">${emplyeeObj.getEmail()}</a></li>
                    ${extraInfo}
                </ul>
            </div>
        </div>
            `
    }

    const html = [];

    html.push(team.map(generateEmployee).join(""));

    return html.join("");

}

function generateHTML(teamMembers) {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
            ${generateTeam(teamMembers)}           </div>
        </div>
    </div>
</body>
</html>
    `;
}

module.exports = generateHTML;