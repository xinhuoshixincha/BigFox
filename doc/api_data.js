define({ "api": [
  {
    "type": "POST",
    "url": "/api/v1/articles/articles/image",
    "title": "上传图片",
    "name": "上传图片",
    "group": "文章",
    "version": "1.0.0",
    "description": "<p>上传一个图片并返回此图片的链接，可直接用于文章中</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "multipart/form-data",
              "application/x-www-form-urlencoded"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.imageUrl",
            "description": "<p>图片链接</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"imageUrl\":\"http://xxx\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/articles.py",
    "groupTitle": "文章",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源上传失败",
          "content": "{\n    \"result\":false,\n    \"code\":408,\n    \"message\":\"请求超时，资源上传失败\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "文件类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":415,\n    \"message\":\"文件类型错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/articles/articles",
    "title": "上传文章",
    "name": "上传文章",
    "group": "文章",
    "version": "1.0.0",
    "description": "<p>上传文章</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"multipart/form-data\"",
              "\"application/x-www-form-urlencoded\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "0-64位",
            "optional": false,
            "field": "title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>封面图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articleId",
            "description": "<p>上传的文章的编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"articleId\":1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/articles.py",
    "groupTitle": "文章",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源上传失败",
          "content": "{\n    \"result\":false,\n    \"code\":408,\n    \"message\":\"请求超时，资源上传失败\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "文件类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":415,\n    \"message\":\"文件类型错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/api/v1/articles/article",
    "title": "修改文章",
    "name": "修改文章",
    "group": "文章",
    "version": "1.0.0",
    "description": "<p>传入文章编号、新标题、新内容、新封面等来修改文章</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "multipart/form-data",
              "application/x-www-form-urlencoded"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "articleId",
            "description": "<p>要修改的文章编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0-64位",
            "optional": true,
            "field": "title",
            "description": "<p>修改后的文章标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>修改后的文章内容</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "image",
            "description": "<p>修改后的封面图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articleId",
            "description": "<p>被修改的文章编号</p>"
          }
        ],
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":201,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"articleId\":1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/articles.py",
    "groupTitle": "文章",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源上传失败",
          "content": "{\n    \"result\":false,\n    \"code\":408,\n    \"message\":\"请求超时，资源上传失败\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "文件类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":415,\n    \"message\":\"文件类型错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/api/v1/articles/article",
    "title": "删除文章",
    "name": "删除文章",
    "group": "文章",
    "version": "1.0.0",
    "description": "<p>传入文章编号删除文章 普通用户可以删除自己的文章，管理员用户可以删除其他用户的文章</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "articleId",
            "description": "<p>要删除的文章编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"articleId\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/articles.py",
    "groupTitle": "文章",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 204",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 204",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":204,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/articles/articles",
    "title": "获取全部文章",
    "name": "获取全部文章",
    "group": "文章",
    "version": "1.0.0",
    "description": "<p>获取全部的文章</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"likes -- 点赞数降序\"",
              "\"views -- 观看量降序\"",
              "\"releaseTime -- 发布时间降序\"",
              "\"total -- 综合\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "likes",
            "description": "<p>用来指定文章的排序方式。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "searchValue",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPagination",
            "defaultValue": "false",
            "description": "<p>是否分页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于0",
            "optional": true,
            "field": "pageNumber",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于0",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "5",
            "description": "<p>页面大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "获取全部文章",
          "content": "{\n    \"order\":\"likes\",\n    \"isPagination\":false\n}",
          "type": "json"
        },
        {
          "title": "搜索\"文章\"",
          "content": "{\n    \"order\":\"likes\",\n    \"searchValue\":\"文章\",\n    \"isPagination\":false\n}",
          "type": "json"
        },
        {
          "title": "分页",
          "content": "{\n    \"order\":\"likes\",\n    \"isPagination\":true,\n    \"pageNumber\":1,\n    \"pageSize\":10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.articles",
            "description": "<p>文章</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articles.authorId",
            "description": "<p>作者编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.articles.authorName",
            "description": "<p>作者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.articles.content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.articles.releaseTime",
            "description": "<p>发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articles.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articles.views",
            "description": "<p>观看量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.articles.imgUrl",
            "description": "<p>封面图片链接</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articles.commentNumber",
            "description": "<p>评论数</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\": true,\n    \"code\": 200,\n    \"message\": \"\",\n    \"header\":{},\n    \"data\":{\n        \"articles\":[\n            {\n                \"id\":1,\n                \"title\":\"文章标题\",\n                \"authorId\":1,\n                \"authorName\":\"张三\",\n                \"content\":\"文章内容\",\n                \"releaseTime\":\"2020-5-5\",\n                \"likes\":10,\n                \"views\":200,\n                \"imgUrl\":\"http://xxx\",\n                \"commentsNumber\":10\n            },\n            {...}\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/articles.py",
    "groupTitle": "文章",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/articles/article",
    "title": "获取单个文章",
    "name": "获取单个文章",
    "group": "文章",
    "version": "1.0.0",
    "description": "<p>传入文章编号获取单个文章</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "articleId",
            "description": "<p>文章编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"articleId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>文章编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>文章标题</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.authorId",
            "description": "<p>作者编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.authorName",
            "description": "<p>作者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.releaseTime",
            "description": "<p>发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.views",
            "description": "<p>观看量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.imgUrl",
            "description": "<p>封面图片链接</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.commentNumber",
            "description": "<p>评论数</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\": true,\n    \"code\": 200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"id\":1,\n        \"title\":\"文章标题\",\n        \"authorId\":1,\n        \"authorName\":\"张三\",\n        \"content\":\"文章内容\",\n        \"releaseTime\":\"2020-5-5\",\n        \"likes\":10,\n        \"views\":200,\n        \"imgUrl\":\"http://xxx\",\n        \"commentsNumber\":10\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/articles.py",
    "groupTitle": "文章",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "PUT",
    "url": "/api/v1/users/user",
    "title": "修改用户信息",
    "name": "修改用户信息",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>修改用户信息 普通用户只能修改自己的信息，管理员用户可以修改其他用户的信息</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "multipart/form-data",
              "application/x-www-form-urlencoded"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>要修改资料的用户的编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'1-64位'"
            ],
            "optional": true,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'6-18位,同时有大小写字母、数字'"
            ],
            "optional": true,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "description",
            "allowedValues": [
              "'0-512位'"
            ],
            "optional": true,
            "field": "description",
            "description": "<p>个人简介</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "allowedValues": [
              "'图片'"
            ],
            "optional": true,
            "field": "avatar",
            "description": "<p>用户头像</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 201": [
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "data.userId",
            "description": "<p>被修改的用户编号</p>"
          },
          {
            "group": "Success 201",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 201",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 201",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 201",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":201,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"userId\":1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "用户名已被使用",
          "content": "{\n    \"result\":false,\n    \"code\":403,\n    \"message\":\"用户名已被使用\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源上传失败",
          "content": "{\n    \"result\":false,\n    \"code\":408,\n    \"message\":\"请求超时，资源上传失败\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "文件类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":415,\n    \"message\":\"文件类型错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户"
  },
  {
    "type": "POST",
    "url": "/api/v1/users/user/follow",
    "title": "关注",
    "name": "关注",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>传入关注者的用户编号与被关注者的用户编号，使关注者关注被关注者</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>关注者的用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "followerId",
            "description": "<p>关注者编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "followedId",
            "description": "<p>被关注者编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"followerId\":1,\n    \"followedId\":2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      }
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/api/v1/users/user",
    "title": "删除用户",
    "name": "删除用户",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>传入用户编号来删除用户 普通用户仅可以删除自己，管理员用户可以删除其他用户</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>要删除的用户的编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"userId\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 204",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 204",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":204,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/users/user/follow",
    "title": "判断某用户是否关注某用户",
    "name": "判断某用户是否关注某用户",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>传入用户1编号和用户2编号，判断用户1是否关注用户2</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userOneId",
            "description": "<p>用户1编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userTwoId",
            "description": "<p>用户2编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"userOneId\":1,\n    \"userTwoId\":2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.isFollowing",
            "description": "<p>是否关注</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"isFollowing\":true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "examples": [
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/users/user/admin",
    "title": "判断用户是否是管理员",
    "name": "判断用户是否是管理员",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>判断用户是不是管理员</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>要判断的用户的编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"userId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.isAdmin",
            "description": "<p>是否是管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"isAdmin\":true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/users/user/super-admin",
    "title": "判断用户是否是超级管理员",
    "name": "判断用户是否是超级管理员",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>判断用户是不是超级管理员</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>要判断的用户的编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"userId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.isSuperAdmin",
            "description": "<p>是否是超级管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"isSuperAdmin\":true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/api/v1/users/user/follow",
    "title": "取消关注",
    "name": "取消关注",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>传入关注者编号和被关注者编号，取消关注者对被关注者的关注</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "followerId",
            "description": "<p>关注者编号</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "followedId",
            "description": "<p>被关注者编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"followerId\":1,\n    \"followedId\":2\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "没有关注过该用户",
          "content": "{\n    \"result\":false,\n    \"code\":403,\n    \"message\":\"没有关注过该用户\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 204",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 204",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":204,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/users/register",
    "title": "注册用户（已完成）",
    "name": "注册用户（已完成）",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>注册新用户</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "multipart/form-data",
              "application/x-www-form-urlencoded"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'1-64位'"
            ],
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'6-18位'"
            ],
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'0-512位'"
            ],
            "optional": true,
            "field": "description",
            "description": "<p>个人简介</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "'邮箱'"
            ],
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailVerifyCode",
            "description": "<p>邮箱验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sex",
            "description": "<p>性别</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.email",
            "description": "<p>刚注册用户的邮箱</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"email\":\"4546@qq.com\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "邮箱已被使用",
          "content": "{\n    \"result\":false,\n    \"code\":403,\n    \"message\":\"邮箱已被使用\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "邮箱格式不正确",
          "content": "{\n    \"result\":false,\n    \"code\":403,\n    \"message\":\"邮箱格式不正确\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "邮箱验证码错误",
          "content": "{\n    \"result\": false,\n    \"code\": 403,\n    \"message\":\"邮箱验证码错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源上传失败",
          "content": "{\n    \"result\":false,\n    \"code\":408,\n    \"message\":\"请求超时，资源上传失败\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "文件类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":415,\n    \"message\":\"文件类型错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户"
  },
  {
    "type": "POST",
    "url": "/api/v1/users/user/confirm-school",
    "title": "用户学校认证",
    "name": "用户学校认证",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>对用户进行学校认证, 必须传入学信网学籍信息或者学校邮箱(2选1)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "multipart/form-data",
              "application/x-www-form-urlencoded"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realName",
            "description": "<p>真实姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "realId",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "school",
            "description": "<p>学校</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profession",
            "description": "<p>专业</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"0 -- 学校邮箱认证\"",
              "\"1 -- 学信网材料认证\""
            ],
            "optional": false,
            "field": "confirmType",
            "description": "<p>认证方式</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "allowedValues": [
              "'PDF文件'",
              "'图片'"
            ],
            "optional": true,
            "field": "studentStatusInfo",
            "description": "<p>学信网学籍信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "schoolEmail",
            "description": "<p>学校邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      }
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "文件类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":415,\n    \"message\":\"文件类型错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源上传失败",
          "content": "{\n    \"result\":false,\n    \"code\":408,\n    \"message\":\"请求超时，资源上传失败\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/users/login",
    "title": "登录（已完成）",
    "name": "登录（已完成）",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>登录</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"email\":\"邮箱\",\n    \"password\":\"asdasfasdasd\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "header.Authorization",
            "description": "<p>用户认证令牌</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{\n        \"Authorization\":\"jdlafhqpjdlaljsdlk\"\n    },\n    \"data\":{\n        \"userId\":16\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "账号或密码错误",
          "content": "{\n    \"result\":false,\n    \"code\":403,\n    \"message\":\"账号或密码错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户"
  },
  {
    "type": "GET",
    "url": "/api/v1/users/users",
    "title": "获取多个用户",
    "name": "获取多个用户",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>根据传入的条件获取多个用户的信息</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "application/json",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "{1-64位}"
            ],
            "optional": true,
            "field": "searchValue",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "{大于等于-1}"
            ],
            "optional": true,
            "field": "usersNumber",
            "defaultValue": "-1 所有用户",
            "description": "<p>要查询的用户数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"fans-粉丝数\"",
              "\"registrationTime-注册时间\"",
              "\"relativity-相关度\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "fans",
            "description": "<p>排序方式</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isPagination",
            "defaultValue": "false",
            "description": "<p>是否分页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "{大于等于1}"
            ],
            "optional": true,
            "field": "pageNumber",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "{大于等于1}"
            ],
            "optional": true,
            "field": "pageSize",
            "defaultValue": "1",
            "description": "<p>每页大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "搜索",
          "content": "{\n    \"searchValue\":\"搜索\",\n    \"order\":\"relativity\"\n}",
          "type": "json"
        },
        {
          "title": "所有用户",
          "content": "{\n    \"userName\":-1 #此句可以省略\n}",
          "type": "json"
        },
        {
          "title": "被点赞数前十的用户",
          "content": "{\n    \"userNumber\":10,\n    \"order\":\"fans\" #此句可以省略\n}",
          "type": "json"
        },
        {
          "title": "取分页第一页，每页5个元素",
          "content": "{\n    \"isPagination\":true,\n    \"pageNumber\":1,\n    \"pageSize\":5\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.users",
            "description": "<p>用户</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.users.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.users.description",
            "description": "<p>个人简介</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.users.avatarUrl",
            "description": "<p>头像链接</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.users.attentionNumber",
            "description": "<p>关注数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.users.fansNumber",
            "description": "<p>粉丝数</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"users\":[\n            {\n                \"username\":\"user1\",\n                \"description\":\"简介\",\n                \"avatarUrl\":\"https://xxx\",\n                \"attentionNumber\":10,\n                \"fansNumber\":1\n            },\n            {...}\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/users/user/articles",
    "title": "获取用户上传的全部文章",
    "name": "获取用户上传的全部文章",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>根据用户编号获取用户上传的全部文章Id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"userId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.articles",
            "description": "<p>文章</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articles.authorId",
            "description": "<p>作者编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.articles.authorName",
            "description": "<p>作者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.articles.content",
            "description": "<p>文章内容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.articles.releaseTime",
            "description": "<p>发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articles.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articles.views",
            "description": "<p>观看量</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.articles.imgUrl",
            "description": "<p>封面图片链接</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articles.commentNumber",
            "description": "<p>评论数</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\": true,\n    \"code\": 200,\n    \"message\": \"\",\n    \"header\":{},\n    \"data\":{\n        \"articles\":[\n            {\n                \"id\":1,\n                \"title\":\"文章标题\",\n                \"authorId\":1,\n                \"authorName\":\"张三\",\n                \"content\":\"文章内容\",\n                \"releaseTime\":\"2020-5-5\",\n                \"likes\":10,\n                \"views\":200,\n                \"imgUrl\":\"http://xxx\",\n                \"commentsNumber\":10\n            },\n            {...}\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/users/user/videos",
    "title": "获取用户上传的全部视频",
    "name": "获取用户上传的全部视频",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>根据用户编号获取对应用户上传的全部视频</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"userId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.videos",
            "description": "<p>视频数组</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videos.id",
            "description": "<p>视频编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.name",
            "description": "<p>视频名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videos.authorId",
            "description": "<p>作者编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.authorName",
            "description": "<p>作者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.introduction",
            "description": "<p>视频简介</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videos.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videos.views",
            "description": "<p>观看数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.releaseTime",
            "description": "<p>发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.imageUrl",
            "description": "<p>封面图片url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.videoUrl",
            "description": "<p>视频url</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"videos\":[\n            {\n                \"id\":1,\n                \"name\":\"name\",\n                \"authorId\":1,\n                \"authorName\":\"user1\",\n                \"introduction\":\"introduction\",\n                \"likes\":50,\n                \"views\":5012,\n                \"releaseTime\":\"2012-4-9\",\n                \"imageUrl\":\"http://xxx\",\n                \"videoUrl\":\"http://xxx\"\n            },\n            {...}\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/users/user",
    "title": "获取用户信息（已完成）",
    "name": "获取用户信息（已完成）",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>传入用户id获取用户的信息</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"userId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.description",
            "description": "<p>个人简介</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.avatarUrl",
            "description": "<p>头像链接</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.attentionNumber",
            "description": "<p>关注数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.fansNumber",
            "description": "<p>粉丝数</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"username\":\"user1\",\n        \"description\":\"Hello World!\",\n        \"avatarUrl\":\"http://xxx\",\n        \"attentionNumber\":120,\n        \"fansNumber\":5\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/users/login",
    "title": "获取用户的登录状态（已完成）",
    "name": "获取用户的登录状态（已完成）",
    "group": "用户",
    "version": "1.0.0",
    "description": "<p>验证用户是否登录</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>当前用户的用户编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"userId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data.isLogin",
            "description": "<p>是否登录</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n       \"isLogin\":true\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/user.py",
    "groupTitle": "用户",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/videos/video",
    "title": "上传视频（已完成）",
    "name": "上传视频（已完成）",
    "group": "视频",
    "version": "1.0.0",
    "description": "<p>通过表单上传视频及相关信息</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"multipart/form-data\"",
              "\"application/x-www-form-urlencoded\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>用户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1到64",
            "optional": false,
            "field": "name",
            "description": "<p>视频名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0到512",
            "optional": true,
            "field": "introduction",
            "description": "<p>视频简介</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>视频封面</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "video",
            "description": "<p>视频</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videoId",
            "description": "<p>上传的视频的编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"videoId\":1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "视频名称已经存在",
          "content": "{\n    \"result\":false,\n    \"code\":403,\n    \"message\":\"视频名称已经存在\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "文件类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":415,\n    \"message\":\"文件类型错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源上传失败",
          "content": "{\n    \"result\":false,\n    \"code\":408,\n    \"message\":\"请求超时，资源上传失败\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"未找到此用户\",\n    \"header\":{},\n    \"data\":{}    \n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/api/v1/videos.py",
    "groupTitle": "视频"
  },
  {
    "type": "DELETE",
    "url": "/api/v1/videos/video",
    "title": "删除视频",
    "name": "删除视频",
    "group": "视频",
    "version": "1.0.0",
    "description": "<p>传入视频编号<code>id</code>来删除对应的视频 普通用户可以删除自己的视频，管理员用户可以删除其他用户的视频</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于等于0",
            "optional": false,
            "field": "id",
            "description": "<p>视频编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"id\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/videos.py",
    "groupTitle": "视频",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 204",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 204",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":204,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/videos/video",
    "title": "根据序号获取单个视频（已完成）",
    "name": "根据序号获取单个视频（已完成）",
    "group": "视频",
    "version": "1.0.0",
    "description": "<p>传入视频序号id，根据此序号查找视频的全部信息</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>要获取的视频的id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>视频编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>视频名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.authorId",
            "description": "<p>作者编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.authorName",
            "description": "<p>作者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.introduction",
            "description": "<p>视频简介</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.views",
            "description": "<p>观看数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.releaseTime",
            "description": "<p>发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.imageUrl",
            "description": "<p>视频封面Url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videoUrl",
            "description": "<p>视频Url</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"id\": 12,\n        \"name\": \"testVideo\",\n        \"authorId\": 1,\n        \"authorName\": \"testMan\",\n        \"introduction\": \"test video\",\n        \"likes\": 50,\n        \"views\": 5023,\n        \"releaseTime\": \"2021-4-21\",\n        \"imageUrl\": \"http://xxx\",\n        \"videoUrl\": \"http://xxx\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/videos.py",
    "groupTitle": "视频",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/videos/videos",
    "title": "获取视频(已完成)",
    "name": "获取视频（已完成）",
    "group": "视频",
    "version": "1.0.0",
    "description": "<p>可用来获取全部视频、指定数量的视频、指定排序顺序的视频、关键词匹配的视频以及分页视频</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"likes -- 点赞数降序\"",
              "\"views -- 观看量降序\"",
              "\"releaseTime -- 发布时间降序\"",
              "\"total -- 综合\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "likes",
            "description": "<p>用来指定视频的排序方式。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "searchValue",
            "description": "<p>搜索内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isPagination",
            "defaultValue": "false",
            "description": "<p>是否分页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于0",
            "optional": true,
            "field": "pageNumber",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于0",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "10",
            "description": "<p>页面大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"order\": \"likes\",\n    \"searchValue\":\"hello\",\n    \"isPagination\":true,\n    \"pageNumber\":1,\n    \"pageSize\":5\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "data.videos",
            "description": "<p>获取到的视频</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videos.id",
            "description": "<p>视频编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.name",
            "description": "<p>视频名称</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videos.authorId",
            "description": "<p>作者编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.authorName",
            "description": "<p>作者名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.introduction",
            "description": "<p>视频简介</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videos.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videos.views",
            "description": "<p>观看数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.releaseTime",
            "description": "<p>发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.imageUrl",
            "description": "<p>封面图片url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.videos.videoUrl",
            "description": "<p>视频url</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"videos\": [\n            {\n                \"id\": 12,\n                \"name\": \"testVideo\",\n                \"authorId\": 1,\n                \"authorName\": \"testMan\",\n                \"introduction\": \"test video\",\n                \"likes\": 50,\n                \"views\": 5023,\n                \"releaseTime\": \"2021-4-21\",\n                \"imageUrl\": \"http://xxx\",\n                \"videoUrl\": \"http://xxx\"\n            },\n            {...},\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/videos.py",
    "groupTitle": "视频",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    }
  },
  {
    "type": "DELETE",
    "url": "/api/v1/comments/articles/comments",
    "title": "删除文章评论",
    "name": "删除文章评论",
    "group": "评论",
    "version": "1.0.0",
    "description": "<p>根据传入的评论编号删除文章评论 普通用户可以删除自己的评论，管理员用户可以删除其他用户的评论</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>要删除的文章评论编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"commentId\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/comments.py",
    "groupTitle": "评论",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 204",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 204",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":204,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "DELETE",
    "url": "/api/v1/comments/videos/comments",
    "title": "删除视频评论",
    "name": "删除视频评论",
    "group": "评论",
    "version": "1.0.0",
    "description": "<p>根据传入的评论编号删除评论 普通用户可以删除自己的评论，管理员用户可以删除其他用户的评论</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>要删除的评论编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"commentId\":1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/comments.py",
    "groupTitle": "评论",
    "success": {
      "fields": {
        "Success 204": [
          {
            "group": "Success 204",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 204",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 204",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 204",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":204,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/comments/articles/comments",
    "title": "发布文章评论",
    "name": "发布文章评论",
    "group": "评论",
    "version": "1.0.0",
    "description": "<p>发布文章评论</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于等于0",
            "optional": false,
            "field": "articleId",
            "description": "<p>评论所在文章的编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0-512位",
            "optional": false,
            "field": "content",
            "description": "<p>评论的内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于等于0",
            "optional": true,
            "field": "replyCommentId",
            "description": "<p>此评论回复的评论的编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "第一层评论(非回复)",
          "content": "{\n    \"articleId\":1,\n    \"content\":\"这是一个评论\"\n}",
          "type": "json"
        },
        {
          "title": "回复",
          "content": "{\n    \"articleId\":1,\n    \"content\":\"这是一个回复\",\n    \"replyCommentId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.commentId",
            "description": "<p>上传的评论的编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"commentId\":1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/comments.py",
    "groupTitle": "评论",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/comments/videos/comments",
    "title": "发布视频评论",
    "name": "发布视频评论",
    "group": "评论",
    "version": "1.0.0",
    "description": "<p>发布评论</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>用户认证令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于等于0",
            "optional": false,
            "field": "videoId",
            "description": "<p>评论所在视频的编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "0-512位",
            "optional": false,
            "field": "content",
            "description": "<p>评论的内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于等于0",
            "optional": true,
            "field": "replyCommentId",
            "description": "<p>此评论回复的评论的编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "第一层评论(非回复)",
          "content": "{\n    \"videoId\":1,\n    \"content\":\"这是一个评论\"\n}",
          "type": "json"
        },
        {
          "title": "回复",
          "content": "{\n    \"videoId\":1,\n    \"content\":\"这是一个回复\",\n    \"replyCommentId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.commentId",
            "description": "<p>上传的评论的编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"commentId\":1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/comments.py",
    "groupTitle": "评论",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "权限不足",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"权限不足!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "登录过期",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"登录过期\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "用户认证令牌错误",
          "content": "{\n    \"result\":false,\n    \"code\":401,\n    \"message\":\"用户认证令牌错误\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/comments/articles/comments",
    "title": "获取文章评论",
    "name": "获取文章评论",
    "group": "评论",
    "version": "1.0.0",
    "description": "<p>传入文章编号获取文章下的全部用户的评论 可以根据传入的<code>order</code>获取指定排序方式的评论……</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于等于0",
            "optional": false,
            "field": "articleNumber",
            "description": "<p>文章编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"likes -- 点赞数降序\"",
              "\"releaseTime -- 发布时间降序\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "likes",
            "description": "<p>指定评论的排序方式</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isPagination",
            "defaultValue": "false",
            "description": "<p>是否分页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于0",
            "optional": true,
            "field": "pageNumber",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于0",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "获取全部评论",
            "description": "<p>每页大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "获取某文章下面的全部评论",
          "content": "{\n    \"articleNumber\":1,\n    \"order\":\"likes\",\n    \"isPagination\":false\n}",
          "type": "json"
        },
        {
          "title": "按10个评论每页，获取第1页所有评论",
          "content": "{\n    \"articleNumber\":1,\n    \"isPagination\":true,\n    \"pageNumber\":1,\n    \"pageSize\":10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.comments",
            "description": "<p>所有评论</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.comments.id",
            "description": "<p>评论编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.comments.userId",
            "description": "<p>发布此评论的用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.comments.articleId",
            "description": "<p>评论所属的文章</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.comments.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.releaseTime",
            "description": "<p>评论发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"comments\":[\n            {\n                \"id\":1,\n                \"content\":\"1楼\",\n                \"userId\":1,\n                \"articleId\":1,\n                \"likes\":20,\n                \"releaseTime\":\"2020-5-4\"\n            },\n            {...}\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/comments.py",
    "groupTitle": "评论",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/comments/articles/comments/reply",
    "title": "获取文章评论的全部回复",
    "name": "获取文章评论的全部回复",
    "group": "评论",
    "version": "1.0.0",
    "description": "<p>传入文章评论编号获取对应的回复</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>评论编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"commentId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>评论编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.userId",
            "description": "<p>发布此评论的用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.articleId",
            "description": "<p>评论所属的文章</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.releaseTime",
            "description": "<p>评论发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"id\":1,\n        \"content\":\"1楼\",\n        \"userId\":1,\n        \"articleId\":1,\n        \"likes\":20,\n        \"releaseTime\":\"2020-5-4\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/comments.py",
    "groupTitle": "评论",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/comments/videos/comments",
    "title": "获取视频评论",
    "name": "获取视频评论",
    "group": "评论",
    "version": "1.0.0",
    "description": "<p>传入视频编号获取视频下的全部用户的评论 可以根据传入的<code>order</code>获取指定排序方式的评论……</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于等于0",
            "optional": false,
            "field": "videoNumber",
            "description": "<p>视频编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"likes -- 点赞数降序\"",
              "\"releaseTime -- 发布时间降序\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "likes",
            "description": "<p>指定评论的排序方式</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isPagination",
            "defaultValue": "false",
            "description": "<p>是否分页</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于0",
            "optional": true,
            "field": "pageNumber",
            "defaultValue": "1",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "大于0",
            "optional": true,
            "field": "pageSize",
            "defaultValue": "5",
            "description": "<p>每页大小</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "获取某视频下面的全部评论",
          "content": "{\n    \"videoNumber\":1,\n    \"order\":\"likes\",\n    \"isPagination\":false\n}",
          "type": "json"
        },
        {
          "title": "按10个评论每页，获取第1页所有评论",
          "content": "{\n    \"videoNumber\":1,\n    \"isPagination\":true,\n    \"pageNumber\":1,\n    \"pageSize\":10\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.comments",
            "description": "<p>所有评论</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.comments.id",
            "description": "<p>评论编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.comments.userId",
            "description": "<p>发布此评论的用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.comments.videoId",
            "description": "<p>评论所属的视频</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.comments.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.comments.releaseTime",
            "description": "<p>评论发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"comments\":[\n            {\n                \"id\":1,\n                \"content\":\"1楼\",\n                \"userId\":1,\n                \"videoId\":1,\n                \"likes\":20,\n                \"releaseTime\":\"2020-5-4\"\n            },\n            {...}\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/comments.py",
    "groupTitle": "评论",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数值错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数值错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "GET",
    "url": "/api/v1/comments/videos/comments/reply",
    "title": "获取视频评论的全部回复",
    "name": "获取视频评论的全部回复",
    "group": "评论",
    "version": "1.0.0",
    "description": "<p>传入评论编号获取对应的回复</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "\"application/json\""
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>评论编号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"commentId\":1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>评论编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.content",
            "description": "<p>评论内容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.userId",
            "description": "<p>发布此评论的用户编号</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.videoId",
            "description": "<p>评论所属的视频</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.likes",
            "description": "<p>点赞数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.releaseTime",
            "description": "<p>评论发布时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{\n        \"id\":1,\n        \"content\":\"1楼\",\n        \"userId\":1,\n        \"videoId\":1,\n        \"likes\":20,\n        \"releaseTime\":\"2020-5-4\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/api/v1/comments.py",
    "groupTitle": "评论",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "资源未找到",
          "content": "{\n    \"result\":false,\n    \"code\":404,\n    \"message\":\"资源未找到\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "POST",
    "url": "/api/v1/email/email",
    "title": "发送邮件验证码（已完成）",
    "name": "发送邮件验证码（已完成）",
    "group": "邮件",
    "version": "1.0.0",
    "description": "<p>传入邮箱地址，发送邮件验证码</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "allowedValues": [
              "application/json"
            ],
            "optional": false,
            "field": "Content-Type",
            "description": "<p>浏览器编码类型</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>邮箱地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数示例",
          "content": "{\n    \"emailAddress\":\"邮箱地址\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回值示例",
          "content": "{\n    \"result\":true,\n    \"code\":200,\n    \"message\":\"\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "allowedValues": [
              "\"true -- 成功\"",
              "\"false -- 失败\""
            ],
            "optional": false,
            "field": "result",
            "description": "<p>接口调用结果</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "code",
            "description": "<p>http状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"接口调用成功时为空\"",
              "\"接口调用失败时为错误信息\""
            ],
            "optional": false,
            "field": "message",
            "description": "<p>服务器返回的消息</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>服务器返回的数据</p>"
          }
        ]
      }
    },
    "filename": "app/api/v1/mail.py",
    "groupTitle": "邮件",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "result",
            "description": "<p>是否正确</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "header",
            "description": "<p>需要客户端保存的http请求头</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "参数类型错误",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"参数类型错误!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        },
        {
          "title": "缺少参数值",
          "content": "{\n    \"result\":false,\n    \"code\":400,\n    \"message\":\"缺少参数值!\",\n    \"header\":{},\n    \"data\":{}\n}",
          "type": "json"
        }
      ]
    }
  }
] });
