document.addEventListener('astro:page-load', () => {
  const output = document.getElementById('terminal-output');
  if (!output) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isEs = document.documentElement.lang.startsWith('es');

  const sequences = isEs ? [
    { cmd: 'whoami',                      res: 'Arquitecto Cloud & Ingeniero DevOps'           },
    { cmd: 'cat stack_cloud.txt',         res: 'AWS · GCP · Azure · Terraform · Kubernetes · Docker' },
    { cmd: 'ls certificaciones/ | wc -l', res: '11 certificaciones activas'                   },
    { cmd: 'uptime --carrera',            res: '+10 años en infraestructura cloud'              },
  ] : [
    { cmd: 'whoami',                      res: 'Cloud Architect & DevOps Engineer'              },
    { cmd: 'cat cloud_stack.txt',         res: 'AWS · GCP · Azure · Terraform · Kubernetes · Docker' },
    { cmd: 'ls certifications/ | wc -l', res: '11 active certifications'                       },
    { cmd: 'uptime --career',             res: '10+ years cloud infrastructure experience'     },
  ];

  const delay = ms => new Promise(r => setTimeout(r, ms));

  function makeLine(cmd, res) {
    const lineEl = document.createElement('div');
    lineEl.className = 'terminal-line';
    lineEl.innerHTML = `<span class="terminal-prompt" aria-hidden="true">❯</span><span class="terminal-command"> ${cmd}</span>`;
    output.appendChild(lineEl);
    if (res) {
      const resEl = document.createElement('div');
      resEl.className = 'terminal-response';
      resEl.textContent = res;
      output.appendChild(resEl);
    }
  }

  async function typeSequence() {
    output.innerHTML = '';

    for (const { cmd, res } of sequences) {
      // Build the line: prompt + empty command span + cursor
      const lineEl = document.createElement('div');
      lineEl.className = 'terminal-line';

      const promptEl = document.createElement('span');
      promptEl.className = 'terminal-prompt';
      promptEl.setAttribute('aria-hidden', 'true');
      promptEl.textContent = '❯';

      const cmdEl = document.createElement('span');
      cmdEl.className = 'terminal-command';

      const cursorEl = document.createElement('span');
      cursorEl.className = 'terminal-cursor';
      cursorEl.setAttribute('aria-hidden', 'true');

      lineEl.append(promptEl, cmdEl, cursorEl);
      output.appendChild(lineEl);

      // Type command character by character
      for (const ch of (' ' + cmd)) {
        cmdEl.textContent += ch;
        await delay(38 + Math.random() * 24);
      }

      // Short pause before showing output
      cursorEl.remove();
      await delay(160);

      const resEl = document.createElement('div');
      resEl.className = 'terminal-response';
      resEl.textContent = res;
      output.appendChild(resEl);

      await delay(700);
    }

    // Final blinking cursor on an empty prompt line
    const finalLine = document.createElement('div');
    finalLine.className = 'terminal-line';
    const finalPrompt = document.createElement('span');
    finalPrompt.className = 'terminal-prompt';
    finalPrompt.setAttribute('aria-hidden', 'true');
    finalPrompt.textContent = '❯';
    const finalCursor = document.createElement('span');
    finalCursor.className = 'terminal-cursor';
    finalCursor.setAttribute('aria-hidden', 'true');
    finalLine.append(finalPrompt, finalCursor);
    output.appendChild(finalLine);

    // Done — cursor keeps blinking indefinitely, no restart
  }

  if (reducedMotion) {
    // Reveal all at once — no animation
    for (const { cmd, res } of sequences) makeLine(cmd, res);
    return;
  }

  delay(600).then(typeSequence);
});
