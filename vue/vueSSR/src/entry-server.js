import { createApp } from './app'

export default context => {
  const { app } = createApp()
  return app
}
// 服务端不需要挂载，他没有DOM节点