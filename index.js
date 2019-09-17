// Write your solution in this file!

let driver = {name: 'sam'}

function updateDriverWithKeyAndValue (obj, key, value) {
        const newObj = { ...obj };
      
        newObj[key] = value;
      
        return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
        obj[key] = value;

        return obj;
}

function deleteFromDriverByKey (driver, d_key) {
        
        let newDriver = {...driver};
        
        
        delete newDriver[d_key];
        return newDriver;
}

function destructivelyDeleteFromDriverByKey (driver, key){
        delete driver[key];
        return driver;
}
