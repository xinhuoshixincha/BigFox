###运行前请添加如下环境变量:
#### 必填
1. MAIL_USERNAME --- 邮箱账号
2. MAIL_PASSWORD --- 邮箱密钥
3. DEV_DATABASE_URL --- 数据库链接
    ```
    postgresql://数据库用户:数据库用户密码@127.0.0.1/数据库名称
    ```
4. REDIS_URL --- redis数据库链接
    ```
    redis://:@localhost:6379/0
    ```
#### 选填
1. SECRET_KEY  --- 秘钥，任意字符串
2. MAIL_SERVER --- 邮箱服务类型，默认*smtp.qq.com*
