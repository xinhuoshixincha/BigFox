import os
from ..config import apiBasedir
import filetype
import time
from flask import request


def upload_file(file, path, file_type):
    """上传文件

    :param file: 要上传的文件 -- 限制类型：FileStorage对象
    :param path: 要上传的文件的存储位置 -- static目录下的相对路径(如传入avatar就代表是static/avatar)，若不传入默认存在static根目录下
    :param file_type: 文件类型 -- 只能传入集合
    :return: 出现错误返回API返回值字典 -- 例子:{"result": False, "code": 415, "message": "文件类型错误", "header": {}, "data": {}}
    成功返回文件路径

    """
    if file is None:
        return {"result": False, "code": 415, "message": "文件类型错误", "header": {}, "data": {}}
    total_name = str(int(time.time() * 1000)) + f"_{path}_" + file.filename.replace(" ", "")
    total_path = os.path.join(apiBasedir, f'static\\{path}', total_name)
    file_bin = file.read()
    file_local = open(total_path, mode="wb+")
    file_local.write(file_bin)
    file_local.close()
    file_local = open(total_path, mode="rb")

    # 判断文件类型
    kind = filetype.guess(file_local)
    file_local.close()
    if kind is not None:
        if kind.extension not in file_type:
            os.remove(total_path)
            return {"result": False, "code": 415, "message": "文件类型错误", "header": {}, "data": {}}
    else:
        os.remove(total_path)
        return {"result": False, "code": 400, "message": "缺少参数值!", "header": {}, "data": {}}
    file_local.close()
    return {"path": total_path, "url": request.host_url + f'static/{path}/{total_name}', "file_bin": file_bin}
