
import { spawn } from 'child_process';

// Set production environment
process.env.NODE_ENV = 'production';

// Build the Vite app first
console.log('Building application...');
const buildProcess = spawn('npm', ['run', 'build'], { stdio: 'inherit' });

buildProcess.on('exit', (code) => {
  if (code !== 0) {
    console.error('Build failed');
    process.exit(code);
  }
  
  console.log('Build completed successfully');
  console.log('Starting server...');
  
  // Start the production server
  const serverProcess = spawn('node', ['--experimental-modules', 'server-start.js'], { 
    stdio: 'inherit',
    env: { ...process.env }
  });
  
  serverProcess.on('exit', (code) => {
    console.error(`Server exited with code ${code}`);
    process.exit(code);
  });
});
