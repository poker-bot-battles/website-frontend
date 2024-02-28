const backendUrl = "https://api.pokerbot.dk"
const apiKey = localStorage.getItem("api-key");

async function loadTables() {
    const resp = await fetch(backendUrl + "/files", {
        method: "GET",
        headers: {
            "X-API-KEY": apiKey
        }
    })
    const errorContainer = document.getElementById("errorMessage")
    errorContainer.innerHTML = ""
    
    if (resp.status != 200) {
        errorContainer.textContent = await resp.text()
    }
    const tables = await resp.json()
    tableContainer.innerHTML = ""
    const tableContainer = document.getElementById("tables")
    for (const tableName in tables) {
        const tableDiv = makeTableDiv(tables[tableName], tableName);
        tableContainer.appendChild(tableDiv)
    }
}

function makeElement(type, className = "", text = "", onclick = null) {
    const el = document.createElement(type)
    el.textContent = text
    el.className = className
    if (onclick) el.onclick = onclick
    return el
}

function appendChildList(parent, children) {
    for (const child of children) {
        parent.appendChild(child)
    }
}

function makeTableDiv(table, tableName) {
    // Base elements
    const tableDiv = makeElement("div", "table");
    const nameH2 = makeElement("h2", "", "Table: " + tableName);
    const controls = makeElement("div", "controls")
    const runButton = makeElement("button", "", "run", () => runTable(tableName))
    controls.appendChild(runButton)

    let resultFileName = "none";
    const filesList = makeElement("ul");
    // Add players
    for (const filename of table) {
        if (filename.endsWith(".json")) {
            resultFileName = filename;
            continue;
        }
        let el = makeElement("li", "file")
        let nameEl = makeElement("p", "", filename)
        let deleteBtn = makeElement("button", "", "Delete", () => deleteFile(tableName, filename))
        appendChildList(el, [nameEl, deleteBtn])
        filesList.appendChild(el)

    };
    const results = makeElement("ul");
    const resultFile = makeElement("li", "", "Result File: " + resultFileName)
    const deleteResultBtn = makeElement("button", "", "Delete Result File", () => deleteFile(tableName, `table-${tableName}.json`))

    appendChildList(results, [resultFile, deleteResultBtn])
    appendChildList(tableDiv, [nameH2, controls, filesList, results])
    return tableDiv;
}

async function deleteFile(tableName, fileName) {
    await fetch(`${backendUrl}/delete/${tableName}/${fileName}`, {
        method: "Delete",
        headers: {
            "X-API-KEY": apiKey
        }
    })
    loadTables()
}

async function setTime() {
    const time = document.getElementById("timeInputField").value
    await fetch(`${backendUrl}/set-time/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            "X-API-KEY": apiKey
        },
        body: JSON.stringify({ time: time }),
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
        headers: {
            "X-API-KEY": apiKey
        }
    })
    loadTables()
}

getTime()
loadTables()
