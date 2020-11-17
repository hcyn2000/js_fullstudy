'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = [
      { name: '一诺' },
      { name: '火车' }
    ]
  }
}

module.exports = UserController