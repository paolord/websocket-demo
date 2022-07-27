import Main from './components';

class ScrumPoker {
  public socket;

  public constructor() {
    this.socket = new WebSocket('ws://localhost:5000');
    this.socket.onopen = () => {
      console.log('CONNECTED');
    };
  }

  public init() {
    const main = new Main(this.socket);
    main.homeScreen();
  }
}

window.addEventListener("load", () => {
  const e = new ScrumPoker();
  e.init();
});