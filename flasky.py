from .app import create_app
from .app import db
from flask_migrate import Migrate
from .app.models import Roles

app = create_app()
migrate = Migrate(app, db)


@app.shell_context_processor
def make_shell_content():
    return dict(db=db, Roles=Roles)


if __name__ == '__main__':
    app.run(debug=1)
