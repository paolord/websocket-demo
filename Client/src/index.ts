import Main from './components';

class ScrumPoker {

  public constructor() {

  }

  public init() {
    const main = new Main();
    main.homeScreen();
  }
}

window.addEventListener("load", () => {
  const e = new ScrumPoker();
  e.init();
});