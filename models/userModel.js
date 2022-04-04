'use strict';
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '$2b$12$q1Qd7ORvQ.ICARhEMDomuOQlN.24wugiwNrq8xKIgZKNZFsQbudXq',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: '$2b$12$cI/I1PMMCUseDEcnDGaphulMqvGCQfsMJjA/s0.qneqVr2DmUyK2m',
  },
];

const getUser = (userName) => {
  return users.filter((item) => item.name === userName);
};

const getUserLogin = (email) => {
  const user = users.filter((usr) => {
      if (usr.email === email) {
      return usr;
    }
  }).pop();
  return user;
 };
 

export { users, getUser, getUserLogin };
