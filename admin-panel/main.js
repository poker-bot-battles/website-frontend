const backendUrl = "http://127.0.0.1:5140"

async function loadTables() {
    const resp = await fetch(backendUrl+"/files/")
    const tables = await resp.json()
    const tableContainer = document.getElementById("tables")
    tableContainer.innerHTML = ""
    for (const tableName in tables) {
        const tableDiv = makeTableDiv(tables[tableName], tableName);
        tableContainer.appendChild(tableDiv)
    }
}

function makeTableDiv(table, tableName) {
    // Base elements
    const tableDiv = document.createElement("div");
    tableDiv.className = "table"
    const nameH2 = document.createElement("h2");
    const filesList = document.createElement("ul");
    const controls = document.createElement("div");
    controls.className = "controls"
    const runButton = document.createElement("Button");
    runButton.onclick = () => runTable(tableName)
    runButton.textContent = "Run"
    controls.appendChild(runButton)

    nameH2.textContent = "Table: " + tableName
    let resultFileName = "none";
    // Add players
    for (const filename of table) {
        if (filename.endsWith(".json")) {
            resultFileName = filename;
            continue;
        }
        let el = document.createElement("li")
        el.className = "file"
        let nameEl = document.createElement("p")
        let deleteBtn = document.createElement("button")
        deleteBtn.onclick = () => deleteFile(tableName, filename)
        nameEl.textContent = filename
        deleteBtn.textContent = "Delete"
        el.appendChild(nameEl)
        el.appendChild(deleteBtn)
        filesList.appendChild(el)

    };
    // Table results
    const results = document.createElement("ul");
    let resultFile = document.createElement("li")
    resultFile.textContent = "Result File: " + resultFileName
    let deleteResultBtn = document.createElement("button")
    deleteResultBtn.onclick = () => deleteFile(tableName, `table-${tableName}.json`)
    deleteResultBtn.textContent = "Delete Result File"
    
    results.appendChild(resultFile)
    results.appendChild(deleteResultBtn)

    tableDiv.appendChild(nameH2)
    tableDiv.appendChild(controls)
    tableDiv.appendChild(filesList)
    tableDiv.appendChild(results)
    return tableDiv;
}

async function deleteFile(tableName, fileName) {
    await fetch(`${backendUrl}/delete/${tableName}/${fileName}`, {
        method: "Delete",
    })
    loadTables()
}

async function setTime() {
    const time = document.getElementById("timeInputField").value
    await fetch(`${backendUrl}/set-time/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({time: time}),
    })
    document.getElementById("timeInputField").value = ""
    getTime()
}

async function getTime() {
    const timeField = document.getElementById("currentTime")
    
    const resp = await fetch(`${backendUrl}/get-time`)
    const time = await resp.text()
    timeField.textContent = "Time: " + time
}

async function runTable(tableName) {
    await fetch(`${backendUrl}/run/${tableName}`, {
        method: "GET",
    })
    loadTables()
}

getTime()
loadTables()