final car = Car('Tesla', model: 'Model S', miles: 42);
realm.write(() {
  realm.add(car);
});
