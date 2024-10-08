import navbar from '../views/navbar';
import presentation from '../views/presentation';

const Dashboard = class Dashboard {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  async render() {
    return `
    <div>${navbar()}</div>
    <div>${presentation()}</div>
    `;
  }

  async run() {
    this.el.innerHTML = await this.render();
  }
};

export default Dashboard;
