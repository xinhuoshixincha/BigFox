from .app import create_app
from .app import db
from .app.models import Roles, Users, Videos
from .app.email import send_email, validate_email

app = create_app()


@app.shell_context_processor
def make_shell_content():
    return dict(db=db, Roles=Roles, Users=Users, send_email=send_email, validate_email=validate_email, Videos=Videos)


if __name__ == '__main__':
    app.run(debug=1)
