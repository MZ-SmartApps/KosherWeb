document.addEventListener("DOMContentLoaded", function () {
    // Get the dialog elements
    const dialog = document.getElementById("campaign-dialog");
    const closeBtn = document.querySelector(".close-btn");
    const selectBtns = document.querySelectorAll(".select-btn");
    const planSpinner = document.getElementById("plan");

    // Plan data for spinner options
    const plans = [
        { name: "בסיסי", price: "90₪" },
        { name: "מתקדם", price: "255₪" },
        { name: "פרימיום", price: "539₪" }
    ];

    // Populate plan options
    function populatePlans() {
        planSpinner.innerHTML = ""; // Clear existing options
        plans.forEach((plan, index) => {
            const option = document.createElement("option");
            option.value = plan.name;
            option.textContent = `${plan.name} - ${plan.price}`;
            option.dataset.price = plan.price;
            if (index === 0) option.selected = true; // Default selection
            planSpinner.appendChild(option);
        });
    }

    // Show dialog and set selected plan when a button is clicked
    selectBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            populatePlans(); // Populate plans in the spinner
            planSpinner.selectedIndex = index; // Auto-select the clicked plan
            dialog.style.display = "flex";
        });
    });

    // Close dialog when close button is clicked
    closeBtn.addEventListener("click", () => {
        dialog.style.display = "none";
    });

    // Close dialog when clicking outside the dialog content
    window.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.style.display = "none";
        }
    });

    // Handle form submission
    const form = document.getElementById("campaign-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission for now

        // Form data processing here (e.g., send data to the server)
        console.log("Form submitted!");

        // Close the dialog
        dialog.style.display = "none";
    });
});
