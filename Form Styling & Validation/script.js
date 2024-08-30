document.addEventListener('DOMContentLoaded', function () {
    console.log("Script loaded");

    const form = document.querySelector('.form');
    const firstName = document.getElementById('first_name');
    const lastName = document.getElementById('last_name');
    const phoneNo = document.getElementById('Phone_no');
    const email = document.getElementById('Email');
    const consultationInterest = document.getElementById('Consultation_interest');
    const fromDate = document.getElementById('from_date');
    const toDate = document.getElementById('to_date');
    const fromTime = document.getElementById('from_time');
    const toTime = document.getElementById('to_time');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function (event) {
        let isValid = true;
        let errorMessages = [];
        console.log("Form submission triggered");

        [firstName, lastName, phoneNo, email, consultationInterest, fromDate, toDate, fromTime, toTime].forEach(field => {
            field.style.borderColor = '';
        });
        errorMessage.textContent = '';
        successMessage.textContent = '';

        const namePattern = /^[A-Za-z\s]+$/;

        if (firstName.value.trim() === '') {
            isValid = false;
            firstName.style.borderColor = "red";
            errorMessages.push("First name is required.");
            console.log("First name is empty");
        } else if (!namePattern.test(firstName.value.trim())) {
            isValid = false;
            firstName.style.borderColor = "red";
            errorMessages.push("First name should not contain numbers.");
            console.log("First name contains numbers");
        }

        if (lastName.value.trim() === '') {
            isValid = false;
            lastName.style.borderColor = "red";
            errorMessages.push("Last name is required.");
            console.log("Last name is empty");
        } else if (!namePattern.test(lastName.value.trim())) {
            isValid = false;
            lastName.style.borderColor = "red";
            errorMessages.push("Last name should not contain numbers.");
            console.log("Last name contains numbers");
        }

        const phonePattern = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        if (!phonePattern.test(phoneNo.value.trim())) {
            isValid = false;
            phoneNo.style.borderColor = "red";
            errorMessages.push("Phone number is invalid.");
            console.log("Phone number is invalid");
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            isValid = false;
            email.style.borderColor = "red";
            errorMessages.push("Email is invalid.");
            console.log("Email is invalid");
        }

        if (consultationInterest.value === "please_select") {
            isValid = false;
            consultationInterest.style.borderColor = "red";
            errorMessages.push("Please select a consultation interest.");
            console.log("Consultation interest not selected");
        }

        if (fromDate.value === '') {
            isValid = false;
            fromDate.style.borderColor = "red";
            errorMessages.push("From date is required.");
            console.log("From date is empty");
        }

        if (toDate.value === '') {
            isValid = false;
            toDate.style.borderColor = "red";
            errorMessages.push("To date is required.");
            console.log("To date is empty");
        } else if (new Date(fromDate.value) > new Date(toDate.value)) {
            isValid = false;
            toDate.style.borderColor = "red";
            fromDate.style.borderColor = "red";
            errorMessages.push("From date cannot be after To date.");
            console.log("From date cannot be after To date");
        }

        if (fromTime.value === '') {
            isValid = false;
            fromTime.style.borderColor = "red";
            errorMessages.push("From time is required.");
            console.log("From time is empty");
        }

        if (toTime.value === '') {
            isValid = false;
            toTime.style.borderColor = "red";
            errorMessages.push("To time is required.");
            console.log("To time is empty");
        }

        if (!isValid) {
            event.preventDefault();
            errorMessage.textContent = errorMessages.join(' ');
            console.log("Form submission prevented due to validation errors");
        } else {
            event.preventDefault();
            successMessage.textContent = "Form submitted successfully!";
            console.log("Form submitted successfully");

            form.reset();

            [firstName, lastName, phoneNo, email, consultationInterest, fromDate, toDate, fromTime, toTime].forEach(field => {
                field.style.borderColor = '';
            });
        }
    });
});