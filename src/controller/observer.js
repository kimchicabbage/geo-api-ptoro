class Observer {
  callback;
  constructor(callback = () => {}) {
    this.callback = callback;
  }

  setOnUpdate(callback) {
    this.callback = callback;
  }

  update() {
    this.callback && this.callback();
  }
}

export { Observer };
