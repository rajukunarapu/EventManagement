const Event = require("../Models/EventModel");
const { URLValidation, typeValidation, guestCapacityValidation, ratingValidation, nameValidation, locationValidation } = require("../Validations/eventValidations");

// Add New Event
exports.addEventController = async (req, res) => {
    try {
        const { name, location, image, type, guestCapacity, rating } = req.body;

        // data sanitization
        nameValidation(name);
        locationValidation(location);
        URLValidation(image)
        typeValidation(type)
        guestCapacityValidation(guestCapacity)
        ratingValidation(rating)

        await Event.create({
            name,
            location,
            image,
            type,
            guestCapacity,
            rating,
        });

        const eventDocs = await Event.find()

        res.json({ message: "Event successfully added", success: true, eventDocument: eventDocs });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

// Getting all events
exports.fetchingEventsController = async(req,res)=>{
    try{
        const events = await Event.find();
        if(!events){
            return res.status(404).json({message : "events not found", success : false})
        }
        res.json({ message : "Events sent successfullly", success : true, eventDocument : events })

    }catch(error){
        res.status(400).json({ message : error.message, success : false })
    }
}

// Getting all events
exports.fetchingDummyEventsController = async(req,res)=>{
    try{
        const events = await Event.find().limit(10);
        if(!events){
            return res.status(404).json({message : "events not found", success : false})
        }
        res.json({ message : "Events sent successfullly", success : true, eventDocument : events })

    }catch(error){
        res.status(400).json({ message : error.message, success : false })
    }
}


// Edit Existing Event (by ID)
exports.editEventController = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedEvent) {
            return res.status(404).json({ message: "Event not found", success: false });
        }

        res.json({ message: "Event successfully updated", success: true, data: updatedEvent });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

// Delete Event (by ID)
exports.deleteEventController = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedEvent = await Event.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found", success: false });
        }

        res.json({ message: "Event successfully deleted", success: true });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};