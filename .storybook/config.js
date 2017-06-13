import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

const req = require.context('../src/components', true, /^\.\/.*\.stories.js$/);

function loadStories() {
   require('../stories');
   req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
