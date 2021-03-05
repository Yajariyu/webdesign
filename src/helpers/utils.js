//Format of User Input
const userObject = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  company: {
    name: "",
    bs: "",
    catchPhrase: "",
  },
};

//Regex to validate each input Field
const input_fields = {
  name: /^[a-zA-Z\d\s]{1,25}$/i,
  username: /^[a-z\d\s0-9]{1,25}$/i,
  // eslint-disable-next-line
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: /^\d[\dx-\s]+\d$/,
  website: /^[A-Za-z]+\.[A-Za-z]+/,
  address: {
    // eslint-disable-next-line
    street: /^[a-zA-Z0-9\.\s]{1,25}/,
    // eslint-disable-next-line
    suite: /^[a-zA-Z0-9\.\d\s]{1,40}$/,
    // eslint-disable-next-line
    city: /^[a-zA-Z\d\s\.]{1,25}$/,
    zipcode: /^\d{5}-\d{4}$/,
    geo: {
      // eslint-disable-next-line
      lat: /^([\-]?)[0-9]+\.[0-9]+$/,
      // eslint-disable-next-line
      lng: /^([\-]?)[0-9]+\.[0-9]+$/,
    },
  },
  company: {
    name: /^[a-zA-Z\d\s-_]{1,50}$/i,
    // bs: /^[a-zA-Z\d\s]{1,50}$/i,
    // catchPhrase: /^[a-zA-Z\d\s]{1,50}$/i,
  },
};

//Function to check with Regex
const validate = (field, regex) => {
  return regex.test(field.trim()) ? null : "error";
};

//Verify if there is Object inside a field to Validate
const checkNestedIfObject = (object, key, inputs) => {
  return (
    inputs[key] &&
    typeof object[key] === "object" &&
    Object.keys(object[key]).length > 1
  );
};

//Function that validate each input in Object
const checkUserObject = (user) => {
  let error = { ...userObject };
  for (let key in user) {
    if (checkNestedIfObject(user, key, input_fields)) {
      for (let insidekey in user[key]) {
        if (checkNestedIfObject(user[key], insidekey, input_fields[key])) {
          for (let newKeyInside in user[key][insidekey]) {
            error[key][insidekey][newKeyInside] = input_fields[key][insidekey][
              newKeyInside
            ]
              ? validate(
                  user[key][insidekey][newKeyInside],
                  input_fields[key][insidekey][newKeyInside]
                )
              : null;
          }
        } else {
          error[key][insidekey] = input_fields[key][insidekey]
            ? validate(user[key][insidekey], input_fields[key][insidekey])
            : null;
        }
      }
    } else {
      error[key] = input_fields[key]
        ? validate(user[key], input_fields[key])
        : null;
    }
  }
  return error;
};

//Check if there is any Error in Error object .  Return false if there is an error
const checkNestedObject = (error) => {
  let valid = true;
  for (let keyNew in error) {
    if (typeof error[keyNew] === "object") {
      valid = checkNestedObject(error[keyNew], keyNew);
      if (valid === false) return valid;
    } else {
      if (error[keyNew] === "error") {
        valid = false;
        return valid;
      }
    }
  }
  return valid;
};

//Function to apply checkNestedObject
const checkIfError = (error) => {
  let valid = true;
  valid = checkNestedObject(error);
  return valid;
};

//Function to Pass to User Form
export const checkErrorForm = (user) => {
  const error = checkUserObject(user);
  const check = checkIfError(error);
  return [check, error];
};
