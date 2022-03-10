moving = false
document.getElementById('drb').addEventListener('mouseover', function() {
    startid = 1
    id = setInterval(() => {
        starterfunc(startid, "white")
        moving = true
        startid += 1
        if (startid > 15) {
            clearInterval(id)
            moving = false
        }
    }, 70);
})

document.getElementById('drb').addEventListener('click', function() {
    window.location.href = "/projectimgs/mohitsatija.pdf"
})

function starterfunc(id, color) {
    if (startid > 15) {
        clearInterval(id)
        moving = false
        return
    }
    document.getElementById("stp-" + id).style.color = color;
}

document.getElementById('drb').addEventListener('mouseout', function() {
    try {
        clearInterval(id)
    } catch (err) {
        console.log()
    }
    for (var i = 1; i <= 15; i++) {
        document.getElementById("stp-" + i).style.color = "#3f51b5"
    }
})

// copyright 2021 MohitSatija