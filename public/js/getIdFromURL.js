const path = window.location.pathname;

const pathSegments = path.split('/');

const itemId = pathSegments[pathSegments.length-1];
console.log(itemId);