import TSF from 'tsf-web';
import Main from './components/main';

const app = new TSF('#app');
const main = new Main();

app.run(main);

main.message = 'Hello World';
