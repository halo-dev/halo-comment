<template>
  <div class="halo-comment">
    <div class="comment-placeholder">
      <div class="comment-item">
        <img
          class="comment-item-author-avatar"
          src="https://cdn.ryanc.cc/img/blog/thumbnails/d233b4c9312f1d4e19b962009a9f2635.gif"
        >
        <div class="comment-item-main">
          <div class="comment-item-header">
            <span class="header-author">
              Ryan Wang
            </span>
          </div>
          <div class="comment-item-content">
            <p>撰写评论...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-items">
      <div class="comment-item">
        <img
          class="comment-item-author-avatar"
          src="https://cdn.ryanc.cc/img/blog/thumbnails/d233b4c9312f1d4e19b962009a9f2635.gif"
        >
        <div class="comment-item-main">
          <div class="comment-item-header">
            <span class="header-author">
              <a href="#">Ryan Wang</a>
            </span>
            <span class="header-time">5 年前</span>
          </div>
          <div class="comment-item-content">
            <p>就是感觉登录有点不是太好看(•̀ᴗ•́)و ̑̑，不过整体还是OK的</p>
          </div>
          <div class="comment-item-contols">
            <ul>
              <li><button class="item-control-reply">回复</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="comment-item">
        <img
          class="comment-item-author-avatar"
          src="https://cdn.ryanc.cc/img/blog/thumbnails/d233b4c9312f1d4e19b962009a9f2635.gif"
        >
        <div class="comment-item-main">
          <div class="comment-item-header">
            <span class="header-author">
              <a href="#">Ryan Wang</a>
            </span>
            <span class="header-time">5 年前</span>
          </div>
          <div class="comment-item-content">
            <p>就是感觉登录有点不是太好看(•̀ᴗ•́)و ̑̑，不过整体还是OK的</p>
          </div>
          <div class="comment-item-contols">
            <ul>
              <li><button class="item-control-reply">回复</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="comment-item">
        <img
          class="comment-item-author-avatar"
          src="https://cdn.ryanc.cc/img/blog/thumbnails/d233b4c9312f1d4e19b962009a9f2635.gif"
        >
        <div class="comment-item-main">
          <div class="comment-item-header">
            <span class="header-author">
              <a href="#">Ryan Wang</a>
            </span>
            <span class="header-time">5 年前</span>
          </div>
          <div class="comment-item-content">
            <p>就是感觉登录有点不是太好看(•̀ᴗ•́)و ̑̑，不过整体还是OK的</p>
          </div>
          <div class="comment-item-contols">
            <ul>
              <li><button class="item-control-reply">回复</button></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="comment-item">
        <img
          class="comment-item-author-avatar"
          src="https://cdn.ryanc.cc/img/blog/thumbnails/d233b4c9312f1d4e19b962009a9f2635.gif"
        >
        <div class="comment-item-main">
          <div class="comment-item-header">
            <span class="header-author">
              <a href="#">Ryan Wang</a>
            </span>
            <span class="header-time">5 年前</span>
          </div>
          <div class="comment-item-content">
            <p>就是感觉登录有点不是太好看(•̀ᴗ•́)و ̑̑，不过整体还是OK的</p>
          </div>
          <div class="comment-item-contols">
            <ul>
              <li><button class="item-control-reply">回复</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="comment-pagination">
      <ul class="pagination">
        <li class="disabled"><a href="javascript:void(0)">上一页</a></li>
        <li class="active"><a href="javascript:void(0)">1</a></li>
        <li><a href="javascript:void(0)">
            2
          </a></li>
        <li><a href="javascript:void(0)">
            3
          </a></li>
        <li><a href="javascript:void(0)">
            4
          </a></li>
        <li><a href="javascript:void(0)">
            5
          </a></li>
        <li><a href="javascript:void(0)">
            6
          </a></li>
        <li><a href="javascript:void(0)">下一页</a></li>
      </ul>
    </div>
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
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      commentModalVisible: true
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.halo-comment {
  * {
    outline: none;
    font-size: 13px;
    line-height: 1.5;
    padding: 0;
    margin: 0;
    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: #eee;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #1890ff;
    }
    &::-webkit-scrollbar-track {
      background-color: #eee;
    }
    &::before {
      box-sizing: border-box;
    }
    &:after {
      box-sizing: border-box;
    }
  }

  .comment-placeholder {
    cursor: text;
    margin-bottom: 10px;
    border: 2px dashed #ededed;
    border-radius: 8px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:hover {
      border: 2px dashed #bd9090;
    }
    .comment-item {
      padding-top: 15px;
      position: relative;
      display: block;
      box-sizing: border-box;
      line-height: 2;
      color: #555;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      .comment-item-author-avatar {
        float: left;
        width: 56px;
        height: 56px;
        border-radius: 56px;
        line-height: 56px;
        display: block;
        box-sizing: content-box;
        text-align: center;
        margin-right: 12px;
      }
      .comment-item-main {
        overflow: hidden;
        padding-bottom: 0.5rem;
        color: #555;
        .comment-item-header {
          .header-author {
            position: relative;
            margin-right: 10px;
            cursor: pointer;
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            color: #2c2e31;
            text-decoration: none;
          }
        }
        .comment-item-content {
          word-wrap: break-word;
          word-break: break-all;
          text-align: justify;
          position: relative;
          margin-bottom: 6px;
          padding-top: 6px;
          p {
            line-height: 2;
            font-size: 16px;
            color: #667c99;
          }
        }
      }
    }
  }

  .comment-items {
    .comment-item {
      padding-top: 15px;
      position: relative;
      display: block;
      box-sizing: border-box;
      line-height: 2;
      color: #555;
      border-bottom: 1px solid #e8ecf3;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      .comment-item-author-avatar {
        float: left;
        width: 56px;
        height: 56px;
        border-radius: 56px;
        line-height: 56px;
        display: block;
        box-sizing: content-box;
        text-align: center;
        margin-right: 12px;
      }
      .comment-item-main {
        overflow: hidden;
        padding-bottom: 0.5rem;
        color: #555;
        .comment-item-header {
          .header-author {
            position: relative;
            margin-right: 10px;
            cursor: pointer;
            display: inline-block;
            a {
              font-size: 15px;
              font-weight: bold;
              color: #111;
              text-decoration: none;
            }
            &::before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: 2px;
              background-color: #565656;
              transform-origin: bottom right;
              transform: scaleX(0);
              transition: transform 0.5s ease;
            }
            &:hover::before {
              transform-origin: bottom left;
              transform: scaleX(1);
            }
          }
          .header-time {
            position: relative;
            font-size: 13px;
            color: #667c99;
            display: inline-block;
          }
        }
        .comment-item-content {
          word-wrap: break-word;
          word-break: break-all;
          text-align: justify;
          position: relative;
          margin-bottom: 6px;
          padding-top: 6px;
          p {
            line-height: 2;
            font-size: 14px;
            color: #111;
          }
        }
        .comment-item-contols {
          float: right;
          position: relative;
          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            li {
              margin-right: 0;
              margin-left: -5px;
              display: inline-block;
              vertical-align: top;
              .item-control-reply {
                display: inline-block;
                margin-bottom: 0;
                text-align: center;
                vertical-align: middle;
                cursor: pointer;
                white-space: nowrap;
                padding: 6px 12px;
                border-radius: 4px;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                color: #667c99;
                border: 0;
                &:hover {
                  color: #0084fe;
                }
              }
            }
          }
        }
      }
    }
  }

  .comment-pagination {
    margin-top: 20px;
    text-align: center;
    .pagination {
      display: inline-block;
      padding: 0;
      margin: 0;
      li {
        display: inline;
        a {
          color: #1890ff;
          float: left;
          padding: 4px 12px;
          text-decoration: none;
          border-radius: .1rem;
          &:hover:not(.active) {
            background-color: #ddd;
            color: #fff;
          }
        }
        &.active {
          a {
            color: #fff;
            background-color: #1890ff;
          }
        }
      }
    }
  }

  .comment-modal {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1020;
    pointer-events: none;
    -webkit-transition: left 0.2s;
    -o-transition: left 0.2s;
    transition: left 0.2s;
    .comment-modal-container {
      width: 768px;
      margin-right: auto;
      margin-left: auto;
      .comment-poster-container {
        border-radius: 4px 4px 0 0;
        background: rgba(255, 255, 255, 0.95);
        transform: translateZ(0);
        position: relative;
        pointer-events: auto;
        -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
        -webkit-transition: background 0.2s, box-shadow 0.2s;
        -o-transition: background 0.2s, box-shadow 0.2s;
        transition: background 0.2s, box-shadow 0.2s;
        height: 248px;
        bottom: -248px;
        display: none;
        &.active {
          height: 248px;
          bottom: 0;
          display: block;
        }
        .comment-poster-controls {
          position: absolute;
          right: 10px;
          top: 10px;
          z-index: 1;
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            display: inline-block;
          }
        }
        .comment-poster-main {
          padding: 20px 20px 0;
          .comment-poster-main-body {
            .comment-poster-body-avatar {
              float: left;
              width: 64px;
              height: 64px;
              border-radius: 64px;
              line-height: 64px;
              display: block;
              box-sizing: content-box;
              text-align: center;
            }
            .comment-poster-body-content {
              margin-left: 85px;
              .comment-poster-body-header {
                list-style: none;
                padding: 1px 0;
                margin: 0 0 10px;
                li {
                  display: inline-block;
                  margin-right: -4px;
                  width: 33.3%;
                  input {
                    width: 100%;
                    color: #667c99;
                    font-size: 14px;
                    font-family: inherit;
                    background-color: transparent;
                    border: 1px solid transparent;
                    border-bottom-color: hsla(185, 100%, 62%, 0.2);
                    &::placeholder {
                      color: #667c99;
                    }
                  }
                }
              }
              .comment-poster-body-editor {
                position: relative;
                .comment-poster-editor-wrapper {
                  position: relative;
                  textarea {
                    display: block;
                    width: 100%;
                    background: none;
                    border: 0;
                    border-radius: 0;
                    padding: 0 0 10px;
                    border: 0;
                    resize: none;
                    color: #111;
                    font-size: 14px;
                    line-height: 1.7;
                  }
                }
                .comment-poster-editor-controls {
                  margin: 0 -20px 0 -105px;
                  padding: 10px 20px;
                  border-top: 1px solid #e8ecf3;
                  list-style-type: none;
                  overflow-x: auto;
                  white-space: nowrap;
                  li {
                    display: inline-block;
                    margin-right: 10px;
                  }
                  .editor-item-reply {
                    .editor-btn-reply {
                      font-size: inherit;
                      font-family: inherit;
                      color: #fff;
                      padding: 0.5em 1em;
                      outline: none;
                      border: none;
                      background-color: #1890ff;
                      border-radius: 4px;
                      cursor: pointer;
                      &:hover {
                        background-color: #0084fe;
                        transition: all 0.4s ease-in-out;
                      }
                    }
                  }
                  .editor-item-preview {
                    .editor-btn-preview {
                      font-size: inherit;
                      font-family: inherit;
                      color: #667c99;
                      padding: 0.5em 1em;
                      outline: none;
                      border: none;
                      background-color: #e8ecf3;
                      border-radius: 4px;
                      cursor: pointer;
                      &:hover {
                        background-color: #d7dfea;
                        transition: all 0.4s ease-in-out;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      .comment-modal-container {
        width: 100%;
      }
    }
  }
}
</style>
