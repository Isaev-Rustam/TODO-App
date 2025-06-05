import '../config/utils/reset.module.css';
import { createRoot } from 'react-dom/client';

import { TodoApp } from './components/App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(<TodoApp />);
