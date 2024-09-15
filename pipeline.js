const pipeline = [
  {
    name: 'analyze',
    steps: [
      'Checkout repository',
      'Initialize CodeQL',
      'Autobuild',
      'Perform CodeQL Analysis'
    ]
  },
  {
    name: 'unit-test',
    steps: [
      'Checkout repository',
      'Run Tests',
      'Generate JaCoCo Badge',
      'Log coverage percentage',
      'Upload JaCoCo coverage report'
    ]
  },
  {
    name: 'code-analysis',
    steps: [
      'Checkout repository',
      'Set up JDK 17',
      'Cache SonarCloud packages',
      'Cache Maven packages',
      'Build and analyze'
    ]
  },
  {
    name: 'build',
    steps: [
      'Checkout repository',
      'Package'
    ]
  },
  {
    name: 'deploy-STG',
    steps: [
      'Deploy to STG'
    ]
  },
  {
    name: 'smoketest',
    steps: [
      'Checkout repository',
      'Run Smoketest'
    ]
  },
  {
    name: 'integrated-tests',
    steps: [
      'Checkout repository',
      'Run Integrated Tests'
    ]
  },
  {
    name: 'deploy-Pre',
    steps: [
      'Deploy to PRE'
    ]
  },
  {
    name: 'smoketestPre',
    steps: [
      'Checkout repository',
      'Run Smoketest'
    ]
  },
  {
    name: 'functional-tests',
    steps: [
      'Checkout repository',
      'Run Functional Tests'
    ]
  },
  {
    name: 'deploy-Prod',
    steps: [
      'Deploy to PROD'
    ]
  }
];

const pipelineContainer = document.getElementById('pipeline');

pipeline.forEach(job => {
  const jobDiv = document.createElement('div');
  jobDiv.classList.add('job');

  const jobTitle = document.createElement('h2');
  jobTitle.textContent = job.name;
  jobDiv.appendChild(jobTitle);

  const stepsDiv = document.createElement('div');
  stepsDiv.classList.add('steps');

  job.steps.forEach(step => {
    const stepDiv = document.createElement('div');
    stepDiv.classList.add('step');
    stepDiv.textContent = step;
    stepsDiv.appendChild(stepDiv);
  });

  jobDiv.appendChild(stepsDiv);
  pipelineContainer.appendChild(jobDiv);
});
