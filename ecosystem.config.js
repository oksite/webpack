module.exports = {
  apps : [{
    name      : 'm',
    script    : 'app.js',
    log_date_format: 'YYYY-MM-DD HH:mm',
    max_memory_restart: '1G',
    watch: [],
    env: {
      NODE_ENV: 'development',
      PORT: 8880,
    },
    env_production : {
      NODE_ENV: 'production',
      PORT: 8080,
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
