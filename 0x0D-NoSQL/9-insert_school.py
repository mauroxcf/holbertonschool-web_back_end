#!/usr/bin/env python3
"""Insert a new data en mongo db."""


def insert_school(mongo_collection, **kwargs):
    """insert a new document."""
    return mongo_collection.insert_one(kwargs).inserted_id
