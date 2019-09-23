// Write your solution in this file!

let driver = {name: 'Bob', age: 40}

function updateDriverWithKeyAndValue(driver, key, value) {
    let Driver = Object.assign({}, driver, {[key]: value})
    return Driver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign(driver, {[key]: value})
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver)
    delete newDriver[key];
    return newDriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver
}

deleteFromDriverByKey(driver, 'name')