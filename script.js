
function xyz() {
  console.log(this.name);

}

// xyz();

const person={
  name:'dhire'
}

xyz.call(person);