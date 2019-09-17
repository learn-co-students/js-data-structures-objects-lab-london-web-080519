// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driverObject, key, value) {
    let newDriver = Object.assign({}, driverObject, { [key]: value } )
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    Object.assign(driver, { [key]: value })
    return driver
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver)
    delete newDriver[key]
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}