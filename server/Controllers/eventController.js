const Event = require("../Models/EventModel");

// Add New Event
exports.addEventController = async (req, res) => {
    try {
        const { name, location, image, type, guestCapacity, rating } = req.body;

        const document = await Event.create({
            name,
            location,
            image,
            type,
            guestCapacity,
            rating,
        });

        res.json({ message: "Event successfully added", success: true, data: document });
    } catch (error) {
        res.status(400).json({ message: error.message, success: false });
    }
};

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