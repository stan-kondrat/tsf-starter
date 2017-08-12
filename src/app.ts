import TSF from 'tsf-web';
import Main from './components/main';

const app = new TSF(document.getElementById('app'));
app.root(new Main());
