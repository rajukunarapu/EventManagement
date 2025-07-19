const validator = require('validator')

// Validation for name
exports.nameValidation = (name)=>{
    if(name === ""){
        throw new Error("Provide name of Event")
    }
}

// Validation for name
exports.locationValidation = (location)=>{
    if(location === ""){
        throw new Error("Provide location of Event")
    }
}

// Validation for type
exports.typeValidation = (eventType)=>{
    if(!(["Wedding", "Conference", "Exhibition", "Party", "Concert"].includes(eventType))){
        throw new Error("Provide event type not in the events list ")
    }
}

// Validation for URL
exports.URLValidation = (url)=>{
    if(!(validator.isURL(url))){
        throw new Error("Provide a valid URL")
    }
}

// Validation for rating
exports.ratingValidation = (rating)=>{
    if(!(["1","2","3","4","5"].includes(rating))){
        throw new Error("Provided rating not in the list ")
    }
}

// Validation for type
exports.guestCapacityValidation = (eventType)=>{
    if(!(["upto 200", "200-500", "500-1000", "morethan 1000"].includes(eventType))){
        throw new Error("Provided capacity not in the list")
    }
}