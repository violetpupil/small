import dj_database_url


def production_settings(settings):
    settings["DEBUG"] = False
    settings["ALLOWED_HOSTS"] = ['*']
    settings["DATABASES"] = {'default': dj_database_url.config(default="postgres://localhost")}
    settings["SECURE_PROXY_SSL_HEADER"] = ('HTTP_X_FORWARDED_PROTO', 'https')
    settings["STATIC_ROOT"] = "staticfiles"
