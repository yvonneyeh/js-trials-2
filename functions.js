"use strict";


// 1. isHometown

// Given a 'town', return 'true' if 'town' is 'San Francisco'.

const isHometown = town => town === 'San Francisco';


// 2. getFullName

// Give 'firstName' and 'lastName', return a full name.

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;


// 3. calculateTotal

// Return the total price of an item, figuring in state taxes and fees.

const calculateTotal = (basePrice, state, tax=0.05) => {
    const subtotal = basePrice * (1 + tax);
    let fee = 0;
    if (state === 'CA'){
        fee = 0.03 * subtotal;
    }
    else if (state === 'PA'){
        fee = 2;
    }
    else if (state === 'MA'){
        if (basePrice <= 100){
            fee = 1;
        }
        else{
            fee = 3;
        }
    }
    return subtotal + fee
}