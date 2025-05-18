const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ask = (q) => new Promise((res) => rl.question(q, res));

(async () => {
  const variant = await ask('Enter variant (development, preview, production): ');
  const appName = await ask('Enter app name: ');
  const packageName = await ask('Enter package name (e.g., com.vh.mobilecore): ');

  rl.close();

  // Set environment variables and run Expo
  const env = {
    ...process.env,
    APP_VARIANT: variant,
    [`APP_NAME_${variant.toUpperCase()}`]: appName,
    [`PACKAGE_NAME_${variant.toUpperCase()}`]: packageName,
  };

  console.log(`Starting Expo with variant: ${variant}`);

  const child = spawn('npx', ['expo', 'start'], {
    stdio: 'inherit',
    env,
    shell: true,
  });

  child.on('exit', (code) => {
    process.exit(code);
  });
})();