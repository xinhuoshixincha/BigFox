from .app import create_app
from .app import db
from flask_migrate import Migrate
from .app.models import Roles, Users
from .app.email import send_email

app = create_app()


@app.shell_context_processor
def make_shell_content():
    return dict(db=db, Roles=Roles, Users=Users, send_email=send_email)


if __name__ == '__main__':
    app.run(debug=1)
