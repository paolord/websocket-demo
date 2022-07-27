export default class Main {
  public body;
  public home;
  public create;
  public join;

  public socket;

  constructor(socket: any) {
    this.socket = socket;

    this.body = document.getElementsByTagName('body')[0];
    this.home = document.getElementById('home');
    this.create = document.getElementById('create');
    this.join = document.getElementById('join');
  }

  public homeScreen() {
    this.clearScreen();
    this.display(this.home);

    const join = document.getElementById("join-button");
    join?.addEventListener('click', () => {
      this.joinScreen();
    });

    const host = document.getElementById("create-button");
    host?.addEventListener('click', () => {
      this.createScreen();
    });
  }

  public createScreen() {
    this.clearScreen();
    this.display(this.create);

    const nameInput = document.getElementById("username") as HTMLInputElement;

    const create = document.getElementById("create-enter-lobby");
    create?.addEventListener('click', () => {
      
    });
  }

  public joinScreen() {
    this.clearScreen();
    this.display(this.join);
    
    const roomInput = document.getElementById("roomid") as HTMLInputElement;

    const nameInput = document.getElementById("username") as HTMLInputElement;

    const join = document.getElementById("join-enter-lobby");
    join?.addEventListener('click', () => {
      
    });
  }

  protected clearScreen(){
    if (this.home) {
      this.home.style.display = 'none';
    }
    if (this.create) {
      this.create.style.display = 'none';
    }
    if (this.join) {
      this.join.style.display = 'none';
    }
  }
  protected display(screen: any) {
    if (screen) {
      screen.style.display = 'block';
    }
  }
}