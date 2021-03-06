define({ "api": [
  {
    "type": "get",
    "url": "/article/:aid",
    "title": "获取article详情",
    "name": "article",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "aid",
            "description": "<p>文章ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/articles",
    "title": "获取所有articles",
    "name": "articleList",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>article的标签</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(分页) 请求的起始位置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(分页) 请求单次个数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>(分页) 请求的排序方式。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "/article/adjust/:aid",
    "title": "修改article内容",
    "name": "changeArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>article的标题部分</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>article的内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>article上次修改时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>article标签</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5004",
            "description": "<p>article标题长度应小于50且大于1</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "5005",
            "description": "<p>article内容长度应小于31000且大于1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3006",
            "description": "<p>article修改成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "get",
    "url": "/articles/:uid",
    "title": "获取某个用户下的所有articles",
    "name": "userArticleList",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "uid",
            "description": "<p>发布者的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(分页) 请求的起始位置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(分页) 请求单次个数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>(分页) 请求的排序方式。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "/article/vote/:aid",
    "title": "给article投票",
    "name": "voteArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aid",
            "description": "<p>article的ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3006",
            "description": "<p>article修改成功 实质与修改article相同</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "post",
    "url": "/article",
    "title": "发布article",
    "name": "writeArticle",
    "group": "Article",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>article的标题部分</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "author",
            "description": "<p>article的发布者</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>article的内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>article上次修改时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>article的tag内容</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "seed",
            "description": "<p>(可选)article诞生自哪个种子</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(分页) 请求的起始位置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(分页) 请求单次个数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>(分页) 请求的排序方式。</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5004",
            "description": "<p>article标题长度应小于50且大于1</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "5005",
            "description": "<p>article内容长度应小于31000且大于1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3005",
            "description": "<p>article发布成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/articles.js",
    "groupTitle": "Article"
  },
  {
    "type": "put",
    "url": "/comments/:cid",
    "title": "修改评论",
    "name": "changeComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "cid",
            "description": "<p>目标评论的ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "uid",
            "description": "<p>目标评论的UID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>回复内容</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5001",
            "description": "<p>内容长度应小于225并大于1(quicklad content should less than 225 chars &amp; more than 1)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3002",
            "description": "<p>修改评论成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/comments.js",
    "groupTitle": "Comment"
  },
  {
    "type": "get",
    "url": "/comments/:aid",
    "title": "请求所有评论",
    "name": "getComments",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "aid",
            "description": "<p>目标文章的ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(分页) 请求的起始位置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(分页) 请求单次个数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>(分页) 请求的排序方式。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/comments.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comments/:aid",
    "title": "发布评论",
    "name": "postComment",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "aid",
            "description": "<p>目标文章的ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "content",
            "description": "<p>content 内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdTime",
            "description": "<p>comment创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tempNick",
            "description": "<p>comment显示昵称(未登录情况下)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "creator",
            "description": "<p>comment创造者的ID(登录情况下)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5001",
            "description": "<p>内容长度应小于225并大于1(quicklad content should less than 225 chars &amp; more than 1)</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "5005",
            "description": "<p>内容长度应小于35并大于1</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3001",
            "description": "<p>发布评论成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/comments.js",
    "groupTitle": "Comment"
  },
  {
    "type": "post",
    "url": "/comments/reply/:cid",
    "title": "回复评论",
    "name": "writeReply",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "cid",
            "description": "<p>目标评论的ObjectId</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "uid",
            "description": "<p>目标评论的UID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>回复内容</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5001",
            "description": "<p>内容长度应小于225并大于1(quicklad content should less than 225 chars &amp; more than 1)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3010",
            "description": "<p>发布评论回复成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/comments.js",
    "groupTitle": "Comment"
  },
  {
    "error": {
      "fields": {
        "Quicklad": [
          {
            "group": "Quicklad",
            "optional": false,
            "field": "5001",
            "description": "<p>内容长度应小于225并大于1(quicklad content should less than 225 chars &amp; more than 1) (Quicklad) 5002 Quick 的颜色属性应该在列表中选择('red', 'purple', 'green', 'black', 'blue', 'yellow')(quicklad color should be on the list) (Quicklad) 5003 Quick 必需创建时间(quicklad need createdTime)</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/routes/comments.js",
    "group": "F__workflow_IMPACT_annihilate_app_routes_comments_js",
    "groupTitle": "F__workflow_IMPACT_annihilate_app_routes_comments_js",
    "name": ""
  },
  {
    "success": {
      "fields": {
        "Quicklad": [
          {
            "group": "Quicklad",
            "optional": false,
            "field": "2001",
            "description": "<p>Quicklad 内容长度应小于225并大于1(quicklad content should less than 225 chars &amp; more than 1) (Quicklad) 5002 Quicklad 的颜色属性应该在列表中选择('red', 'purple', 'green', 'black', 'blue', 'yellow')(quicklad color should be on the list) (Quicklad) 5003 Quicklad 必需创建时间(quicklad need createdTime)</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/routes/quicklads.js",
    "group": "F__workflow_IMPACT_annihilate_app_routes_quicklads_js",
    "groupTitle": "F__workflow_IMPACT_annihilate_app_routes_quicklads_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/checkValid",
    "title": "校验验证码并且清楚缓存邮箱对",
    "name": "checkValid",
    "group": "Mail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>邮箱地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3012",
            "description": "<p>验证通过</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5013",
            "description": "<p>验证未通过</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/mails.js",
    "groupTitle": "Mail"
  },
  {
    "type": "get",
    "url": "/mailValid/:address",
    "title": "向目标邮箱发送邮件",
    "name": "mailValid",
    "group": "Mail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>邮箱地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3011",
            "description": "<p>发送成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/mails.js",
    "groupTitle": "Mail"
  },
  {
    "type": "put",
    "url": "/lads/:id",
    "title": "修改Quicklad内容",
    "name": "changeLad",
    "group": "Quicklad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "uid",
            "description": "<p>Quicklad创造者的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Quicklad更改后的内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Quicklad更改后的颜色</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5001",
            "description": "<p>Quicklad 内容长度应小于225并大于1(quicklad content should less than 225 chars &amp; more than 1)</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "5002",
            "description": "<p>Quicklad 的颜色属性应该在列表中选择('red', 'purple', 'green', 'black', 'blue', 'yellow')(quicklad color should be on the list)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3004",
            "description": "<p>Quicklad 修改成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/quicklads.js",
    "groupTitle": "Quicklad"
  },
  {
    "type": "get",
    "url": "/lads",
    "title": "请求所有Quicklad",
    "name": "getAllLads",
    "group": "Quicklad",
    "version": "0.0.0",
    "filename": "app/routes/quicklads.js",
    "groupTitle": "Quicklad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(分页) 请求的起始位置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(分页) 请求单次个数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>(分页) 请求的排序方式。</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/lads/:color",
    "title": "根据color请求所有Quicklad",
    "name": "getColorLads",
    "group": "Quicklad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>在(red/purple/green/black/blue/yellow)中选择</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(分页) 请求的起始位置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(分页) 请求单次个数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>(分页) 请求的排序方式。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/quicklads.js",
    "groupTitle": "Quicklad"
  },
  {
    "type": "post",
    "url": "/lads",
    "title": "发布Quicklad",
    "name": "postLabs",
    "group": "Quicklad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Quicklad内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Quicklad颜色</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "createdTime",
            "description": "<p>Quicklad创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "lastModified",
            "description": "<p>Quicklad上次修改时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tempNick",
            "description": "<p>Quicklad显示昵称(未登录情况下)</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "creator",
            "description": "<p>Quicklad创造者的ID(登录情况下)</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5001",
            "description": "<p>Quicklad 内容长度应小于225并大于1(quicklad content should less than 225 chars &amp; more than 1)</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "5002",
            "description": "<p>Quicklad 的颜色属性应该在列表中选择('red', 'purple', 'green', 'black', 'blue', 'yellow')(quicklad color should be on the list)</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "5003",
            "description": "<p>Quicklad 必需创建时间(quicklad need createdTime)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3003",
            "description": "<p>Quicklad 发布成功</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/quicklads.js",
    "groupTitle": "Quicklad"
  },
  {
    "type": "get",
    "url": "/search",
    "title": "根据字段搜索所有内容",
    "name": "searchLad",
    "group": "Quicklad",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meta",
            "description": "<p>查询字段</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>(分页) 请求的起始位置。</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>(分页) 请求单次个数。</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sortBy",
            "description": "<p>(分页) 请求的排序方式。</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/quicklads.js",
    "groupTitle": "Quicklad"
  },
  {
    "type": "put",
    "url": "/user/:uid",
    "title": "修改user信息",
    "name": "changeUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user的登录密码修改</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>user的昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user的电邮信息修改</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "age",
            "description": "<p>user年龄信息修改</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3008",
            "description": "<p>账户修改成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5006",
            "description": "<p>账户名不符合要求</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "5008",
            "description": "<p>邮箱不符合要求</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "5009",
            "description": "<p>账户名不符合要求</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "创建user信息",
    "name": "createUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user的登录用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user的登录密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user的验证邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3007",
            "description": "<p>注册账户成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5006",
            "description": "<p>账户名不符合要求</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/login",
    "title": "登陆验证user信息",
    "name": "login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user的登录用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user的登录密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "UserId",
            "description": "<p>验证成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5007",
            "description": "<p>密码错误或账号不存在</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:uid/:target",
    "title": "更新user链接信息",
    "name": "updateContent",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "uid",
            "description": "<p>user的ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "target",
            "description": "<p>欲更新的字段</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "content",
            "description": "<p>欲更新的内容[articls/cultivated/comments/lads/messages]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logic",
            "description": "<p>欲更新的方式(+ / -)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "optional": false,
            "field": "3009",
            "description": "<p>更新数据成功</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "5010",
            "description": "<p>更新对象错误</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/:uid",
    "title": "获取user信息",
    "name": "userInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "uid",
            "description": "<p>user的ID</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/routes/users.js",
    "groupTitle": "User"
  }
] });
