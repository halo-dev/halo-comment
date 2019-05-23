<template>
  <div class="comment-modal">
    <div class="comment-modal-container">
      <div class="comment-poster-container active">
        <ul class="comment-poster-controls">
          <!-- <li class="poster-item-close">
              <button
                title="关闭"
                type="button"
              >关闭</button>
            </li> -->
        </ul>
        <div class="comment-poster-main">
          <div class="comment-poster-main-body">
            <img
              class="comment-poster-body-avatar"
              src="https://cdn.ryanc.cc/img/blog/thumbnails/d233b4c9312f1d4e19b962009a9f2635.gif"
            >
            <div class="comment-poster-body-content">
              <ul class="comment-poster-body-header">
                <li class="header-item-nickname">
                  <input
                    type="text"
                    placeholder="昵称 *"
                  >
                  <span></span>
                </li>
                <li class="header-item-email">
                  <input
                    type="email"
                    placeholder="邮箱"
                  >
                  <span></span>
                </li>
                <li class="header-item-website">
                  <input
                    type="email"
                    placeholder="网站"
                  >
                  <span></span>
                </li>
              </ul>
              <div class="comment-poster-body-editor">
                <div class="comment-poster-editor-wrapper">
                  <textarea
                    placeholder="撰写评论..."
                    style="height: 132px;"
                  ></textarea>
                </div>
                <ul class="comment-poster-editor-controls">
                  <li class="editor-item-reply">
                    <button
                      class="editor-btn-reply"
                      type="button"
                      title="回复"
                    >评论</button>
                  </li>
                  <li class="editor-item-preview">
                    <button
                      class="editor-btn-preview"
                      title="预览"
                      type="button"
                    >预览</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
