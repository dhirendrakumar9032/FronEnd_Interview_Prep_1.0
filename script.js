function abc() {
  console.log(this.name);
}

function xyz(name) {
  abc();
}

xyz('Dhirendra');
