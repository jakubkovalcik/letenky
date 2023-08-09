

function calculatePrice() {
    const cities = {
        "Praha": 500,
        "Frankfurt": 3000,
        "New York": 15000,
        "Sydney": 30000
    };

    const selectedCity = document.getElementById("city").value;
    const ticketPrice = cities[selectedCity];

    const numberOfTickets = parseInt(document.getElementById("numTickets").value);

    const returnFlight = document.getElementById("returnFlight").checked;
    let totalPrice = ticketPrice * numberOfTickets;
    
    if (returnFlight) {
        totalPrice *= 2;
    }

    const classRadios = document.getElementsByName("class");
    let classMultiplier = 1;
    for (const radio of classRadios) {
        if (radio.checked) {
            if (radio.value === "business") {
                classMultiplier = 1.25;
            } else if (radio.value === "royal") {
                classMultiplier = 1.5;
            }
            break;
        }
    }

    totalPrice *= classMultiplier;
    
    document.getElementById("totalPrice").textContent = `${totalPrice} Kč`;

    const customerBudget = parseFloat(document.getElementById("customerBudget").value);
    const resultMessage = document.getElementById("resultMessage");

    if (totalPrice <= customerBudget) {
        resultMessage.textContent = "Objednávka je v rozpočtu.";
    } else {
        resultMessage.textContent = "Nedostatek finančních prostředků.";
    }
}

function validateTextarea(textarea) {
    const sanitizedText = textarea.value.replace(/[^\w\s]/gi, '');
    textarea.value = sanitizedText;
}