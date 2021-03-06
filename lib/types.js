'use strict';

const checkType = (requiredType) => {
  return (value) => {
    let type = typeof value;
    if ( type === 'object' ) {
      if ( value === null ) { return 'null' === requiredType; }
      if ( Array.isArray(value) ) { return 'array' === requiredType; }
      if ( value instanceof Date ) { return 'date' === requiredType; }
    }
    return type === requiredType;
  };
};

const isArray = checkType('array');
const isBoolean = checkType('boolean');
const isDate = checkType('date');
const isFunction = checkType('function');
const isNil = (x) => checkType('null')(x) || checkType('undefined')(x);
const isNull = checkType('null');
const isNumber = checkType('number');
const isObject = checkType('object');
const isString = checkType('string');
const isUndefined = checkType('undefined');
const hasType = (requiredType, value) => checkType(requiredType)(value);
const notType = (requiredType, value) => !hasType(requiredType, value);

module.exports = { hasType, notType, isArray, isBoolean, isDate, isFunction, isNil, isNull, isNumber, isObject, isString, isUndefined };

// EOF
