from flask_httpauth import HTTPTokenAuth
from flask import jsonify, request, g, current_app
from functools import wraps
from itsdangerous import TimedJSONWebSignatureSerializer, BadSignature, SignatureExpired


class HTTPTokenAuthReReturn(HTTPTokenAuth):
    def __init__(self, scheme=None, realm=None, header=None):
        super().__init__(scheme, realm, header)

        def default_auth_error(status, message):
            return jsonify(data={}, header={}, message=message, code=status, result=False), status

        super().error_handler(default_auth_error)

    def login_required(self, f=None, role=None, optional=None):
        if f is not None and \
                (role is not None or optional is not None):  # pragma: no cover
            raise ValueError(
                'role and optional are the only supported arguments')

        def login_required_internal(f):
            @wraps(f)
            def decorated(*args, **kwargs):
                auth = self.get_auth()

                if request.method != 'OPTIONS':  # pragma: no cover
                    password = self.get_auth_password(auth)

                    status = None
                    message = None
                    user = self.authenticate(auth, password)
                    if user in (False, None, 'BadSignature', 'SignatureExpired', 'CompetenceError'):
                        status = 401
                        if user == 'BadSignature':
                            message = "登录验证失败"
                        elif user == 'SignatureExpired':
                            message = "登录过期"
                        elif user == 'CompetenceError':
                            message = "权限不足!"
                    elif not self.authorize(role, user, auth):
                        status = 403
                    if not optional and status:
                        # Clear TCP receive buffer of any pending data
                        request.data
                        try:
                            return self.auth_error_callback(status, message)
                        except TypeError:
                            return self.auth_error_callback()

                    g.flask_httpauth_user = user if user is not True \
                        else auth.username if auth else None
                return f(*args, **kwargs)
            return decorated

        if f:
            return login_required_internal(f)
        return login_required_internal


auth = HTTPTokenAuthReReturn(scheme="BF")


@auth.verify_token
def verify_token(token):
    s = TimedJSONWebSignatureSerializer(current_app.config['SECRET_KEY'])
    try:
        print(token)
        token_data = s.loads(token)
        data = request.get_json()
        print(data)
        print(token_data)
        token_uid = token_data['userId']
        uid = data.get('userId')
        # todo 这里加一个管理员认证
        if token_uid != uid:
            return "CompetenceError"
    except SignatureExpired:
        return "SignatureExpired"
    except BadSignature:
        return "BadSignature"
    return True
