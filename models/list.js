const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    propertyType: {
        type: String,
        require: [true, "Please Select Property Type"]
    },
    price: {
        type: String,
        require: [true, "Please Add Price"]
    },
    propertyAge: {
        type: String,
        require: [true, "Please Select Property Age"]
    },
    propertyDiscription: {
        type: String,
        require: [true, "Please Add Property Discription"]
    },
    negotiable: {
        type: String,
        require: [true, "Please Select Negotiable Type"]
    },
    ownership: {
        type: String,
        require: [true, "Please Select Ownership Type"]
    },
    propertyApproved: {
        type: String,
        require: [true, "Please Select Property Approved Type"]
    },
    bankLoan: {
        type: String,
        require: [true, "Please Select Bank Loan Type"]
    },
    length: {
        type: String,
        require: [true, "Please Add Length"]
    },
    breadth: {
        type: String,
        require: [true, "Please Add Breadth"]
    },
    totalArea: {
        type: String,
        require: [true, "Please Add Total Area"]
    },
    areaUnit: {
        type: String,
        require: [true, "Please Add Area Unit"]
    },
    noOfBHK: {
        type: String,
        require: [true, "Please Select Number of BHK"]
    },
    noOfFloor: {
        type: String,
        require: [true, "Please Select Number of Floor"]
    },
    attached: {
        type: String,
        require: [true, "Please Select Attached Type"]
    },
    westernToilet: {
        type: String,
        require: [true, "Please Select Western Toilet Type"]
    },
    furnished: {
        type: String,
        require: [true, "Please Select Furnished Type"]
    },
    carParking: {
        type: String,
        require: [true, "Please Select Car Parking Type"]
    },
    lift: {
        type: String,
        require: [true, "Please Select Lift Type"]
    },
    electricity: {
        type: String,
        require: [true, "Please Add Electricity Phase"]
    },
    facing: {
        type: String,
        require: [true, "Please Select Facing Type"]
    },
    name: {
        type: String,
        require: [true, "Please Select Owner Type"]
    },
    mobile: {
        type: String,
        require: [true, "Please Add Mobile Number"]
    },
    postedBy: {
        type: String,
        require: [true, "Please Select posted By Type"]
    },
    saleType: {
        type: String,
        require: [true, "Please Select Sale Type"]
    },
    featuredPackage: {
        type: String,
        require: [true, "Please Select Featured Package Type"]
    },
    PPDPackage: {
        type: String,
        require: [true, "Please Select PPD Package Type"]
    },
    // Image uplaod to be added later
    email: {
        type: String,
        require: [true, "Please Add Email"]
    },
    city: {
        type: String,
        require: [true, "Please Select City"]
    },
    area: {
        type: String,
        require: [true, "Please Select Area"]
    },
    pincode: {
        type: String,
        require: [true, "Please Select Pincode"]
    },
    address: {
        type: String,
        require: [true, "Please Add Address"]
    },
    landmark: {
        type: String,
        require: [true, "Please Add Landmark"]
    },
    latitude: {
        type: String,
        require: [true, "Please Add Latitude"]
    },
    longitude: {
        type: String,
        require: [true, "Please Add Longitude"]
    },
    views: String,
    Status: String,
    daysLeft: String
});

const listModel = mongoose.model('list', listSchema);

module.exports = listModel;