''' project.py '''


import datetime


from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import relationship


from chainerui import DB_BASE
from chainerui.models.result import Result


class Project(DB_BASE):
    ''' Project Model '''
    __tablename__ = 'project'

    id = Column(Integer, primary_key=True)
    path_name = Column(String(512), unique=True)
    name = Column(String(512))
    results = relationship('Result', cascade='all, delete-orphan')
    created_at = Column(DateTime, default=datetime.datetime.now())
    updated_at = Column(
        DateTime,
        default=datetime.datetime.now()
    )

    def __init__(self, path_name=None, name=None):
        self.path_name = path_name
        self.name = name

    def __repr__(self):
        return '<Project id: %r, path_name: %r />' % (self.id, self.path_name)

    @property
    def serialize(self):
        ''' serialize '''
        return {
            'id': self.id,
            'pathName': self.path_name,
            'name': self.name
        }
