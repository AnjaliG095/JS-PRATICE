
        // Logical Operators in JavaScript
    
        let age = 20;
        let hasLicense = true;

       

        console.log("Logical AND (&&)");
        console.log(age >= 18 && hasLicense); // true
        console.log(age < 18 && hasLicense);  // false


 
        console.log("Logical OR (||)");
        console.log(age >= 18 || hasLicense); // true
        console.log(age < 18 || hasLicense);  // true
        console.log(false || false);          // false


        console.log("Logical NOT (!)");
        console.log(!hasLicense); // false
        console.log(!true);       // false
        console.log(!false);      // true


        if (age >= 18 && hasLicense) {
            console.log("You are allowed to drive.");
        } else {
            console.log("You are not allowed to drive.");
        }

    