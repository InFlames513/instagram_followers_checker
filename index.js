const follow = require('./data/follower.json');
const follower = require('./data/follow.json');

for(const element of follow) {
  if(follower.includes(element)) continue;
  console.log(element);
};