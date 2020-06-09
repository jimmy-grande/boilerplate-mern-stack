db.createUser({
  user: 'jimmy',
  pwd: 'yolo',
  roles: [
    {
      role: 'readWrite',
      db: 'my-database',
    },
  ],
})
