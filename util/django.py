import dj_database_url


def production_settings(settings):
    settings["DEBUG"] = False
    settings["DATABASES"] = {'default': dj_database_url.config(default="postgres://localhost")}
    settings["ALLOWED_HOSTS"] = ['*']
