var candidates = []

var new_candidate = () => {
    var can_name = prompt("Candidate Name:");
    candidates.push({index: candidates.length,name: can_name, num_votes: 0});
    update_candidates();
}

var update_candidates = () => {
    var voting_table = document.getElementById("voting_table");
    voting_table.innerHTML = "";
    for(i in candidates) {
        var row = document.createElement("tr");
        var curr = document.createElement("td");
        curr.appendChild(document.createTextNode(candidates[i].name));
        row.appendChild(curr);
        curr = document.createElement("td");
        curr.appendChild(document.createTextNode(candidates[i].num_votes.toString()));
        row.appendChild(curr);
        curr = document.createElement("td");
        var button = document.createElement("button");
        button.setAttribute("id", "candidate"+candidates[i].index);
        button.appendChild(document.createTextNode("Vote For " + candidates[i].name));
        curr.appendChild(button);
        row.appendChild(curr);
        voting_table.appendChild(row);
    }
}