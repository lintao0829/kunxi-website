export const ViewerAsync = () => ({
  component: import('v-viewer'),
  loading: { template: '<div></div>' },
  error: { template: '<div></div>' },
  delay: 200,
  timeout: 3000
})

export const BaiduMapAsync = () => ({
  component: import('vue-baidu-map'),
  loading: { template: '<div>加载地图中...</div>' },
  error: { template: '<div>地图加载失败</div>' },
  delay: 200,
  timeout: 5000
})

export const VideoPlayerAsync = () => ({
  component: import('vue-video-player'),
  loading: { template: '<div>加载播放器中...</div>' },
  error: { template: '<div>播放器加载失败</div>' },
  delay: 200,
  timeout: 3000
})

export const loadViewer = async () => {
  if (!window.ViewerLoaded) {
    const Viewer = await import('v-viewer')
    import('../node_modules/viewerjs/dist/viewer.css')
    window.ViewerLoaded = true
    return Viewer.default
  }
  return null
}

export const loadBaiduMap = async (Vue) => {
  if (!window.BaiduMapLoaded) {
    const BaiduMap = await import('vue-baidu-map')
    Vue.use(BaiduMap.default, { ak: 'yT1n10FkCZEe1PsQUwiOTfc7AbBvXwGx' })
    window.BaiduMapLoaded = true
  }
}

export const loadVideoPlayer = async (Vue) => {
  if (!window.VideoPlayerLoaded) {
    const VideoPlayer = await import('vue-video-player')
    require('video.js/dist/video-js.css')
    require('vue-video-player/src/custom-theme.css')
    Vue.use(VideoPlayer.default)
    window.VideoPlayerLoaded = true
  }
}