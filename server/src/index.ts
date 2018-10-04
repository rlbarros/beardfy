import 'reflect-metadata';

import { ApiServer } from './server';
// import { DatabaseProvider } from './database';

// DatabaseProvider.configure({
//   type: (process.env.DATABASE_TYPE as any) || 'postgres',
//   database: process.env.DATABASE_NAME || 'd3b6bocrf6qmpu',
//   username: process.env.DATABASE_USERNAME || 'mvbwjbbeljtypb',
//   password:
//     process.env.DATABASE_PASSWORD ||
//     '7f8a5104ed606ff71748cf4c1467d0c518208fa7b220b00b1df452a94302711c',
//   host: process.env.DATABASE_HOST || 'ec2-54-235-90-0.compute-1.amazonaws.com',
//   port: +process.env.DATABASE_PORT || 5432,
//   ssl: !!process.env.USE_SSL || true
// });

const server = new ApiServer();
server.start(+process.env.PORT || 8080);
