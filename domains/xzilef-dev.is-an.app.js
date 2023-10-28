addSubDomain({
  description: 'Technology and web programing', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'xzilef-dev', // desired subdomain name
  owner: {
    repo: 'https://github.com/xz1l3f/xzilef-dev-web',
    email: 'xilef.edit@gmail.com',
  },
  record: {
    CNAME: 'xz1l3f.github.io', // e.g.: <your-github-account>.github.io
  },
  proxy: false,
}) 
